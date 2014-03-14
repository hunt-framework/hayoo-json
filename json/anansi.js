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
        "word": "anansi"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Anansi",
          "name": "Anansi",
          "package": "anansi",
          "source": "src/Anansi.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Anansi",
          "module": "Anansi",
          "name": "Anansi",
          "package": "anansi",
          "partial": "Anansi",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/anansi/docs/Anansi.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Anansi",
          "name": "Block",
          "package": "anansi",
          "source": "src/Anansi-Types.html#Block",
          "type": "data"
        },
        "index": {
          "hierarchy": "Anansi",
          "module": "Anansi",
          "name": "Block",
          "package": "anansi",
          "partial": "Block",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/anansi/docs/Anansi.html#t:Block"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Anansi",
          "name": "Content",
          "package": "anansi",
          "source": "src/Anansi-Types.html#Content",
          "type": "data"
        },
        "index": {
          "hierarchy": "Anansi",
          "module": "Anansi",
          "name": "Content",
          "package": "anansi",
          "partial": "Content",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/anansi/docs/Anansi.html#t:Content"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Anansi",
          "name": "Document",
          "package": "anansi",
          "source": "src/Anansi-Types.html#Document",
          "type": "data"
        },
        "index": {
          "hierarchy": "Anansi",
          "module": "Anansi",
          "name": "Document",
          "package": "anansi",
          "partial": "Document",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/anansi/docs/Anansi.html#t:Document"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA loom contains all the logic required to convert a \u003ccode\u003e\u003ca\u003eDocument\u003c/a\u003e\u003c/code\u003e into\n markup suitable for processing with an external documentation tool.\n\u003c/p\u003e\u003cp\u003eWithin a loom, use \u003ccode\u003e\u003ca\u003eask\u003c/a\u003e\u003c/code\u003e to retrieve the \u003ccode\u003e\u003ca\u003eLoomOptions\u003c/a\u003e\u003c/code\u003e, and\n \u003ccode\u003e\u003ca\u003etell\u003c/a\u003e\u003c/code\u003e to append data to the output.\n\u003c/p\u003e",
          "module": "Anansi",
          "name": "Loom",
          "package": "anansi",
          "source": "src/Anansi-Types.html#Loom",
          "type": "type"
        },
        "index": {
          "description": "loom contains all the logic required to convert Document into markup suitable for processing with an external documentation tool Within loom use ask to retrieve the LoomOptions and tell to append data to the output",
          "hierarchy": "Anansi",
          "module": "Anansi",
          "name": "Loom",
          "package": "anansi",
          "partial": "Loom",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/anansi/docs/Anansi.html#t:Loom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Anansi",
          "name": "LoomM",
          "package": "anansi",
          "source": "src/Anansi-Types.html#LoomM",
          "type": "data"
        },
        "index": {
          "hierarchy": "Anansi",
          "module": "Anansi",
          "name": "LoomM",
          "package": "anansi",
          "partial": "Loom",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/anansi/docs/Anansi.html#t:LoomM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA set of processed \u003ccode\u003e:option\u003c/code\u003e commands related to looms. Looms are always\n free to check options manually, but this simplifies common cases.\n\u003c/p\u003e",
          "module": "Anansi",
          "name": "LoomOptions",
          "package": "anansi",
          "source": "src/Anansi-Types.html#LoomOptions",
          "type": "data"
        },
        "index": {
          "description": "set of processed option commands related to looms Looms are always free to check options manually but this simplifies common cases",
          "hierarchy": "Anansi",
          "module": "Anansi",
          "name": "LoomOptions",
          "package": "anansi",
          "partial": "Loom Options",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/anansi/docs/Anansi.html#t:LoomOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Anansi",
          "name": "ParseError",
          "package": "anansi",
          "source": "src/Anansi-Types.html#ParseError",
          "type": "data"
        },
        "index": {
          "hierarchy": "Anansi",
          "module": "Anansi",
          "name": "ParseError",
          "package": "anansi",
          "partial": "Parse Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/anansi/docs/Anansi.html#t:ParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Anansi",
          "name": "Position",
          "package": "anansi",
          "source": "src/Anansi-Types.html#Position",
          "type": "data"
        },
        "index": {
          "hierarchy": "Anansi",
          "module": "Anansi",
          "name": "Position",
          "package": "anansi",
          "partial": "Position",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/anansi/docs/Anansi.html#t:Position"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Anansi",
          "name": "BlockDefine",
          "package": "anansi",
          "signature": "BlockDefine Text [Content]",
          "source": "src/Anansi-Types.html#Block",
          "type": "function"
        },
        "index": {
          "hierarchy": "Anansi",
          "module": "Anansi",
          "name": "BlockDefine",
          "normalized": "BlockDefine Text[Content]",
          "package": "anansi",
          "partial": "Block Define",
          "signature": "BlockDefine Text[Content]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/anansi/docs/Anansi.html#v:BlockDefine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Anansi",
          "name": "BlockFile",
          "package": "anansi",
          "signature": "BlockFile Text [Content]",
          "source": "src/Anansi-Types.html#Block",
          "type": "function"
        },
        "index": {
          "hierarchy": "Anansi",
          "module": "Anansi",
          "name": "BlockFile",
          "normalized": "BlockFile Text[Content]",
          "package": "anansi",
          "partial": "Block File",
          "signature": "BlockFile Text[Content]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/anansi/docs/Anansi.html#v:BlockFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Anansi",
          "name": "BlockText",
          "package": "anansi",
          "signature": "BlockText Text",
          "source": "src/Anansi-Types.html#Block",
          "type": "function"
        },
        "index": {
          "hierarchy": "Anansi",
          "module": "Anansi",
          "name": "BlockText",
          "package": "anansi",
          "partial": "Block Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/anansi/docs/Anansi.html#v:BlockText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA macro reference within a content block. The first \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e is\n any indentation found before the first \u003ccode\u003e'|'\u003c/code\u003e, and the second is\n the name of the macro.\n\u003c/p\u003e",
          "module": "Anansi",
          "name": "ContentMacro",
          "package": "anansi",
          "signature": "ContentMacro Position Text Text",
          "source": "src/Anansi-Types.html#Content",
          "type": "function"
        },
        "index": {
          "description": "macro reference within content block The first Text is any indentation found before the first and the second is the name of the macro",
          "hierarchy": "Anansi",
          "module": "Anansi",
          "name": "ContentMacro",
          "package": "anansi",
          "partial": "Content Macro",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/anansi/docs/Anansi.html#v:ContentMacro"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Anansi",
          "name": "ContentText",
          "package": "anansi",
          "signature": "ContentText Position Text",
          "source": "src/Anansi-Types.html#Content",
          "type": "function"
        },
        "index": {
          "hierarchy": "Anansi",
          "module": "Anansi",
          "name": "ContentText",
          "package": "anansi",
          "partial": "Content Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/anansi/docs/Anansi.html#v:ContentText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun Anansi with the provided looms. Loom names are namespaced by their\n package name, such as \u003ccode\u003e\"anansi.noweb\"\u003c/code\u003e or \u003ccode\u003e\"anansi-hscolour.html\"\u003c/code\u003e.\n If your looms aren't available on Hackage, a Java-style name such as\n \u003ccode\u003e\"com.mycompany.myformat\"\u003c/code\u003e is a good alternative.\n\u003c/p\u003e",
          "module": "Anansi",
          "name": "defaultMain",
          "package": "anansi",
          "signature": "Map Text Loom -\u003e IO ()",
          "source": "src/Anansi-Main.html#defaultMain",
          "type": "function"
        },
        "index": {
          "description": "Run Anansi with the provided looms Loom names are namespaced by their package name such as anansi.noweb or anansi-hscolour.html If your looms aren available on Hackage Java-style name such as com.mycompany.myformat is good alternative",
          "hierarchy": "Anansi",
          "module": "Anansi",
          "name": "defaultMain",
          "normalized": "Map Text Loom-\u003eIO()",
          "package": "anansi",
          "partial": "Main",
          "signature": "Map Text Loom-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/anansi/docs/Anansi.html#v:defaultMain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Anansi",
          "name": "documentBlocks",
          "package": "anansi",
          "signature": "Document -\u003e [Block]",
          "source": "src/Anansi-Types.html#documentBlocks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Anansi",
          "module": "Anansi",
          "name": "documentBlocks",
          "normalized": "Document-\u003e[Block]",
          "package": "anansi",
          "partial": "Blocks",
          "signature": "Document-\u003e[Block]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/anansi/docs/Anansi.html#v:documentBlocks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe last \u003ccode\u003e:loom\u003c/code\u003e command given, if any. A document does not\n require a loom name if it's just going to be tangled, or will be\n woven by the user calling \u003ccode\u003e\u003ca\u003eweave\u003c/a\u003e\u003c/code\u003e. Documents woven by\n \u003ccode\u003edefaultMain\u003c/code\u003e do require a loom name.\n\u003c/p\u003e",
          "module": "Anansi",
          "name": "documentLoomName",
          "package": "anansi",
          "signature": "Document -\u003e Maybe Text",
          "source": "src/Anansi-Types.html#documentLoomName",
          "type": "function"
        },
        "index": {
          "description": "The last loom command given if any document does not require loom name if it just going to be tangled or will be woven by the user calling weave Documents woven by defaultMain do require loom name",
          "hierarchy": "Anansi",
          "module": "Anansi",
          "name": "documentLoomName",
          "normalized": "Document-\u003eMaybe Text",
          "package": "anansi",
          "partial": "Loom Name",
          "signature": "Document-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/anansi/docs/Anansi.html#v:documentLoomName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA map of \u003ccode\u003e:option\u003c/code\u003e commands found in the document. If\n the same option is specified multiple times, the most recent will\n be used.\n\u003c/p\u003e",
          "module": "Anansi",
          "name": "documentOptions",
          "package": "anansi",
          "signature": "Document -\u003e Map Text Text",
          "source": "src/Anansi-Types.html#documentOptions",
          "type": "function"
        },
        "index": {
          "description": "map of option commands found in the document If the same option is specified multiple times the most recent will be used",
          "hierarchy": "Anansi",
          "module": "Anansi",
          "name": "documentOptions",
          "normalized": "Document-\u003eMap Text Text",
          "package": "anansi",
          "partial": "Options",
          "signature": "Document-\u003eMap Text Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/anansi/docs/Anansi.html#v:documentOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJust \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e each block. This is useful for seeing exactly what your\n document is being parsed to.\n\u003c/p\u003e",
          "module": "Anansi",
          "name": "loomDebug",
          "package": "anansi",
          "signature": "Loom",
          "source": "src/Anansi-Loom-Debug.html#loomDebug",
          "type": "function"
        },
        "index": {
          "description": "Just show each block This is useful for seeing exactly what your document is being parsed to",
          "hierarchy": "Anansi",
          "module": "Anansi",
          "name": "loomDebug",
          "package": "anansi",
          "partial": "Debug",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/anansi/docs/Anansi.html#v:loomDebug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate simple, \u003ccode\u003e\u003cpre\u003e\u003c/code\u003e-based HTML. Users who would like to weave\n specialized HTML to fit with their existing templates are encouraged to\n copy this loom and modify it as needed.\n\u003c/p\u003e",
          "module": "Anansi",
          "name": "loomHTML",
          "package": "anansi",
          "signature": "Loom",
          "source": "src/Anansi-Loom-HTML.html#loomHTML",
          "type": "function"
        },
        "index": {
          "description": "Generate simple pre based HTML Users who would like to weave specialized HTML to fit with their existing templates are encouraged to copy this loom and modify it as needed",
          "hierarchy": "Anansi",
          "module": "Anansi",
          "name": "loomHTML",
          "package": "anansi",
          "partial": "HTML",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/anansi/docs/Anansi.html#v:loomHTML"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate simple, \u003ccode\u003ealltt\u003c/code\u003e-based LaTeX. Users who would like to weave\n specialized LaTeX to fit with their existing templates are encouraged to\n copy this loom and modify it as needed.\n\u003c/p\u003e",
          "module": "Anansi",
          "name": "loomLaTeX",
          "package": "anansi",
          "signature": "Loom",
          "source": "src/Anansi-Loom-LaTeX.html#loomLaTeX",
          "type": "function"
        },
        "index": {
          "description": "Generate simple alltt based LaTeX Users who would like to weave specialized LaTeX to fit with their existing templates are encouraged to copy this loom and modify it as needed",
          "hierarchy": "Anansi",
          "module": "Anansi",
          "name": "loomLaTeX",
          "package": "anansi",
          "partial": "La Te",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/anansi/docs/Anansi.html#v:loomLaTeX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate Markdown. Modified from LaTeX.hs.\n\u003c/p\u003e",
          "module": "Anansi",
          "name": "loomMarkdown",
          "package": "anansi",
          "signature": "Loom",
          "source": "src/Anansi-Loom-Markdown.html#loomMarkdown",
          "type": "function"
        },
        "index": {
          "description": "Generate Markdown Modified from LaTeX.hs",
          "hierarchy": "Anansi",
          "module": "Anansi",
          "name": "loomMarkdown",
          "package": "anansi",
          "partial": "Markdown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/anansi/docs/Anansi.html#v:loomMarkdown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate LaTeX markup, emulating the behavior of NoWeb. This is useful\n for porting existing NoWeb-based projects to Anansi without having to\n rewrite the styling.\n\u003c/p\u003e",
          "module": "Anansi",
          "name": "loomNoWeb",
          "package": "anansi",
          "signature": "Loom",
          "source": "src/Anansi-Loom-NoWeb.html#loomNoWeb",
          "type": "function"
        },
        "index": {
          "description": "Generate LaTeX markup emulating the behavior of NoWeb This is useful for porting existing NoWeb-based projects to Anansi without having to rewrite the styling",
          "hierarchy": "Anansi",
          "module": "Anansi",
          "name": "loomNoWeb",
          "package": "anansi",
          "partial": "No Web",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/anansi/docs/Anansi.html#v:loomNoWeb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Anansi",
          "name": "loomOptionTabSize",
          "package": "anansi",
          "signature": "LoomOptions -\u003e Integer",
          "source": "src/Anansi-Types.html#loomOptionTabSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Anansi",
          "module": "Anansi",
          "name": "loomOptionTabSize",
          "normalized": "LoomOptions-\u003eInteger",
          "package": "anansi",
          "partial": "Option Tab Size",
          "signature": "LoomOptions-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/anansi/docs/Anansi.html#v:loomOptionTabSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\nlooms = Data.Map.fromList\n    [ (\"anansi.debug\", \u003ccode\u003e\u003ca\u003eloomDebug\u003c/a\u003e\u003c/code\u003e)\n    , (\"anansi.html\", \u003ccode\u003e\u003ca\u003eloomHTML\u003c/a\u003e\u003c/code\u003e)\n    , (\"anansi.latex\", \u003ccode\u003e\u003ca\u003eloomLaTeX\u003c/a\u003e\u003c/code\u003e)\n    , (\"anansi.markdown\", \u003ccode\u003e\u003ca\u003eloomMarkdown\u003c/a\u003e\u003c/code\u003e)\n    , (\"anansi.noweb\", \u003ccode\u003e\u003ca\u003eloomNoWeb\u003c/a\u003e\u003c/code\u003e)\n    ]\n\u003c/pre\u003e",
          "module": "Anansi",
          "name": "looms",
          "package": "anansi",
          "signature": "Map Text Loom",
          "source": "src/Anansi.html#looms",
          "type": "function"
        },
        "index": {
          "description": "looms Data.Map.fromList anansi.debug loomDebug anansi.html loomHTML anansi.latex loomLaTeX anansi.markdown loomMarkdown anansi.noweb loomNoWeb",
          "hierarchy": "Anansi",
          "module": "Anansi",
          "name": "looms",
          "package": "anansi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/anansi/docs/Anansi.html#v:looms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a set of files into a \u003ccode\u003e\u003ca\u003eDocument\u003c/a\u003e\u003c/code\u003e. If a parse failure occurs, a\n \u003ccode\u003e\u003ca\u003eParseError\u003c/a\u003e\u003c/code\u003e will be returned instead.\n\u003c/p\u003e",
          "module": "Anansi",
          "name": "parse",
          "package": "anansi",
          "signature": "(FilePath -\u003e m ByteString)-\u003e FilePath-\u003e m (Either ParseError Document)",
          "type": "function"
        },
        "index": {
          "description": "Parse set of files into Document If parse failure occurs ParseError will be returned instead",
          "hierarchy": "Anansi",
          "module": "Anansi",
          "name": "parse",
          "normalized": "(FilePath-\u003ea ByteString)-\u003eFilePath-\u003ea(Either ParseError Document)",
          "package": "anansi",
          "signature": "(FilePath-\u003em ByteString)-\u003eFilePath-\u003em(Either ParseError Document)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/anansi/docs/Anansi.html#v:parse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Anansi",
          "name": "parseErrorMessage",
          "package": "anansi",
          "signature": "ParseError -\u003e Text",
          "source": "src/Anansi-Types.html#parseErrorMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Anansi",
          "module": "Anansi",
          "name": "parseErrorMessage",
          "normalized": "ParseError-\u003eText",
          "package": "anansi",
          "partial": "Error Message",
          "signature": "ParseError-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/anansi/docs/Anansi.html#v:parseErrorMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Anansi",
          "name": "parseErrorPosition",
          "package": "anansi",
          "signature": "ParseError -\u003e Position",
          "source": "src/Anansi-Types.html#parseErrorPosition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Anansi",
          "module": "Anansi",
          "name": "parseErrorPosition",
          "normalized": "ParseError-\u003ePosition",
          "package": "anansi",
          "partial": "Error Position",
          "signature": "ParseError-\u003ePosition",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/anansi/docs/Anansi.html#v:parseErrorPosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Anansi",
          "name": "positionFile",
          "package": "anansi",
          "signature": "Position -\u003e FilePath",
          "source": "src/Anansi-Types.html#positionFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Anansi",
          "module": "Anansi",
          "name": "positionFile",
          "normalized": "Position-\u003eFilePath",
          "package": "anansi",
          "partial": "File",
          "signature": "Position-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/anansi/docs/Anansi.html#v:positionFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Anansi",
          "name": "positionLine",
          "package": "anansi",
          "signature": "Position -\u003e Integer",
          "source": "src/Anansi-Types.html#positionLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Anansi",
          "module": "Anansi",
          "name": "positionLine",
          "normalized": "Position-\u003eInteger",
          "package": "anansi",
          "partial": "Line",
          "signature": "Position-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/anansi/docs/Anansi.html#v:positionLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a \u003ccode\u003e\u003ca\u003eDocument\u003c/a\u003e\u003c/code\u003e to files. Paths passed to the file writer are pulled\n directly from the document, so if you need to process them further, that\n logic must be placed in the writer computation.\n\u003c/p\u003e\u003cp\u003eIn most cases, users will want to write \u003ccode\u003e#line\u003c/code\u003e pragmas to tangled source,\n so error messages will refer back to the original input files. Haddock does\n not handle these pragmas properly, so disable them when the tangled sources\n will be processed into API documentation.\n\u003c/p\u003e",
          "module": "Anansi",
          "name": "tangle",
          "package": "anansi",
          "signature": "(FilePath -\u003e ByteString -\u003e m ())-\u003e Bool-\u003e Document-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Write Document to files Paths passed to the file writer are pulled directly from the document so if you need to process them further that logic must be placed in the writer computation In most cases users will want to write line pragmas to tangled source so error messages will refer back to the original input files Haddock does not handle these pragmas properly so disable them when the tangled sources will be processed into API documentation",
          "hierarchy": "Anansi",
          "module": "Anansi",
          "name": "tangle",
          "normalized": "(FilePath-\u003eByteString-\u003ea())-\u003eBool-\u003eDocument-\u003ea()",
          "package": "anansi",
          "signature": "(FilePath-\u003eByteString-\u003em())-\u003eBool-\u003eDocument-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/anansi/docs/Anansi.html#v:tangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a document to some sort of document markup. This will typically be\n rendered into documentation by external tools, such as LaTeX or a web\n browser.\n\u003c/p\u003e\u003cp\u003eThis writes a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e rather than \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e so that looms have full\n control over character encoding.\n\u003c/p\u003e",
          "module": "Anansi",
          "name": "weave",
          "package": "anansi",
          "signature": "Loom -\u003e Document -\u003e ByteString",
          "source": "src/Anansi-Types.html#weave",
          "type": "function"
        },
        "index": {
          "description": "Write document to some sort of document markup This will typically be rendered into documentation by external tools such as LaTeX or web browser This writes ByteString rather than Text so that looms have full control over character encoding",
          "hierarchy": "Anansi",
          "module": "Anansi",
          "name": "weave",
          "normalized": "Loom-\u003eDocument-\u003eByteString",
          "package": "anansi",
          "signature": "Loom-\u003eDocument-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/anansi/docs/Anansi.html#v:weave"
      }
    }
  ]
]