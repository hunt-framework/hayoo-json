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
        "word": "cheapskate"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cheapskate.Html",
          "name": "Html",
          "package": "cheapskate",
          "source": "src/Cheapskate-Html.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Cheapskate Html",
          "module": "Cheapskate.Html",
          "name": "Html",
          "package": "cheapskate",
          "partial": "Html",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Html.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cheapskate.Html",
          "name": "renderBlocks",
          "package": "cheapskate",
          "signature": "Options -\u003e Blocks -\u003e Html",
          "source": "src/Cheapskate-Html.html#renderBlocks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cheapskate Html",
          "module": "Cheapskate.Html",
          "name": "renderBlocks",
          "normalized": "Options-\u003eBlocks-\u003eHtml",
          "package": "cheapskate",
          "partial": "Blocks",
          "signature": "Options-\u003eBlocks-\u003eHtml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Html.html#v:renderBlocks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender a markdown document as \u003ccode\u003e\u003ca\u003eHtml\u003c/a\u003e\u003c/code\u003e.  (This can be turned\n into a \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003eByteString\u003c/code\u003e using a renderer from the \u003ccode\u003eblaze-html\u003c/code\u003e\n library.)\n\u003c/p\u003e",
          "module": "Cheapskate.Html",
          "name": "renderDoc",
          "package": "cheapskate",
          "signature": "Doc -\u003e Html",
          "source": "src/Cheapskate-Html.html#renderDoc",
          "type": "function"
        },
        "index": {
          "description": "Render markdown document as Html This can be turned into Text or ByteString using renderer from the blaze-html library",
          "hierarchy": "Cheapskate Html",
          "module": "Cheapskate.Html",
          "name": "renderDoc",
          "normalized": "Doc-\u003eHtml",
          "package": "cheapskate",
          "partial": "Doc",
          "signature": "Doc-\u003eHtml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Html.html#v:renderDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cheapskate.Html",
          "name": "renderInlines",
          "package": "cheapskate",
          "signature": "Options -\u003e Inlines -\u003e Html",
          "source": "src/Cheapskate-Html.html#renderInlines",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cheapskate Html",
          "module": "Cheapskate.Html",
          "name": "renderInlines",
          "normalized": "Options-\u003eInlines-\u003eHtml",
          "package": "cheapskate",
          "partial": "Inlines",
          "signature": "Options-\u003eInlines-\u003eHtml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Html.html#v:renderInlines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cheapskate.Parse",
          "name": "Parse",
          "package": "cheapskate",
          "source": "src/Cheapskate-Parse.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Cheapskate Parse",
          "module": "Cheapskate.Parse",
          "name": "Parse",
          "package": "cheapskate",
          "partial": "Parse",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Parse.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses the input as a markdown document.  Note that \u003ccode\u003e\u003ca\u003eDoc\u003c/a\u003e\u003c/code\u003e is an instance\n of \u003ccode\u003eToMarkup\u003c/code\u003e, so the document can be converted to \u003ccode\u003eHtml\u003c/code\u003e using \u003ccode\u003etoHtml\u003c/code\u003e.\n A simple \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e to \u003ccode\u003eHtml\u003c/code\u003e filter would be\n\u003c/p\u003e\u003cpre\u003e markdownToHtml :: Text -\u003e Html\n markdownToHtml = toHtml . markdown def\n\u003c/pre\u003e",
          "module": "[\"Cheapskate.Parse\",\"Cheapskate\"]",
          "name": "markdown",
          "package": "cheapskate",
          "signature": "Options -\u003e Text -\u003e Doc",
          "source": "src/Cheapskate-Parse.html#markdown",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Parse.html#v:markdown\",\"http://hackage.haskell.org/package/cheapskate/docs/Cheapskate.html#v:markdown\"]"
        },
        "index": {
          "description": "Parses the input as markdown document Note that Doc is an instance of ToMarkup so the document can be converted to Html using toHtml simple Text to Html filter would be markdownToHtml Text Html markdownToHtml toHtml markdown def",
          "hierarchy": "Cheapskate Parse",
          "module": "Cheapskate.Parse",
          "name": "markdown",
          "normalized": "Options-\u003eText-\u003eDoc",
          "package": "cheapskate",
          "signature": "Options-\u003eText-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Parse.html#v:markdown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cheapskate.Types",
          "name": "Types",
          "package": "cheapskate",
          "source": "src/Cheapskate-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Cheapskate Types",
          "module": "Cheapskate.Types",
          "name": "Types",
          "package": "cheapskate",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBlock-level elements.\n\u003c/p\u003e",
          "module": "Cheapskate.Types",
          "name": "Block",
          "package": "cheapskate",
          "source": "src/Cheapskate-Types.html#Block",
          "type": "data"
        },
        "index": {
          "description": "Block-level elements",
          "hierarchy": "Cheapskate Types",
          "module": "Cheapskate.Types",
          "name": "Block",
          "package": "cheapskate",
          "partial": "Block",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#t:Block"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cheapskate.Types",
          "name": "Blocks",
          "package": "cheapskate",
          "source": "src/Cheapskate-Types.html#Blocks",
          "type": "type"
        },
        "index": {
          "hierarchy": "Cheapskate Types",
          "module": "Cheapskate.Types",
          "name": "Blocks",
          "package": "cheapskate",
          "partial": "Blocks",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#t:Blocks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttributes for fenced code blocks.  \u003ccode\u003e\u003ca\u003ecodeLang\u003c/a\u003e\u003c/code\u003e is the\n first word of the attribute line, \u003ccode\u003e\u003ca\u003ecodeInfo\u003c/a\u003e\u003c/code\u003e is the rest.\n\u003c/p\u003e",
          "module": "Cheapskate.Types",
          "name": "CodeAttr",
          "package": "cheapskate",
          "source": "src/Cheapskate-Types.html#CodeAttr",
          "type": "data"
        },
        "index": {
          "description": "Attributes for fenced code blocks codeLang is the first word of the attribute line codeInfo is the rest",
          "hierarchy": "Cheapskate Types",
          "module": "Cheapskate.Types",
          "name": "CodeAttr",
          "package": "cheapskate",
          "partial": "Code Attr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#t:CodeAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStructured representation of a document.  The \u003ccode\u003e\u003ca\u003eOptions\u003c/a\u003e\u003c/code\u003e affect\n how the document is rendered by \u003ccode\u003etoHtml\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Cheapskate.Types",
          "name": "Doc",
          "package": "cheapskate",
          "source": "src/Cheapskate-Types.html#Doc",
          "type": "data"
        },
        "index": {
          "description": "Structured representation of document The Options affect how the document is rendered by toHtml",
          "hierarchy": "Cheapskate Types",
          "module": "Cheapskate.Types",
          "name": "Doc",
          "package": "cheapskate",
          "partial": "Doc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#t:Doc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple representation of HTML tag.\n\u003c/p\u003e",
          "module": "Cheapskate.Types",
          "name": "HtmlTagType",
          "package": "cheapskate",
          "source": "src/Cheapskate-Types.html#HtmlTagType",
          "type": "data"
        },
        "index": {
          "description": "Simple representation of HTML tag",
          "hierarchy": "Cheapskate Types",
          "module": "Cheapskate.Types",
          "name": "HtmlTagType",
          "package": "cheapskate",
          "partial": "Html Tag Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#t:HtmlTagType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInline elements.\n\u003c/p\u003e",
          "module": "Cheapskate.Types",
          "name": "Inline",
          "package": "cheapskate",
          "source": "src/Cheapskate-Types.html#Inline",
          "type": "data"
        },
        "index": {
          "description": "Inline elements",
          "hierarchy": "Cheapskate Types",
          "module": "Cheapskate.Types",
          "name": "Inline",
          "package": "cheapskate",
          "partial": "Inline",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#t:Inline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cheapskate.Types",
          "name": "Inlines",
          "package": "cheapskate",
          "source": "src/Cheapskate-Types.html#Inlines",
          "type": "type"
        },
        "index": {
          "hierarchy": "Cheapskate Types",
          "module": "Cheapskate.Types",
          "name": "Inlines",
          "package": "cheapskate",
          "partial": "Inlines",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#t:Inlines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cheapskate.Types",
          "name": "ListType",
          "package": "cheapskate",
          "source": "src/Cheapskate-Types.html#ListType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Cheapskate Types",
          "module": "Cheapskate.Types",
          "name": "ListType",
          "package": "cheapskate",
          "partial": "List Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#t:ListType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cheapskate.Types",
          "name": "NumWrapper",
          "package": "cheapskate",
          "source": "src/Cheapskate-Types.html#NumWrapper",
          "type": "data"
        },
        "index": {
          "hierarchy": "Cheapskate Types",
          "module": "Cheapskate.Types",
          "name": "NumWrapper",
          "package": "cheapskate",
          "partial": "Num Wrapper",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#t:NumWrapper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRendering and parsing options.\n\u003c/p\u003e",
          "module": "Cheapskate.Types",
          "name": "Options",
          "package": "cheapskate",
          "source": "src/Cheapskate-Types.html#Options",
          "type": "data"
        },
        "index": {
          "description": "Rendering and parsing options",
          "hierarchy": "Cheapskate Types",
          "module": "Cheapskate.Types",
          "name": "Options",
          "package": "cheapskate",
          "partial": "Options",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#t:Options"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cheapskate.Types",
          "name": "ReferenceMap",
          "package": "cheapskate",
          "source": "src/Cheapskate-Types.html#ReferenceMap",
          "type": "type"
        },
        "index": {
          "hierarchy": "Cheapskate Types",
          "module": "Cheapskate.Types",
          "name": "ReferenceMap",
          "package": "cheapskate",
          "partial": "Reference Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#t:ReferenceMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cheapskate.Types",
          "name": "Blockquote",
          "package": "cheapskate",
          "signature": "Blockquote Blocks",
          "source": "src/Cheapskate-Types.html#Block",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cheapskate Types",
          "module": "Cheapskate.Types",
          "name": "Blockquote",
          "package": "cheapskate",
          "partial": "Blockquote",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#v:Blockquote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cheapskate.Types",
          "name": "Bullet",
          "package": "cheapskate",
          "signature": "Bullet Char",
          "source": "src/Cheapskate-Types.html#ListType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cheapskate Types",
          "module": "Cheapskate.Types",
          "name": "Bullet",
          "package": "cheapskate",
          "partial": "Bullet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#v:Bullet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cheapskate.Types",
          "name": "Closing",
          "package": "cheapskate",
          "signature": "Closing Text",
          "source": "src/Cheapskate-Types.html#HtmlTagType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cheapskate Types",
          "module": "Cheapskate.Types",
          "name": "Closing",
          "package": "cheapskate",
          "partial": "Closing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#v:Closing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cheapskate.Types",
          "name": "Code",
          "package": "cheapskate",
          "signature": "Code Text",
          "source": "src/Cheapskate-Types.html#Inline",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cheapskate Types",
          "module": "Cheapskate.Types",
          "name": "Code",
          "package": "cheapskate",
          "partial": "Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#v:Code"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cheapskate.Types",
          "name": "CodeAttr",
          "package": "cheapskate",
          "signature": "CodeAttr",
          "source": "src/Cheapskate-Types.html#CodeAttr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cheapskate Types",
          "module": "Cheapskate.Types",
          "name": "CodeAttr",
          "package": "cheapskate",
          "partial": "Code Attr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#v:CodeAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cheapskate.Types",
          "name": "CodeBlock",
          "package": "cheapskate",
          "signature": "CodeBlock CodeAttr Text",
          "source": "src/Cheapskate-Types.html#Block",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cheapskate Types",
          "module": "Cheapskate.Types",
          "name": "CodeBlock",
          "package": "cheapskate",
          "partial": "Code Block",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#v:CodeBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cheapskate.Types",
          "name": "Doc",
          "package": "cheapskate",
          "signature": "Doc Options Blocks",
          "source": "src/Cheapskate-Types.html#Doc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cheapskate Types",
          "module": "Cheapskate.Types",
          "name": "Doc",
          "package": "cheapskate",
          "partial": "Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#v:Doc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cheapskate.Types",
          "name": "Emph",
          "package": "cheapskate",
          "signature": "Emph Inlines",
          "source": "src/Cheapskate-Types.html#Inline",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cheapskate Types",
          "module": "Cheapskate.Types",
          "name": "Emph",
          "package": "cheapskate",
          "partial": "Emph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#v:Emph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cheapskate.Types",
          "name": "Entity",
          "package": "cheapskate",
          "signature": "Entity Text",
          "source": "src/Cheapskate-Types.html#Inline",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cheapskate Types",
          "module": "Cheapskate.Types",
          "name": "Entity",
          "package": "cheapskate",
          "partial": "Entity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#v:Entity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cheapskate.Types",
          "name": "HRule",
          "package": "cheapskate",
          "signature": "HRule",
          "source": "src/Cheapskate-Types.html#Block",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cheapskate Types",
          "module": "Cheapskate.Types",
          "name": "HRule",
          "package": "cheapskate",
          "partial": "HRule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#v:HRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cheapskate.Types",
          "name": "Header",
          "package": "cheapskate",
          "signature": "Header Int Inlines",
          "source": "src/Cheapskate-Types.html#Block",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cheapskate Types",
          "module": "Cheapskate.Types",
          "name": "Header",
          "package": "cheapskate",
          "partial": "Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#v:Header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cheapskate.Types",
          "name": "HtmlBlock",
          "package": "cheapskate",
          "signature": "HtmlBlock Text",
          "source": "src/Cheapskate-Types.html#Block",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cheapskate Types",
          "module": "Cheapskate.Types",
          "name": "HtmlBlock",
          "package": "cheapskate",
          "partial": "Html Block",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#v:HtmlBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cheapskate.Types",
          "name": "Image",
          "package": "cheapskate",
          "signature": "Image Inlines Text Text",
          "source": "src/Cheapskate-Types.html#Inline",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cheapskate Types",
          "module": "Cheapskate.Types",
          "name": "Image",
          "package": "cheapskate",
          "partial": "Image",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#v:Image"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cheapskate.Types",
          "name": "LineBreak",
          "package": "cheapskate",
          "signature": "LineBreak",
          "source": "src/Cheapskate-Types.html#Inline",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cheapskate Types",
          "module": "Cheapskate.Types",
          "name": "LineBreak",
          "package": "cheapskate",
          "partial": "Line Break",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#v:LineBreak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cheapskate.Types",
          "name": "Link",
          "package": "cheapskate",
          "signature": "Link Inlines Text Text",
          "source": "src/Cheapskate-Types.html#Inline",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cheapskate Types",
          "module": "Cheapskate.Types",
          "name": "Link",
          "package": "cheapskate",
          "partial": "Link",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#v:Link"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cheapskate.Types",
          "name": "List",
          "package": "cheapskate",
          "signature": "List Bool ListType [Blocks]",
          "source": "src/Cheapskate-Types.html#Block",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cheapskate Types",
          "module": "Cheapskate.Types",
          "name": "List",
          "normalized": "List Bool ListType[Blocks]",
          "package": "cheapskate",
          "partial": "List",
          "signature": "List Bool ListType[Blocks]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#v:List"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cheapskate.Types",
          "name": "Numbered",
          "package": "cheapskate",
          "signature": "Numbered NumWrapper Int",
          "source": "src/Cheapskate-Types.html#ListType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cheapskate Types",
          "module": "Cheapskate.Types",
          "name": "Numbered",
          "package": "cheapskate",
          "partial": "Numbered",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#v:Numbered"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cheapskate.Types",
          "name": "Opening",
          "package": "cheapskate",
          "signature": "Opening Text",
          "source": "src/Cheapskate-Types.html#HtmlTagType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cheapskate Types",
          "module": "Cheapskate.Types",
          "name": "Opening",
          "package": "cheapskate",
          "partial": "Opening",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#v:Opening"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cheapskate.Types",
          "name": "Options",
          "package": "cheapskate",
          "signature": "Options",
          "source": "src/Cheapskate-Types.html#Options",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cheapskate Types",
          "module": "Cheapskate.Types",
          "name": "Options",
          "package": "cheapskate",
          "partial": "Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#v:Options"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cheapskate.Types",
          "name": "Para",
          "package": "cheapskate",
          "signature": "Para Inlines",
          "source": "src/Cheapskate-Types.html#Block",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cheapskate Types",
          "module": "Cheapskate.Types",
          "name": "Para",
          "package": "cheapskate",
          "partial": "Para",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#v:Para"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cheapskate.Types",
          "name": "ParenFollowing",
          "package": "cheapskate",
          "signature": "ParenFollowing",
          "source": "src/Cheapskate-Types.html#NumWrapper",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cheapskate Types",
          "module": "Cheapskate.Types",
          "name": "ParenFollowing",
          "package": "cheapskate",
          "partial": "Paren Following",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#v:ParenFollowing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cheapskate.Types",
          "name": "PeriodFollowing",
          "package": "cheapskate",
          "signature": "PeriodFollowing",
          "source": "src/Cheapskate-Types.html#NumWrapper",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cheapskate Types",
          "module": "Cheapskate.Types",
          "name": "PeriodFollowing",
          "package": "cheapskate",
          "partial": "Period Following",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#v:PeriodFollowing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cheapskate.Types",
          "name": "RawHtml",
          "package": "cheapskate",
          "signature": "RawHtml Text",
          "source": "src/Cheapskate-Types.html#Inline",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cheapskate Types",
          "module": "Cheapskate.Types",
          "name": "RawHtml",
          "package": "cheapskate",
          "partial": "Raw Html",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#v:RawHtml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cheapskate.Types",
          "name": "SelfClosing",
          "package": "cheapskate",
          "signature": "SelfClosing Text",
          "source": "src/Cheapskate-Types.html#HtmlTagType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cheapskate Types",
          "module": "Cheapskate.Types",
          "name": "SelfClosing",
          "package": "cheapskate",
          "partial": "Self Closing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#v:SelfClosing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cheapskate.Types",
          "name": "SoftBreak",
          "package": "cheapskate",
          "signature": "SoftBreak",
          "source": "src/Cheapskate-Types.html#Inline",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cheapskate Types",
          "module": "Cheapskate.Types",
          "name": "SoftBreak",
          "package": "cheapskate",
          "partial": "Soft Break",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#v:SoftBreak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cheapskate.Types",
          "name": "Space",
          "package": "cheapskate",
          "signature": "Space",
          "source": "src/Cheapskate-Types.html#Inline",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cheapskate Types",
          "module": "Cheapskate.Types",
          "name": "Space",
          "package": "cheapskate",
          "partial": "Space",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#v:Space"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cheapskate.Types",
          "name": "Str",
          "package": "cheapskate",
          "signature": "Str Text",
          "source": "src/Cheapskate-Types.html#Inline",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cheapskate Types",
          "module": "Cheapskate.Types",
          "name": "Str",
          "package": "cheapskate",
          "partial": "Str",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#v:Str"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cheapskate.Types",
          "name": "Strong",
          "package": "cheapskate",
          "signature": "Strong Inlines",
          "source": "src/Cheapskate-Types.html#Inline",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cheapskate Types",
          "module": "Cheapskate.Types",
          "name": "Strong",
          "package": "cheapskate",
          "partial": "Strong",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#v:Strong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllow raw HTML (if false it gets escaped)\n\u003c/p\u003e",
          "module": "Cheapskate.Types",
          "name": "allowRawHtml",
          "package": "cheapskate",
          "signature": "Bool",
          "source": "src/Cheapskate-Types.html#Options",
          "type": "function"
        },
        "index": {
          "description": "Allow raw HTML if false it gets escaped",
          "hierarchy": "Cheapskate Types",
          "module": "Cheapskate.Types",
          "name": "allowRawHtml",
          "package": "cheapskate",
          "partial": "Raw Html",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#v:allowRawHtml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cheapskate.Types",
          "name": "codeInfo",
          "package": "cheapskate",
          "signature": "Text",
          "source": "src/Cheapskate-Types.html#CodeAttr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cheapskate Types",
          "module": "Cheapskate.Types",
          "name": "codeInfo",
          "package": "cheapskate",
          "partial": "Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#v:codeInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cheapskate.Types",
          "name": "codeLang",
          "package": "cheapskate",
          "signature": "Text",
          "source": "src/Cheapskate-Types.html#CodeAttr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Cheapskate Types",
          "module": "Cheapskate.Types",
          "name": "codeLang",
          "package": "cheapskate",
          "partial": "Lang",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#v:codeLang"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint container structure for debugging\n\u003c/p\u003e",
          "module": "Cheapskate.Types",
          "name": "debug",
          "package": "cheapskate",
          "signature": "Bool",
          "source": "src/Cheapskate-Types.html#Options",
          "type": "function"
        },
        "index": {
          "description": "Print container structure for debugging",
          "hierarchy": "Cheapskate Types",
          "module": "Cheapskate.Types",
          "name": "debug",
          "package": "cheapskate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#v:debug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePreserve hard line breaks in the source\n\u003c/p\u003e",
          "module": "Cheapskate.Types",
          "name": "preserveHardBreaks",
          "package": "cheapskate",
          "signature": "Bool",
          "source": "src/Cheapskate-Types.html#Options",
          "type": "function"
        },
        "index": {
          "description": "Preserve hard line breaks in the source",
          "hierarchy": "Cheapskate Types",
          "module": "Cheapskate.Types",
          "name": "preserveHardBreaks",
          "package": "cheapskate",
          "partial": "Hard Breaks",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#v:preserveHardBreaks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSanitize raw HTML, link/image attributes\n\u003c/p\u003e",
          "module": "Cheapskate.Types",
          "name": "sanitize",
          "package": "cheapskate",
          "signature": "Bool",
          "source": "src/Cheapskate-Types.html#Options",
          "type": "function"
        },
        "index": {
          "description": "Sanitize raw HTML link image attributes",
          "hierarchy": "Cheapskate Types",
          "module": "Cheapskate.Types",
          "name": "sanitize",
          "package": "cheapskate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate-Types.html#v:sanitize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Cheapskate",
          "name": "Cheapskate",
          "package": "cheapskate",
          "source": "src/Cheapskate.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Cheapskate",
          "module": "Cheapskate",
          "name": "Cheapskate",
          "package": "cheapskate",
          "partial": "Cheapskate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default value for this type.\n\u003c/p\u003e",
          "module": "Cheapskate",
          "name": "def",
          "package": "cheapskate",
          "signature": "a",
          "type": "function"
        },
        "index": {
          "description": "The default value for this type",
          "hierarchy": "Cheapskate",
          "module": "Cheapskate",
          "name": "def",
          "package": "cheapskate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate.html#v:def"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a transformation bottom-up to every node of a parsed document.\n This can be used, for example, to transform specially marked code blocks\n to highlighted code or images.  Here is a simple example that promotes\n the levels of headers:\n\u003c/p\u003e\u003cpre\u003e promoteHeaders :: Doc -\u003e Doc\n promoteHeaders = walk promoteHeader\n   where promoteHeader (Header n ils) = Header (n+1) ils\n         promoteHeader x              = x\n\u003c/pre\u003e",
          "module": "Cheapskate",
          "name": "walk",
          "package": "cheapskate",
          "signature": "(a -\u003e a) -\u003e b -\u003e b",
          "source": "src/Cheapskate.html#walk",
          "type": "function"
        },
        "index": {
          "description": "Apply transformation bottom-up to every node of parsed document This can be used for example to transform specially marked code blocks to highlighted code or images Here is simple example that promotes the levels of headers promoteHeaders Doc Doc promoteHeaders walk promoteHeader where promoteHeader Header ils Header ils promoteHeader",
          "hierarchy": "Cheapskate",
          "module": "Cheapskate",
          "name": "walk",
          "normalized": "(a-\u003ea)-\u003eb-\u003eb",
          "package": "cheapskate",
          "signature": "(a-\u003ea)-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate.html#v:walk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic version of \u003ccode\u003e\u003ca\u003ewalk\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Cheapskate",
          "name": "walkM",
          "package": "cheapskate",
          "signature": "(a -\u003e m a) -\u003e b -\u003e m b",
          "source": "src/Cheapskate.html#walkM",
          "type": "function"
        },
        "index": {
          "description": "Monadic version of walk",
          "hierarchy": "Cheapskate",
          "module": "Cheapskate",
          "name": "walkM",
          "normalized": "(a-\u003eb a)-\u003ec-\u003eb c",
          "package": "cheapskate",
          "signature": "(a-\u003em a)-\u003eb-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cheapskate/docs/Cheapskate.html#v:walkM"
      }
    }
  ]
]