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
        "word": "open-pandoc"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for the manipulation of fixed-width blocks of text.\nThese are used in the construction of plain-text tables.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Pandoc.Blocks",
          "name": "Blocks",
          "package": "open-pandoc",
          "source": "src/Text-Pandoc-Blocks.html",
          "type": "module"
        },
        "index": {
          "description": "Functions for the manipulation of fixed-width blocks of text These are used in the construction of plain-text tables",
          "hierarchy": "Text Pandoc Blocks",
          "module": "Text.Pandoc.Blocks",
          "name": "Blocks",
          "package": "open-pandoc",
          "partial": "Blocks",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Blocks.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA fixed-width block of text.  Parameters are width of block,\n height of block, and list of lines.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Blocks",
          "name": "TextBlock",
          "package": "open-pandoc",
          "source": "src/Text-Pandoc-Blocks.html#TextBlock",
          "type": "data"
        },
        "index": {
          "description": "fixed-width block of text Parameters are width of block height of block and list of lines",
          "hierarchy": "Text Pandoc Blocks",
          "module": "Text.Pandoc.Blocks",
          "name": "TextBlock",
          "package": "open-pandoc",
          "partial": "Text Block",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Blocks.html#t:TextBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Blocks",
          "name": "TextBlock",
          "package": "open-pandoc",
          "signature": "TextBlock Int Int [String]",
          "source": "src/Text-Pandoc-Blocks.html#TextBlock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Blocks",
          "module": "Text.Pandoc.Blocks",
          "name": "TextBlock",
          "normalized": "TextBlock Int Int[String]",
          "package": "open-pandoc",
          "partial": "Text Block",
          "signature": "TextBlock Int Int[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Blocks.html#v:TextBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003eTextBlock\u003c/code\u003e to a \u003ccode\u003eDoc\u003c/code\u003e element.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Blocks",
          "name": "blockToDoc",
          "package": "open-pandoc",
          "signature": "TextBlock -\u003e Doc",
          "source": "src/Text-Pandoc-Blocks.html#blockToDoc",
          "type": "function"
        },
        "index": {
          "description": "Convert TextBlock to Doc element",
          "hierarchy": "Text Pandoc Blocks",
          "module": "Text.Pandoc.Blocks",
          "name": "blockToDoc",
          "normalized": "TextBlock-\u003eDoc",
          "package": "open-pandoc",
          "partial": "To Doc",
          "signature": "TextBlock-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Blocks.html#v:blockToDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCenters the contents of a \u003ccode\u003eTextBlock\u003c/code\u003e within the block.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Blocks",
          "name": "centerAlignBlock",
          "package": "open-pandoc",
          "signature": "TextBlock -\u003e TextBlock",
          "source": "src/Text-Pandoc-Blocks.html#centerAlignBlock",
          "type": "function"
        },
        "index": {
          "description": "Centers the contents of TextBlock within the block",
          "hierarchy": "Text Pandoc Blocks",
          "module": "Text.Pandoc.Blocks",
          "name": "centerAlignBlock",
          "normalized": "TextBlock-\u003eTextBlock",
          "package": "open-pandoc",
          "partial": "Align Block",
          "signature": "TextBlock-\u003eTextBlock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Blocks.html#v:centerAlignBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003eDoc\u003c/code\u003e element into a \u003ccode\u003eTextBlock\u003c/code\u003e with a specified width. \n\u003c/p\u003e",
          "module": "Text.Pandoc.Blocks",
          "name": "docToBlock",
          "package": "open-pandoc",
          "signature": "Int-\u003e Doc-\u003e TextBlock",
          "type": "function"
        },
        "index": {
          "description": "Convert Doc element into TextBlock with specified width",
          "hierarchy": "Text Pandoc Blocks",
          "module": "Text.Pandoc.Blocks",
          "name": "docToBlock",
          "normalized": "Int-\u003eDoc-\u003eTextBlock",
          "package": "open-pandoc",
          "partial": "To Block",
          "signature": "Int-\u003eDoc-\u003eTextBlock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Blocks.html#v:docToBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcatenates a list of \u003ccode\u003eTextBlock\u003c/code\u003es into a new \u003ccode\u003eTextBlock\u003c/code\u003e in\n which they appear side by side.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Blocks",
          "name": "hcatBlocks",
          "package": "open-pandoc",
          "signature": "[TextBlock] -\u003e TextBlock",
          "source": "src/Text-Pandoc-Blocks.html#hcatBlocks",
          "type": "function"
        },
        "index": {
          "description": "Concatenates list of TextBlock into new TextBlock in which they appear side by side",
          "hierarchy": "Text Pandoc Blocks",
          "module": "Text.Pandoc.Blocks",
          "name": "hcatBlocks",
          "normalized": "[TextBlock]-\u003eTextBlock",
          "package": "open-pandoc",
          "partial": "Blocks",
          "signature": "[TextBlock]-\u003eTextBlock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Blocks.html#v:hcatBlocks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns height of a \u003ccode\u003eTextBlock\u003c/code\u003e (number of rows).\n\u003c/p\u003e",
          "module": "Text.Pandoc.Blocks",
          "name": "heightOfBlock",
          "package": "open-pandoc",
          "signature": "TextBlock -\u003e Int",
          "source": "src/Text-Pandoc-Blocks.html#heightOfBlock",
          "type": "function"
        },
        "index": {
          "description": "Returns height of TextBlock number of rows",
          "hierarchy": "Text Pandoc Blocks",
          "module": "Text.Pandoc.Blocks",
          "name": "heightOfBlock",
          "normalized": "TextBlock-\u003eInt",
          "package": "open-pandoc",
          "partial": "Of Block",
          "signature": "TextBlock-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Blocks.html#v:heightOfBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003ehcatBlocks\u003c/code\u003e, but inserts space between the \u003ccode\u003eTextBlock\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Blocks",
          "name": "hsepBlocks",
          "package": "open-pandoc",
          "signature": "[TextBlock] -\u003e TextBlock",
          "source": "src/Text-Pandoc-Blocks.html#hsepBlocks",
          "type": "function"
        },
        "index": {
          "description": "Like hcatBlocks but inserts space between the TextBlock",
          "hierarchy": "Text Pandoc Blocks",
          "module": "Text.Pandoc.Blocks",
          "name": "hsepBlocks",
          "normalized": "[TextBlock]-\u003eTextBlock",
          "package": "open-pandoc",
          "partial": "Blocks",
          "signature": "[TextBlock]-\u003eTextBlock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Blocks.html#v:hsepBlocks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeft-aligns the contents of a \u003ccode\u003eTextBlock\u003c/code\u003e within the block.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Blocks",
          "name": "leftAlignBlock",
          "package": "open-pandoc",
          "signature": "TextBlock -\u003e TextBlock",
          "source": "src/Text-Pandoc-Blocks.html#leftAlignBlock",
          "type": "function"
        },
        "index": {
          "description": "Left-aligns the contents of TextBlock within the block",
          "hierarchy": "Text Pandoc Blocks",
          "module": "Text.Pandoc.Blocks",
          "name": "leftAlignBlock",
          "normalized": "TextBlock-\u003eTextBlock",
          "package": "open-pandoc",
          "partial": "Align Block",
          "signature": "TextBlock-\u003eTextBlock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Blocks.html#v:leftAlignBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRight-aligns the contents of a \u003ccode\u003eTextBlock\u003c/code\u003e within the block.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Blocks",
          "name": "rightAlignBlock",
          "package": "open-pandoc",
          "signature": "TextBlock -\u003e TextBlock",
          "source": "src/Text-Pandoc-Blocks.html#rightAlignBlock",
          "type": "function"
        },
        "index": {
          "description": "Right-aligns the contents of TextBlock within the block",
          "hierarchy": "Text Pandoc Blocks",
          "module": "Text.Pandoc.Blocks",
          "name": "rightAlignBlock",
          "normalized": "TextBlock-\u003eTextBlock",
          "package": "open-pandoc",
          "partial": "Align Block",
          "signature": "TextBlock-\u003eTextBlock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Blocks.html#v:rightAlignBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns width of a \u003ccode\u003eTextBlock\u003c/code\u003e (number of columns).\n\u003c/p\u003e",
          "module": "Text.Pandoc.Blocks",
          "name": "widthOfBlock",
          "package": "open-pandoc",
          "signature": "TextBlock -\u003e Int",
          "source": "src/Text-Pandoc-Blocks.html#widthOfBlock",
          "type": "function"
        },
        "index": {
          "description": "Returns width of TextBlock number of columns",
          "hierarchy": "Text Pandoc Blocks",
          "module": "Text.Pandoc.Blocks",
          "name": "widthOfBlock",
          "normalized": "TextBlock-\u003eInt",
          "package": "open-pandoc",
          "partial": "Of Block",
          "signature": "TextBlock-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Blocks.html#v:widthOfBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for parsing character references.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Pandoc.CharacterReferences",
          "name": "CharacterReferences",
          "package": "open-pandoc",
          "source": "src/Text-Pandoc-CharacterReferences.html",
          "type": "module"
        },
        "index": {
          "description": "Functions for parsing character references",
          "hierarchy": "Text Pandoc CharacterReferences",
          "module": "Text.Pandoc.CharacterReferences",
          "name": "CharacterReferences",
          "package": "open-pandoc",
          "partial": "Character References",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-CharacterReferences.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse character entity.\n\u003c/p\u003e",
          "module": "Text.Pandoc.CharacterReferences",
          "name": "characterReference",
          "package": "open-pandoc",
          "signature": "GenParser Char st Char",
          "source": "src/Text-Pandoc-CharacterReferences.html#characterReference",
          "type": "function"
        },
        "index": {
          "description": "Parse character entity",
          "hierarchy": "Text Pandoc CharacterReferences",
          "module": "Text.Pandoc.CharacterReferences",
          "name": "characterReference",
          "package": "open-pandoc",
          "partial": "Reference",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-CharacterReferences.html#v:characterReference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert entities in a string to characters.\n\u003c/p\u003e",
          "module": "Text.Pandoc.CharacterReferences",
          "name": "decodeCharacterReferences",
          "package": "open-pandoc",
          "signature": "String -\u003e String",
          "source": "src/Text-Pandoc-CharacterReferences.html#decodeCharacterReferences",
          "type": "function"
        },
        "index": {
          "description": "Convert entities in string to characters",
          "hierarchy": "Text Pandoc CharacterReferences",
          "module": "Text.Pandoc.CharacterReferences",
          "name": "decodeCharacterReferences",
          "normalized": "String-\u003eString",
          "package": "open-pandoc",
          "partial": "Character References",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-CharacterReferences.html#v:decodeCharacterReferences"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefinition of \u003ccode\u003e\u003ca\u003ePandoc\u003c/a\u003e\u003c/code\u003e data structure for format-neutral representation\nof documents.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "Definition",
          "package": "open-pandoc",
          "source": "src/Text-Pandoc-Definition.html",
          "type": "module"
        },
        "index": {
          "description": "Definition of Pandoc data structure for format-neutral representation of documents",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "Definition",
          "package": "open-pandoc",
          "partial": "Definition",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlignment of a table column.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "Alignment",
          "package": "open-pandoc",
          "source": "src/Text-Pandoc-Definition.html#Alignment",
          "type": "data"
        },
        "index": {
          "description": "Alignment of table column",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "Alignment",
          "package": "open-pandoc",
          "partial": "Alignment",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#t:Alignment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttributes: identifier, classes, key-value pairs\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "Attr",
          "package": "open-pandoc",
          "source": "src/Text-Pandoc-Definition.html#Attr",
          "type": "type"
        },
        "index": {
          "description": "Attributes identifier classes key-value pairs",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "Attr",
          "package": "open-pandoc",
          "partial": "Attr",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#t:Attr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBlock element.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "Block",
          "package": "open-pandoc",
          "source": "src/Text-Pandoc-Definition.html#Block",
          "type": "data"
        },
        "index": {
          "description": "Block element",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "Block",
          "package": "open-pandoc",
          "partial": "Block",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#t:Block"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInline elements.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "Inline",
          "package": "open-pandoc",
          "source": "src/Text-Pandoc-Definition.html#Inline",
          "type": "data"
        },
        "index": {
          "description": "Inline elements",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "Inline",
          "package": "open-pandoc",
          "partial": "Inline",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#t:Inline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList attributes.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "ListAttributes",
          "package": "open-pandoc",
          "source": "src/Text-Pandoc-Definition.html#ListAttributes",
          "type": "type"
        },
        "index": {
          "description": "List attributes",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "ListAttributes",
          "package": "open-pandoc",
          "partial": "List Attributes",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#t:ListAttributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelimiter of list numbers.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "ListNumberDelim",
          "package": "open-pandoc",
          "source": "src/Text-Pandoc-Definition.html#ListNumberDelim",
          "type": "data"
        },
        "index": {
          "description": "Delimiter of list numbers",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "ListNumberDelim",
          "package": "open-pandoc",
          "partial": "List Number Delim",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#t:ListNumberDelim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStyle of list numbers.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "ListNumberStyle",
          "package": "open-pandoc",
          "source": "src/Text-Pandoc-Definition.html#ListNumberStyle",
          "type": "data"
        },
        "index": {
          "description": "Style of list numbers",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "ListNumberStyle",
          "package": "open-pandoc",
          "partial": "List Number Style",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#t:ListNumberStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of math element (display or inline).\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "MathType",
          "package": "open-pandoc",
          "source": "src/Text-Pandoc-Definition.html#MathType",
          "type": "data"
        },
        "index": {
          "description": "Type of math element display or inline",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "MathType",
          "package": "open-pandoc",
          "partial": "Math Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#t:MathType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBibliographic information for the document:  title, authors, date.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "Meta",
          "package": "open-pandoc",
          "source": "src/Text-Pandoc-Definition.html#Meta",
          "type": "data"
        },
        "index": {
          "description": "Bibliographic information for the document title authors date",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "Meta",
          "package": "open-pandoc",
          "partial": "Meta",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#t:Meta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Definition",
          "name": "Pandoc",
          "package": "open-pandoc",
          "source": "src/Text-Pandoc-Definition.html#Pandoc",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "Pandoc",
          "package": "open-pandoc",
          "partial": "Pandoc",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#t:Pandoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of quotation marks to use in Quoted inline.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "QuoteType",
          "package": "open-pandoc",
          "source": "src/Text-Pandoc-Definition.html#QuoteType",
          "type": "data"
        },
        "index": {
          "description": "Type of quotation marks to use in Quoted inline",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "QuoteType",
          "package": "open-pandoc",
          "partial": "Quote Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#t:QuoteType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLink target (URL, title).\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "Target",
          "package": "open-pandoc",
          "source": "src/Text-Pandoc-Definition.html#Target",
          "type": "type"
        },
        "index": {
          "description": "Link target URL title",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "Target",
          "package": "open-pandoc",
          "partial": "Target",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#t:Target"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Definition",
          "name": "AlignCenter",
          "package": "open-pandoc",
          "signature": "AlignCenter",
          "source": "src/Text-Pandoc-Definition.html#Alignment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "AlignCenter",
          "package": "open-pandoc",
          "partial": "Align Center",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#v:AlignCenter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Definition",
          "name": "AlignDefault",
          "package": "open-pandoc",
          "signature": "AlignDefault",
          "source": "src/Text-Pandoc-Definition.html#Alignment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "AlignDefault",
          "package": "open-pandoc",
          "partial": "Align Default",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#v:AlignDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Definition",
          "name": "AlignLeft",
          "package": "open-pandoc",
          "signature": "AlignLeft",
          "source": "src/Text-Pandoc-Definition.html#Alignment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "AlignLeft",
          "package": "open-pandoc",
          "partial": "Align Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#v:AlignLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Definition",
          "name": "AlignRight",
          "package": "open-pandoc",
          "signature": "AlignRight",
          "source": "src/Text-Pandoc-Definition.html#Alignment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "AlignRight",
          "package": "open-pandoc",
          "partial": "Align Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#v:AlignRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApostrophe\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "Apostrophe",
          "package": "open-pandoc",
          "signature": "Apostrophe",
          "source": "src/Text-Pandoc-Definition.html#Inline",
          "type": "function"
        },
        "index": {
          "description": "Apostrophe",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "Apostrophe",
          "package": "open-pandoc",
          "partial": "Apostrophe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#v:Apostrophe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBlock quote (list of blocks)\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "BlockQuote",
          "package": "open-pandoc",
          "signature": "BlockQuote [Block]",
          "source": "src/Text-Pandoc-Definition.html#Block",
          "type": "function"
        },
        "index": {
          "description": "Block quote list of blocks",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "BlockQuote",
          "normalized": "BlockQuote[Block]",
          "package": "open-pandoc",
          "partial": "Block Quote",
          "signature": "BlockQuote[Block]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#v:BlockQuote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBullet list (list of items, each\n a list of blocks)\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "BulletList",
          "package": "open-pandoc",
          "signature": "BulletList [[Block]]",
          "source": "src/Text-Pandoc-Definition.html#Block",
          "type": "function"
        },
        "index": {
          "description": "Bullet list list of items each list of blocks",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "BulletList",
          "normalized": "BulletList[[Block]]",
          "package": "open-pandoc",
          "partial": "Bullet List",
          "signature": "BulletList[[Block]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#v:BulletList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCitation (list of inlines)\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "Cite",
          "package": "open-pandoc",
          "signature": "Cite [Target] [Inline]",
          "source": "src/Text-Pandoc-Definition.html#Inline",
          "type": "function"
        },
        "index": {
          "description": "Citation list of inlines",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "Cite",
          "normalized": "Cite[Target][Inline]",
          "package": "open-pandoc",
          "partial": "Cite",
          "signature": "Cite[Target][Inline]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#v:Cite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInline code (literal)\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "Code",
          "package": "open-pandoc",
          "signature": "Code String",
          "source": "src/Text-Pandoc-Definition.html#Inline",
          "type": "function"
        },
        "index": {
          "description": "Inline code literal",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "Code",
          "package": "open-pandoc",
          "partial": "Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#v:Code"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCode block (literal) with attributes \n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "CodeBlock",
          "package": "open-pandoc",
          "signature": "CodeBlock Attr String",
          "source": "src/Text-Pandoc-Definition.html#Block",
          "type": "function"
        },
        "index": {
          "description": "Code block literal with attributes",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "CodeBlock",
          "package": "open-pandoc",
          "partial": "Code Block",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#v:CodeBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Definition",
          "name": "Decimal",
          "package": "open-pandoc",
          "signature": "Decimal",
          "source": "src/Text-Pandoc-Definition.html#ListNumberStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "Decimal",
          "package": "open-pandoc",
          "partial": "Decimal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#v:Decimal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Definition",
          "name": "DefaultDelim",
          "package": "open-pandoc",
          "signature": "DefaultDelim",
          "source": "src/Text-Pandoc-Definition.html#ListNumberDelim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "DefaultDelim",
          "package": "open-pandoc",
          "partial": "Default Delim",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#v:DefaultDelim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Definition",
          "name": "DefaultStyle",
          "package": "open-pandoc",
          "signature": "DefaultStyle",
          "source": "src/Text-Pandoc-Definition.html#ListNumberStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "DefaultStyle",
          "package": "open-pandoc",
          "partial": "Default Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#v:DefaultStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinition list \n Each list item is a pair consisting of a\n term (a list of inlines) and one or more\n definitions (each a list of blocks)\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "DefinitionList",
          "package": "open-pandoc",
          "signature": "DefinitionList [([Inline], [[Block]])]",
          "source": "src/Text-Pandoc-Definition.html#Block",
          "type": "function"
        },
        "index": {
          "description": "Definition list Each list item is pair consisting of term list of inlines and one or more definitions each list of blocks",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "DefinitionList",
          "normalized": "DefinitionList[([Inline],[[Block]])]",
          "package": "open-pandoc",
          "partial": "Definition List",
          "signature": "DefinitionList[([Inline],[[Block]])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#v:DefinitionList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Definition",
          "name": "DisplayMath",
          "package": "open-pandoc",
          "signature": "DisplayMath",
          "source": "src/Text-Pandoc-Definition.html#MathType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "DisplayMath",
          "package": "open-pandoc",
          "partial": "Display Math",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#v:DisplayMath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Definition",
          "name": "DoubleQuote",
          "package": "open-pandoc",
          "signature": "DoubleQuote",
          "source": "src/Text-Pandoc-Definition.html#QuoteType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "DoubleQuote",
          "package": "open-pandoc",
          "partial": "Double Quote",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#v:DoubleQuote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEllipses\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "Ellipses",
          "package": "open-pandoc",
          "signature": "Ellipses",
          "source": "src/Text-Pandoc-Definition.html#Inline",
          "type": "function"
        },
        "index": {
          "description": "Ellipses",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "Ellipses",
          "package": "open-pandoc",
          "partial": "Ellipses",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#v:Ellipses"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEm dash\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "EmDash",
          "package": "open-pandoc",
          "signature": "EmDash",
          "source": "src/Text-Pandoc-Definition.html#Inline",
          "type": "function"
        },
        "index": {
          "description": "Em dash",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "EmDash",
          "package": "open-pandoc",
          "partial": "Em Dash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#v:EmDash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmphasized text (list of inlines)\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "Emph",
          "package": "open-pandoc",
          "signature": "Emph [Inline]",
          "source": "src/Text-Pandoc-Definition.html#Inline",
          "type": "function"
        },
        "index": {
          "description": "Emphasized text list of inlines",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "Emph",
          "normalized": "Emph[Inline]",
          "package": "open-pandoc",
          "partial": "Emph",
          "signature": "Emph[Inline]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#v:Emph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEn dash\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "EnDash",
          "package": "open-pandoc",
          "signature": "EnDash",
          "source": "src/Text-Pandoc-Definition.html#Inline",
          "type": "function"
        },
        "index": {
          "description": "En dash",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "EnDash",
          "package": "open-pandoc",
          "partial": "En Dash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#v:EnDash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHeader - level (integer) and text (inlines) \n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "Header",
          "package": "open-pandoc",
          "signature": "Header Int [Inline]",
          "source": "src/Text-Pandoc-Definition.html#Block",
          "type": "function"
        },
        "index": {
          "description": "Header level integer and text inlines",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "Header",
          "normalized": "Header Int[Inline]",
          "package": "open-pandoc",
          "partial": "Header",
          "signature": "Header Int[Inline]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#v:Header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHorizontal rule\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "HorizontalRule",
          "package": "open-pandoc",
          "signature": "HorizontalRule",
          "source": "src/Text-Pandoc-Definition.html#Block",
          "type": "function"
        },
        "index": {
          "description": "Horizontal rule",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "HorizontalRule",
          "package": "open-pandoc",
          "partial": "Horizontal Rule",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#v:HorizontalRule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHTML code (literal)\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "HtmlInline",
          "package": "open-pandoc",
          "signature": "HtmlInline String",
          "source": "src/Text-Pandoc-Definition.html#Inline",
          "type": "function"
        },
        "index": {
          "description": "HTML code literal",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "HtmlInline",
          "package": "open-pandoc",
          "partial": "Html Inline",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#v:HtmlInline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImage:  alt text (list of inlines), target\n and target\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "Image",
          "package": "open-pandoc",
          "signature": "Image [Inline] Target",
          "source": "src/Text-Pandoc-Definition.html#Inline",
          "type": "function"
        },
        "index": {
          "description": "Image alt text list of inlines target and target",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "Image",
          "normalized": "Image[Inline]Target",
          "package": "open-pandoc",
          "partial": "Image",
          "signature": "Image[Inline]Target",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#v:Image"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Definition",
          "name": "InlineMath",
          "package": "open-pandoc",
          "signature": "InlineMath",
          "source": "src/Text-Pandoc-Definition.html#MathType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "InlineMath",
          "package": "open-pandoc",
          "partial": "Inline Math",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#v:InlineMath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHard line break\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "LineBreak",
          "package": "open-pandoc",
          "signature": "LineBreak",
          "source": "src/Text-Pandoc-Definition.html#Inline",
          "type": "function"
        },
        "index": {
          "description": "Hard line break",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "LineBreak",
          "package": "open-pandoc",
          "partial": "Line Break",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#v:LineBreak"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHyperlink: text (list of inlines), target\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "Link",
          "package": "open-pandoc",
          "signature": "Link [Inline] Target",
          "source": "src/Text-Pandoc-Definition.html#Inline",
          "type": "function"
        },
        "index": {
          "description": "Hyperlink text list of inlines target",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "Link",
          "normalized": "Link[Inline]Target",
          "package": "open-pandoc",
          "partial": "Link",
          "signature": "Link[Inline]Target",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#v:Link"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Definition",
          "name": "LowerAlpha",
          "package": "open-pandoc",
          "signature": "LowerAlpha",
          "source": "src/Text-Pandoc-Definition.html#ListNumberStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "LowerAlpha",
          "package": "open-pandoc",
          "partial": "Lower Alpha",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#v:LowerAlpha"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Definition",
          "name": "LowerRoman",
          "package": "open-pandoc",
          "signature": "LowerRoman",
          "source": "src/Text-Pandoc-Definition.html#ListNumberStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "LowerRoman",
          "package": "open-pandoc",
          "partial": "Lower Roman",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#v:LowerRoman"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTeX math (literal)\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "Math",
          "package": "open-pandoc",
          "signature": "Math MathType String",
          "source": "src/Text-Pandoc-Definition.html#Inline",
          "type": "function"
        },
        "index": {
          "description": "TeX math literal",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "Math",
          "package": "open-pandoc",
          "partial": "Math",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#v:Math"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Definition",
          "name": "Meta",
          "package": "open-pandoc",
          "signature": "Meta",
          "source": "src/Text-Pandoc-Definition.html#Meta",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "Meta",
          "package": "open-pandoc",
          "partial": "Meta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#v:Meta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFootnote or endnote \n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "Note",
          "package": "open-pandoc",
          "signature": "Note [Block]",
          "source": "src/Text-Pandoc-Definition.html#Inline",
          "type": "function"
        },
        "index": {
          "description": "Footnote or endnote",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "Note",
          "normalized": "Note[Block]",
          "package": "open-pandoc",
          "partial": "Note",
          "signature": "Note[Block]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#v:Note"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNothing\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "Null",
          "package": "open-pandoc",
          "signature": "Null",
          "source": "src/Text-Pandoc-Definition.html#Block",
          "type": "function"
        },
        "index": {
          "description": "Nothing",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "Null",
          "package": "open-pandoc",
          "partial": "Null",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#v:Null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Definition",
          "name": "OneParen",
          "package": "open-pandoc",
          "signature": "OneParen",
          "source": "src/Text-Pandoc-Definition.html#ListNumberDelim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "OneParen",
          "package": "open-pandoc",
          "partial": "One Paren",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#v:OneParen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOrdered list (attributes\n and a list of items, each a list of blocks)\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "OrderedList",
          "package": "open-pandoc",
          "signature": "OrderedList ListAttributes [[Block]]",
          "source": "src/Text-Pandoc-Definition.html#Block",
          "type": "function"
        },
        "index": {
          "description": "Ordered list attributes and list of items each list of blocks",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "OrderedList",
          "normalized": "OrderedList ListAttributes[[Block]]",
          "package": "open-pandoc",
          "partial": "Ordered List",
          "signature": "OrderedList ListAttributes[[Block]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#v:OrderedList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Definition",
          "name": "Pandoc",
          "package": "open-pandoc",
          "signature": "Pandoc Meta [Block]",
          "source": "src/Text-Pandoc-Definition.html#Pandoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "Pandoc",
          "normalized": "Pandoc Meta[Block]",
          "package": "open-pandoc",
          "partial": "Pandoc",
          "signature": "Pandoc Meta[Block]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#v:Pandoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParagraph\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "Para",
          "package": "open-pandoc",
          "signature": "Para [Inline]",
          "source": "src/Text-Pandoc-Definition.html#Block",
          "type": "function"
        },
        "index": {
          "description": "Paragraph",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "Para",
          "normalized": "Para[Inline]",
          "package": "open-pandoc",
          "partial": "Para",
          "signature": "Para[Inline]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#v:Para"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Definition",
          "name": "Period",
          "package": "open-pandoc",
          "signature": "Period",
          "source": "src/Text-Pandoc-Definition.html#ListNumberDelim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "Period",
          "package": "open-pandoc",
          "partial": "Period",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#v:Period"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlain text, not a paragraph\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "Plain",
          "package": "open-pandoc",
          "signature": "Plain [Inline]",
          "source": "src/Text-Pandoc-Definition.html#Block",
          "type": "function"
        },
        "index": {
          "description": "Plain text not paragraph",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "Plain",
          "normalized": "Plain[Inline]",
          "package": "open-pandoc",
          "partial": "Plain",
          "signature": "Plain[Inline]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#v:Plain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuoted text (list of inlines)\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "Quoted",
          "package": "open-pandoc",
          "signature": "Quoted QuoteType [Inline]",
          "source": "src/Text-Pandoc-Definition.html#Inline",
          "type": "function"
        },
        "index": {
          "description": "Quoted text list of inlines",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "Quoted",
          "normalized": "Quoted QuoteType[Inline]",
          "package": "open-pandoc",
          "partial": "Quoted",
          "signature": "Quoted QuoteType[Inline]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#v:Quoted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRaw HTML block (literal)\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "RawHtml",
          "package": "open-pandoc",
          "signature": "RawHtml String",
          "source": "src/Text-Pandoc-Definition.html#Block",
          "type": "function"
        },
        "index": {
          "description": "Raw HTML block literal",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "RawHtml",
          "package": "open-pandoc",
          "partial": "Raw Html",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#v:RawHtml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Definition",
          "name": "SingleQuote",
          "package": "open-pandoc",
          "signature": "SingleQuote",
          "source": "src/Text-Pandoc-Definition.html#QuoteType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "SingleQuote",
          "package": "open-pandoc",
          "partial": "Single Quote",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#v:SingleQuote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSmall caps text (list of inlines)\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "SmallCaps",
          "package": "open-pandoc",
          "signature": "SmallCaps [Inline]",
          "source": "src/Text-Pandoc-Definition.html#Inline",
          "type": "function"
        },
        "index": {
          "description": "Small caps text list of inlines",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "SmallCaps",
          "normalized": "SmallCaps[Inline]",
          "package": "open-pandoc",
          "partial": "Small Caps",
          "signature": "SmallCaps[Inline]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#v:SmallCaps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInter-word space\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "Space",
          "package": "open-pandoc",
          "signature": "Space",
          "source": "src/Text-Pandoc-Definition.html#Inline",
          "type": "function"
        },
        "index": {
          "description": "Inter-word space",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "Space",
          "package": "open-pandoc",
          "partial": "Space",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#v:Space"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eText (string)\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "Str",
          "package": "open-pandoc",
          "signature": "Str String",
          "source": "src/Text-Pandoc-Definition.html#Inline",
          "type": "function"
        },
        "index": {
          "description": "Text string",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "Str",
          "package": "open-pandoc",
          "partial": "Str",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#v:Str"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrikeout text (list of inlines)\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "Strikeout",
          "package": "open-pandoc",
          "signature": "Strikeout [Inline]",
          "source": "src/Text-Pandoc-Definition.html#Inline",
          "type": "function"
        },
        "index": {
          "description": "Strikeout text list of inlines",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "Strikeout",
          "normalized": "Strikeout[Inline]",
          "package": "open-pandoc",
          "partial": "Strikeout",
          "signature": "Strikeout[Inline]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#v:Strikeout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrongly emphasized text (list of inlines)\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "Strong",
          "package": "open-pandoc",
          "signature": "Strong [Inline]",
          "source": "src/Text-Pandoc-Definition.html#Inline",
          "type": "function"
        },
        "index": {
          "description": "Strongly emphasized text list of inlines",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "Strong",
          "normalized": "Strong[Inline]",
          "package": "open-pandoc",
          "partial": "Strong",
          "signature": "Strong[Inline]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#v:Strong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubscripted text (list of inlines)\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "Subscript",
          "package": "open-pandoc",
          "signature": "Subscript [Inline]",
          "source": "src/Text-Pandoc-Definition.html#Inline",
          "type": "function"
        },
        "index": {
          "description": "Subscripted text list of inlines",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "Subscript",
          "normalized": "Subscript[Inline]",
          "package": "open-pandoc",
          "partial": "Subscript",
          "signature": "Subscript[Inline]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#v:Subscript"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSuperscripted text (list of inlines)\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "Superscript",
          "package": "open-pandoc",
          "signature": "Superscript [Inline]",
          "source": "src/Text-Pandoc-Definition.html#Inline",
          "type": "function"
        },
        "index": {
          "description": "Superscripted text list of inlines",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "Superscript",
          "normalized": "Superscript[Inline]",
          "package": "open-pandoc",
          "partial": "Superscript",
          "signature": "Superscript[Inline]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#v:Superscript"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTable,\n with caption, column alignments,\n relative column widths (0 = default),\n column headers (each a list of blocks), and\n rows (each a list of lists of blocks)\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "Table",
          "package": "open-pandoc",
          "signature": "Table [Inline] [Alignment] [Double] [[Block]] [[[Block]]]",
          "source": "src/Text-Pandoc-Definition.html#Block",
          "type": "function"
        },
        "index": {
          "description": "Table with caption column alignments relative column widths default column headers each list of blocks and rows each list of lists of blocks",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "Table",
          "normalized": "Table[Inline][Alignment][Double][[Block]][[[Block]]]",
          "package": "open-pandoc",
          "partial": "Table",
          "signature": "Table[Inline][Alignment][Double][[Block]][[[Block]]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#v:Table"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLaTeX code (literal)\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "TeX",
          "package": "open-pandoc",
          "signature": "TeX String",
          "source": "src/Text-Pandoc-Definition.html#Inline",
          "type": "function"
        },
        "index": {
          "description": "LaTeX code literal",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "TeX",
          "package": "open-pandoc",
          "partial": "Te",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#v:TeX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Definition",
          "name": "TwoParens",
          "package": "open-pandoc",
          "signature": "TwoParens",
          "source": "src/Text-Pandoc-Definition.html#ListNumberDelim",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "TwoParens",
          "package": "open-pandoc",
          "partial": "Two Parens",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#v:TwoParens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Definition",
          "name": "UpperAlpha",
          "package": "open-pandoc",
          "signature": "UpperAlpha",
          "source": "src/Text-Pandoc-Definition.html#ListNumberStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "UpperAlpha",
          "package": "open-pandoc",
          "partial": "Upper Alpha",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#v:UpperAlpha"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Definition",
          "name": "UpperRoman",
          "package": "open-pandoc",
          "signature": "UpperRoman",
          "source": "src/Text-Pandoc-Definition.html#ListNumberStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "UpperRoman",
          "package": "open-pandoc",
          "partial": "Upper Roman",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#v:UpperRoman"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Definition",
          "name": "docAuthors",
          "package": "open-pandoc",
          "signature": "[[Inline]]",
          "source": "src/Text-Pandoc-Definition.html#Meta",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "docAuthors",
          "normalized": "[[Inline]]",
          "package": "open-pandoc",
          "partial": "Authors",
          "signature": "[[Inline]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#v:docAuthors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Definition",
          "name": "docDate",
          "package": "open-pandoc",
          "signature": "[Inline]",
          "source": "src/Text-Pandoc-Definition.html#Meta",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "docDate",
          "normalized": "[Inline]",
          "package": "open-pandoc",
          "partial": "Date",
          "signature": "[Inline]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#v:docDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Definition",
          "name": "docTitle",
          "package": "open-pandoc",
          "signature": "[Inline]",
          "source": "src/Text-Pandoc-Definition.html#Meta",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "docTitle",
          "normalized": "[Inline]",
          "package": "open-pandoc",
          "partial": "Title",
          "signature": "[Inline]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#v:docTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Definition",
          "name": "processPandoc",
          "package": "open-pandoc",
          "signature": "(a -\u003e a) -\u003e Pandoc -\u003e Pandoc",
          "source": "src/Text-Pandoc-Definition.html#processPandoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "processPandoc",
          "normalized": "(a-\u003ea)-\u003ePandoc-\u003ePandoc",
          "package": "open-pandoc",
          "partial": "Pandoc",
          "signature": "(a-\u003ea)-\u003ePandoc-\u003ePandoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#v:processPandoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies a transformation on \u003ccode\u003ea\u003c/code\u003es to matching elements in a \u003ccode\u003eb\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "processWith",
          "package": "open-pandoc",
          "signature": "(a -\u003e a) -\u003e b -\u003e b",
          "source": "src/Text-Pandoc-Definition.html#processWith",
          "type": "function"
        },
        "index": {
          "description": "Applies transformation on to matching elements in",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "processWith",
          "normalized": "(a-\u003ea)-\u003eb-\u003eb",
          "package": "open-pandoc",
          "partial": "With",
          "signature": "(a-\u003ea)-\u003eb-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#v:processWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eprocessWith\u003c/a\u003e\u003c/code\u003e, but with monadic transformations.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "processWithM",
          "package": "open-pandoc",
          "signature": "(a -\u003e m a) -\u003e b -\u003e m b",
          "source": "src/Text-Pandoc-Definition.html#processWithM",
          "type": "function"
        },
        "index": {
          "description": "Like processWith but with monadic transformations",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "processWithM",
          "normalized": "(a-\u003eb a)-\u003ec-\u003eb c",
          "package": "open-pandoc",
          "partial": "With",
          "signature": "(a-\u003em a)-\u003eb-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#v:processWithM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Definition",
          "name": "queryPandoc",
          "package": "open-pandoc",
          "signature": "(a -\u003e [b]) -\u003e Pandoc -\u003e [b]",
          "source": "src/Text-Pandoc-Definition.html#queryPandoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "queryPandoc",
          "normalized": "(a-\u003e[b])-\u003ePandoc-\u003e[b]",
          "package": "open-pandoc",
          "partial": "Pandoc",
          "signature": "(a-\u003e[b])-\u003ePandoc-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#v:queryPandoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a query on matching \u003ccode\u003ea\u003c/code\u003e elements in a \u003ccode\u003ec\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Definition",
          "name": "queryWith",
          "package": "open-pandoc",
          "signature": "(a -\u003e [b]) -\u003e c -\u003e [b]",
          "source": "src/Text-Pandoc-Definition.html#queryWith",
          "type": "function"
        },
        "index": {
          "description": "Runs query on matching elements in",
          "hierarchy": "Text Pandoc Definition",
          "module": "Text.Pandoc.Definition",
          "name": "queryWith",
          "normalized": "(a-\u003e[b])-\u003ec-\u003e[b]",
          "package": "open-pandoc",
          "partial": "With",
          "signature": "(a-\u003e[b])-\u003ec-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Definition.html#v:queryWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExports functions for syntax highlighting.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Pandoc.Highlighting",
          "name": "Highlighting",
          "package": "open-pandoc",
          "source": "src/Text-Pandoc-Highlighting.html",
          "type": "module"
        },
        "index": {
          "description": "Exports functions for syntax highlighting",
          "hierarchy": "Text Pandoc Highlighting",
          "module": "Text.Pandoc.Highlighting",
          "name": "Highlighting",
          "package": "open-pandoc",
          "partial": "Highlighting",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Highlighting.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Highlighting",
          "name": "defaultHighlightingCss",
          "package": "open-pandoc",
          "signature": "String",
          "source": "src/Text-Pandoc-Highlighting.html#defaultHighlightingCss",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Highlighting",
          "module": "Text.Pandoc.Highlighting",
          "name": "defaultHighlightingCss",
          "package": "open-pandoc",
          "partial": "Highlighting Css",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Highlighting.html#v:defaultHighlightingCss"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Highlighting",
          "name": "highlightHtml",
          "package": "open-pandoc",
          "signature": "Attr -\u003e String -\u003e Either String Html",
          "source": "src/Text-Pandoc-Highlighting.html#highlightHtml",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Highlighting",
          "module": "Text.Pandoc.Highlighting",
          "name": "highlightHtml",
          "normalized": "Attr-\u003eString-\u003eEither String Html",
          "package": "open-pandoc",
          "partial": "Html",
          "signature": "Attr-\u003eString-\u003eEither String Html",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Highlighting.html#v:highlightHtml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Highlighting",
          "name": "languages",
          "package": "open-pandoc",
          "signature": "[String]",
          "source": "src/Text-Pandoc-Highlighting.html#languages",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Highlighting",
          "module": "Text.Pandoc.Highlighting",
          "name": "languages",
          "normalized": "[String]",
          "package": "open-pandoc",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Highlighting.html#v:languages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Highlighting",
          "name": "languagesByExtension",
          "package": "open-pandoc",
          "signature": "String -\u003e [String]",
          "source": "src/Text-Pandoc-Highlighting.html#languagesByExtension",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Highlighting",
          "module": "Text.Pandoc.Highlighting",
          "name": "languagesByExtension",
          "normalized": "String-\u003e[String]",
          "package": "open-pandoc",
          "partial": "By Extension",
          "signature": "String-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Highlighting.html#v:languagesByExtension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for producing an ODT file from OpenDocument XML.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Pandoc.ODT",
          "name": "ODT",
          "package": "open-pandoc",
          "source": "src/Text-Pandoc-ODT.html",
          "type": "module"
        },
        "index": {
          "description": "Functions for producing an ODT file from OpenDocument XML",
          "hierarchy": "Text Pandoc ODT",
          "module": "Text.Pandoc.ODT",
          "name": "ODT",
          "package": "open-pandoc",
          "partial": "ODT",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-ODT.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce an ODT file from OpenDocument XML.\n\u003c/p\u003e",
          "module": "Text.Pandoc.ODT",
          "name": "saveOpenDocumentAsODT",
          "package": "open-pandoc",
          "signature": "Maybe FilePath-\u003e FilePath-\u003e FilePath-\u003e Maybe FilePath-\u003e String-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Produce an ODT file from OpenDocument XML",
          "hierarchy": "Text Pandoc ODT",
          "module": "Text.Pandoc.ODT",
          "name": "saveOpenDocumentAsODT",
          "normalized": "Maybe FilePath-\u003eFilePath-\u003eFilePath-\u003eMaybe FilePath-\u003eString-\u003eIO()",
          "package": "open-pandoc",
          "partial": "Open Document As ODT",
          "signature": "Maybe FilePath-\u003eFilePath-\u003eFilePath-\u003eMaybe FilePath-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-ODT.html#v:saveOpenDocumentAsODT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConversion of HTML to \u003ccode\u003e\u003ca\u003ePandoc\u003c/a\u003e\u003c/code\u003e document.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Pandoc.Readers.HTML",
          "name": "HTML",
          "package": "open-pandoc",
          "source": "src/Text-Pandoc-Readers-HTML.html",
          "type": "module"
        },
        "index": {
          "description": "Conversion of HTML to Pandoc document",
          "hierarchy": "Text Pandoc Readers HTML",
          "module": "Text.Pandoc.Readers.HTML",
          "name": "HTML",
          "package": "open-pandoc",
          "partial": "HTML",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Readers-HTML.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Readers.HTML",
          "name": "anyHtmlBlockTag",
          "package": "open-pandoc",
          "signature": "GenParser Char ParserState [Char]",
          "source": "src/Text-Pandoc-Readers-HTML.html#anyHtmlBlockTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Readers HTML",
          "module": "Text.Pandoc.Readers.HTML",
          "name": "anyHtmlBlockTag",
          "normalized": "GenParser Char ParserState[Char]",
          "package": "open-pandoc",
          "partial": "Html Block Tag",
          "signature": "GenParser Char ParserState[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Readers-HTML.html#v:anyHtmlBlockTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Readers.HTML",
          "name": "anyHtmlEndTag",
          "package": "open-pandoc",
          "signature": "GenParser Char ParserState [Char]",
          "source": "src/Text-Pandoc-Readers-HTML.html#anyHtmlEndTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Readers HTML",
          "module": "Text.Pandoc.Readers.HTML",
          "name": "anyHtmlEndTag",
          "normalized": "GenParser Char ParserState[Char]",
          "package": "open-pandoc",
          "partial": "Html End Tag",
          "signature": "GenParser Char ParserState[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Readers-HTML.html#v:anyHtmlEndTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Readers.HTML",
          "name": "anyHtmlInlineTag",
          "package": "open-pandoc",
          "signature": "GenParser Char ParserState [Char]",
          "source": "src/Text-Pandoc-Readers-HTML.html#anyHtmlInlineTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Readers HTML",
          "module": "Text.Pandoc.Readers.HTML",
          "name": "anyHtmlInlineTag",
          "normalized": "GenParser Char ParserState[Char]",
          "package": "open-pandoc",
          "partial": "Html Inline Tag",
          "signature": "GenParser Char ParserState[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Readers-HTML.html#v:anyHtmlInlineTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse any HTML tag (opening or self-closing) and return text of tag\n\u003c/p\u003e",
          "module": "Text.Pandoc.Readers.HTML",
          "name": "anyHtmlTag",
          "package": "open-pandoc",
          "signature": "GenParser Char ParserState [Char]",
          "source": "src/Text-Pandoc-Readers-HTML.html#anyHtmlTag",
          "type": "function"
        },
        "index": {
          "description": "Parse any HTML tag opening or self-closing and return text of tag",
          "hierarchy": "Text Pandoc Readers HTML",
          "module": "Text.Pandoc.Readers.HTML",
          "name": "anyHtmlTag",
          "normalized": "GenParser Char ParserState[Char]",
          "package": "open-pandoc",
          "partial": "Html Tag",
          "signature": "GenParser Char ParserState[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Readers-HTML.html#v:anyHtmlTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract type from a tag:  e.g. \u003ccode\u003ebr\u003c/code\u003e from \u003ccode\u003e\u003cbr\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Pandoc.Readers.HTML",
          "name": "extractTagType",
          "package": "open-pandoc",
          "signature": "String -\u003e String",
          "source": "src/Text-Pandoc-Readers-HTML.html#extractTagType",
          "type": "function"
        },
        "index": {
          "description": "Extract type from tag e.g br from br",
          "hierarchy": "Text Pandoc Readers HTML",
          "module": "Text.Pandoc.Readers.HTML",
          "name": "extractTagType",
          "normalized": "String-\u003eString",
          "package": "open-pandoc",
          "partial": "Tag Type",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Readers-HTML.html#v:extractTagType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Readers.HTML",
          "name": "htmlBlockElement",
          "package": "open-pandoc",
          "signature": "GenParser Char ParserState [Char]",
          "source": "src/Text-Pandoc-Readers-HTML.html#htmlBlockElement",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Readers HTML",
          "module": "Text.Pandoc.Readers.HTML",
          "name": "htmlBlockElement",
          "normalized": "GenParser Char ParserState[Char]",
          "package": "open-pandoc",
          "partial": "Block Element",
          "signature": "GenParser Char ParserState[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Readers-HTML.html#v:htmlBlockElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses an HTML comment.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Readers.HTML",
          "name": "htmlComment",
          "package": "open-pandoc",
          "signature": "GenParser Char st [Char]",
          "source": "src/Text-Pandoc-Readers-HTML.html#htmlComment",
          "type": "function"
        },
        "index": {
          "description": "Parses an HTML comment",
          "hierarchy": "Text Pandoc Readers HTML",
          "module": "Text.Pandoc.Readers.HTML",
          "name": "htmlComment",
          "normalized": "GenParser Char a[Char]",
          "package": "open-pandoc",
          "partial": "Comment",
          "signature": "GenParser Char st[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Readers-HTML.html#v:htmlComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse an end tag of type \u003ccode\u003etag\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.Pandoc.Readers.HTML",
          "name": "htmlEndTag",
          "package": "open-pandoc",
          "signature": "[Char] -\u003e GenParser Char ParserState [Char]",
          "source": "src/Text-Pandoc-Readers-HTML.html#htmlEndTag",
          "type": "function"
        },
        "index": {
          "description": "Parse an end tag of type tag",
          "hierarchy": "Text Pandoc Readers HTML",
          "module": "Text.Pandoc.Readers.HTML",
          "name": "htmlEndTag",
          "normalized": "[Char]-\u003eGenParser Char ParserState[Char]",
          "package": "open-pandoc",
          "partial": "End Tag",
          "signature": "[Char]-\u003eGenParser Char ParserState[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Readers-HTML.html#v:htmlEndTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Readers.HTML",
          "name": "rawHtmlBlock",
          "package": "open-pandoc",
          "signature": "GenParser Char ParserState Block",
          "source": "src/Text-Pandoc-Readers-HTML.html#rawHtmlBlock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Readers HTML",
          "module": "Text.Pandoc.Readers.HTML",
          "name": "rawHtmlBlock",
          "package": "open-pandoc",
          "partial": "Html Block",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Readers-HTML.html#v:rawHtmlBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Readers.HTML",
          "name": "rawHtmlInline",
          "package": "open-pandoc",
          "signature": "GenParser Char ParserState Inline",
          "source": "src/Text-Pandoc-Readers-HTML.html#rawHtmlInline",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Readers HTML",
          "module": "Text.Pandoc.Readers.HTML",
          "name": "rawHtmlInline",
          "package": "open-pandoc",
          "partial": "Html Inline",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Readers-HTML.html#v:rawHtmlInline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert HTML-formatted string to \u003ccode\u003e\u003ca\u003ePandoc\u003c/a\u003e\u003c/code\u003e document.\n\u003c/p\u003e",
          "module": "[\"Text.Pandoc.Readers.HTML\",\"Text.Pandoc\"]",
          "name": "readHtml",
          "package": "open-pandoc",
          "signature": "ParserState-\u003e String-\u003e Pandoc",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Readers-HTML.html#v:readHtml\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:readHtml\"]"
        },
        "index": {
          "description": "Convert HTML-formatted string to Pandoc document",
          "hierarchy": "Text Pandoc Readers HTML",
          "module": "Text.Pandoc.Readers.HTML",
          "name": "readHtml",
          "normalized": "ParserState-\u003eString-\u003ePandoc",
          "package": "open-pandoc",
          "partial": "Html",
          "signature": "ParserState-\u003eString-\u003ePandoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Readers-HTML.html#v:readHtml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003eTrue\u003c/code\u003e if the specified URI is potentially a security risk.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Readers.HTML",
          "name": "unsanitaryURI",
          "package": "open-pandoc",
          "signature": "String -\u003e Bool",
          "source": "src/Text-Pandoc-Readers-HTML.html#unsanitaryURI",
          "type": "function"
        },
        "index": {
          "description": "Returns True if the specified URI is potentially security risk",
          "hierarchy": "Text Pandoc Readers HTML",
          "module": "Text.Pandoc.Readers.HTML",
          "name": "unsanitaryURI",
          "normalized": "String-\u003eBool",
          "package": "open-pandoc",
          "partial": "URI",
          "signature": "String-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Readers-HTML.html#v:unsanitaryURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConversion of LaTeX to \u003ccode\u003e\u003ca\u003ePandoc\u003c/a\u003e\u003c/code\u003e document.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Pandoc.Readers.LaTeX",
          "name": "LaTeX",
          "package": "open-pandoc",
          "source": "src/Text-Pandoc-Readers-LaTeX.html",
          "type": "module"
        },
        "index": {
          "description": "Conversion of LaTeX to Pandoc document",
          "hierarchy": "Text Pandoc Readers LaTeX",
          "module": "Text.Pandoc.Readers.LaTeX",
          "name": "LaTeX",
          "package": "open-pandoc",
          "partial": "La Te",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Readers-LaTeX.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse any LaTeX environment and return a string containing\n the whole literal environment as raw TeX.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Readers.LaTeX",
          "name": "rawLaTeXEnvironment'",
          "package": "open-pandoc",
          "signature": "GenParser Char st String",
          "source": "src/Text-Pandoc-Readers-LaTeX.html#rawLaTeXEnvironment%27",
          "type": "function"
        },
        "index": {
          "description": "Parse any LaTeX environment and return string containing the whole literal environment as raw TeX",
          "hierarchy": "Text Pandoc Readers LaTeX",
          "module": "Text.Pandoc.Readers.LaTeX",
          "name": "rawLaTeXEnvironment'",
          "package": "open-pandoc",
          "partial": "La Te XEnvironment'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Readers-LaTeX.html#v:rawLaTeXEnvironment-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse any LaTeX command and return it in a raw TeX inline element.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Readers.LaTeX",
          "name": "rawLaTeXInline",
          "package": "open-pandoc",
          "signature": "GenParser Char ParserState Inline",
          "source": "src/Text-Pandoc-Readers-LaTeX.html#rawLaTeXInline",
          "type": "function"
        },
        "index": {
          "description": "Parse any LaTeX command and return it in raw TeX inline element",
          "hierarchy": "Text Pandoc Readers LaTeX",
          "module": "Text.Pandoc.Readers.LaTeX",
          "name": "rawLaTeXInline",
          "package": "open-pandoc",
          "partial": "La Te XInline",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Readers-LaTeX.html#v:rawLaTeXInline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse LaTeX from string and return \u003ccode\u003e\u003ca\u003ePandoc\u003c/a\u003e\u003c/code\u003e document.\n\u003c/p\u003e",
          "module": "[\"Text.Pandoc.Readers.LaTeX\",\"Text.Pandoc\"]",
          "name": "readLaTeX",
          "package": "open-pandoc",
          "signature": "ParserState-\u003e String-\u003e Pandoc",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Readers-LaTeX.html#v:readLaTeX\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:readLaTeX\"]"
        },
        "index": {
          "description": "Parse LaTeX from string and return Pandoc document",
          "hierarchy": "Text Pandoc Readers LaTeX",
          "module": "Text.Pandoc.Readers.LaTeX",
          "name": "readLaTeX",
          "normalized": "ParserState-\u003eString-\u003ePandoc",
          "package": "open-pandoc",
          "partial": "La Te",
          "signature": "ParserState-\u003eString-\u003ePandoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Readers-LaTeX.html#v:readLaTeX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConversion of markdown-formatted plain text to \u003ccode\u003e\u003ca\u003ePandoc\u003c/a\u003e\u003c/code\u003e document.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Pandoc.Readers.Markdown",
          "name": "Markdown",
          "package": "open-pandoc",
          "source": "src/Text-Pandoc-Readers-Markdown.html",
          "type": "module"
        },
        "index": {
          "description": "Conversion of markdown-formatted plain text to Pandoc document",
          "hierarchy": "Text Pandoc Readers Markdown",
          "module": "Text.Pandoc.Readers.Markdown",
          "name": "Markdown",
          "package": "open-pandoc",
          "partial": "Markdown",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Readers-Markdown.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead markdown from an input string and return a Pandoc document.\n\u003c/p\u003e",
          "module": "[\"Text.Pandoc.Readers.Markdown\",\"Text.Pandoc\"]",
          "name": "readMarkdown",
          "package": "open-pandoc",
          "signature": "ParserState-\u003e String-\u003e Pandoc",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Readers-Markdown.html#v:readMarkdown\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:readMarkdown\"]"
        },
        "index": {
          "description": "Read markdown from an input string and return Pandoc document",
          "hierarchy": "Text Pandoc Readers Markdown",
          "module": "Text.Pandoc.Readers.Markdown",
          "name": "readMarkdown",
          "normalized": "ParserState-\u003eString-\u003ePandoc",
          "package": "open-pandoc",
          "partial": "Markdown",
          "signature": "ParserState-\u003eString-\u003ePandoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Readers-Markdown.html#v:readMarkdown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConversion from reStructuredText to \u003ccode\u003e\u003ca\u003ePandoc\u003c/a\u003e\u003c/code\u003e document.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Pandoc.Readers.RST",
          "name": "RST",
          "package": "open-pandoc",
          "source": "src/Text-Pandoc-Readers-RST.html",
          "type": "module"
        },
        "index": {
          "description": "Conversion from reStructuredText to Pandoc document",
          "hierarchy": "Text Pandoc Readers RST",
          "module": "Text.Pandoc.Readers.RST",
          "name": "RST",
          "package": "open-pandoc",
          "partial": "RST",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Readers-RST.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse reStructuredText string and return Pandoc document.\n\u003c/p\u003e",
          "module": "[\"Text.Pandoc.Readers.RST\",\"Text.Pandoc\"]",
          "name": "readRST",
          "package": "open-pandoc",
          "signature": "ParserState-\u003e String-\u003e Pandoc",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Readers-RST.html#v:readRST\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:readRST\"]"
        },
        "index": {
          "description": "Parse reStructuredText string and return Pandoc document",
          "hierarchy": "Text Pandoc Readers RST",
          "module": "Text.Pandoc.Readers.RST",
          "name": "readRST",
          "normalized": "ParserState-\u003eString-\u003ePandoc",
          "package": "open-pandoc",
          "partial": "RST",
          "signature": "ParserState-\u003eString-\u003ePandoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Readers-RST.html#v:readRST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConversion of TeX math to a list of \u003ccode\u003e\u003ca\u003ePandoc\u003c/a\u003e\u003c/code\u003e inline elements.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Pandoc.Readers.TeXMath",
          "name": "TeXMath",
          "package": "open-pandoc",
          "source": "src/Text-Pandoc-Readers-TeXMath.html",
          "type": "module"
        },
        "index": {
          "description": "Conversion of TeX math to list of Pandoc inline elements",
          "hierarchy": "Text Pandoc Readers TeXMath",
          "module": "Text.Pandoc.Readers.TeXMath",
          "name": "TeXMath",
          "package": "open-pandoc",
          "partial": "Te XMath",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Readers-TeXMath.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a string of raw TeX math to a list of \u003ccode\u003e\u003ca\u003ePandoc\u003c/a\u003e\u003c/code\u003e inlines. \n\u003c/p\u003e",
          "module": "Text.Pandoc.Readers.TeXMath",
          "name": "readTeXMath",
          "package": "open-pandoc",
          "signature": "String-\u003e [Inline]",
          "type": "function"
        },
        "index": {
          "description": "Converts string of raw TeX math to list of Pandoc inlines",
          "hierarchy": "Text Pandoc Readers TeXMath",
          "module": "Text.Pandoc.Readers.TeXMath",
          "name": "readTeXMath",
          "normalized": "String-\u003e[Inline]",
          "package": "open-pandoc",
          "partial": "Te XMath",
          "signature": "String-\u003e[Inline]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Readers-TeXMath.html#v:readTeXMath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtility functions and definitions used by the various Pandoc modules.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Pandoc.Shared",
          "name": "Shared",
          "package": "open-pandoc",
          "source": "src/Text-Pandoc-Shared.html",
          "type": "module"
        },
        "index": {
          "description": "Utility functions and definitions used by the various Pandoc modules",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "Shared",
          "package": "open-pandoc",
          "partial": "Shared",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicates whether block should be surrounded by blank lines (\u003ccode\u003ePad\u003c/code\u003e) or not (\u003ccode\u003eReg\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Text.Pandoc.Shared",
          "name": "BlockWrapper",
          "package": "open-pandoc",
          "source": "src/Text-Pandoc-Shared.html#BlockWrapper",
          "type": "data"
        },
        "index": {
          "description": "Indicates whether block should be surrounded by blank lines Pad or not Reg",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "BlockWrapper",
          "package": "open-pandoc",
          "partial": "Block Wrapper",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#t:BlockWrapper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData structure for defining hierarchical Pandoc documents\n\u003c/p\u003e",
          "module": "Text.Pandoc.Shared",
          "name": "Element",
          "package": "open-pandoc",
          "source": "src/Text-Pandoc-Shared.html#Element",
          "type": "data"
        },
        "index": {
          "description": "Data structure for defining hierarchical Pandoc documents",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "Element",
          "package": "open-pandoc",
          "partial": "Element",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#t:Element"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Shared",
          "name": "HTMLMathMethod",
          "package": "open-pandoc",
          "source": "src/Text-Pandoc-Shared.html#HTMLMathMethod",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "HTMLMathMethod",
          "package": "open-pandoc",
          "partial": "HTMLMath Method",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#t:HTMLMathMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Shared",
          "name": "HeaderType",
          "package": "open-pandoc",
          "source": "src/Text-Pandoc-Shared.html#HeaderType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "HeaderType",
          "package": "open-pandoc",
          "partial": "Header Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#t:HeaderType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Shared",
          "name": "KeyTable",
          "package": "open-pandoc",
          "source": "src/Text-Pandoc-Shared.html#KeyTable",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "KeyTable",
          "package": "open-pandoc",
          "partial": "Key Table",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#t:KeyTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Shared",
          "name": "NoteTable",
          "package": "open-pandoc",
          "source": "src/Text-Pandoc-Shared.html#NoteTable",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "NoteTable",
          "package": "open-pandoc",
          "partial": "Note Table",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#t:NoteTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMethods for obfuscating email addresses in HTML.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Shared",
          "name": "ObfuscationMethod",
          "package": "open-pandoc",
          "source": "src/Text-Pandoc-Shared.html#ObfuscationMethod",
          "type": "data"
        },
        "index": {
          "description": "Methods for obfuscating email addresses in HTML",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "ObfuscationMethod",
          "package": "open-pandoc",
          "partial": "Obfuscation Method",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#t:ObfuscationMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Shared",
          "name": "ParserContext",
          "package": "open-pandoc",
          "source": "src/Text-Pandoc-Shared.html#ParserContext",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "ParserContext",
          "package": "open-pandoc",
          "partial": "Parser Context",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#t:ParserContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParsing options.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Shared",
          "name": "ParserState",
          "package": "open-pandoc",
          "source": "src/Text-Pandoc-Shared.html#ParserState",
          "type": "data"
        },
        "index": {
          "description": "Parsing options",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "ParserState",
          "package": "open-pandoc",
          "partial": "Parser State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#t:ParserState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Shared",
          "name": "QuoteContext",
          "package": "open-pandoc",
          "source": "src/Text-Pandoc-Shared.html#QuoteContext",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "QuoteContext",
          "package": "open-pandoc",
          "partial": "Quote Context",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#t:QuoteContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptions for writers\n\u003c/p\u003e",
          "module": "Text.Pandoc.Shared",
          "name": "WriterOptions",
          "package": "open-pandoc",
          "source": "src/Text-Pandoc-Shared.html#WriterOptions",
          "type": "data"
        },
        "index": {
          "description": "Options for writers",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "WriterOptions",
          "package": "open-pandoc",
          "partial": "Writer Options",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#t:WriterOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003e\u003e, but returns the operation on the left.\n (Suggested by Tillmann Rendel on Haskell-cafe list.)\n\u003c/p\u003e",
          "module": "Text.Pandoc.Shared",
          "name": "(\u003e\u003e~)",
          "package": "open-pandoc",
          "signature": "m a -\u003e m b -\u003e m a",
          "source": "src/Text-Pandoc-Shared.html#%3E%3E~",
          "type": "function"
        },
        "index": {
          "description": "Like but returns the operation on the left Suggested by Tillmann Rendel on Haskell-cafe list",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "(\u003e\u003e~) \u003e\u003e~",
          "normalized": "a b-\u003ea c-\u003ea b",
          "package": "open-pandoc",
          "signature": "m a-\u003em b-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:-62--62--126-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Shared",
          "name": "Blk",
          "package": "open-pandoc",
          "signature": "Blk Block",
          "source": "src/Text-Pandoc-Shared.html#Element",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "Blk",
          "package": "open-pandoc",
          "partial": "Blk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:Blk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLines of characters above and below\n\u003c/p\u003e",
          "module": "[\"Text.Pandoc.Shared\",\"Text.Pandoc\"]",
          "name": "DoubleHeader",
          "package": "open-pandoc",
          "signature": "DoubleHeader Char",
          "source": "src/Text-Pandoc-Shared.html#HeaderType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:DoubleHeader\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:DoubleHeader\"]"
        },
        "index": {
          "description": "Lines of characters above and below",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "DoubleHeader",
          "package": "open-pandoc",
          "partial": "Double Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:DoubleHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.Pandoc.Shared\",\"Text.Pandoc\"]",
          "name": "GladTeX",
          "package": "open-pandoc",
          "signature": "GladTeX",
          "source": "src/Text-Pandoc-Shared.html#HTMLMathMethod",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:GladTeX\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:GladTeX\"]"
        },
        "index": {
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "GladTeX",
          "package": "open-pandoc",
          "partial": "Glad Te",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:GladTeX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed when parsing inside double quotes\n\u003c/p\u003e",
          "module": "[\"Text.Pandoc.Shared\",\"Text.Pandoc\"]",
          "name": "InDoubleQuote",
          "package": "open-pandoc",
          "signature": "InDoubleQuote",
          "source": "src/Text-Pandoc-Shared.html#QuoteContext",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:InDoubleQuote\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:InDoubleQuote\"]"
        },
        "index": {
          "description": "Used when parsing inside double quotes",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "InDoubleQuote",
          "package": "open-pandoc",
          "partial": "In Double Quote",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:InDoubleQuote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed when parsing inside single quotes\n\u003c/p\u003e",
          "module": "[\"Text.Pandoc.Shared\",\"Text.Pandoc\"]",
          "name": "InSingleQuote",
          "package": "open-pandoc",
          "signature": "InSingleQuote",
          "source": "src/Text-Pandoc-Shared.html#QuoteContext",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:InSingleQuote\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:InSingleQuote\"]"
        },
        "index": {
          "description": "Used when parsing inside single quotes",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "InSingleQuote",
          "package": "open-pandoc",
          "partial": "In Single Quote",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:InSingleQuote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Shared",
          "name": "JavascriptObfuscation",
          "package": "open-pandoc",
          "signature": "JavascriptObfuscation",
          "source": "src/Text-Pandoc-Shared.html#ObfuscationMethod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "JavascriptObfuscation",
          "package": "open-pandoc",
          "partial": "Javascript Obfuscation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:JavascriptObfuscation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.Pandoc.Shared\",\"Text.Pandoc\"]",
          "name": "JsMath",
          "package": "open-pandoc",
          "signature": "JsMath (Maybe String)",
          "source": "src/Text-Pandoc-Shared.html#HTMLMathMethod",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:JsMath\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:JsMath\"]"
        },
        "index": {
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "JsMath",
          "package": "open-pandoc",
          "partial": "Js Math",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:JsMath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.Pandoc.Shared\",\"Text.Pandoc\"]",
          "name": "LaTeXMathML",
          "package": "open-pandoc",
          "signature": "LaTeXMathML (Maybe String)",
          "source": "src/Text-Pandoc-Shared.html#HTMLMathMethod",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:LaTeXMathML\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:LaTeXMathML\"]"
        },
        "index": {
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "LaTeXMathML",
          "package": "open-pandoc",
          "partial": "La Te XMath ML",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:LaTeXMathML"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed when running parser on list item contents\n\u003c/p\u003e",
          "module": "[\"Text.Pandoc.Shared\",\"Text.Pandoc\"]",
          "name": "ListItemState",
          "package": "open-pandoc",
          "signature": "ListItemState",
          "source": "src/Text-Pandoc-Shared.html#ParserContext",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:ListItemState\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:ListItemState\"]"
        },
        "index": {
          "description": "Used when running parser on list item contents",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "ListItemState",
          "package": "open-pandoc",
          "partial": "List Item State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:ListItemState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.Pandoc.Shared\",\"Text.Pandoc\"]",
          "name": "MathML",
          "package": "open-pandoc",
          "signature": "MathML (Maybe String)",
          "source": "src/Text-Pandoc-Shared.html#HTMLMathMethod",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:MathML\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:MathML\"]"
        },
        "index": {
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "MathML",
          "package": "open-pandoc",
          "partial": "Math ML",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:MathML"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.Pandoc.Shared\",\"Text.Pandoc\"]",
          "name": "MimeTeX",
          "package": "open-pandoc",
          "signature": "MimeTeX String",
          "source": "src/Text-Pandoc-Shared.html#HTMLMathMethod",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:MimeTeX\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:MimeTeX\"]"
        },
        "index": {
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "MimeTeX",
          "package": "open-pandoc",
          "partial": "Mime Te",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:MimeTeX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Shared",
          "name": "NoObfuscation",
          "package": "open-pandoc",
          "signature": "NoObfuscation",
          "source": "src/Text-Pandoc-Shared.html#ObfuscationMethod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "NoObfuscation",
          "package": "open-pandoc",
          "partial": "No Obfuscation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:NoObfuscation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed when not parsing inside quotes\n\u003c/p\u003e",
          "module": "[\"Text.Pandoc.Shared\",\"Text.Pandoc\"]",
          "name": "NoQuote",
          "package": "open-pandoc",
          "signature": "NoQuote",
          "source": "src/Text-Pandoc-Shared.html#QuoteContext",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:NoQuote\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:NoQuote\"]"
        },
        "index": {
          "description": "Used when not parsing inside quotes",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "NoQuote",
          "package": "open-pandoc",
          "partial": "No Quote",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:NoQuote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault state\n\u003c/p\u003e",
          "module": "[\"Text.Pandoc.Shared\",\"Text.Pandoc\"]",
          "name": "NullState",
          "package": "open-pandoc",
          "signature": "NullState",
          "source": "src/Text-Pandoc-Shared.html#ParserContext",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:NullState\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:NullState\"]"
        },
        "index": {
          "description": "Default state",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "NullState",
          "package": "open-pandoc",
          "partial": "Null State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:NullState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Shared",
          "name": "Pad",
          "package": "open-pandoc",
          "signature": "Pad Doc",
          "source": "src/Text-Pandoc-Shared.html#BlockWrapper",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "Pad",
          "package": "open-pandoc",
          "partial": "Pad",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:Pad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.Pandoc.Shared\",\"Text.Pandoc\"]",
          "name": "ParserState",
          "package": "open-pandoc",
          "signature": "ParserState",
          "source": "src/Text-Pandoc-Shared.html#ParserState",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:ParserState\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:ParserState\"]"
        },
        "index": {
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "ParserState",
          "package": "open-pandoc",
          "partial": "Parser State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:ParserState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.Pandoc.Shared\",\"Text.Pandoc\"]",
          "name": "PlainMath",
          "package": "open-pandoc",
          "signature": "PlainMath",
          "source": "src/Text-Pandoc-Shared.html#HTMLMathMethod",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:PlainMath\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:PlainMath\"]"
        },
        "index": {
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "PlainMath",
          "package": "open-pandoc",
          "partial": "Plain Math",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:PlainMath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Shared",
          "name": "ReferenceObfuscation",
          "package": "open-pandoc",
          "signature": "ReferenceObfuscation",
          "source": "src/Text-Pandoc-Shared.html#ObfuscationMethod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "ReferenceObfuscation",
          "package": "open-pandoc",
          "partial": "Reference Obfuscation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:ReferenceObfuscation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Shared",
          "name": "Reg",
          "package": "open-pandoc",
          "signature": "Reg Doc",
          "source": "src/Text-Pandoc-Shared.html#BlockWrapper",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "Reg",
          "package": "open-pandoc",
          "partial": "Reg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:Reg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Shared",
          "name": "Sec",
          "package": "open-pandoc",
          "signature": "Sec Int [Int] String [Inline] [Element]",
          "source": "src/Text-Pandoc-Shared.html#Element",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "Sec",
          "normalized": "Sec Int[Int]String[Inline][Element]",
          "package": "open-pandoc",
          "partial": "Sec",
          "signature": "Sec Int[Int]String[Inline][Element]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:Sec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSingle line of characters underneath\n\u003c/p\u003e",
          "module": "[\"Text.Pandoc.Shared\",\"Text.Pandoc\"]",
          "name": "SingleHeader",
          "package": "open-pandoc",
          "signature": "SingleHeader Char",
          "source": "src/Text-Pandoc-Shared.html#HeaderType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:SingleHeader\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:SingleHeader\"]"
        },
        "index": {
          "description": "Single line of characters underneath",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "SingleHeader",
          "package": "open-pandoc",
          "partial": "Single Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:SingleHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.Pandoc.Shared\",\"Text.Pandoc\"]",
          "name": "WriterOptions",
          "package": "open-pandoc",
          "signature": "WriterOptions",
          "source": "src/Text-Pandoc-Shared.html#WriterOptions",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:WriterOptions\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:WriterOptions\"]"
        },
        "index": {
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "WriterOptions",
          "package": "open-pandoc",
          "partial": "Writer Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:WriterOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse any line of text\n\u003c/p\u003e",
          "module": "Text.Pandoc.Shared",
          "name": "anyLine",
          "package": "open-pandoc",
          "signature": "GenParser Char st [Char]",
          "source": "src/Text-Pandoc-Shared.html#anyLine",
          "type": "function"
        },
        "index": {
          "description": "Parse any line of text",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "anyLine",
          "normalized": "GenParser Char a[Char]",
          "package": "open-pandoc",
          "partial": "Line",
          "signature": "GenParser Char st[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:anyLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses an ordered list marker and returns list attributes.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Shared",
          "name": "anyOrderedListMarker",
          "package": "open-pandoc",
          "signature": "GenParser Char st ListAttributes",
          "source": "src/Text-Pandoc-Shared.html#anyOrderedListMarker",
          "type": "function"
        },
        "index": {
          "description": "Parses an ordered list marker and returns list attributes",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "anyOrderedListMarker",
          "package": "open-pandoc",
          "partial": "Ordered List Marker",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:anyOrderedListMarker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns an association list of backslash escapes for the\n designated characters.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Shared",
          "name": "backslashEscapes",
          "package": "open-pandoc",
          "signature": "[Char]-\u003e [(Char, String)]",
          "type": "function"
        },
        "index": {
          "description": "Returns an association list of backslash escapes for the designated characters",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "backslashEscapes",
          "normalized": "[Char]-\u003e[(Char,String)]",
          "package": "open-pandoc",
          "partial": "Escapes",
          "signature": "[Char]-\u003e[(Char,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:backslashEscapes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkips zero or more spaces or tabs, then reads a newline.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Shared",
          "name": "blankline",
          "package": "open-pandoc",
          "signature": "GenParser Char st Char",
          "source": "src/Text-Pandoc-Shared.html#blankline",
          "type": "function"
        },
        "index": {
          "description": "Skips zero or more spaces or tabs then reads newline",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "blankline",
          "package": "open-pandoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:blankline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses one or more blank lines and returns a string of newlines.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Shared",
          "name": "blanklines",
          "package": "open-pandoc",
          "signature": "GenParser Char st [Char]",
          "source": "src/Text-Pandoc-Shared.html#blanklines",
          "type": "function"
        },
        "index": {
          "description": "Parses one or more blank lines and returns string of newlines",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "blanklines",
          "normalized": "GenParser Char a[Char]",
          "package": "open-pandoc",
          "signature": "GenParser Char st[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:blanklines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange CamelCase word to hyphenated lowercase (e.g., camel-case). \n\u003c/p\u003e",
          "module": "Text.Pandoc.Shared",
          "name": "camelCaseToHyphenated",
          "package": "open-pandoc",
          "signature": "String -\u003e String",
          "source": "src/Text-Pandoc-Shared.html#camelCaseToHyphenated",
          "type": "function"
        },
        "index": {
          "description": "Change CamelCase word to hyphenated lowercase e.g camel-case",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "camelCaseToHyphenated",
          "normalized": "String-\u003eString",
          "package": "open-pandoc",
          "partial": "Case To Hyphenated",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:camelCaseToHyphenated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a character reference and returns a Str element.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Shared",
          "name": "charRef",
          "package": "open-pandoc",
          "signature": "GenParser Char st Inline",
          "source": "src/Text-Pandoc-Shared.html#charRef",
          "type": "function"
        },
        "index": {
          "description": "Parses character reference and returns Str element",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "charRef",
          "package": "open-pandoc",
          "partial": "Ref",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:charRef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a string of characters between an open character\n and a close character, including text between balanced\n pairs of open and close, which must be different. For example,\n \u003ccode\u003echarsInBalanced '(' ')'\u003c/code\u003e will parse \u003ca\u003e(hello (there))\u003c/a\u003e\n and return \u003ca\u003ehello (there)\u003c/a\u003e.  Stop if a blank line is\n encountered.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Shared",
          "name": "charsInBalanced",
          "package": "open-pandoc",
          "signature": "Char -\u003e Char -\u003e GenParser Char st String",
          "source": "src/Text-Pandoc-Shared.html#charsInBalanced",
          "type": "function"
        },
        "index": {
          "description": "Parse string of characters between an open character and close character including text between balanced pairs of open and close which must be different For example charsInBalanced will parse hello there and return hello there Stop if blank line is encountered",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "charsInBalanced",
          "normalized": "Char-\u003eChar-\u003eGenParser Char a String",
          "package": "open-pandoc",
          "partial": "In Balanced",
          "signature": "Char-\u003eChar-\u003eGenParser Char st String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:charsInBalanced"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003echarsInBalanced\u003c/code\u003e, but allow blank lines in the content.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Shared",
          "name": "charsInBalanced'",
          "package": "open-pandoc",
          "signature": "Char -\u003e Char -\u003e GenParser Char st String",
          "source": "src/Text-Pandoc-Shared.html#charsInBalanced%27",
          "type": "function"
        },
        "index": {
          "description": "Like charsInBalanced but allow blank lines in the content",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "charsInBalanced'",
          "normalized": "Char-\u003eChar-\u003eGenParser Char a String",
          "package": "open-pandoc",
          "partial": "In Balanced'",
          "signature": "Char-\u003eChar-\u003eGenParser Char st String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:charsInBalanced-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange final list item from \u003ccode\u003ePara\u003c/code\u003e to \u003ccode\u003ePlain\u003c/code\u003e if the list contains\n no other \u003ccode\u003ePara\u003c/code\u003e blocks.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Shared",
          "name": "compactify",
          "package": "open-pandoc",
          "signature": "[[Block]]-\u003e [[Block]]",
          "type": "function"
        },
        "index": {
          "description": "Change final list item from Para to Plain if the list contains no other Para blocks",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "compactify",
          "normalized": "[[Block]]-\u003e[[Block]]",
          "package": "open-pandoc",
          "signature": "[[Block]]-\u003e[[Block]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:compactify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.Pandoc.Shared\",\"Text.Pandoc\"]",
          "name": "defaultParserState",
          "package": "open-pandoc",
          "signature": "ParserState",
          "source": "src/Text-Pandoc-Shared.html#defaultParserState",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:defaultParserState\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:defaultParserState\"]"
        },
        "index": {
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "defaultParserState",
          "package": "open-pandoc",
          "partial": "Parser State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:defaultParserState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault writer options.\n\u003c/p\u003e",
          "module": "[\"Text.Pandoc.Shared\",\"Text.Pandoc\"]",
          "name": "defaultWriterOptions",
          "package": "open-pandoc",
          "signature": "WriterOptions",
          "source": "src/Text-Pandoc-Shared.html#defaultWriterOptions",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:defaultWriterOptions\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:defaultWriterOptions\"]"
        },
        "index": {
          "description": "Default writer options",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "defaultWriterOptions",
          "package": "open-pandoc",
          "partial": "Writer Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:defaultWriterOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses an email address; returns original and corresponding\n escaped mailto: URI.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Shared",
          "name": "emailAddress",
          "package": "open-pandoc",
          "signature": "GenParser Char st (String, String)",
          "source": "src/Text-Pandoc-Shared.html#emailAddress",
          "type": "function"
        },
        "index": {
          "description": "Parses an email address returns original and corresponding escaped mailto URI",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "emailAddress",
          "normalized": "GenParser Char a(String,String)",
          "package": "open-pandoc",
          "partial": "Address",
          "signature": "GenParser Char st(String,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:emailAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses material enclosed between start and end parsers.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Shared",
          "name": "enclosed",
          "package": "open-pandoc",
          "signature": "GenParser Char st t-\u003e GenParser Char st end-\u003e GenParser Char st a-\u003e GenParser Char st [a]",
          "type": "function"
        },
        "index": {
          "description": "Parses material enclosed between start and end parsers",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "enclosed",
          "normalized": "GenParser Char a b-\u003eGenParser Char a c-\u003eGenParser Char a d-\u003eGenParser Char a[d]",
          "package": "open-pandoc",
          "signature": "GenParser Char st t-\u003eGenParser Char st end-\u003eGenParser Char st a-\u003eGenParser Char st[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:enclosed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEscape a string of characters, using an association list of\n characters and strings.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Shared",
          "name": "escapeStringUsing",
          "package": "open-pandoc",
          "signature": "[(Char, String)] -\u003e String -\u003e String",
          "source": "src/Text-Pandoc-Shared.html#escapeStringUsing",
          "type": "function"
        },
        "index": {
          "description": "Escape string of characters using an association list of characters and strings",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "escapeStringUsing",
          "normalized": "[(Char,String)]-\u003eString-\u003eString",
          "package": "open-pandoc",
          "partial": "String Using",
          "signature": "[(Char,String)]-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:escapeStringUsing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEscape unicode characters in a URI.  Characters that are\n already valid in a URI, including % and ?, are left alone.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Shared",
          "name": "escapeURI",
          "package": "open-pandoc",
          "signature": "String -\u003e String",
          "source": "src/Text-Pandoc-Shared.html#escapeURI",
          "type": "function"
        },
        "index": {
          "description": "Escape unicode characters in URI Characters that are already valid in URI including and are left alone",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "escapeURI",
          "normalized": "String-\u003eString",
          "package": "open-pandoc",
          "partial": "URI",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:escapeURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses backslash, then applies character parser.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Shared",
          "name": "escaped",
          "package": "open-pandoc",
          "signature": "GenParser Char st Char-\u003e GenParser Char st Inline",
          "type": "function"
        },
        "index": {
          "description": "Parses backslash then applies character parser",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "escaped",
          "normalized": "GenParser Char a Char-\u003eGenParser Char a Inline",
          "package": "open-pandoc",
          "signature": "GenParser Char st Char-\u003eGenParser Char st Inline",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:escaped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFail if reader is in strict markdown syntax mode.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Shared",
          "name": "failIfStrict",
          "package": "open-pandoc",
          "signature": "GenParser Char ParserState ()",
          "source": "src/Text-Pandoc-Shared.html#failIfStrict",
          "type": "function"
        },
        "index": {
          "description": "Fail if reader is in strict markdown syntax mode",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "failIfStrict",
          "normalized": "GenParser Char ParserState()",
          "package": "open-pandoc",
          "partial": "If Strict",
          "signature": "GenParser Char ParserState()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:failIfStrict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFail unless we're in literate haskell mode.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Shared",
          "name": "failUnlessLHS",
          "package": "open-pandoc",
          "signature": "GenParser tok ParserState ()",
          "source": "src/Text-Pandoc-Shared.html#failUnlessLHS",
          "type": "function"
        },
        "index": {
          "description": "Fail unless we re in literate haskell mode",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "failUnlessLHS",
          "normalized": "GenParser a ParserState()",
          "package": "open-pandoc",
          "partial": "Unless LHS",
          "signature": "GenParser tok ParserState()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:failUnlessLHS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of hang that works like the version in pretty-1.0.0.0\n\u003c/p\u003e",
          "module": "Text.Pandoc.Shared",
          "name": "hang'",
          "package": "open-pandoc",
          "signature": "Doc -\u003e Int -\u003e Doc -\u003e Doc",
          "source": "src/Text-Pandoc-Shared.html#hang%27",
          "type": "function"
        },
        "index": {
          "description": "version of hang that works like the version in pretty-1.0.0.0",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "hang'",
          "normalized": "Doc-\u003eInt-\u003eDoc-\u003eDoc",
          "package": "open-pandoc",
          "signature": "Doc-\u003eInt-\u003eDoc-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:hang-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert list of Pandoc blocks into (hierarchical) list of Elements\n\u003c/p\u003e",
          "module": "Text.Pandoc.Shared",
          "name": "hierarchicalize",
          "package": "open-pandoc",
          "signature": "[Block] -\u003e [Element]",
          "source": "src/Text-Pandoc-Shared.html#hierarchicalize",
          "type": "function"
        },
        "index": {
          "description": "Convert list of Pandoc blocks into hierarchical list of Elements",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "hierarchicalize",
          "normalized": "[Block]-\u003e[Element]",
          "package": "open-pandoc",
          "signature": "[Block]-\u003e[Element]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:hierarchicalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform an IO action in a directory, returning to starting directory.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Shared",
          "name": "inDirectory",
          "package": "open-pandoc",
          "signature": "FilePath -\u003e IO a -\u003e IO a",
          "source": "src/Text-Pandoc-Shared.html#inDirectory",
          "type": "function"
        },
        "index": {
          "description": "Perform an IO action in directory returning to starting directory",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "inDirectory",
          "normalized": "FilePath-\u003eIO a-\u003eIO a",
          "package": "open-pandoc",
          "partial": "Directory",
          "signature": "FilePath-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:inDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if block is a Header block.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Shared",
          "name": "isHeaderBlock",
          "package": "open-pandoc",
          "signature": "Block -\u003e Bool",
          "source": "src/Text-Pandoc-Shared.html#isHeaderBlock",
          "type": "function"
        },
        "index": {
          "description": "True if block is Header block",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "isHeaderBlock",
          "normalized": "Block-\u003eBool",
          "package": "open-pandoc",
          "partial": "Header Block",
          "signature": "Block-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:isHeaderBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse raw line block up to and including blank lines.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Shared",
          "name": "lineClump",
          "package": "open-pandoc",
          "signature": "GenParser Char st String",
          "source": "src/Text-Pandoc-Shared.html#lineClump",
          "type": "function"
        },
        "index": {
          "description": "Parse raw line block up to and including blank lines",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "lineClump",
          "package": "open-pandoc",
          "partial": "Clump",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:lineClump"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLook up key in key table and return target object.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Shared",
          "name": "lookupKeySrc",
          "package": "open-pandoc",
          "signature": "KeyTable-\u003e [Inline]-\u003e Maybe Target",
          "type": "function"
        },
        "index": {
          "description": "Look up key in key table and return target object",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "lookupKeySrc",
          "normalized": "KeyTable-\u003e[Inline]-\u003eMaybe Target",
          "package": "open-pandoc",
          "partial": "Key Src",
          "signature": "KeyTable-\u003e[Inline]-\u003eMaybe Target",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:lookupKeySrc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003emanyTill\u003c/code\u003e, but reads at least one item.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Shared",
          "name": "many1Till",
          "package": "open-pandoc",
          "signature": "GenParser tok st a -\u003e GenParser tok st end -\u003e GenParser tok st [a]",
          "source": "src/Text-Pandoc-Shared.html#many1Till",
          "type": "function"
        },
        "index": {
          "description": "Like manyTill but reads at least one item",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "many1Till",
          "normalized": "GenParser a b c-\u003eGenParser a b d-\u003eGenParser a b[c]",
          "package": "open-pandoc",
          "partial": "Till",
          "signature": "GenParser tok st a-\u003eGenParser tok st end-\u003eGenParser tok st[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:many1Till"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNormalize a list of inline elements: remove leading and trailing\n \u003ccode\u003eSpace\u003c/code\u003e elements, collapse double \u003ccode\u003eSpace\u003c/code\u003es into singles, and\n remove empty Str elements.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Shared",
          "name": "normalizeSpaces",
          "package": "open-pandoc",
          "signature": "[Inline] -\u003e [Inline]",
          "source": "src/Text-Pandoc-Shared.html#normalizeSpaces",
          "type": "function"
        },
        "index": {
          "description": "Normalize list of inline elements remove leading and trailing Space elements collapse double Space into singles and remove empty Str elements",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "normalizeSpaces",
          "normalized": "[Inline]-\u003e[Inline]",
          "package": "open-pandoc",
          "partial": "Spaces",
          "signature": "[Inline]-\u003e[Inline]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:normalizeSpaces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA more general form of \u003ccode\u003enotFollowedBy\u003c/code\u003e.  This one allows any \n type of parser to be specified, and succeeds only if that parser fails.\n It does not consume any input.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Shared",
          "name": "notFollowedBy'",
          "package": "open-pandoc",
          "signature": "GenParser a st b -\u003e GenParser a st ()",
          "source": "src/Text-Pandoc-Shared.html#notFollowedBy%27",
          "type": "function"
        },
        "index": {
          "description": "more general form of notFollowedBy This one allows any type of parser to be specified and succeeds only if that parser fails It does not consume any input",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "notFollowedBy'",
          "normalized": "GenParser a b c-\u003eGenParser a b()",
          "package": "open-pandoc",
          "partial": "Followed By'",
          "signature": "GenParser a st b-\u003eGenParser a st()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:notFollowedBy-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a character and returns \u003ccode\u003e\u003ca\u003eNull\u003c/a\u003e\u003c/code\u003e (so that the parser can move on\n if it gets stuck).\n\u003c/p\u003e",
          "module": "Text.Pandoc.Shared",
          "name": "nullBlock",
          "package": "open-pandoc",
          "signature": "GenParser Char st Block",
          "source": "src/Text-Pandoc-Shared.html#nullBlock",
          "type": "function"
        },
        "index": {
          "description": "Parses character and returns Null so that the parser can move on if it gets stuck",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "nullBlock",
          "package": "open-pandoc",
          "partial": "Block",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:nullBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses one of a list of strings (tried in order).  \n\u003c/p\u003e",
          "module": "Text.Pandoc.Shared",
          "name": "oneOfStrings",
          "package": "open-pandoc",
          "signature": "[String] -\u003e GenParser Char st String",
          "source": "src/Text-Pandoc-Shared.html#oneOfStrings",
          "type": "function"
        },
        "index": {
          "description": "Parses one of list of strings tried in order",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "oneOfStrings",
          "normalized": "[String]-\u003eGenParser Char a String",
          "package": "open-pandoc",
          "partial": "Of Strings",
          "signature": "[String]-\u003eGenParser Char st String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:oneOfStrings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses an ordered list marker with a given style and delimiter,\n returns number.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Shared",
          "name": "orderedListMarker",
          "package": "open-pandoc",
          "signature": "ListNumberStyle -\u003e ListNumberDelim -\u003e GenParser Char st Int",
          "source": "src/Text-Pandoc-Shared.html#orderedListMarker",
          "type": "function"
        },
        "index": {
          "description": "Parses an ordered list marker with given style and delimiter returns number",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "orderedListMarker",
          "normalized": "ListNumberStyle-\u003eListNumberDelim-\u003eGenParser Char a Int",
          "package": "open-pandoc",
          "partial": "List Marker",
          "signature": "ListNumberStyle-\u003eListNumberDelim-\u003eGenParser Char st Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:orderedListMarker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate infinite lazy list of markers for an ordered list,\n depending on list attributes.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Shared",
          "name": "orderedListMarkers",
          "package": "open-pandoc",
          "signature": "(Int, ListNumberStyle, ListNumberDelim) -\u003e [String]",
          "source": "src/Text-Pandoc-Shared.html#orderedListMarkers",
          "type": "function"
        },
        "index": {
          "description": "Generate infinite lazy list of markers for an ordered list depending on list attributes",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "orderedListMarkers",
          "normalized": "(Int,ListNumberStyle,ListNumberDelim)-\u003e[String]",
          "package": "open-pandoc",
          "partial": "List Markers",
          "signature": "(Int,ListNumberStyle,ListNumberDelim)-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:orderedListMarkers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse contents of \u003ccode\u003estr\u003c/code\u003e using \u003ccode\u003eparser\u003c/code\u003e and return result.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Shared",
          "name": "parseFromString",
          "package": "open-pandoc",
          "signature": "GenParser tok st a -\u003e [tok] -\u003e GenParser tok st a",
          "source": "src/Text-Pandoc-Shared.html#parseFromString",
          "type": "function"
        },
        "index": {
          "description": "Parse contents of str using parser and return result",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "parseFromString",
          "normalized": "GenParser a b c-\u003e[a]-\u003eGenParser a b c",
          "package": "open-pandoc",
          "partial": "From String",
          "signature": "GenParser tok st a-\u003e[tok]-\u003eGenParser tok st a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:parseFromString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrettyprint Pandoc document.\n\u003c/p\u003e",
          "module": "[\"Text.Pandoc.Shared\",\"Text.Pandoc\"]",
          "name": "prettyPandoc",
          "package": "open-pandoc",
          "signature": "Pandoc -\u003e String",
          "source": "src/Text-Pandoc-Shared.html#prettyPandoc",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:prettyPandoc\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:prettyPandoc\"]"
        },
        "index": {
          "description": "Prettyprint Pandoc document",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "prettyPandoc",
          "normalized": "Pandoc-\u003eString",
          "package": "open-pandoc",
          "partial": "Pandoc",
          "signature": "Pandoc-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:prettyPandoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead file from specified user data directory or, if not found there, from\n Cabal data directory.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Shared",
          "name": "readDataFile",
          "package": "open-pandoc",
          "signature": "Maybe FilePath -\u003e FilePath -\u003e IO String",
          "source": "src/Text-Pandoc-Shared.html#readDataFile",
          "type": "function"
        },
        "index": {
          "description": "Read file from specified user data directory or if not found there from Cabal data directory",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "readDataFile",
          "normalized": "Maybe FilePath-\u003eFilePath-\u003eIO String",
          "package": "open-pandoc",
          "partial": "Data File",
          "signature": "Maybe FilePath-\u003eFilePath-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:readDataFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a string with a given parser and state.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Shared",
          "name": "readWith",
          "package": "open-pandoc",
          "signature": "GenParser Char ParserState a-\u003e ParserState-\u003e String-\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Parse string with given parser and state",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "readWith",
          "normalized": "GenParser Char ParserState a-\u003eParserState-\u003eString-\u003ea",
          "package": "open-pandoc",
          "partial": "With",
          "signature": "GenParser Char ParserState a-\u003eParserState-\u003eString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:readWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003eTrue\u003c/code\u003e if keys match (case insensitive).\n\u003c/p\u003e",
          "module": "Text.Pandoc.Shared",
          "name": "refsMatch",
          "package": "open-pandoc",
          "signature": "[Inline] -\u003e [Inline] -\u003e Bool",
          "source": "src/Text-Pandoc-Shared.html#refsMatch",
          "type": "function"
        },
        "index": {
          "description": "Returns True if keys match case insensitive",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "refsMatch",
          "normalized": "[Inline]-\u003e[Inline]-\u003eBool",
          "package": "open-pandoc",
          "partial": "Match",
          "signature": "[Inline]-\u003e[Inline]-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:refsMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove leading space (including newlines) from string.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Shared",
          "name": "removeLeadingSpace",
          "package": "open-pandoc",
          "signature": "String -\u003e String",
          "source": "src/Text-Pandoc-Shared.html#removeLeadingSpace",
          "type": "function"
        },
        "index": {
          "description": "Remove leading space including newlines from string",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "removeLeadingSpace",
          "normalized": "String-\u003eString",
          "package": "open-pandoc",
          "partial": "Leading Space",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:removeLeadingSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove leading and trailing space (including newlines) from string.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Shared",
          "name": "removeLeadingTrailingSpace",
          "package": "open-pandoc",
          "signature": "String -\u003e String",
          "source": "src/Text-Pandoc-Shared.html#removeLeadingTrailingSpace",
          "type": "function"
        },
        "index": {
          "description": "Remove leading and trailing space including newlines from string",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "removeLeadingTrailingSpace",
          "normalized": "String-\u003eString",
          "package": "open-pandoc",
          "partial": "Leading Trailing Space",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:removeLeadingTrailingSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove trailing space (including newlines) from string.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Shared",
          "name": "removeTrailingSpace",
          "package": "open-pandoc",
          "signature": "String -\u003e String",
          "source": "src/Text-Pandoc-Shared.html#removeTrailingSpace",
          "type": "function"
        },
        "index": {
          "description": "Remove trailing space including newlines from string",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "removeTrailingSpace",
          "normalized": "String-\u003eString",
          "package": "open-pandoc",
          "partial": "Trailing Space",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:removeTrailingSpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a roman numeral (uppercase or lowercase), returns number.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Shared",
          "name": "romanNumeral",
          "package": "open-pandoc",
          "signature": "Bool-\u003e GenParser Char st Int",
          "type": "function"
        },
        "index": {
          "description": "Parses roman numeral uppercase or lowercase returns number",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "romanNumeral",
          "normalized": "Bool-\u003eGenParser Char a Int",
          "package": "open-pandoc",
          "partial": "Numeral",
          "signature": "Bool-\u003eGenParser Char st Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:romanNumeral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkips zero or more spaces or tabs.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Shared",
          "name": "skipSpaces",
          "package": "open-pandoc",
          "signature": "GenParser Char st ()",
          "source": "src/Text-Pandoc-Shared.html#skipSpaces",
          "type": "function"
        },
        "index": {
          "description": "Skips zero or more spaces or tabs",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "skipSpaces",
          "normalized": "GenParser Char a()",
          "package": "open-pandoc",
          "partial": "Spaces",
          "signature": "GenParser Char st()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:skipSpaces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a space or tab.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Shared",
          "name": "spaceChar",
          "package": "open-pandoc",
          "signature": "CharParser st Char",
          "source": "src/Text-Pandoc-Shared.html#spaceChar",
          "type": "function"
        },
        "index": {
          "description": "Parses space or tab",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "spaceChar",
          "package": "open-pandoc",
          "partial": "Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:spaceChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit list by groups of one or more sep.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Shared",
          "name": "splitBy",
          "package": "open-pandoc",
          "signature": "a -\u003e [a] -\u003e [[a]]",
          "source": "src/Text-Pandoc-Shared.html#splitBy",
          "type": "function"
        },
        "index": {
          "description": "Split list by groups of one or more sep",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "splitBy",
          "normalized": "a-\u003e[a]-\u003e[[a]]",
          "package": "open-pandoc",
          "partial": "By",
          "signature": "a-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:splitBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit list into chunks divided at specified indices.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Shared",
          "name": "splitByIndices",
          "package": "open-pandoc",
          "signature": "[Int] -\u003e [a] -\u003e [[a]]",
          "source": "src/Text-Pandoc-Shared.html#splitByIndices",
          "type": "function"
        },
        "index": {
          "description": "Split list into chunks divided at specified indices",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "splitByIndices",
          "normalized": "[Int]-\u003e[a]-\u003e[[a]]",
          "package": "open-pandoc",
          "partial": "By Indices",
          "signature": "[Int]-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:splitByIndices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAuthors of document\n\u003c/p\u003e",
          "module": "[\"Text.Pandoc.Shared\",\"Text.Pandoc\"]",
          "name": "stateAuthors",
          "package": "open-pandoc",
          "signature": "[[Inline]]",
          "source": "src/Text-Pandoc-Shared.html#ParserState",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:stateAuthors\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:stateAuthors\"]"
        },
        "index": {
          "description": "Authors of document",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "stateAuthors",
          "normalized": "[[Inline]]",
          "package": "open-pandoc",
          "partial": "Authors",
          "signature": "[[Inline]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:stateAuthors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of columns in terminal\n\u003c/p\u003e",
          "module": "[\"Text.Pandoc.Shared\",\"Text.Pandoc\"]",
          "name": "stateColumns",
          "package": "open-pandoc",
          "signature": "Int",
          "source": "src/Text-Pandoc-Shared.html#ParserState",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:stateColumns\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:stateColumns\"]"
        },
        "index": {
          "description": "Number of columns in terminal",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "stateColumns",
          "package": "open-pandoc",
          "partial": "Columns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:stateColumns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDate of document\n\u003c/p\u003e",
          "module": "[\"Text.Pandoc.Shared\",\"Text.Pandoc\"]",
          "name": "stateDate",
          "package": "open-pandoc",
          "signature": "[Inline]",
          "source": "src/Text-Pandoc-Shared.html#ParserState",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:stateDate\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:stateDate\"]"
        },
        "index": {
          "description": "Date of document",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "stateDate",
          "normalized": "[Inline]",
          "package": "open-pandoc",
          "partial": "Date",
          "signature": "[Inline]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:stateDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOrdered list of header types used\n\u003c/p\u003e",
          "module": "[\"Text.Pandoc.Shared\",\"Text.Pandoc\"]",
          "name": "stateHeaderTable",
          "package": "open-pandoc",
          "signature": "[HeaderType]",
          "source": "src/Text-Pandoc-Shared.html#ParserState",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:stateHeaderTable\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:stateHeaderTable\"]"
        },
        "index": {
          "description": "Ordered list of header types used",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "stateHeaderTable",
          "normalized": "[HeaderType]",
          "package": "open-pandoc",
          "partial": "Header Table",
          "signature": "[HeaderType]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:stateHeaderTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClasses to use for indented code blocks\n\u003c/p\u003e",
          "module": "[\"Text.Pandoc.Shared\",\"Text.Pandoc\"]",
          "name": "stateIndentedCodeClasses",
          "package": "open-pandoc",
          "signature": "[String]",
          "source": "src/Text-Pandoc-Shared.html#ParserState",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:stateIndentedCodeClasses\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:stateIndentedCodeClasses\"]"
        },
        "index": {
          "description": "Classes to use for indented code blocks",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "stateIndentedCodeClasses",
          "normalized": "[String]",
          "package": "open-pandoc",
          "partial": "Indented Code Classes",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:stateIndentedCodeClasses"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of reference keys\n\u003c/p\u003e",
          "module": "[\"Text.Pandoc.Shared\",\"Text.Pandoc\"]",
          "name": "stateKeys",
          "package": "open-pandoc",
          "signature": "KeyTable",
          "source": "src/Text-Pandoc-Shared.html#ParserState",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:stateKeys\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:stateKeys\"]"
        },
        "index": {
          "description": "List of reference keys",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "stateKeys",
          "package": "open-pandoc",
          "partial": "Keys",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:stateKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTreat input as literate haskell\n\u003c/p\u003e",
          "module": "[\"Text.Pandoc.Shared\",\"Text.Pandoc\"]",
          "name": "stateLiterateHaskell",
          "package": "open-pandoc",
          "signature": "Bool",
          "source": "src/Text-Pandoc-Shared.html#ParserState",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:stateLiterateHaskell\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:stateLiterateHaskell\"]"
        },
        "index": {
          "description": "Treat input as literate haskell",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "stateLiterateHaskell",
          "package": "open-pandoc",
          "partial": "Literate Haskell",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:stateLiterateHaskell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of notes\n\u003c/p\u003e",
          "module": "[\"Text.Pandoc.Shared\",\"Text.Pandoc\"]",
          "name": "stateNotes",
          "package": "open-pandoc",
          "signature": "NoteTable",
          "source": "src/Text-Pandoc-Shared.html#ParserState",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:stateNotes\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:stateNotes\"]"
        },
        "index": {
          "description": "List of notes",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "stateNotes",
          "package": "open-pandoc",
          "partial": "Notes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:stateNotes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse raw HTML and LaTeX?\n\u003c/p\u003e",
          "module": "[\"Text.Pandoc.Shared\",\"Text.Pandoc\"]",
          "name": "stateParseRaw",
          "package": "open-pandoc",
          "signature": "Bool",
          "source": "src/Text-Pandoc-Shared.html#ParserState",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:stateParseRaw\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:stateParseRaw\"]"
        },
        "index": {
          "description": "Parse raw HTML and LaTeX",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "stateParseRaw",
          "package": "open-pandoc",
          "partial": "Parse Raw",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:stateParseRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInside list?\n\u003c/p\u003e",
          "module": "[\"Text.Pandoc.Shared\",\"Text.Pandoc\"]",
          "name": "stateParserContext",
          "package": "open-pandoc",
          "signature": "ParserContext",
          "source": "src/Text-Pandoc-Shared.html#ParserState",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:stateParserContext\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:stateParserContext\"]"
        },
        "index": {
          "description": "Inside list",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "stateParserContext",
          "package": "open-pandoc",
          "partial": "Parser Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:stateParserContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInside quoted environment?\n\u003c/p\u003e",
          "module": "[\"Text.Pandoc.Shared\",\"Text.Pandoc\"]",
          "name": "stateQuoteContext",
          "package": "open-pandoc",
          "signature": "QuoteContext",
          "source": "src/Text-Pandoc-Shared.html#ParserState",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:stateQuoteContext\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:stateQuoteContext\"]"
        },
        "index": {
          "description": "Inside quoted environment",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "stateQuoteContext",
          "package": "open-pandoc",
          "partial": "Quote Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:stateQuoteContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSanitize HTML?\n\u003c/p\u003e",
          "module": "[\"Text.Pandoc.Shared\",\"Text.Pandoc\"]",
          "name": "stateSanitizeHTML",
          "package": "open-pandoc",
          "signature": "Bool",
          "source": "src/Text-Pandoc-Shared.html#ParserState",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:stateSanitizeHTML\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:stateSanitizeHTML\"]"
        },
        "index": {
          "description": "Sanitize HTML",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "stateSanitizeHTML",
          "package": "open-pandoc",
          "partial": "Sanitize HTML",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:stateSanitizeHTML"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse smart typography?\n\u003c/p\u003e",
          "module": "[\"Text.Pandoc.Shared\",\"Text.Pandoc\"]",
          "name": "stateSmart",
          "package": "open-pandoc",
          "signature": "Bool",
          "source": "src/Text-Pandoc-Shared.html#ParserState",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:stateSmart\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:stateSmart\"]"
        },
        "index": {
          "description": "Use smart typography",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "stateSmart",
          "package": "open-pandoc",
          "partial": "Smart",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:stateSmart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse bibliographic info?\n\u003c/p\u003e",
          "module": "[\"Text.Pandoc.Shared\",\"Text.Pandoc\"]",
          "name": "stateStandalone",
          "package": "open-pandoc",
          "signature": "Bool",
          "source": "src/Text-Pandoc-Shared.html#ParserState",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:stateStandalone\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:stateStandalone\"]"
        },
        "index": {
          "description": "Parse bibliographic info",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "stateStandalone",
          "package": "open-pandoc",
          "partial": "Standalone",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:stateStandalone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse strict markdown syntax?\n\u003c/p\u003e",
          "module": "[\"Text.Pandoc.Shared\",\"Text.Pandoc\"]",
          "name": "stateStrict",
          "package": "open-pandoc",
          "signature": "Bool",
          "source": "src/Text-Pandoc-Shared.html#ParserState",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:stateStrict\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:stateStrict\"]"
        },
        "index": {
          "description": "Use strict markdown syntax",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "stateStrict",
          "package": "open-pandoc",
          "partial": "Strict",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:stateStrict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTab stop\n\u003c/p\u003e",
          "module": "[\"Text.Pandoc.Shared\",\"Text.Pandoc\"]",
          "name": "stateTabStop",
          "package": "open-pandoc",
          "signature": "Int",
          "source": "src/Text-Pandoc-Shared.html#ParserState",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:stateTabStop\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:stateTabStop\"]"
        },
        "index": {
          "description": "Tab stop",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "stateTabStop",
          "package": "open-pandoc",
          "partial": "Tab Stop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:stateTabStop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTitle of document\n\u003c/p\u003e",
          "module": "[\"Text.Pandoc.Shared\",\"Text.Pandoc\"]",
          "name": "stateTitle",
          "package": "open-pandoc",
          "signature": "[Inline]",
          "source": "src/Text-Pandoc-Shared.html#ParserState",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:stateTitle\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:stateTitle\"]"
        },
        "index": {
          "description": "Title of document",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "stateTitle",
          "normalized": "[Inline]",
          "package": "open-pandoc",
          "partial": "Title",
          "signature": "[Inline]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:stateTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse string, case insensitive.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Shared",
          "name": "stringAnyCase",
          "package": "open-pandoc",
          "signature": "[Char] -\u003e CharParser st String",
          "source": "src/Text-Pandoc-Shared.html#stringAnyCase",
          "type": "function"
        },
        "index": {
          "description": "Parse string case insensitive",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "stringAnyCase",
          "normalized": "[Char]-\u003eCharParser a String",
          "package": "open-pandoc",
          "partial": "Any Case",
          "signature": "[Char]-\u003eCharParser st String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:stringAnyCase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrip leading and trailing characters from string\n\u003c/p\u003e",
          "module": "Text.Pandoc.Shared",
          "name": "stripFirstAndLast",
          "package": "open-pandoc",
          "signature": "String -\u003e String",
          "source": "src/Text-Pandoc-Shared.html#stripFirstAndLast",
          "type": "function"
        },
        "index": {
          "description": "Strip leading and trailing characters from string",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "stripFirstAndLast",
          "normalized": "String-\u003eString",
          "package": "open-pandoc",
          "partial": "First And Last",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:stripFirstAndLast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrip trailing newlines from string.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Shared",
          "name": "stripTrailingNewlines",
          "package": "open-pandoc",
          "signature": "String -\u003e String",
          "source": "src/Text-Pandoc-Shared.html#stripTrailingNewlines",
          "type": "function"
        },
        "index": {
          "description": "Strip trailing newlines from string",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "stripTrailingNewlines",
          "normalized": "String-\u003eString",
          "package": "open-pandoc",
          "partial": "Trailing Newlines",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:stripTrailingNewlines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace each occurrence of one sublist in a list with another.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Shared",
          "name": "substitute",
          "package": "open-pandoc",
          "signature": "[a] -\u003e [a] -\u003e [a] -\u003e [a]",
          "source": "src/Text-Pandoc-Shared.html#substitute",
          "type": "function"
        },
        "index": {
          "description": "Replace each occurrence of one sublist in list with another",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "substitute",
          "normalized": "[a]-\u003e[a]-\u003e[a]-\u003e[a]",
          "package": "open-pandoc",
          "signature": "[a]-\u003e[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:substitute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert tabs to spaces and filter out DOS line endings.\n Tabs will be preserved if tab stop is set to 0.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Shared",
          "name": "tabFilter",
          "package": "open-pandoc",
          "signature": "Int-\u003e String-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Convert tabs to spaces and filter out DOS line endings Tabs will be preserved if tab stop is set to",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "tabFilter",
          "normalized": "Int-\u003eString-\u003eString",
          "package": "open-pandoc",
          "partial": "Filter",
          "signature": "Int-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:tabFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a string with \u003ccode\u003eparser\u003c/code\u003e (for testing).\n\u003c/p\u003e",
          "module": "Text.Pandoc.Shared",
          "name": "testStringWith",
          "package": "open-pandoc",
          "signature": "GenParser Char ParserState a -\u003e String -\u003e IO ()",
          "source": "src/Text-Pandoc-Shared.html#testStringWith",
          "type": "function"
        },
        "index": {
          "description": "Parse string with parser for testing",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "testStringWith",
          "normalized": "GenParser Char ParserState a-\u003eString-\u003eIO()",
          "package": "open-pandoc",
          "partial": "String With",
          "signature": "GenParser Char ParserState a-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:testStringWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert number \u003c 4000 to uppercase roman numeral.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Shared",
          "name": "toRomanNumeral",
          "package": "open-pandoc",
          "signature": "Int -\u003e String",
          "source": "src/Text-Pandoc-Shared.html#toRomanNumeral",
          "type": "function"
        },
        "index": {
          "description": "Convert number to uppercase roman numeral",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "toRomanNumeral",
          "normalized": "Int-\u003eString",
          "package": "open-pandoc",
          "partial": "Roman Numeral",
          "signature": "Int-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:toRomanNumeral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnescape unicode and some special characters in a URI, but\n without introducing spaces.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Shared",
          "name": "unescapeURI",
          "package": "open-pandoc",
          "signature": "String -\u003e String",
          "source": "src/Text-Pandoc-Shared.html#unescapeURI",
          "type": "function"
        },
        "index": {
          "description": "Unescape unicode and some special characters in URI but without introducing spaces",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "unescapeURI",
          "normalized": "String-\u003eString",
          "package": "open-pandoc",
          "partial": "URI",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:unescapeURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a unique identifier from a list of inlines.\n Second argument is a list of already used identifiers.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Shared",
          "name": "uniqueIdent",
          "package": "open-pandoc",
          "signature": "[Inline] -\u003e [String] -\u003e String",
          "source": "src/Text-Pandoc-Shared.html#uniqueIdent",
          "type": "function"
        },
        "index": {
          "description": "Generate unique identifier from list of inlines Second argument is list of already used identifiers",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "uniqueIdent",
          "normalized": "[Inline]-\u003e[String]-\u003eString",
          "package": "open-pandoc",
          "partial": "Ident",
          "signature": "[Inline]-\u003e[String]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:uniqueIdent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a URI. Returns pair of original and URI-escaped version.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Shared",
          "name": "uri",
          "package": "open-pandoc",
          "signature": "GenParser Char st (String, String)",
          "source": "src/Text-Pandoc-Shared.html#uri",
          "type": "function"
        },
        "index": {
          "description": "Parses URI Returns pair of original and URI-escaped version",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "uri",
          "normalized": "GenParser Char a(String,String)",
          "package": "open-pandoc",
          "signature": "GenParser Char st(String,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:uri"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies a parser, returns tuple of its results and its horizontal\n displacement (the difference between the source column at the end\n and the source column at the beginning). Vertical displacement\n (source row) is ignored.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Shared",
          "name": "withHorizDisplacement",
          "package": "open-pandoc",
          "signature": "GenParser Char st a-\u003e GenParser Char st (a, Int)",
          "type": "function"
        },
        "index": {
          "description": "Applies parser returns tuple of its results and its horizontal displacement the difference between the source column at the end and the source column at the beginning Vertical displacement source row is ignored",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "withHorizDisplacement",
          "normalized": "GenParser Char a b-\u003eGenParser Char a(b,Int)",
          "package": "open-pandoc",
          "partial": "Horiz Displacement",
          "signature": "GenParser Char st a-\u003eGenParser Char st(a,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:withHorizDisplacement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap inlines if the text wrap option is selected.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Shared",
          "name": "wrapIfNeeded",
          "package": "open-pandoc",
          "signature": "WriterOptions -\u003e ([Inline] -\u003e m Doc) -\u003e [Inline] -\u003e m Doc",
          "source": "src/Text-Pandoc-Shared.html#wrapIfNeeded",
          "type": "function"
        },
        "index": {
          "description": "Wrap inlines if the text wrap option is selected",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "wrapIfNeeded",
          "normalized": "WriterOptions-\u003e([Inline]-\u003ea Doc)-\u003e[Inline]-\u003ea Doc",
          "package": "open-pandoc",
          "partial": "If Needed",
          "signature": "WriterOptions-\u003e([Inline]-\u003em Doc)-\u003e[Inline]-\u003em Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:wrapIfNeeded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap inlines if the text wrap option is selected, specialized \n for LaTeX and ConTeXt.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Shared",
          "name": "wrapTeXIfNeeded",
          "package": "open-pandoc",
          "signature": "WriterOptions -\u003e Bool -\u003e ([Inline] -\u003e m Doc) -\u003e [Inline] -\u003e m Doc",
          "source": "src/Text-Pandoc-Shared.html#wrapTeXIfNeeded",
          "type": "function"
        },
        "index": {
          "description": "Wrap inlines if the text wrap option is selected specialized for LaTeX and ConTeXt",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "wrapTeXIfNeeded",
          "normalized": "WriterOptions-\u003eBool-\u003e([Inline]-\u003ea Doc)-\u003e[Inline]-\u003ea Doc",
          "package": "open-pandoc",
          "partial": "Te XIf Needed",
          "signature": "WriterOptions-\u003eBool-\u003e([Inline]-\u003em Doc)-\u003e[Inline]-\u003em Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:wrapTeXIfNeeded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap inlines to line length.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Shared",
          "name": "wrapped",
          "package": "open-pandoc",
          "signature": "([Inline] -\u003e m Doc) -\u003e [Inline] -\u003e m Doc",
          "source": "src/Text-Pandoc-Shared.html#wrapped",
          "type": "function"
        },
        "index": {
          "description": "Wrap inlines to line length",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "wrapped",
          "normalized": "([Inline]-\u003ea Doc)-\u003e[Inline]-\u003ea Doc",
          "package": "open-pandoc",
          "signature": "([Inline]-\u003em Doc)-\u003e[Inline]-\u003em Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:wrapped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a list of wrapped blocks to a Doc, with appropriate spaces around blocks.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Shared",
          "name": "wrappedBlocksToDoc",
          "package": "open-pandoc",
          "signature": "[BlockWrapper] -\u003e Doc",
          "source": "src/Text-Pandoc-Shared.html#wrappedBlocksToDoc",
          "type": "function"
        },
        "index": {
          "description": "Converts list of wrapped blocks to Doc with appropriate spaces around blocks",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "wrappedBlocksToDoc",
          "normalized": "[BlockWrapper]-\u003eDoc",
          "package": "open-pandoc",
          "partial": "Blocks To Doc",
          "signature": "[BlockWrapper]-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:wrappedBlocksToDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap inlines to line length, treating footnotes in a way that\n makes sense in LaTeX and ConTeXt.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Shared",
          "name": "wrappedTeX",
          "package": "open-pandoc",
          "signature": "Bool -\u003e ([Inline] -\u003e m Doc) -\u003e [Inline] -\u003e m Doc",
          "source": "src/Text-Pandoc-Shared.html#wrappedTeX",
          "type": "function"
        },
        "index": {
          "description": "Wrap inlines to line length treating footnotes in way that makes sense in LaTeX and ConTeXt",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "wrappedTeX",
          "normalized": "Bool-\u003e([Inline]-\u003ea Doc)-\u003e[Inline]-\u003ea Doc",
          "package": "open-pandoc",
          "partial": "Te",
          "signature": "Bool-\u003e([Inline]-\u003em Doc)-\u003e[Inline]-\u003em Doc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:wrappedTeX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow to obfuscate emails\n\u003c/p\u003e",
          "module": "[\"Text.Pandoc.Shared\",\"Text.Pandoc\"]",
          "name": "writerEmailObfuscation",
          "package": "open-pandoc",
          "signature": "ObfuscationMethod",
          "source": "src/Text-Pandoc-Shared.html#WriterOptions",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:writerEmailObfuscation\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:writerEmailObfuscation\"]"
        },
        "index": {
          "description": "How to obfuscate emails",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "writerEmailObfuscation",
          "package": "open-pandoc",
          "partial": "Email Obfuscation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:writerEmailObfuscation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow to print math in HTML\n\u003c/p\u003e",
          "module": "[\"Text.Pandoc.Shared\",\"Text.Pandoc\"]",
          "name": "writerHTMLMathMethod",
          "package": "open-pandoc",
          "signature": "HTMLMathMethod",
          "source": "src/Text-Pandoc-Shared.html#WriterOptions",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:writerHTMLMathMethod\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:writerHTMLMathMethod\"]"
        },
        "index": {
          "description": "How to print math in HTML",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "writerHTMLMathMethod",
          "package": "open-pandoc",
          "partial": "HTMLMath Method",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:writerHTMLMathMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrefix for section & note ids in HTML\n\u003c/p\u003e",
          "module": "[\"Text.Pandoc.Shared\",\"Text.Pandoc\"]",
          "name": "writerIdentifierPrefix",
          "package": "open-pandoc",
          "signature": "String",
          "source": "src/Text-Pandoc-Shared.html#WriterOptions",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:writerIdentifierPrefix\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:writerIdentifierPrefix\"]"
        },
        "index": {
          "description": "Prefix for section note ids in HTML",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "writerIdentifierPrefix",
          "package": "open-pandoc",
          "partial": "Identifier Prefix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:writerIdentifierPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIgnore footnotes (used in making toc)\n\u003c/p\u003e",
          "module": "[\"Text.Pandoc.Shared\",\"Text.Pandoc\"]",
          "name": "writerIgnoreNotes",
          "package": "open-pandoc",
          "signature": "Bool",
          "source": "src/Text-Pandoc-Shared.html#WriterOptions",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:writerIgnoreNotes\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:writerIgnoreNotes\"]"
        },
        "index": {
          "description": "Ignore footnotes used in making toc",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "writerIgnoreNotes",
          "package": "open-pandoc",
          "partial": "Ignore Notes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:writerIgnoreNotes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eText to include after the body\n\u003c/p\u003e",
          "module": "[\"Text.Pandoc.Shared\",\"Text.Pandoc\"]",
          "name": "writerIncludeAfter",
          "package": "open-pandoc",
          "signature": "String",
          "source": "src/Text-Pandoc-Shared.html#WriterOptions",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:writerIncludeAfter\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:writerIncludeAfter\"]"
        },
        "index": {
          "description": "Text to include after the body",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "writerIncludeAfter",
          "package": "open-pandoc",
          "partial": "Include After",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:writerIncludeAfter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eText to include before the body\n\u003c/p\u003e",
          "module": "[\"Text.Pandoc.Shared\",\"Text.Pandoc\"]",
          "name": "writerIncludeBefore",
          "package": "open-pandoc",
          "signature": "String",
          "source": "src/Text-Pandoc-Shared.html#WriterOptions",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:writerIncludeBefore\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:writerIncludeBefore\"]"
        },
        "index": {
          "description": "Text to include before the body",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "writerIncludeBefore",
          "package": "open-pandoc",
          "partial": "Include Before",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:writerIncludeBefore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncremental S5 lists\n\u003c/p\u003e",
          "module": "[\"Text.Pandoc.Shared\",\"Text.Pandoc\"]",
          "name": "writerIncremental",
          "package": "open-pandoc",
          "signature": "Bool",
          "source": "src/Text-Pandoc-Shared.html#WriterOptions",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:writerIncremental\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:writerIncremental\"]"
        },
        "index": {
          "description": "Incremental S5 lists",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "writerIncremental",
          "package": "open-pandoc",
          "partial": "Incremental",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:writerIncremental"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite as literate haskell\n\u003c/p\u003e",
          "module": "[\"Text.Pandoc.Shared\",\"Text.Pandoc\"]",
          "name": "writerLiterateHaskell",
          "package": "open-pandoc",
          "signature": "Bool",
          "source": "src/Text-Pandoc-Shared.html#WriterOptions",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:writerLiterateHaskell\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:writerLiterateHaskell\"]"
        },
        "index": {
          "description": "Write as literate haskell",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "writerLiterateHaskell",
          "package": "open-pandoc",
          "partial": "Literate Haskell",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:writerLiterateHaskell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber sections in LaTeX\n\u003c/p\u003e",
          "module": "[\"Text.Pandoc.Shared\",\"Text.Pandoc\"]",
          "name": "writerNumberSections",
          "package": "open-pandoc",
          "signature": "Bool",
          "source": "src/Text-Pandoc-Shared.html#WriterOptions",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:writerNumberSections\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:writerNumberSections\"]"
        },
        "index": {
          "description": "Number sections in LaTeX",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "writerNumberSections",
          "package": "open-pandoc",
          "partial": "Number Sections",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:writerNumberSections"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse reference links in writing markdown, rst\n\u003c/p\u003e",
          "module": "[\"Text.Pandoc.Shared\",\"Text.Pandoc\"]",
          "name": "writerReferenceLinks",
          "package": "open-pandoc",
          "signature": "Bool",
          "source": "src/Text-Pandoc-Shared.html#WriterOptions",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:writerReferenceLinks\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:writerReferenceLinks\"]"
        },
        "index": {
          "description": "Use reference links in writing markdown rst",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "writerReferenceLinks",
          "package": "open-pandoc",
          "partial": "Reference Links",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:writerReferenceLinks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe're writing S5 \n\u003c/p\u003e",
          "module": "[\"Text.Pandoc.Shared\",\"Text.Pandoc\"]",
          "name": "writerS5",
          "package": "open-pandoc",
          "signature": "Bool",
          "source": "src/Text-Pandoc-Shared.html#WriterOptions",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:writerS5\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:writerS5\"]"
        },
        "index": {
          "description": "We re writing S5",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "writerS5",
          "package": "open-pandoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:writerS5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInclude header and footer\n\u003c/p\u003e",
          "module": "[\"Text.Pandoc.Shared\",\"Text.Pandoc\"]",
          "name": "writerStandalone",
          "package": "open-pandoc",
          "signature": "Bool",
          "source": "src/Text-Pandoc-Shared.html#WriterOptions",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:writerStandalone\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:writerStandalone\"]"
        },
        "index": {
          "description": "Include header and footer",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "writerStandalone",
          "package": "open-pandoc",
          "partial": "Standalone",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:writerStandalone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse strict markdown syntax\n\u003c/p\u003e",
          "module": "[\"Text.Pandoc.Shared\",\"Text.Pandoc\"]",
          "name": "writerStrictMarkdown",
          "package": "open-pandoc",
          "signature": "Bool",
          "source": "src/Text-Pandoc-Shared.html#WriterOptions",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:writerStrictMarkdown\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:writerStrictMarkdown\"]"
        },
        "index": {
          "description": "Use strict markdown syntax",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "writerStrictMarkdown",
          "package": "open-pandoc",
          "partial": "Strict Markdown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:writerStrictMarkdown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTabstop for conversion btw spaces and tabs\n\u003c/p\u003e",
          "module": "[\"Text.Pandoc.Shared\",\"Text.Pandoc\"]",
          "name": "writerTabStop",
          "package": "open-pandoc",
          "signature": "Int",
          "source": "src/Text-Pandoc-Shared.html#WriterOptions",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:writerTabStop\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:writerTabStop\"]"
        },
        "index": {
          "description": "Tabstop for conversion btw spaces and tabs",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "writerTabStop",
          "package": "open-pandoc",
          "partial": "Tab Stop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:writerTabStop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInclude table of contents\n\u003c/p\u003e",
          "module": "[\"Text.Pandoc.Shared\",\"Text.Pandoc\"]",
          "name": "writerTableOfContents",
          "package": "open-pandoc",
          "signature": "Bool",
          "source": "src/Text-Pandoc-Shared.html#WriterOptions",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:writerTableOfContents\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:writerTableOfContents\"]"
        },
        "index": {
          "description": "Include table of contents",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "writerTableOfContents",
          "package": "open-pandoc",
          "partial": "Table Of Contents",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:writerTableOfContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTemplate to use in standalone mode\n\u003c/p\u003e",
          "module": "[\"Text.Pandoc.Shared\",\"Text.Pandoc\"]",
          "name": "writerTemplate",
          "package": "open-pandoc",
          "signature": "String",
          "source": "src/Text-Pandoc-Shared.html#WriterOptions",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:writerTemplate\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:writerTemplate\"]"
        },
        "index": {
          "description": "Template to use in standalone mode",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "writerTemplate",
          "package": "open-pandoc",
          "partial": "Template",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:writerTemplate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariables to set in template\n\u003c/p\u003e",
          "module": "[\"Text.Pandoc.Shared\",\"Text.Pandoc\"]",
          "name": "writerVariables",
          "package": "open-pandoc",
          "signature": "[(String, String)]",
          "source": "src/Text-Pandoc-Shared.html#WriterOptions",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:writerVariables\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:writerVariables\"]"
        },
        "index": {
          "description": "Variables to set in template",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "writerVariables",
          "normalized": "[(String,String)]",
          "package": "open-pandoc",
          "partial": "Variables",
          "signature": "[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:writerVariables"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap text to line length\n\u003c/p\u003e",
          "module": "[\"Text.Pandoc.Shared\",\"Text.Pandoc\"]",
          "name": "writerWrapText",
          "package": "open-pandoc",
          "signature": "Bool",
          "source": "src/Text-Pandoc-Shared.html#WriterOptions",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:writerWrapText\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:writerWrapText\"]"
        },
        "index": {
          "description": "Wrap text to line length",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "writerWrapText",
          "package": "open-pandoc",
          "partial": "Wrap Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:writerWrapText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate latex suitable for use by xetex\n\u003c/p\u003e",
          "module": "[\"Text.Pandoc.Shared\",\"Text.Pandoc\"]",
          "name": "writerXeTeX",
          "package": "open-pandoc",
          "signature": "Bool",
          "source": "src/Text-Pandoc-Shared.html#WriterOptions",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:writerXeTeX\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:writerXeTeX\"]"
        },
        "index": {
          "description": "Create latex suitable for use by xetex",
          "hierarchy": "Text Pandoc Shared",
          "module": "Text.Pandoc.Shared",
          "name": "writerXeTeX",
          "package": "open-pandoc",
          "partial": "Xe Te",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Shared.html#v:writerXeTeX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple templating system with variable substitution and conditionals.\nExample:\n\u003c/p\u003e\u003cpre\u003e renderTemplate [(\"name\",\"Sam\"),(\"salary\",\"50,000\")] $\n    \"Hi, $name$.  $if(salary)$You make $$$salary$.$else$No salary data.$endif$\" \n \"Hi, John.  You make $50,000.\"\n\u003c/pre\u003e\u003cp\u003eA slot for an interpolated variable is a variable name surrounded\nby dollar signs.  To include a literal \u003ccode\u003e$\u003c/code\u003e in your template, use\n\u003ccode\u003e$$\u003c/code\u003e.  Variable names must begin with a letter and can contain letters,\nnumbers, \u003ccode\u003e_\u003c/code\u003e, and \u003ccode\u003e-\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe value of a variable will be indented to the same level as the\nvariable.\n\u003c/p\u003e\u003cp\u003eA conditional begins with \u003ccode\u003e$if(variable_name)$\u003c/code\u003e and ends with \u003ccode\u003e$endif$\u003c/code\u003e.\nIt may optionally contain an \u003ccode\u003e$else$\u003c/code\u003e section.  The if section is\nused if \u003ccode\u003evariable_name\u003c/code\u003e has a non-null value, otherwise the else section\nis used.\n\u003c/p\u003e\u003cp\u003eConditional keywords should not be indented, or unexpected spacing\nproblems may occur.\n\u003c/p\u003e\u003cp\u003eIf a variable name is associated with multiple values in the association\nlist passed to \u003ccode\u003e\u003ca\u003erenderTemplate\u003c/a\u003e\u003c/code\u003e, you may use the \u003ccode\u003e$for$\u003c/code\u003e keyword to\niterate over them:\n\u003c/p\u003e\u003cpre\u003e renderTemplate [(\"name\",\"Sam\"),(\"name\",\"Joe\")] $\n   \"$for(name)$\\nHi, $name$.\\n$endfor$\"\n \"Hi, Sam.\\nHi, Joe.\"\n\u003c/pre\u003e\u003cp\u003eYou may optionally specify separators using \u003ccode\u003e$sep$\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e renderTemplate [(\"name\",\"Sam\"),(\"name\",\"Joe\"),(\"name\",\"Lynn\")] $\n   \"Hi, $for(name)$$name$$sep$, $endfor$\"\n \"Hi, Sam, Joe, Lynn.\"\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Text.Pandoc.Templates",
          "name": "Templates",
          "package": "open-pandoc",
          "source": "src/Text-Pandoc-Templates.html",
          "type": "module"
        },
        "index": {
          "description": "simple templating system with variable substitution and conditionals Example renderTemplate name Sam salary Hi name if salary You make salary else No salary data endif Hi John You make slot for an interpolated variable is variable name surrounded by dollar signs To include literal in your template use Variable names must begin with letter and can contain letters numbers and The value of variable will be indented to the same level as the variable conditional begins with if variable name and ends with endif It may optionally contain an else section The if section is used if variable name has non-null value otherwise the else section is used Conditional keywords should not be indented or unexpected spacing problems may occur If variable name is associated with multiple values in the association list passed to renderTemplate you may use the for keyword to iterate over them renderTemplate name Sam name Joe for name nHi name endfor Hi Sam nHi Joe You may optionally specify separators using sep renderTemplate name Sam name Joe name Lynn Hi for name name sep endfor Hi Sam Joe Lynn",
          "hierarchy": "Text Pandoc Templates",
          "module": "Text.Pandoc.Templates",
          "name": "Templates",
          "package": "open-pandoc",
          "partial": "Templates",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Templates.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Templates",
          "name": "TemplateTarget",
          "package": "open-pandoc",
          "source": "src/Text-Pandoc-Templates.html#TemplateTarget",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text Pandoc Templates",
          "module": "Text.Pandoc.Templates",
          "name": "TemplateTarget",
          "package": "open-pandoc",
          "partial": "Template Target",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Templates.html#t:TemplateTarget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet default template for the specified writer.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Templates",
          "name": "getDefaultTemplate",
          "package": "open-pandoc",
          "signature": "Maybe FilePath-\u003e String-\u003e IO (Either IOException String)",
          "type": "function"
        },
        "index": {
          "description": "Get default template for the specified writer",
          "hierarchy": "Text Pandoc Templates",
          "module": "Text.Pandoc.Templates",
          "name": "getDefaultTemplate",
          "normalized": "Maybe FilePath-\u003eString-\u003eIO(Either IOException String)",
          "package": "open-pandoc",
          "partial": "Default Template",
          "signature": "Maybe FilePath-\u003eString-\u003eIO(Either IOException String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Templates.html#v:getDefaultTemplate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRenders a template \n\u003c/p\u003e",
          "module": "Text.Pandoc.Templates",
          "name": "renderTemplate",
          "package": "open-pandoc",
          "signature": "[(String, String)]-\u003e String-\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Renders template",
          "hierarchy": "Text Pandoc Templates",
          "module": "Text.Pandoc.Templates",
          "name": "renderTemplate",
          "normalized": "[(String,String)]-\u003eString-\u003ea",
          "package": "open-pandoc",
          "partial": "Template",
          "signature": "[(String,String)]-\u003eString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Templates.html#v:renderTemplate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConversion of \u003ccode\u003e\u003ca\u003ePandoc\u003c/a\u003e\u003c/code\u003e format into ConTeXt.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Pandoc.Writers.ConTeXt",
          "name": "ConTeXt",
          "package": "open-pandoc",
          "source": "src/Text-Pandoc-Writers-ConTeXt.html",
          "type": "module"
        },
        "index": {
          "description": "Conversion of Pandoc format into ConTeXt",
          "hierarchy": "Text Pandoc Writers ConTeXt",
          "module": "Text.Pandoc.Writers.ConTeXt",
          "name": "ConTeXt",
          "package": "open-pandoc",
          "partial": "Con Te Xt",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Writers-ConTeXt.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert Pandoc to ConTeXt.\n\u003c/p\u003e",
          "module": "[\"Text.Pandoc.Writers.ConTeXt\",\"Text.Pandoc\"]",
          "name": "writeConTeXt",
          "package": "open-pandoc",
          "signature": "WriterOptions -\u003e Pandoc -\u003e String",
          "source": "src/Text-Pandoc-Writers-ConTeXt.html#writeConTeXt",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Writers-ConTeXt.html#v:writeConTeXt\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:writeConTeXt\"]"
        },
        "index": {
          "description": "Convert Pandoc to ConTeXt",
          "hierarchy": "Text Pandoc Writers ConTeXt",
          "module": "Text.Pandoc.Writers.ConTeXt",
          "name": "writeConTeXt",
          "normalized": "WriterOptions-\u003ePandoc-\u003eString",
          "package": "open-pandoc",
          "partial": "Con Te Xt",
          "signature": "WriterOptions-\u003ePandoc-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Writers-ConTeXt.html#v:writeConTeXt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConversion of \u003ccode\u003e\u003ca\u003ePandoc\u003c/a\u003e\u003c/code\u003e documents to Docbook XML.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Pandoc.Writers.Docbook",
          "name": "Docbook",
          "package": "open-pandoc",
          "source": "src/Text-Pandoc-Writers-Docbook.html",
          "type": "module"
        },
        "index": {
          "description": "Conversion of Pandoc documents to Docbook XML",
          "hierarchy": "Text Pandoc Writers Docbook",
          "module": "Text.Pandoc.Writers.Docbook",
          "name": "Docbook",
          "package": "open-pandoc",
          "partial": "Docbook",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Writers-Docbook.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert Pandoc document to string in Docbook format.\n\u003c/p\u003e",
          "module": "[\"Text.Pandoc.Writers.Docbook\",\"Text.Pandoc\"]",
          "name": "writeDocbook",
          "package": "open-pandoc",
          "signature": "WriterOptions -\u003e Pandoc -\u003e String",
          "source": "src/Text-Pandoc-Writers-Docbook.html#writeDocbook",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Writers-Docbook.html#v:writeDocbook\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:writeDocbook\"]"
        },
        "index": {
          "description": "Convert Pandoc document to string in Docbook format",
          "hierarchy": "Text Pandoc Writers Docbook",
          "module": "Text.Pandoc.Writers.Docbook",
          "name": "writeDocbook",
          "normalized": "WriterOptions-\u003ePandoc-\u003eString",
          "package": "open-pandoc",
          "partial": "Docbook",
          "signature": "WriterOptions-\u003ePandoc-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Writers-Docbook.html#v:writeDocbook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConversion of \u003ccode\u003e\u003ca\u003ePandoc\u003c/a\u003e\u003c/code\u003e documents to HTML.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Pandoc.Writers.HTML",
          "name": "HTML",
          "package": "open-pandoc",
          "source": "src/Text-Pandoc-Writers-HTML.html",
          "type": "module"
        },
        "index": {
          "description": "Conversion of Pandoc documents to HTML",
          "hierarchy": "Text Pandoc Writers HTML",
          "module": "Text.Pandoc.Writers.HTML",
          "name": "HTML",
          "package": "open-pandoc",
          "partial": "HTML",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Writers-HTML.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert Pandoc document to Html structure.\n\u003c/p\u003e",
          "module": "[\"Text.Pandoc.Writers.HTML\",\"Text.Pandoc\"]",
          "name": "writeHtml",
          "package": "open-pandoc",
          "signature": "WriterOptions -\u003e Pandoc -\u003e Html",
          "source": "src/Text-Pandoc-Writers-HTML.html#writeHtml",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Writers-HTML.html#v:writeHtml\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:writeHtml\"]"
        },
        "index": {
          "description": "Convert Pandoc document to Html structure",
          "hierarchy": "Text Pandoc Writers HTML",
          "module": "Text.Pandoc.Writers.HTML",
          "name": "writeHtml",
          "normalized": "WriterOptions-\u003ePandoc-\u003eHtml",
          "package": "open-pandoc",
          "partial": "Html",
          "signature": "WriterOptions-\u003ePandoc-\u003eHtml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Writers-HTML.html#v:writeHtml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert Pandoc document to Html string.\n\u003c/p\u003e",
          "module": "[\"Text.Pandoc.Writers.HTML\",\"Text.Pandoc\"]",
          "name": "writeHtmlString",
          "package": "open-pandoc",
          "signature": "WriterOptions -\u003e Pandoc -\u003e String",
          "source": "src/Text-Pandoc-Writers-HTML.html#writeHtmlString",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Writers-HTML.html#v:writeHtmlString\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:writeHtmlString\"]"
        },
        "index": {
          "description": "Convert Pandoc document to Html string",
          "hierarchy": "Text Pandoc Writers HTML",
          "module": "Text.Pandoc.Writers.HTML",
          "name": "writeHtmlString",
          "normalized": "WriterOptions-\u003ePandoc-\u003eString",
          "package": "open-pandoc",
          "partial": "Html String",
          "signature": "WriterOptions-\u003ePandoc-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Writers-HTML.html#v:writeHtmlString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConversion of \u003ccode\u003e\u003ca\u003ePandoc\u003c/a\u003e\u003c/code\u003e format into LaTeX.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Pandoc.Writers.LaTeX",
          "name": "LaTeX",
          "package": "open-pandoc",
          "source": "src/Text-Pandoc-Writers-LaTeX.html",
          "type": "module"
        },
        "index": {
          "description": "Conversion of Pandoc format into LaTeX",
          "hierarchy": "Text Pandoc Writers LaTeX",
          "module": "Text.Pandoc.Writers.LaTeX",
          "name": "LaTeX",
          "package": "open-pandoc",
          "partial": "La Te",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Writers-LaTeX.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert Pandoc to LaTeX.\n\u003c/p\u003e",
          "module": "[\"Text.Pandoc.Writers.LaTeX\",\"Text.Pandoc\"]",
          "name": "writeLaTeX",
          "package": "open-pandoc",
          "signature": "WriterOptions -\u003e Pandoc -\u003e String",
          "source": "src/Text-Pandoc-Writers-LaTeX.html#writeLaTeX",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Writers-LaTeX.html#v:writeLaTeX\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:writeLaTeX\"]"
        },
        "index": {
          "description": "Convert Pandoc to LaTeX",
          "hierarchy": "Text Pandoc Writers LaTeX",
          "module": "Text.Pandoc.Writers.LaTeX",
          "name": "writeLaTeX",
          "normalized": "WriterOptions-\u003ePandoc-\u003eString",
          "package": "open-pandoc",
          "partial": "La Te",
          "signature": "WriterOptions-\u003ePandoc-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Writers-LaTeX.html#v:writeLaTeX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConversion of \u003ccode\u003e\u003ca\u003ePandoc\u003c/a\u003e\u003c/code\u003e documents to groff man page format.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Pandoc.Writers.Man",
          "name": "Man",
          "package": "open-pandoc",
          "source": "src/Text-Pandoc-Writers-Man.html",
          "type": "module"
        },
        "index": {
          "description": "Conversion of Pandoc documents to groff man page format",
          "hierarchy": "Text Pandoc Writers Man",
          "module": "Text.Pandoc.Writers.Man",
          "name": "Man",
          "package": "open-pandoc",
          "partial": "Man",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Writers-Man.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert Pandoc to Man.\n\u003c/p\u003e",
          "module": "[\"Text.Pandoc.Writers.Man\",\"Text.Pandoc\"]",
          "name": "writeMan",
          "package": "open-pandoc",
          "signature": "WriterOptions -\u003e Pandoc -\u003e String",
          "source": "src/Text-Pandoc-Writers-Man.html#writeMan",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Writers-Man.html#v:writeMan\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:writeMan\"]"
        },
        "index": {
          "description": "Convert Pandoc to Man",
          "hierarchy": "Text Pandoc Writers Man",
          "module": "Text.Pandoc.Writers.Man",
          "name": "writeMan",
          "normalized": "WriterOptions-\u003ePandoc-\u003eString",
          "package": "open-pandoc",
          "partial": "Man",
          "signature": "WriterOptions-\u003ePandoc-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Writers-Man.html#v:writeMan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConversion of \u003ccode\u003e\u003ca\u003ePandoc\u003c/a\u003e\u003c/code\u003e documents to markdown-formatted plain text.\n\u003c/p\u003e\u003cp\u003eMarkdown:  \u003ca\u003ehttp://daringfireball.net/projects/markdown/\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Pandoc.Writers.Markdown",
          "name": "Markdown",
          "package": "open-pandoc",
          "source": "src/Text-Pandoc-Writers-Markdown.html",
          "type": "module"
        },
        "index": {
          "description": "Conversion of Pandoc documents to markdown-formatted plain text Markdown http daringfireball.net projects markdown",
          "hierarchy": "Text Pandoc Writers Markdown",
          "module": "Text.Pandoc.Writers.Markdown",
          "name": "Markdown",
          "package": "open-pandoc",
          "partial": "Markdown",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Writers-Markdown.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert Pandoc to Markdown.\n\u003c/p\u003e",
          "module": "[\"Text.Pandoc.Writers.Markdown\",\"Text.Pandoc\"]",
          "name": "writeMarkdown",
          "package": "open-pandoc",
          "signature": "WriterOptions -\u003e Pandoc -\u003e String",
          "source": "src/Text-Pandoc-Writers-Markdown.html#writeMarkdown",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Writers-Markdown.html#v:writeMarkdown\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:writeMarkdown\"]"
        },
        "index": {
          "description": "Convert Pandoc to Markdown",
          "hierarchy": "Text Pandoc Writers Markdown",
          "module": "Text.Pandoc.Writers.Markdown",
          "name": "writeMarkdown",
          "normalized": "WriterOptions-\u003ePandoc-\u003eString",
          "package": "open-pandoc",
          "partial": "Markdown",
          "signature": "WriterOptions-\u003ePandoc-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Writers-Markdown.html#v:writeMarkdown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert Pandoc to plain text (like markdown, but without links,\n pictures, or inline formatting).\n\u003c/p\u003e",
          "module": "[\"Text.Pandoc.Writers.Markdown\",\"Text.Pandoc\"]",
          "name": "writePlain",
          "package": "open-pandoc",
          "signature": "WriterOptions -\u003e Pandoc -\u003e String",
          "source": "src/Text-Pandoc-Writers-Markdown.html#writePlain",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Writers-Markdown.html#v:writePlain\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:writePlain\"]"
        },
        "index": {
          "description": "Convert Pandoc to plain text like markdown but without links pictures or inline formatting",
          "hierarchy": "Text Pandoc Writers Markdown",
          "module": "Text.Pandoc.Writers.Markdown",
          "name": "writePlain",
          "normalized": "WriterOptions-\u003ePandoc-\u003eString",
          "package": "open-pandoc",
          "partial": "Plain",
          "signature": "WriterOptions-\u003ePandoc-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Writers-Markdown.html#v:writePlain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConversion of \u003ccode\u003e\u003ca\u003ePandoc\u003c/a\u003e\u003c/code\u003e documents to MediaWiki markup.\n\u003c/p\u003e\u003cp\u003eMediaWiki:  \u003ca\u003ehttp://www.mediawiki.org/wiki/MediaWiki\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Pandoc.Writers.MediaWiki",
          "name": "MediaWiki",
          "package": "open-pandoc",
          "source": "src/Text-Pandoc-Writers-MediaWiki.html",
          "type": "module"
        },
        "index": {
          "description": "Conversion of Pandoc documents to MediaWiki markup MediaWiki http www.mediawiki.org wiki MediaWiki",
          "hierarchy": "Text Pandoc Writers MediaWiki",
          "module": "Text.Pandoc.Writers.MediaWiki",
          "name": "MediaWiki",
          "package": "open-pandoc",
          "partial": "Media Wiki",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Writers-MediaWiki.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert Pandoc to MediaWiki.\n\u003c/p\u003e",
          "module": "[\"Text.Pandoc.Writers.MediaWiki\",\"Text.Pandoc\"]",
          "name": "writeMediaWiki",
          "package": "open-pandoc",
          "signature": "WriterOptions -\u003e Pandoc -\u003e String",
          "source": "src/Text-Pandoc-Writers-MediaWiki.html#writeMediaWiki",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Writers-MediaWiki.html#v:writeMediaWiki\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:writeMediaWiki\"]"
        },
        "index": {
          "description": "Convert Pandoc to MediaWiki",
          "hierarchy": "Text Pandoc Writers MediaWiki",
          "module": "Text.Pandoc.Writers.MediaWiki",
          "name": "writeMediaWiki",
          "normalized": "WriterOptions-\u003ePandoc-\u003eString",
          "package": "open-pandoc",
          "partial": "Media Wiki",
          "signature": "WriterOptions-\u003ePandoc-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Writers-MediaWiki.html#v:writeMediaWiki"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConversion of \u003ccode\u003e\u003ca\u003ePandoc\u003c/a\u003e\u003c/code\u003e documents to OpenDocument XML.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Pandoc.Writers.OpenDocument",
          "name": "OpenDocument",
          "package": "open-pandoc",
          "source": "src/Text-Pandoc-Writers-OpenDocument.html",
          "type": "module"
        },
        "index": {
          "description": "Conversion of Pandoc documents to OpenDocument XML",
          "hierarchy": "Text Pandoc Writers OpenDocument",
          "module": "Text.Pandoc.Writers.OpenDocument",
          "name": "OpenDocument",
          "package": "open-pandoc",
          "partial": "Open Document",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Writers-OpenDocument.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert Pandoc document to string in OpenDocument format.\n\u003c/p\u003e",
          "module": "[\"Text.Pandoc.Writers.OpenDocument\",\"Text.Pandoc\"]",
          "name": "writeOpenDocument",
          "package": "open-pandoc",
          "signature": "WriterOptions -\u003e Pandoc -\u003e String",
          "source": "src/Text-Pandoc-Writers-OpenDocument.html#writeOpenDocument",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Writers-OpenDocument.html#v:writeOpenDocument\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:writeOpenDocument\"]"
        },
        "index": {
          "description": "Convert Pandoc document to string in OpenDocument format",
          "hierarchy": "Text Pandoc Writers OpenDocument",
          "module": "Text.Pandoc.Writers.OpenDocument",
          "name": "writeOpenDocument",
          "normalized": "WriterOptions-\u003ePandoc-\u003eString",
          "package": "open-pandoc",
          "partial": "Open Document",
          "signature": "WriterOptions-\u003ePandoc-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Writers-OpenDocument.html#v:writeOpenDocument"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConversion of \u003ccode\u003e\u003ca\u003ePandoc\u003c/a\u003e\u003c/code\u003e documents to reStructuredText.\n\u003c/p\u003e\u003cp\u003ereStructuredText:  \u003ca\u003ehttp://docutils.sourceforge.net/rst.html\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Pandoc.Writers.RST",
          "name": "RST",
          "package": "open-pandoc",
          "source": "src/Text-Pandoc-Writers-RST.html",
          "type": "module"
        },
        "index": {
          "description": "Conversion of Pandoc documents to reStructuredText reStructuredText http docutils.sourceforge.net rst.html",
          "hierarchy": "Text Pandoc Writers RST",
          "module": "Text.Pandoc.Writers.RST",
          "name": "RST",
          "package": "open-pandoc",
          "partial": "RST",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Writers-RST.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert Pandoc to RST.\n\u003c/p\u003e",
          "module": "[\"Text.Pandoc.Writers.RST\",\"Text.Pandoc\"]",
          "name": "writeRST",
          "package": "open-pandoc",
          "signature": "WriterOptions -\u003e Pandoc -\u003e String",
          "source": "src/Text-Pandoc-Writers-RST.html#writeRST",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Writers-RST.html#v:writeRST\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:writeRST\"]"
        },
        "index": {
          "description": "Convert Pandoc to RST",
          "hierarchy": "Text Pandoc Writers RST",
          "module": "Text.Pandoc.Writers.RST",
          "name": "writeRST",
          "normalized": "WriterOptions-\u003ePandoc-\u003eString",
          "package": "open-pandoc",
          "partial": "RST",
          "signature": "WriterOptions-\u003ePandoc-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Writers-RST.html#v:writeRST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConversion of \u003ccode\u003e\u003ca\u003ePandoc\u003c/a\u003e\u003c/code\u003e documents to RTF (rich text format).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Pandoc.Writers.RTF",
          "name": "RTF",
          "package": "open-pandoc",
          "source": "src/Text-Pandoc-Writers-RTF.html",
          "type": "module"
        },
        "index": {
          "description": "Conversion of Pandoc documents to RTF rich text format",
          "hierarchy": "Text Pandoc Writers RTF",
          "module": "Text.Pandoc.Writers.RTF",
          "name": "RTF",
          "package": "open-pandoc",
          "partial": "RTF",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Writers-RTF.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert Pandoc to a string in rich text format.\n\u003c/p\u003e",
          "module": "[\"Text.Pandoc.Writers.RTF\",\"Text.Pandoc\"]",
          "name": "writeRTF",
          "package": "open-pandoc",
          "signature": "WriterOptions -\u003e Pandoc -\u003e String",
          "source": "src/Text-Pandoc-Writers-RTF.html#writeRTF",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Writers-RTF.html#v:writeRTF\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:writeRTF\"]"
        },
        "index": {
          "description": "Convert Pandoc to string in rich text format",
          "hierarchy": "Text Pandoc Writers RTF",
          "module": "Text.Pandoc.Writers.RTF",
          "name": "writeRTF",
          "normalized": "WriterOptions-\u003ePandoc-\u003eString",
          "package": "open-pandoc",
          "partial": "RTF",
          "signature": "WriterOptions-\u003ePandoc-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Writers-RTF.html#v:writeRTF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefinitions for creation of S5 powerpoint-like HTML.\n(See \u003ca\u003ehttp://meyerweb.com/eric/tools/s5/\u003c/a\u003e.)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Pandoc.Writers.S5",
          "name": "S5",
          "package": "open-pandoc",
          "source": "src/Text-Pandoc-Writers-S5.html",
          "type": "module"
        },
        "index": {
          "description": "Definitions for creation of S5 powerpoint-like HTML See http meyerweb.com eric tools s5",
          "hierarchy": "Text Pandoc Writers S5",
          "module": "Text.Pandoc.Writers.S5",
          "name": "S5",
          "package": "open-pandoc",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Writers-S5.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert blocks into \u003ccode\u003e\u003ca\u003ePandoc\u003c/a\u003e\u003c/code\u003e for slide structure.\n\u003c/p\u003e",
          "module": "Text.Pandoc.Writers.S5",
          "name": "insertS5Structure",
          "package": "open-pandoc",
          "signature": "Pandoc -\u003e Pandoc",
          "source": "src/Text-Pandoc-Writers-S5.html#insertS5Structure",
          "type": "function"
        },
        "index": {
          "description": "Insert blocks into Pandoc for slide structure",
          "hierarchy": "Text Pandoc Writers S5",
          "module": "Text.Pandoc.Writers.S5",
          "name": "insertS5Structure",
          "normalized": "Pandoc-\u003ePandoc",
          "package": "open-pandoc",
          "partial": "Structure",
          "signature": "Pandoc-\u003ePandoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Writers-S5.html#v:insertS5Structure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Writers.S5",
          "name": "s5HeaderIncludes",
          "package": "open-pandoc",
          "signature": "Maybe FilePath -\u003e IO String",
          "source": "src/Text-Pandoc-Writers-S5.html#s5HeaderIncludes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Writers S5",
          "module": "Text.Pandoc.Writers.S5",
          "name": "s5HeaderIncludes",
          "normalized": "Maybe FilePath-\u003eIO String",
          "package": "open-pandoc",
          "partial": "Header Includes",
          "signature": "Maybe FilePath-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Writers-S5.html#v:s5HeaderIncludes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc.Writers.S5",
          "name": "s5Links",
          "package": "open-pandoc",
          "signature": "String",
          "source": "src/Text-Pandoc-Writers-S5.html#s5Links",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Pandoc Writers S5",
          "module": "Text.Pandoc.Writers.S5",
          "name": "s5Links",
          "package": "open-pandoc",
          "partial": "Links",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Writers-S5.html#v:s5Links"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts Pandoc document to an S5 HTML presentation (Html structure).\n\u003c/p\u003e",
          "module": "[\"Text.Pandoc.Writers.S5\",\"Text.Pandoc\"]",
          "name": "writeS5",
          "package": "open-pandoc",
          "signature": "WriterOptions -\u003e Pandoc -\u003e Html",
          "source": "src/Text-Pandoc-Writers-S5.html#writeS5",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Writers-S5.html#v:writeS5\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:writeS5\"]"
        },
        "index": {
          "description": "Converts Pandoc document to an S5 HTML presentation Html structure",
          "hierarchy": "Text Pandoc Writers S5",
          "module": "Text.Pandoc.Writers.S5",
          "name": "writeS5",
          "normalized": "WriterOptions-\u003ePandoc-\u003eHtml",
          "package": "open-pandoc",
          "signature": "WriterOptions-\u003ePandoc-\u003eHtml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Writers-S5.html#v:writeS5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts Pandoc document to an S5 HTML presentation (string).\n\u003c/p\u003e",
          "module": "[\"Text.Pandoc.Writers.S5\",\"Text.Pandoc\"]",
          "name": "writeS5String",
          "package": "open-pandoc",
          "signature": "WriterOptions -\u003e Pandoc -\u003e String",
          "source": "src/Text-Pandoc-Writers-S5.html#writeS5String",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Writers-S5.html#v:writeS5String\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:writeS5String\"]"
        },
        "index": {
          "description": "Converts Pandoc document to an S5 HTML presentation string",
          "hierarchy": "Text Pandoc Writers S5",
          "module": "Text.Pandoc.Writers.S5",
          "name": "writeS5String",
          "normalized": "WriterOptions-\u003ePandoc-\u003eString",
          "package": "open-pandoc",
          "partial": "String",
          "signature": "WriterOptions-\u003ePandoc-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Writers-S5.html#v:writeS5String"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConversion of \u003ccode\u003e\u003ca\u003ePandoc\u003c/a\u003e\u003c/code\u003e format into Texinfo.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Pandoc.Writers.Texinfo",
          "name": "Texinfo",
          "package": "open-pandoc",
          "source": "src/Text-Pandoc-Writers-Texinfo.html",
          "type": "module"
        },
        "index": {
          "description": "Conversion of Pandoc format into Texinfo",
          "hierarchy": "Text Pandoc Writers Texinfo",
          "module": "Text.Pandoc.Writers.Texinfo",
          "name": "Texinfo",
          "package": "open-pandoc",
          "partial": "Texinfo",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Writers-Texinfo.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert Pandoc to Texinfo.\n\u003c/p\u003e",
          "module": "[\"Text.Pandoc.Writers.Texinfo\",\"Text.Pandoc\"]",
          "name": "writeTexinfo",
          "package": "open-pandoc",
          "signature": "WriterOptions -\u003e Pandoc -\u003e String",
          "source": "src/Text-Pandoc-Writers-Texinfo.html#writeTexinfo",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Writers-Texinfo.html#v:writeTexinfo\",\"http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:writeTexinfo\"]"
        },
        "index": {
          "description": "Convert Pandoc to Texinfo",
          "hierarchy": "Text Pandoc Writers Texinfo",
          "module": "Text.Pandoc.Writers.Texinfo",
          "name": "writeTexinfo",
          "normalized": "WriterOptions-\u003ePandoc-\u003eString",
          "package": "open-pandoc",
          "partial": "Texinfo",
          "signature": "WriterOptions-\u003ePandoc-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc-Writers-Texinfo.html#v:writeTexinfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis helper module exports the main writers, readers, and data\nstructure definitions from the Pandoc libraries.\n\u003c/p\u003e\u003cp\u003eA typical application will chain together a reader and a writer\nto convert strings from one format to another.  For example, the\nfollowing simple program will act as a filter converting markdown\nfragments to reStructuredText, using reference-style links instead of\ninline links:\n\u003c/p\u003e\u003cpre\u003e module Main where\n import Text.Pandoc\n -- include the following two lines only if you're using ghc \u003c 6.12:\n import Prelude hiding (getContents, putStrLn)\n import System.IO.UTF8\n\n markdownToRST :: String -\u003e String\n markdownToRST =\n   (writeRST defaultWriterOptions {writerReferenceLinks = True}) .\n   readMarkdown defaultParserState\n \n main = getContents \u003e\u003e= putStrLn . markdownToRST\n\u003c/pre\u003e\u003cp\u003eNote:  all of the readers assume that the input text has \u003ccode\u003e'\\n'\u003c/code\u003e\nline endings.  So if you get your input text from a web form,\nyou should remove \u003ccode\u003e'\\r'\u003c/code\u003e characters using \u003ccode\u003efilter (/='\\r')\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Pandoc",
          "name": "Pandoc",
          "package": "open-pandoc",
          "source": "src/Text-Pandoc.html",
          "type": "module"
        },
        "index": {
          "description": "This helper module exports the main writers readers and data structure definitions from the Pandoc libraries typical application will chain together reader and writer to convert strings from one format to another For example the following simple program will act as filter converting markdown fragments to reStructuredText using reference-style links instead of inline links module Main where import Text.Pandoc include the following two lines only if you re using ghc import Prelude hiding getContents putStrLn import System.IO.UTF8 markdownToRST String String markdownToRST writeRST defaultWriterOptions writerReferenceLinks True readMarkdown defaultParserState main getContents putStrLn markdownToRST Note all of the readers assume that the input text has line endings So if you get your input text from web form you should remove characters using filter",
          "hierarchy": "Text Pandoc",
          "module": "Text.Pandoc",
          "name": "Pandoc",
          "package": "open-pandoc",
          "partial": "Pandoc",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc",
          "name": "HTMLMathMethod",
          "package": "open-pandoc",
          "source": "src/Text-Pandoc-Shared.html#HTMLMathMethod",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Pandoc",
          "module": "Text.Pandoc",
          "name": "HTMLMathMethod",
          "package": "open-pandoc",
          "partial": "HTMLMath Method",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#t:HTMLMathMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc",
          "name": "HeaderType",
          "package": "open-pandoc",
          "source": "src/Text-Pandoc-Shared.html#HeaderType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Pandoc",
          "module": "Text.Pandoc",
          "name": "HeaderType",
          "package": "open-pandoc",
          "partial": "Header Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#t:HeaderType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc",
          "name": "KeyTable",
          "package": "open-pandoc",
          "source": "src/Text-Pandoc-Shared.html#KeyTable",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Pandoc",
          "module": "Text.Pandoc",
          "name": "KeyTable",
          "package": "open-pandoc",
          "partial": "Key Table",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#t:KeyTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc",
          "name": "NoteTable",
          "package": "open-pandoc",
          "source": "src/Text-Pandoc-Shared.html#NoteTable",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Pandoc",
          "module": "Text.Pandoc",
          "name": "NoteTable",
          "package": "open-pandoc",
          "partial": "Note Table",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#t:NoteTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc",
          "name": "ParserContext",
          "package": "open-pandoc",
          "source": "src/Text-Pandoc-Shared.html#ParserContext",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Pandoc",
          "module": "Text.Pandoc",
          "name": "ParserContext",
          "package": "open-pandoc",
          "partial": "Parser Context",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#t:ParserContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParsing options.\n\u003c/p\u003e",
          "module": "Text.Pandoc",
          "name": "ParserState",
          "package": "open-pandoc",
          "source": "src/Text-Pandoc-Shared.html#ParserState",
          "type": "data"
        },
        "index": {
          "description": "Parsing options",
          "hierarchy": "Text Pandoc",
          "module": "Text.Pandoc",
          "name": "ParserState",
          "package": "open-pandoc",
          "partial": "Parser State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#t:ParserState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Pandoc",
          "name": "QuoteContext",
          "package": "open-pandoc",
          "source": "src/Text-Pandoc-Shared.html#QuoteContext",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Pandoc",
          "module": "Text.Pandoc",
          "name": "QuoteContext",
          "package": "open-pandoc",
          "partial": "Quote Context",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#t:QuoteContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptions for writers\n\u003c/p\u003e",
          "module": "Text.Pandoc",
          "name": "WriterOptions",
          "package": "open-pandoc",
          "source": "src/Text-Pandoc-Shared.html#WriterOptions",
          "type": "data"
        },
        "index": {
          "description": "Options for writers",
          "hierarchy": "Text Pandoc",
          "module": "Text.Pandoc",
          "name": "WriterOptions",
          "package": "open-pandoc",
          "partial": "Writer Options",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#t:WriterOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVersion number of pandoc library.\n\u003c/p\u003e",
          "module": "Text.Pandoc",
          "name": "pandocVersion",
          "package": "open-pandoc",
          "signature": "String",
          "source": "src/Text-Pandoc.html#pandocVersion",
          "type": "function"
        },
        "index": {
          "description": "Version number of pandoc library",
          "hierarchy": "Text Pandoc",
          "module": "Text.Pandoc",
          "name": "pandocVersion",
          "package": "open-pandoc",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/open-pandoc/docs/Text-Pandoc.html#v:pandocVersion"
      }
    }
  ]
]