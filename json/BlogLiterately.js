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
        "word": "BlogLiterately"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtilities for working with code blocks.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.BlogLiterately.Block",
          "name": "Block",
          "package": "BlogLiterately",
          "source": "src/Text-BlogLiterately-Block.html",
          "type": "module"
        },
        "index": {
          "description": "Utilities for working with code blocks",
          "hierarchy": "Text BlogLiterately Block",
          "module": "Text.BlogLiterately.Block",
          "name": "Block",
          "package": "BlogLiterately",
          "partial": "Block",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Block.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the given function on the attributes and source code of code\n   blocks with a tag matching the given tag (case insensitive).  On\n   any other blocks (which don't have a matching tag, or are not code\n   blocks), run the other function.\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Block",
          "name": "onTag",
          "package": "BlogLiterately",
          "signature": "String -\u003e (Attr -\u003e String -\u003e a) -\u003e (Block -\u003e a) -\u003e Block -\u003e a",
          "source": "src/Text-BlogLiterately-Block.html#onTag",
          "type": "function"
        },
        "index": {
          "description": "Run the given function on the attributes and source code of code blocks with tag matching the given tag case insensitive On any other blocks which don have matching tag or are not code blocks run the other function",
          "hierarchy": "Text BlogLiterately Block",
          "module": "Text.BlogLiterately.Block",
          "name": "onTag",
          "normalized": "String-\u003e(Attr-\u003eString-\u003ea)-\u003e(Block-\u003ea)-\u003eBlock-\u003ea",
          "package": "BlogLiterately",
          "partial": "Tag",
          "signature": "String-\u003e(Attr-\u003eString-\u003ea)-\u003e(Block-\u003ea)-\u003eBlock-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Block.html#v:onTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a block, if begins with a tag in square brackets, strip off\n   the tag and return a pair consisting of the tag and de-tagged\n   block.  Otherwise, return \u003ccode\u003eNothing\u003c/code\u003e and the unchanged block.\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Block",
          "name": "unTag",
          "package": "BlogLiterately",
          "signature": "String -\u003e (Maybe String, String)",
          "source": "src/Text-BlogLiterately-Block.html#unTag",
          "type": "function"
        },
        "index": {
          "description": "Given block if begins with tag in square brackets strip off the tag and return pair consisting of the tag and de-tagged block Otherwise return Nothing and the unchanged block",
          "hierarchy": "Text BlogLiterately Block",
          "module": "Text.BlogLiterately.Block",
          "name": "unTag",
          "normalized": "String-\u003e(Maybe String,String)",
          "package": "BlogLiterately",
          "partial": "Tag",
          "signature": "String-\u003e(Maybe String,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Block.html#v:unTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFormat specially marked blocks as interactive ghci sessions.  Uses\n some ugly but effective code for interacting with an external ghci\n process taken from lhs2TeX.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.BlogLiterately.Ghci",
          "name": "Ghci",
          "package": "BlogLiterately",
          "source": "src/Text-BlogLiterately-Ghci.html",
          "type": "module"
        },
        "index": {
          "description": "Format specially marked blocks as interactive ghci sessions Uses some ugly but effective code for interacting with an external ghci process taken from lhs2TeX",
          "hierarchy": "Text BlogLiterately Ghci",
          "module": "Text.BlogLiterately.Ghci",
          "name": "Ghci",
          "package": "BlogLiterately",
          "partial": "Ghci",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Ghci.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation about a running process: stdin, stdout, stderr, and a\n   handle.\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Ghci",
          "name": "ProcessInfo",
          "package": "BlogLiterately",
          "source": "src/Text-BlogLiterately-Ghci.html#ProcessInfo",
          "type": "type"
        },
        "index": {
          "description": "Information about running process stdin stdout stderr and handle",
          "hierarchy": "Text BlogLiterately Ghci",
          "module": "Text.BlogLiterately.Ghci",
          "name": "ProcessInfo",
          "package": "BlogLiterately",
          "partial": "Process Info",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Ghci.html#t:ProcessInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.BlogLiterately.Ghci",
          "name": "breaks",
          "package": "BlogLiterately",
          "signature": "([a] -\u003e Bool) -\u003e [a] -\u003e ([a], [a])",
          "source": "src/Text-BlogLiterately-Ghci.html#breaks",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text BlogLiterately Ghci",
          "module": "Text.BlogLiterately.Ghci",
          "name": "breaks",
          "normalized": "([a]-\u003eBool)-\u003e[a]-\u003e([a],[a])",
          "package": "BlogLiterately",
          "signature": "([a]-\u003eBool)-\u003e[a]-\u003e([a],[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Ghci.html#v:breaks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.BlogLiterately.Ghci",
          "name": "extract",
          "package": "BlogLiterately",
          "signature": "String -\u003e String",
          "source": "src/Text-BlogLiterately-Ghci.html#extract",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text BlogLiterately Ghci",
          "module": "Text.BlogLiterately.Ghci",
          "name": "extract",
          "normalized": "String-\u003eString",
          "package": "BlogLiterately",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Ghci.html#v:extract"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.BlogLiterately.Ghci",
          "name": "extract'",
          "package": "BlogLiterately",
          "signature": "Handle -\u003e IO String",
          "source": "src/Text-BlogLiterately-Ghci.html#extract%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text BlogLiterately Ghci",
          "module": "Text.BlogLiterately.Ghci",
          "name": "extract'",
          "normalized": "Handle-\u003eIO String",
          "package": "BlogLiterately",
          "signature": "Handle-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Ghci.html#v:extract-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven the path to the \u003ccode\u003e.lhs\u003c/code\u003e source and its representation as a\n   \u003ccode\u003ePandoc\u003c/code\u003e document, \u003ccode\u003eformatInlineGhci\u003c/code\u003e finds any \u003ccode\u003e[ghci]\u003c/code\u003e blocks\n   in it, runs them through \u003ccode\u003eghci\u003c/code\u003e, and formats the results as an\n   interactive \u003ccode\u003eghci\u003c/code\u003e session.\n\u003c/p\u003e\u003cp\u003eLines beginning in the first column of the block are interpreted\n   as inputs.  Lines indented by one or more space are interpreted\n   as \u003cem\u003eexpected outputs\u003c/em\u003e.  Consecutive indented lines are\n   interpreted as one multi-line expected output, with a number of\n   spaces removed from the beginning of each line equal to the\n   number of spaces at the start of the first indented line.\n\u003c/p\u003e\u003cp\u003eIf the output for a given input is the same as the expected\n   output (or if no expected output is given), the result is typeset\n   normally.  If the actual and expected outputs differ, the actual\n   output is typeset first in red, then the expected output in blue.\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Ghci",
          "name": "formatInlineGhci",
          "package": "BlogLiterately",
          "signature": "FilePath -\u003e Pandoc -\u003e IO Pandoc",
          "source": "src/Text-BlogLiterately-Ghci.html#formatInlineGhci",
          "type": "function"
        },
        "index": {
          "description": "Given the path to the lhs source and its representation as Pandoc document formatInlineGhci finds any ghci blocks in it runs them through ghci and formats the results as an interactive ghci session Lines beginning in the first column of the block are interpreted as inputs Lines indented by one or more space are interpreted as expected outputs Consecutive indented lines are interpreted as one multi-line expected output with number of spaces removed from the beginning of each line equal to the number of spaces at the start of the first indented line If the output for given input is the same as the expected output or if no expected output is given the result is typeset normally If the actual and expected outputs differ the actual output is typeset first in red then the expected output in blue",
          "hierarchy": "Text BlogLiterately Ghci",
          "module": "Text.BlogLiterately.Ghci",
          "name": "formatInlineGhci",
          "normalized": "FilePath-\u003ePandoc-\u003eIO Pandoc",
          "package": "BlogLiterately",
          "partial": "Inline Ghci",
          "signature": "FilePath-\u003ePandoc-\u003eIO Pandoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Ghci.html#v:formatInlineGhci"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate an expression using an external \u003ccode\u003eghci\u003c/code\u003e process.\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Ghci",
          "name": "ghciEval",
          "package": "BlogLiterately",
          "signature": "GhciInput -\u003e ReaderT ProcessInfo IO GhciOutput",
          "source": "src/Text-BlogLiterately-Ghci.html#ghciEval",
          "type": "function"
        },
        "index": {
          "description": "Evaluate an expression using an external ghci process",
          "hierarchy": "Text BlogLiterately Ghci",
          "module": "Text.BlogLiterately.Ghci",
          "name": "ghciEval",
          "normalized": "GhciInput-\u003eReaderT ProcessInfo IO GhciOutput",
          "package": "BlogLiterately",
          "partial": "Eval",
          "signature": "GhciInput-\u003eReaderT ProcessInfo IO GhciOutput",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Ghci.html#v:ghciEval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePoor man's check to see whether we have a literate Haskell file.\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Ghci",
          "name": "isLiterate",
          "package": "BlogLiterately",
          "signature": "String -\u003e Bool",
          "source": "src/Text-BlogLiterately-Ghci.html#isLiterate",
          "type": "function"
        },
        "index": {
          "description": "Poor man check to see whether we have literate Haskell file",
          "hierarchy": "Text BlogLiterately Ghci",
          "module": "Text.BlogLiterately.Ghci",
          "name": "isLiterate",
          "normalized": "String-\u003eBool",
          "package": "BlogLiterately",
          "partial": "Literate",
          "signature": "String-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Ghci.html#v:isLiterate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThere is nothing magic about the magic string.\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Ghci",
          "name": "magic",
          "package": "BlogLiterately",
          "signature": "String",
          "source": "src/Text-BlogLiterately-Ghci.html#magic",
          "type": "function"
        },
        "index": {
          "description": "There is nothing magic about the magic string",
          "hierarchy": "Text BlogLiterately Ghci",
          "module": "Text.BlogLiterately.Ghci",
          "name": "magic",
          "package": "BlogLiterately",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Ghci.html#v:magic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStop a ghci process by passing it \u003ccode\u003e:q\u003c/code\u003e and waiting for it to exit.\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Ghci",
          "name": "stopGhci",
          "package": "BlogLiterately",
          "signature": "ProcessInfo -\u003e IO ()",
          "source": "src/Text-BlogLiterately-Ghci.html#stopGhci",
          "type": "function"
        },
        "index": {
          "description": "Stop ghci process by passing it and waiting for it to exit",
          "hierarchy": "Text BlogLiterately Ghci",
          "module": "Text.BlogLiterately.Ghci",
          "name": "stopGhci",
          "normalized": "ProcessInfo-\u003eIO()",
          "package": "BlogLiterately",
          "partial": "Ghci",
          "signature": "ProcessInfo-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Ghci.html#v:stopGhci"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStart an external ghci process, run a computation with access to\n   it, and finally stop the process.\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Ghci",
          "name": "withGhciProcess",
          "package": "BlogLiterately",
          "signature": "FilePath -\u003e ReaderT ProcessInfo IO a -\u003e IO a",
          "source": "src/Text-BlogLiterately-Ghci.html#withGhciProcess",
          "type": "function"
        },
        "index": {
          "description": "Start an external ghci process run computation with access to it and finally stop the process",
          "hierarchy": "Text BlogLiterately Ghci",
          "module": "Text.BlogLiterately.Ghci",
          "name": "withGhciProcess",
          "normalized": "FilePath-\u003eReaderT ProcessInfo IO a-\u003eIO a",
          "package": "BlogLiterately",
          "partial": "Ghci Process",
          "signature": "FilePath-\u003eReaderT ProcessInfo IO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Ghci.html#v:withGhciProcess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSyntax highlighting.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.BlogLiterately.Highlight",
          "name": "Highlight",
          "package": "BlogLiterately",
          "source": "src/Text-BlogLiterately-Highlight.html",
          "type": "module"
        },
        "index": {
          "description": "Syntax highlighting",
          "hierarchy": "Text BlogLiterately Highlight",
          "module": "Text.BlogLiterately.Highlight",
          "name": "Highlight",
          "package": "BlogLiterately",
          "partial": "Highlight",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Highlight.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFour modes for highlighting Haskell.\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Highlight",
          "name": "HsHighlight",
          "package": "BlogLiterately",
          "source": "src/Text-BlogLiterately-Highlight.html#HsHighlight",
          "type": "data"
        },
        "index": {
          "description": "Four modes for highlighting Haskell",
          "hierarchy": "Text BlogLiterately Highlight",
          "module": "Text.BlogLiterately.Highlight",
          "name": "HsHighlight",
          "package": "BlogLiterately",
          "partial": "Hs Highlight",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Highlight.html#t:HsHighlight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStyle preferences are specified as a list of mappings from class\n   attributes to CSS style attributes.\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Highlight",
          "name": "StylePrefs",
          "package": "BlogLiterately",
          "source": "src/Text-BlogLiterately-Highlight.html#StylePrefs",
          "type": "type"
        },
        "index": {
          "description": "Style preferences are specified as list of mappings from class attributes to CSS style attributes",
          "hierarchy": "Text BlogLiterately Highlight",
          "module": "Text.BlogLiterately.Highlight",
          "name": "StylePrefs",
          "package": "BlogLiterately",
          "partial": "Style Prefs",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Highlight.html#t:StylePrefs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse hscolour in conjunction with\n   an external CSS style sheet.\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Highlight",
          "name": "HsColourCSS",
          "package": "BlogLiterately",
          "signature": "HsColourCSS",
          "source": "src/Text-BlogLiterately-Highlight.html#HsHighlight",
          "type": "function"
        },
        "index": {
          "description": "Use hscolour in conjunction with an external CSS style sheet",
          "hierarchy": "Text BlogLiterately Highlight",
          "module": "Text.BlogLiterately.Highlight",
          "name": "HsColourCSS",
          "package": "BlogLiterately",
          "partial": "Hs Colour CSS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Highlight.html#v:HsColourCSS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse hscolour and inline the styles.\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Highlight",
          "name": "HsColourInline",
          "package": "BlogLiterately",
          "signature": "HsColourInline StylePrefs",
          "source": "src/Text-BlogLiterately-Highlight.html#HsHighlight",
          "type": "function"
        },
        "index": {
          "description": "Use hscolour and inline the styles",
          "hierarchy": "Text BlogLiterately Highlight",
          "module": "Text.BlogLiterately.Highlight",
          "name": "HsColourInline",
          "package": "BlogLiterately",
          "partial": "Hs Colour Inline",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Highlight.html#v:HsColourInline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse highlighting-kate.\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Highlight",
          "name": "HsKate",
          "package": "BlogLiterately",
          "signature": "HsKate",
          "source": "src/Text-BlogLiterately-Highlight.html#HsHighlight",
          "type": "function"
        },
        "index": {
          "description": "Use highlighting-kate",
          "hierarchy": "Text BlogLiterately Highlight",
          "module": "Text.BlogLiterately.Highlight",
          "name": "HsKate",
          "package": "BlogLiterately",
          "partial": "Hs Kate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Highlight.html#v:HsKate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDo not highlight Haskell.\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Highlight",
          "name": "HsNoHighlight",
          "package": "BlogLiterately",
          "signature": "HsNoHighlight",
          "source": "src/Text-BlogLiterately-Highlight.html#HsHighlight",
          "type": "function"
        },
        "index": {
          "description": "Do not highlight Haskell",
          "hierarchy": "Text BlogLiterately Highlight",
          "module": "Text.BlogLiterately.Highlight",
          "name": "HsNoHighlight",
          "package": "BlogLiterately",
          "partial": "Hs No Highlight",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Highlight.html#v:HsNoHighlight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.BlogLiterately.Highlight",
          "name": "_HsColourInline",
          "package": "BlogLiterately",
          "signature": "Prism' HsHighlight StylePrefs",
          "source": "src/Text-BlogLiterately-Highlight.html#_HsColourInline",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text BlogLiterately Highlight",
          "module": "Text.BlogLiterately.Highlight",
          "name": "_HsColourInline",
          "package": "BlogLiterately",
          "partial": "Hs Colour Inline",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Highlight.html#v:_HsColourInline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a \u003ccode\u003eString\u003c/code\u003e of HTML produced by hscolour, and \"bake\" styles\n   into it by replacing class attributes with appropriate style\n   attributes.\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Highlight",
          "name": "bakeStyles",
          "package": "BlogLiterately",
          "signature": "StylePrefs -\u003e String -\u003e String",
          "source": "src/Text-BlogLiterately-Highlight.html#bakeStyles",
          "type": "function"
        },
        "index": {
          "description": "Take String of HTML produced by hscolour and bake styles into it by replacing class attributes with appropriate style attributes",
          "hierarchy": "Text BlogLiterately Highlight",
          "module": "Text.BlogLiterately.Highlight",
          "name": "bakeStyles",
          "normalized": "StylePrefs-\u003eString-\u003eString",
          "package": "BlogLiterately",
          "partial": "Styles",
          "signature": "StylePrefs-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Highlight.html#v:bakeStyles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse hscolour to syntax highlight some Haskell code.  The first\n argument indicates whether the code is literate Haskell.\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Highlight",
          "name": "colourIt",
          "package": "BlogLiterately",
          "signature": "Bool -\u003e String -\u003e String",
          "source": "src/Text-BlogLiterately-Highlight.html#colourIt",
          "type": "function"
        },
        "index": {
          "description": "Use hscolour to syntax highlight some Haskell code The first argument indicates whether the code is literate Haskell",
          "hierarchy": "Text BlogLiterately Highlight",
          "module": "Text.BlogLiterately.Highlight",
          "name": "colourIt",
          "normalized": "Bool-\u003eString-\u003eString",
          "package": "BlogLiterately",
          "partial": "It",
          "signature": "Bool-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Highlight.html#v:colourIt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform a \u003ccode\u003eCodeBlock\u003c/code\u003e into a \u003ccode\u003eRawHtml\u003c/code\u003e block, where\n   the content contains marked up Haskell (possibly with literate\n   markers), or marked up non-Haskell, if highlighting of non-Haskell has\n   been selected.\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Highlight",
          "name": "colouriseCodeBlock",
          "package": "BlogLiterately",
          "signature": "HsHighlight -\u003e Bool -\u003e Block -\u003e Block",
          "source": "src/Text-BlogLiterately-Highlight.html#colouriseCodeBlock",
          "type": "function"
        },
        "index": {
          "description": "Transform CodeBlock into RawHtml block where the content contains marked up Haskell possibly with literate markers or marked up non-Haskell if highlighting of non-Haskell has been selected",
          "hierarchy": "Text BlogLiterately Highlight",
          "module": "Text.BlogLiterately.Highlight",
          "name": "colouriseCodeBlock",
          "normalized": "HsHighlight-\u003eBool-\u003eBlock-\u003eBlock",
          "package": "BlogLiterately",
          "partial": "Code Block",
          "signature": "HsHighlight-\u003eBool-\u003eBlock-\u003eBlock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Highlight.html#v:colouriseCodeBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform syntax highlighting on an entire Pandoc document.\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Highlight",
          "name": "colourisePandoc",
          "package": "BlogLiterately",
          "signature": "HsHighlight -\u003e Bool -\u003e Pandoc -\u003e Pandoc",
          "source": "src/Text-BlogLiterately-Highlight.html#colourisePandoc",
          "type": "function"
        },
        "index": {
          "description": "Perform syntax highlighting on an entire Pandoc document",
          "hierarchy": "Text BlogLiterately Highlight",
          "module": "Text.BlogLiterately.Highlight",
          "name": "colourisePandoc",
          "normalized": "HsHighlight-\u003eBool-\u003ePandoc-\u003ePandoc",
          "package": "BlogLiterately",
          "partial": "Pandoc",
          "signature": "HsHighlight-\u003eBool-\u003ePandoc-\u003ePandoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Highlight.html#v:colourisePandoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA default style that produces something that looks like the\n   source listings on Hackage.\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Highlight",
          "name": "defaultStylePrefs",
          "package": "BlogLiterately",
          "signature": "StylePrefs",
          "source": "src/Text-BlogLiterately-Highlight.html#defaultStylePrefs",
          "type": "function"
        },
        "index": {
          "description": "default style that produces something that looks like the source listings on Hackage",
          "hierarchy": "Text BlogLiterately Highlight",
          "module": "Text.BlogLiterately.Highlight",
          "name": "defaultStylePrefs",
          "package": "BlogLiterately",
          "partial": "Style Prefs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Highlight.html#v:defaultStylePrefs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead style preferences in from a file using the \u003ccode\u003eRead\u003c/code\u003e instance\n   for \u003ccode\u003eStylePrefs\u003c/code\u003e, or return the default style if the file name is\n   empty.\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Highlight",
          "name": "getStylePrefs",
          "package": "BlogLiterately",
          "signature": "Maybe FilePath -\u003e IO StylePrefs",
          "source": "src/Text-BlogLiterately-Highlight.html#getStylePrefs",
          "type": "function"
        },
        "index": {
          "description": "Read style preferences in from file using the Read instance for StylePrefs or return the default style if the file name is empty",
          "hierarchy": "Text BlogLiterately Highlight",
          "module": "Text.BlogLiterately.Highlight",
          "name": "getStylePrefs",
          "normalized": "Maybe FilePath-\u003eIO StylePrefs",
          "package": "BlogLiterately",
          "partial": "Style Prefs",
          "signature": "Maybe FilePath-\u003eIO StylePrefs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Highlight.html#v:getStylePrefs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrepend literate Haskell markers to some source code.\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Highlight",
          "name": "litify",
          "package": "BlogLiterately",
          "signature": "String -\u003e String",
          "source": "src/Text-BlogLiterately-Highlight.html#litify",
          "type": "function"
        },
        "index": {
          "description": "Prepend literate Haskell markers to some source code",
          "hierarchy": "Text BlogLiterately Highlight",
          "module": "Text.BlogLiterately.Highlight",
          "name": "litify",
          "normalized": "String-\u003eString",
          "package": "BlogLiterately",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Highlight.html#v:litify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace \u003ccode\u003e\u003cbr/\u003e\u003c/code\u003e tags with newlines.\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Highlight",
          "name": "replaceBreaks",
          "package": "BlogLiterately",
          "signature": "String -\u003e String",
          "source": "src/Text-BlogLiterately-Highlight.html#replaceBreaks",
          "type": "function"
        },
        "index": {
          "description": "Replace br tags with newlines",
          "hierarchy": "Text BlogLiterately Highlight",
          "module": "Text.BlogLiterately.Highlight",
          "name": "replaceBreaks",
          "normalized": "String-\u003eString",
          "package": "BlogLiterately",
          "partial": "Breaks",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Highlight.html#v:replaceBreaks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUploading images embedded in posts to the server.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.BlogLiterately.Image",
          "name": "Image",
          "package": "BlogLiterately",
          "source": "src/Text-BlogLiterately-Image.html",
          "type": "module"
        },
        "index": {
          "description": "Uploading images embedded in posts to the server",
          "hierarchy": "Text BlogLiterately Image",
          "module": "Text.BlogLiterately.Image",
          "name": "Image",
          "package": "BlogLiterately",
          "partial": "Image",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Image.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrepare a file for upload.\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Image",
          "name": "mkMediaObject",
          "package": "BlogLiterately",
          "signature": "FilePath -\u003e IO (Maybe Value)",
          "source": "src/Text-BlogLiterately-Image.html#mkMediaObject",
          "type": "function"
        },
        "index": {
          "description": "Prepare file for upload",
          "hierarchy": "Text BlogLiterately Image",
          "module": "Text.BlogLiterately.Image",
          "name": "mkMediaObject",
          "normalized": "FilePath-\u003eIO(Maybe Value)",
          "package": "BlogLiterately",
          "partial": "Media Object",
          "signature": "FilePath-\u003eIO(Maybe Value)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Image.html#v:mkMediaObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform a document by uploading any \"local\" images to the\n   server, and replacing their filenames with the URLs returned by\n   the server.  Only upload any given image once (determined by file\n   name), even across runs: uploaded images and their associated URL\n   on the server is tracked in a special dotfile,\n   \u003ccode\u003e.BlogLiterately-uploaded-images\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Image",
          "name": "uploadAllImages",
          "package": "BlogLiterately",
          "signature": "BlogLiterately -\u003e Pandoc -\u003e IO Pandoc",
          "source": "src/Text-BlogLiterately-Image.html#uploadAllImages",
          "type": "function"
        },
        "index": {
          "description": "Transform document by uploading any local images to the server and replacing their filenames with the URLs returned by the server Only upload any given image once determined by file name even across runs uploaded images and their associated URL on the server is tracked in special dotfile BlogLiterately-uploaded-images",
          "hierarchy": "Text BlogLiterately Image",
          "module": "Text.BlogLiterately.Image",
          "name": "uploadAllImages",
          "normalized": "BlogLiterately-\u003ePandoc-\u003eIO Pandoc",
          "package": "BlogLiterately",
          "partial": "All Images",
          "signature": "BlogLiterately-\u003ePandoc-\u003eIO Pandoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Image.html#v:uploadAllImages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpload a file using the \u003ccode\u003emetaWeblog.newMediaObject\u003c/code\u003e XML-RPC method\n   call.\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Image",
          "name": "uploadIt",
          "package": "BlogLiterately",
          "signature": "String -\u003e FilePath -\u003e BlogLiterately -\u003e IO (Maybe Value)",
          "source": "src/Text-BlogLiterately-Image.html#uploadIt",
          "type": "function"
        },
        "index": {
          "description": "Upload file using the metaWeblog.newMediaObject XML-RPC method call",
          "hierarchy": "Text BlogLiterately Image",
          "module": "Text.BlogLiterately.Image",
          "name": "uploadIt",
          "normalized": "String-\u003eFilePath-\u003eBlogLiterately-\u003eIO(Maybe Value)",
          "package": "BlogLiterately",
          "partial": "It",
          "signature": "String-\u003eFilePath-\u003eBlogLiterately-\u003eIO(Maybe Value)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Image.html#v:uploadIt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtilities for working with embedded LaTeX.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.BlogLiterately.LaTeX",
          "name": "LaTeX",
          "package": "BlogLiterately",
          "source": "src/Text-BlogLiterately-LaTeX.html",
          "type": "module"
        },
        "index": {
          "description": "Utilities for working with embedded LaTeX",
          "hierarchy": "Text BlogLiterately LaTeX",
          "module": "Text.BlogLiterately.LaTeX",
          "name": "LaTeX",
          "package": "BlogLiterately",
          "partial": "La Te",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-LaTeX.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWordPress can render LaTeX, but expects it in a special non-standard\n   format (\u003ccode\u003e$latex foo$\u003c/code\u003e).  The \u003ccode\u003ewpTeXify\u003c/code\u003e function formats LaTeX code\n   using this format so that it can be processed by WordPress.\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.LaTeX",
          "name": "wpTeXify",
          "package": "BlogLiterately",
          "signature": "Pandoc -\u003e Pandoc",
          "source": "src/Text-BlogLiterately-LaTeX.html#wpTeXify",
          "type": "function"
        },
        "index": {
          "description": "WordPress can render LaTeX but expects it in special non-standard format latex foo The wpTeXify function formats LaTeX code using this format so that it can be processed by WordPress",
          "hierarchy": "Text BlogLiterately LaTeX",
          "module": "Text.BlogLiterately.LaTeX",
          "name": "wpTeXify",
          "normalized": "Pandoc-\u003ePandoc",
          "package": "BlogLiterately",
          "partial": "Te Xify",
          "signature": "Pandoc-\u003ePandoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-LaTeX.html#v:wpTeXify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParsing configuration options from special \u003ccode\u003e[BLOpts]\u003c/code\u003e blocks.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.BlogLiterately.Options.Parse",
          "name": "Parse",
          "package": "BlogLiterately",
          "source": "src/Text-BlogLiterately-Options-Parse.html",
          "type": "module"
        },
        "index": {
          "description": "Parsing configuration options from special BLOpts blocks",
          "hierarchy": "Text BlogLiterately Options Parse",
          "module": "Text.BlogLiterately.Options.Parse",
          "name": "Parse",
          "package": "BlogLiterately",
          "partial": "Parse",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options-Parse.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a single line from a \u003ccode\u003e[BLOpts]\u003c/code\u003e block.\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Options.Parse",
          "name": "parseBLOption",
          "package": "BlogLiterately",
          "signature": "Parser BlogLiterately",
          "source": "src/Text-BlogLiterately-Options-Parse.html#parseBLOption",
          "type": "function"
        },
        "index": {
          "description": "Parse single line from BLOpts block",
          "hierarchy": "Text BlogLiterately Options Parse",
          "module": "Text.BlogLiterately.Options.Parse",
          "name": "parseBLOption",
          "package": "BlogLiterately",
          "partial": "BLOption",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options-Parse.html#v:parseBLOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a single line from a \u003ccode\u003e[BLOpts]\u003c/code\u003e block.\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Options.Parse",
          "name": "readBLOption",
          "package": "BlogLiterately",
          "signature": "String -\u003e Either ParseError BlogLiterately",
          "source": "src/Text-BlogLiterately-Options-Parse.html#readBLOption",
          "type": "function"
        },
        "index": {
          "description": "Read single line from BLOpts block",
          "hierarchy": "Text BlogLiterately Options Parse",
          "module": "Text.BlogLiterately.Options.Parse",
          "name": "readBLOption",
          "normalized": "String-\u003eEither ParseError BlogLiterately",
          "package": "BlogLiterately",
          "partial": "BLOption",
          "signature": "String-\u003eEither ParseError BlogLiterately",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options-Parse.html#v:readBLOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert the contents of a \u003ccode\u003e[BLOpts]\u003c/code\u003e block into an options record\n   and a list of parse errors.\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Options.Parse",
          "name": "readBLOptions",
          "package": "BlogLiterately",
          "signature": "String -\u003e ([ParseError], BlogLiterately)",
          "source": "src/Text-BlogLiterately-Options-Parse.html#readBLOptions",
          "type": "function"
        },
        "index": {
          "description": "Convert the contents of BLOpts block into an options record and list of parse errors",
          "hierarchy": "Text BlogLiterately Options Parse",
          "module": "Text.BlogLiterately.Options.Parse",
          "name": "readBLOptions",
          "normalized": "String-\u003e([ParseError],BlogLiterately)",
          "package": "BlogLiterately",
          "partial": "BLOptions",
          "signature": "String-\u003e([ParseError],BlogLiterately)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options-Parse.html#v:readBLOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConfiguation and command-line options.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.BlogLiterately.Options",
          "name": "Options",
          "package": "BlogLiterately",
          "source": "src/Text-BlogLiterately-Options.html",
          "type": "module"
        },
        "index": {
          "description": "Configuation and command-line options",
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "Options",
          "package": "BlogLiterately",
          "partial": "Options",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConfiguration record (and command-line options) for \u003ccode\u003eBlogLiterately\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Options",
          "name": "BlogLiterately",
          "package": "BlogLiterately",
          "source": "src/Text-BlogLiterately-Options.html#BlogLiterately",
          "type": "data"
        },
        "index": {
          "description": "Configuration record and command-line options for BlogLiterately",
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "BlogLiterately",
          "package": "BlogLiterately",
          "partial": "Blog Literately",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#t:BlogLiterately"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.BlogLiterately.Options",
          "name": "BlogLiterately",
          "package": "BlogLiterately",
          "signature": "BlogLiterately",
          "source": "src/Text-BlogLiterately-Options.html#BlogLiterately",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "BlogLiterately",
          "package": "BlogLiterately",
          "partial": "Blog Literately",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:BlogLiterately"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBlog xmlrpc URL\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Options",
          "name": "_blog",
          "package": "BlogLiterately",
          "signature": "Maybe String",
          "source": "src/Text-BlogLiterately-Options.html#BlogLiterately",
          "type": "function"
        },
        "index": {
          "description": "Blog xmlrpc URL",
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "_blog",
          "package": "BlogLiterately",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:_blog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBlog-specific identifier\n   (e.g. for blogging software\n   handling multiple blogs)\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Options",
          "name": "_blogid",
          "package": "BlogLiterately",
          "signature": "Maybe String",
          "source": "src/Text-BlogLiterately-Options.html#BlogLiterately",
          "type": "function"
        },
        "index": {
          "description": "Blog-specific identifier e.g for blogging software handling multiple blogs",
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "_blogid",
          "package": "BlogLiterately",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:_blogid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCategories for the post\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Options",
          "name": "_categories",
          "package": "BlogLiterately",
          "signature": "[String]",
          "source": "src/Text-BlogLiterately-Options.html#BlogLiterately",
          "type": "function"
        },
        "index": {
          "description": "Categories for the post",
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "_categories",
          "normalized": "[String]",
          "package": "BlogLiterately",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:_categories"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcess citations? (default: true)\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Options",
          "name": "_citations",
          "package": "BlogLiterately",
          "signature": "Maybe Bool",
          "source": "src/Text-BlogLiterately-Options.html#BlogLiterately",
          "type": "function"
        },
        "index": {
          "description": "Process citations default true",
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "_citations",
          "package": "BlogLiterately",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:_citations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFile to post\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Options",
          "name": "_file",
          "package": "BlogLiterately",
          "signature": "Maybe String",
          "source": "src/Text-BlogLiterately-Options.html#BlogLiterately",
          "type": "function"
        },
        "index": {
          "description": "File to post",
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "_file",
          "package": "BlogLiterately",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:_file"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormat of the file\n   (currently supported:\n   markdown, rst)\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Options",
          "name": "_format",
          "package": "BlogLiterately",
          "signature": "Maybe String",
          "source": "src/Text-BlogLiterately-Options.html#BlogLiterately",
          "type": "function"
        },
        "index": {
          "description": "Format of the file currently supported markdown rst",
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "_format",
          "package": "BlogLiterately",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:_format"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAutomatically process ghci sessions?\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Options",
          "name": "_ghci",
          "package": "BlogLiterately",
          "signature": "Maybe Bool",
          "source": "src/Text-BlogLiterately-Options.html#BlogLiterately",
          "type": "function"
        },
        "index": {
          "description": "Automatically process ghci sessions",
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "_ghci",
          "package": "BlogLiterately",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:_ghci"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHaskell highlighting mode\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Options",
          "name": "_hsHighlight",
          "package": "BlogLiterately",
          "signature": "Maybe HsHighlight",
          "source": "src/Text-BlogLiterately-Options.html#BlogLiterately",
          "type": "function"
        },
        "index": {
          "description": "Haskell highlighting mode",
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "_hsHighlight",
          "package": "BlogLiterately",
          "partial": "Highlight",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:_hsHighlight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDon't upload anything;\n   just output HTML to\n   stdout.\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Options",
          "name": "_htmlOnly",
          "package": "BlogLiterately",
          "signature": "Maybe Bool",
          "source": "src/Text-BlogLiterately-Options.html#BlogLiterately",
          "type": "function"
        },
        "index": {
          "description": "Don upload anything just output HTML to stdout",
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "_htmlOnly",
          "package": "BlogLiterately",
          "partial": "Only",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:_htmlOnly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicate how to format math\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Options",
          "name": "_math",
          "package": "BlogLiterately",
          "signature": "Maybe String",
          "source": "src/Text-BlogLiterately-Options.html#BlogLiterately",
          "type": "function"
        },
        "index": {
          "description": "Indicate how to format math",
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "_math",
          "package": "BlogLiterately",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:_math"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse highlighting-kate for\n   non-Haskell?\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Options",
          "name": "_otherHighlight",
          "package": "BlogLiterately",
          "signature": "Maybe Bool",
          "source": "src/Text-BlogLiterately-Options.html#BlogLiterately",
          "type": "function"
        },
        "index": {
          "description": "Use highlighting-kate for non-Haskell",
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "_otherHighlight",
          "package": "BlogLiterately",
          "partial": "Highlight",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:_otherHighlight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \"page\" instead of a post\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Options",
          "name": "_page",
          "package": "BlogLiterately",
          "signature": "Maybe Bool",
          "source": "src/Text-BlogLiterately-Options.html#BlogLiterately",
          "type": "function"
        },
        "index": {
          "description": "Create page instead of post",
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "_page",
          "package": "BlogLiterately",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:_page"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBlog password (omit to be interactively prompted)\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Options",
          "name": "_password",
          "package": "BlogLiterately",
          "signature": "Maybe String",
          "source": "src/Text-BlogLiterately-Options.html#BlogLiterately",
          "type": "function"
        },
        "index": {
          "description": "Blog password omit to be interactively prompted",
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "_password",
          "package": "BlogLiterately",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:_password"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eID of a post to update\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Options",
          "name": "_postid",
          "package": "BlogLiterately",
          "signature": "Maybe String",
          "source": "src/Text-BlogLiterately-Options.html#BlogLiterately",
          "type": "function"
        },
        "index": {
          "description": "ID of post to update",
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "_postid",
          "package": "BlogLiterately",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:_postid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName of profile to use.\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Options",
          "name": "_profile",
          "package": "BlogLiterately",
          "signature": "Maybe String",
          "source": "src/Text-BlogLiterately-Options.html#BlogLiterately",
          "type": "function"
        },
        "index": {
          "description": "Name of profile to use",
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "_profile",
          "package": "BlogLiterately",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:_profile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShould the post be published?\n   (Otherwise it is uploaded as a draft.)\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Options",
          "name": "_publish",
          "package": "BlogLiterately",
          "signature": "Maybe Bool",
          "source": "src/Text-BlogLiterately-Options.html#BlogLiterately",
          "type": "function"
        },
        "index": {
          "description": "Should the post be published Otherwise it is uploaded as draft",
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "_publish",
          "package": "BlogLiterately",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:_publish"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName of a style file\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Options",
          "name": "_style",
          "package": "BlogLiterately",
          "signature": "Maybe String",
          "source": "src/Text-BlogLiterately-Options.html#BlogLiterately",
          "type": "function"
        },
        "index": {
          "description": "Name of style file",
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "_style",
          "package": "BlogLiterately",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:_style"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTags for the post\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Options",
          "name": "_tags",
          "package": "BlogLiterately",
          "signature": "[String]",
          "source": "src/Text-BlogLiterately-Options.html#BlogLiterately",
          "type": "function"
        },
        "index": {
          "description": "Tags for the post",
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "_tags",
          "normalized": "[String]",
          "package": "BlogLiterately",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:_tags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePost title\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Options",
          "name": "_title",
          "package": "BlogLiterately",
          "signature": "Maybe String",
          "source": "src/Text-BlogLiterately-Options.html#BlogLiterately",
          "type": "function"
        },
        "index": {
          "description": "Post title",
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "_title",
          "package": "BlogLiterately",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:_title"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a table of contents?\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Options",
          "name": "_toc",
          "package": "BlogLiterately",
          "signature": "Maybe Bool",
          "source": "src/Text-BlogLiterately-Options.html#BlogLiterately",
          "type": "function"
        },
        "index": {
          "description": "Generate table of contents",
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "_toc",
          "package": "BlogLiterately",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:_toc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAutomatically upload images?\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Options",
          "name": "_uploadImages",
          "package": "BlogLiterately",
          "signature": "Maybe Bool",
          "source": "src/Text-BlogLiterately-Options.html#BlogLiterately",
          "type": "function"
        },
        "index": {
          "description": "Automatically upload images",
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "_uploadImages",
          "package": "BlogLiterately",
          "partial": "Images",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:_uploadImages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBlog user name\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Options",
          "name": "_user",
          "package": "BlogLiterately",
          "signature": "Maybe String",
          "source": "src/Text-BlogLiterately-Options.html#BlogLiterately",
          "type": "function"
        },
        "index": {
          "description": "Blog user name",
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "_user",
          "package": "BlogLiterately",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:_user"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormat LaTeX for WordPress?\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Options",
          "name": "_wplatex",
          "package": "BlogLiterately",
          "signature": "Maybe Bool",
          "source": "src/Text-BlogLiterately-Options.html#BlogLiterately",
          "type": "function"
        },
        "index": {
          "description": "Format LaTeX for WordPress",
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "_wplatex",
          "package": "BlogLiterately",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:_wplatex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtension arguments, for use e.g. by\n   custom transforms\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Options",
          "name": "_xtra",
          "package": "BlogLiterately",
          "signature": "[String]",
          "source": "src/Text-BlogLiterately-Options.html#BlogLiterately",
          "type": "function"
        },
        "index": {
          "description": "Extension arguments for use e.g by custom transforms",
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "_xtra",
          "normalized": "[String]",
          "package": "BlogLiterately",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:_xtra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCommand-line configuration for use with \u003ccode\u003ecmdargs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Options",
          "name": "blOpts",
          "package": "BlogLiterately",
          "signature": "BlogLiterately",
          "source": "src/Text-BlogLiterately-Options.html#blOpts",
          "type": "function"
        },
        "index": {
          "description": "Command-line configuration for use with cmdargs",
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "blOpts",
          "package": "BlogLiterately",
          "partial": "Opts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:blOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.BlogLiterately.Options",
          "name": "blog",
          "package": "BlogLiterately",
          "signature": "Lens' BlogLiterately (Maybe String)",
          "source": "src/Text-BlogLiterately-Options.html#blog",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "blog",
          "package": "BlogLiterately",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:blog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.BlogLiterately.Options",
          "name": "blog'",
          "package": "BlogLiterately",
          "signature": "BlogLiterately -\u003e String",
          "source": "src/Text-BlogLiterately-Options.html#blog%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "blog'",
          "normalized": "BlogLiterately-\u003eString",
          "package": "BlogLiterately",
          "signature": "BlogLiterately-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:blog-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.BlogLiterately.Options",
          "name": "blogid",
          "package": "BlogLiterately",
          "signature": "Lens' BlogLiterately (Maybe String)",
          "source": "src/Text-BlogLiterately-Options.html#blogid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "blogid",
          "package": "BlogLiterately",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:blogid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.BlogLiterately.Options",
          "name": "blogid'",
          "package": "BlogLiterately",
          "signature": "BlogLiterately -\u003e String",
          "source": "src/Text-BlogLiterately-Options.html#blogid%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "blogid'",
          "normalized": "BlogLiterately-\u003eString",
          "package": "BlogLiterately",
          "signature": "BlogLiterately-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:blogid-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.BlogLiterately.Options",
          "name": "categories",
          "package": "BlogLiterately",
          "signature": "Lens' BlogLiterately [String]",
          "source": "src/Text-BlogLiterately-Options.html#categories",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "categories",
          "normalized": "Lens' BlogLiterately[String]",
          "package": "BlogLiterately",
          "signature": "Lens' BlogLiterately[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:categories"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.BlogLiterately.Options",
          "name": "citations",
          "package": "BlogLiterately",
          "signature": "Lens' BlogLiterately (Maybe Bool)",
          "source": "src/Text-BlogLiterately-Options.html#citations",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "citations",
          "package": "BlogLiterately",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:citations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.BlogLiterately.Options",
          "name": "citations'",
          "package": "BlogLiterately",
          "signature": "BlogLiterately -\u003e Bool",
          "source": "src/Text-BlogLiterately-Options.html#citations%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "citations'",
          "normalized": "BlogLiterately-\u003eBool",
          "package": "BlogLiterately",
          "signature": "BlogLiterately-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:citations-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.BlogLiterately.Options",
          "name": "file",
          "package": "BlogLiterately",
          "signature": "Lens' BlogLiterately (Maybe String)",
          "source": "src/Text-BlogLiterately-Options.html#file",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "file",
          "package": "BlogLiterately",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:file"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.BlogLiterately.Options",
          "name": "file'",
          "package": "BlogLiterately",
          "signature": "BlogLiterately -\u003e String",
          "source": "src/Text-BlogLiterately-Options.html#file%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "file'",
          "normalized": "BlogLiterately-\u003eString",
          "package": "BlogLiterately",
          "signature": "BlogLiterately-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:file-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.BlogLiterately.Options",
          "name": "format",
          "package": "BlogLiterately",
          "signature": "Lens' BlogLiterately (Maybe String)",
          "source": "src/Text-BlogLiterately-Options.html#format",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "format",
          "package": "BlogLiterately",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:format"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.BlogLiterately.Options",
          "name": "format'",
          "package": "BlogLiterately",
          "signature": "BlogLiterately -\u003e String",
          "source": "src/Text-BlogLiterately-Options.html#format%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "format'",
          "normalized": "BlogLiterately-\u003eString",
          "package": "BlogLiterately",
          "signature": "BlogLiterately-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:format-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.BlogLiterately.Options",
          "name": "ghci",
          "package": "BlogLiterately",
          "signature": "Lens' BlogLiterately (Maybe Bool)",
          "source": "src/Text-BlogLiterately-Options.html#ghci",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "ghci",
          "package": "BlogLiterately",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:ghci"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.BlogLiterately.Options",
          "name": "ghci'",
          "package": "BlogLiterately",
          "signature": "BlogLiterately -\u003e Bool",
          "source": "src/Text-BlogLiterately-Options.html#ghci%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "ghci'",
          "normalized": "BlogLiterately-\u003eBool",
          "package": "BlogLiterately",
          "signature": "BlogLiterately-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:ghci-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.BlogLiterately.Options",
          "name": "hsHighlight",
          "package": "BlogLiterately",
          "signature": "Lens' BlogLiterately (Maybe HsHighlight)",
          "source": "src/Text-BlogLiterately-Options.html#hsHighlight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "hsHighlight",
          "package": "BlogLiterately",
          "partial": "Highlight",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:hsHighlight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.BlogLiterately.Options",
          "name": "hsHighlight'",
          "package": "BlogLiterately",
          "signature": "BlogLiterately -\u003e HsHighlight",
          "source": "src/Text-BlogLiterately-Options.html#hsHighlight%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "hsHighlight'",
          "normalized": "BlogLiterately-\u003eHsHighlight",
          "package": "BlogLiterately",
          "partial": "Highlight'",
          "signature": "BlogLiterately-\u003eHsHighlight",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:hsHighlight-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.BlogLiterately.Options",
          "name": "htmlOnly",
          "package": "BlogLiterately",
          "signature": "Lens' BlogLiterately (Maybe Bool)",
          "source": "src/Text-BlogLiterately-Options.html#htmlOnly",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "htmlOnly",
          "package": "BlogLiterately",
          "partial": "Only",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:htmlOnly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.BlogLiterately.Options",
          "name": "htmlOnly'",
          "package": "BlogLiterately",
          "signature": "BlogLiterately -\u003e Bool",
          "source": "src/Text-BlogLiterately-Options.html#htmlOnly%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "htmlOnly'",
          "normalized": "BlogLiterately-\u003eBool",
          "package": "BlogLiterately",
          "partial": "Only'",
          "signature": "BlogLiterately-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:htmlOnly-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.BlogLiterately.Options",
          "name": "math",
          "package": "BlogLiterately",
          "signature": "Lens' BlogLiterately (Maybe String)",
          "source": "src/Text-BlogLiterately-Options.html#math",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "math",
          "package": "BlogLiterately",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:math"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.BlogLiterately.Options",
          "name": "math'",
          "package": "BlogLiterately",
          "signature": "BlogLiterately -\u003e String",
          "source": "src/Text-BlogLiterately-Options.html#math%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "math'",
          "normalized": "BlogLiterately-\u003eString",
          "package": "BlogLiterately",
          "signature": "BlogLiterately-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:math-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.BlogLiterately.Options",
          "name": "otherHighlight",
          "package": "BlogLiterately",
          "signature": "Lens' BlogLiterately (Maybe Bool)",
          "source": "src/Text-BlogLiterately-Options.html#otherHighlight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "otherHighlight",
          "package": "BlogLiterately",
          "partial": "Highlight",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:otherHighlight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.BlogLiterately.Options",
          "name": "otherHighlight'",
          "package": "BlogLiterately",
          "signature": "BlogLiterately -\u003e Bool",
          "source": "src/Text-BlogLiterately-Options.html#otherHighlight%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "otherHighlight'",
          "normalized": "BlogLiterately-\u003eBool",
          "package": "BlogLiterately",
          "partial": "Highlight'",
          "signature": "BlogLiterately-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:otherHighlight-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.BlogLiterately.Options",
          "name": "page",
          "package": "BlogLiterately",
          "signature": "Lens' BlogLiterately (Maybe Bool)",
          "source": "src/Text-BlogLiterately-Options.html#page",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "page",
          "package": "BlogLiterately",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:page"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.BlogLiterately.Options",
          "name": "page'",
          "package": "BlogLiterately",
          "signature": "BlogLiterately -\u003e Bool",
          "source": "src/Text-BlogLiterately-Options.html#page%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "page'",
          "normalized": "BlogLiterately-\u003eBool",
          "package": "BlogLiterately",
          "signature": "BlogLiterately-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:page-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.BlogLiterately.Options",
          "name": "password",
          "package": "BlogLiterately",
          "signature": "Lens' BlogLiterately (Maybe String)",
          "source": "src/Text-BlogLiterately-Options.html#password",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "password",
          "package": "BlogLiterately",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:password"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.BlogLiterately.Options",
          "name": "password'",
          "package": "BlogLiterately",
          "signature": "BlogLiterately -\u003e String",
          "source": "src/Text-BlogLiterately-Options.html#password%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "password'",
          "normalized": "BlogLiterately-\u003eString",
          "package": "BlogLiterately",
          "signature": "BlogLiterately-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:password-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.BlogLiterately.Options",
          "name": "postid",
          "package": "BlogLiterately",
          "signature": "Lens' BlogLiterately (Maybe String)",
          "source": "src/Text-BlogLiterately-Options.html#postid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "postid",
          "package": "BlogLiterately",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:postid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.BlogLiterately.Options",
          "name": "postid'",
          "package": "BlogLiterately",
          "signature": "BlogLiterately -\u003e String",
          "source": "src/Text-BlogLiterately-Options.html#postid%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "postid'",
          "normalized": "BlogLiterately-\u003eString",
          "package": "BlogLiterately",
          "signature": "BlogLiterately-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:postid-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.BlogLiterately.Options",
          "name": "profile",
          "package": "BlogLiterately",
          "signature": "Lens' BlogLiterately (Maybe String)",
          "source": "src/Text-BlogLiterately-Options.html#profile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "profile",
          "package": "BlogLiterately",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:profile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.BlogLiterately.Options",
          "name": "profile'",
          "package": "BlogLiterately",
          "signature": "BlogLiterately -\u003e String",
          "source": "src/Text-BlogLiterately-Options.html#profile%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "profile'",
          "normalized": "BlogLiterately-\u003eString",
          "package": "BlogLiterately",
          "signature": "BlogLiterately-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:profile-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.BlogLiterately.Options",
          "name": "publish",
          "package": "BlogLiterately",
          "signature": "Lens' BlogLiterately (Maybe Bool)",
          "source": "src/Text-BlogLiterately-Options.html#publish",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "publish",
          "package": "BlogLiterately",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:publish"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.BlogLiterately.Options",
          "name": "publish'",
          "package": "BlogLiterately",
          "signature": "BlogLiterately -\u003e Bool",
          "source": "src/Text-BlogLiterately-Options.html#publish%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "publish'",
          "normalized": "BlogLiterately-\u003eBool",
          "package": "BlogLiterately",
          "signature": "BlogLiterately-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:publish-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.BlogLiterately.Options",
          "name": "style",
          "package": "BlogLiterately",
          "signature": "Lens' BlogLiterately (Maybe String)",
          "source": "src/Text-BlogLiterately-Options.html#style",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "style",
          "package": "BlogLiterately",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:style"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.BlogLiterately.Options",
          "name": "style'",
          "package": "BlogLiterately",
          "signature": "BlogLiterately -\u003e String",
          "source": "src/Text-BlogLiterately-Options.html#style%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "style'",
          "normalized": "BlogLiterately-\u003eString",
          "package": "BlogLiterately",
          "signature": "BlogLiterately-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:style-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.BlogLiterately.Options",
          "name": "tags",
          "package": "BlogLiterately",
          "signature": "Lens' BlogLiterately [String]",
          "source": "src/Text-BlogLiterately-Options.html#tags",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "tags",
          "normalized": "Lens' BlogLiterately[String]",
          "package": "BlogLiterately",
          "signature": "Lens' BlogLiterately[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:tags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.BlogLiterately.Options",
          "name": "title",
          "package": "BlogLiterately",
          "signature": "Lens' BlogLiterately (Maybe String)",
          "source": "src/Text-BlogLiterately-Options.html#title",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "title",
          "package": "BlogLiterately",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:title"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.BlogLiterately.Options",
          "name": "title'",
          "package": "BlogLiterately",
          "signature": "BlogLiterately -\u003e String",
          "source": "src/Text-BlogLiterately-Options.html#title%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "title'",
          "normalized": "BlogLiterately-\u003eString",
          "package": "BlogLiterately",
          "signature": "BlogLiterately-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:title-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.BlogLiterately.Options",
          "name": "toc",
          "package": "BlogLiterately",
          "signature": "Lens' BlogLiterately (Maybe Bool)",
          "source": "src/Text-BlogLiterately-Options.html#toc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "toc",
          "package": "BlogLiterately",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:toc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.BlogLiterately.Options",
          "name": "toc'",
          "package": "BlogLiterately",
          "signature": "BlogLiterately -\u003e Bool",
          "source": "src/Text-BlogLiterately-Options.html#toc%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "toc'",
          "normalized": "BlogLiterately-\u003eBool",
          "package": "BlogLiterately",
          "signature": "BlogLiterately-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:toc-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.BlogLiterately.Options",
          "name": "uploadImages",
          "package": "BlogLiterately",
          "signature": "Lens' BlogLiterately (Maybe Bool)",
          "source": "src/Text-BlogLiterately-Options.html#uploadImages",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "uploadImages",
          "package": "BlogLiterately",
          "partial": "Images",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:uploadImages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.BlogLiterately.Options",
          "name": "uploadImages'",
          "package": "BlogLiterately",
          "signature": "BlogLiterately -\u003e Bool",
          "source": "src/Text-BlogLiterately-Options.html#uploadImages%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "uploadImages'",
          "normalized": "BlogLiterately-\u003eBool",
          "package": "BlogLiterately",
          "partial": "Images'",
          "signature": "BlogLiterately-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:uploadImages-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.BlogLiterately.Options",
          "name": "user",
          "package": "BlogLiterately",
          "signature": "Lens' BlogLiterately (Maybe String)",
          "source": "src/Text-BlogLiterately-Options.html#user",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "user",
          "package": "BlogLiterately",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:user"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.BlogLiterately.Options",
          "name": "user'",
          "package": "BlogLiterately",
          "signature": "BlogLiterately -\u003e String",
          "source": "src/Text-BlogLiterately-Options.html#user%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "user'",
          "normalized": "BlogLiterately-\u003eString",
          "package": "BlogLiterately",
          "signature": "BlogLiterately-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:user-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.BlogLiterately.Options",
          "name": "wplatex",
          "package": "BlogLiterately",
          "signature": "Lens' BlogLiterately (Maybe Bool)",
          "source": "src/Text-BlogLiterately-Options.html#wplatex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "wplatex",
          "package": "BlogLiterately",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:wplatex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.BlogLiterately.Options",
          "name": "wplatex'",
          "package": "BlogLiterately",
          "signature": "BlogLiterately -\u003e Bool",
          "source": "src/Text-BlogLiterately-Options.html#wplatex%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "wplatex'",
          "normalized": "BlogLiterately-\u003eBool",
          "package": "BlogLiterately",
          "signature": "BlogLiterately-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:wplatex-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.BlogLiterately.Options",
          "name": "xtra",
          "package": "BlogLiterately",
          "signature": "Lens' BlogLiterately [String]",
          "source": "src/Text-BlogLiterately-Options.html#xtra",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text BlogLiterately Options",
          "module": "Text.BlogLiterately.Options",
          "name": "xtra",
          "normalized": "Lens' BlogLiterately[String]",
          "package": "BlogLiterately",
          "signature": "Lens' BlogLiterately[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:xtra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUploading posts to the server.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.BlogLiterately.Post",
          "name": "Post",
          "package": "BlogLiterately",
          "source": "src/Text-BlogLiterately-Post.html",
          "type": "module"
        },
        "index": {
          "description": "Uploading posts to the server",
          "hierarchy": "Text BlogLiterately Post",
          "module": "Text.BlogLiterately.Post",
          "name": "Post",
          "package": "BlogLiterately",
          "partial": "Post",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Post.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a name and a list of values, create a named \"array\" field\n   suitable for inclusion in an XML-RPC struct.\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Post",
          "name": "mkArray",
          "package": "BlogLiterately",
          "signature": "String -\u003e [a] -\u003e [(String, Value)]",
          "source": "src/Text-BlogLiterately-Post.html#mkArray",
          "type": "function"
        },
        "index": {
          "description": "Given name and list of values create named array field suitable for inclusion in an XML-RPC struct",
          "hierarchy": "Text BlogLiterately Post",
          "module": "Text.BlogLiterately.Post",
          "name": "mkArray",
          "normalized": "String-\u003e[a]-\u003e[(String,Value)]",
          "package": "BlogLiterately",
          "partial": "Array",
          "signature": "String-\u003e[a]-\u003e[(String,Value)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Post.html#v:mkArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrepare a post for uploading by creating something of the proper\n   form to be an argument to an XML-RPC call.\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Post",
          "name": "mkPost",
          "package": "BlogLiterately",
          "signature": "String-\u003e String-\u003e [String]-\u003e [String]-\u003e Bool-\u003e [(String, Value)]",
          "type": "function"
        },
        "index": {
          "description": "Prepare post for uploading by creating something of the proper form to be an argument to an XML-RPC call",
          "hierarchy": "Text BlogLiterately Post",
          "module": "Text.BlogLiterately.Post",
          "name": "mkPost",
          "normalized": "String-\u003eString-\u003e[String]-\u003e[String]-\u003eBool-\u003e[(String,Value)]",
          "package": "BlogLiterately",
          "partial": "Post",
          "signature": "String-\u003eString-\u003e[String]-\u003e[String]-\u003eBool-\u003e[(String,Value)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Post.html#v:mkPost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a configuration and a formatted post, upload it to the server.\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Post",
          "name": "postIt",
          "package": "BlogLiterately",
          "signature": "BlogLiterately -\u003e String -\u003e IO ()",
          "source": "src/Text-BlogLiterately-Post.html#postIt",
          "type": "function"
        },
        "index": {
          "description": "Given configuration and formatted post upload it to the server",
          "hierarchy": "Text BlogLiterately Post",
          "module": "Text.BlogLiterately.Post",
          "name": "postIt",
          "normalized": "BlogLiterately-\u003eString-\u003eIO()",
          "package": "BlogLiterately",
          "partial": "It",
          "signature": "BlogLiterately-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Post.html#v:postIt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for creating \u003ccode\u003eBlogLiterately\u003c/code\u003e executables.  By default,\n installing this library results in the installation of a standard\n executable, called \u003ccode\u003eBlogLiterately\u003c/code\u003e, which corresponds to\n \u003ccode\u003e\u003ca\u003eblogLiterately\u003c/a\u003e\u003c/code\u003e from this module.  However, you can create your\n own custom executables with extra custom functionality using\n \u003ccode\u003e\u003ca\u003eblogLiteratelyWith\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eblogLiteratelyCustom\u003c/a\u003e\u003c/code\u003e.  For example:\n\u003c/p\u003e\u003cpre\u003e module Main where\n import Text.BlogLiterately\n\n myCustomXF1 = pureTransform ...\n myCustomXF2 = Transform ...\n main = blogLiteratelyWith [myCustomXF1, myCustomXF2]\n\u003c/pre\u003e\u003cp\u003eSee \u003ca\u003eText.BlogLiterately.Transform\u003c/a\u003e for examples of transforms,\n additional transforms which are not enabled by default, and help in\n creating your own.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.BlogLiterately.Run",
          "name": "Run",
          "package": "BlogLiterately",
          "source": "src/Text-BlogLiterately-Run.html",
          "type": "module"
        },
        "index": {
          "description": "Functions for creating BlogLiterately executables By default installing this library results in the installation of standard executable called BlogLiterately which corresponds to blogLiterately from this module However you can create your own custom executables with extra custom functionality using blogLiteratelyWith or blogLiteratelyCustom For example module Main where import Text.BlogLiterately myCustomXF1 pureTransform myCustomXF2 Transform main blogLiteratelyWith myCustomXF1 myCustomXF2 See Text.BlogLiterately.Transform for examples of transforms additional transforms which are not enabled by default and help in creating your own",
          "hierarchy": "Text BlogLiterately Run",
          "module": "Text.BlogLiterately.Run",
          "name": "Run",
          "package": "BlogLiterately",
          "partial": "Run",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Run.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default BlogLiterately application.\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Run",
          "name": "blogLiterately",
          "package": "BlogLiterately",
          "signature": "IO ()",
          "source": "src/Text-BlogLiterately-Run.html#blogLiterately",
          "type": "function"
        },
        "index": {
          "description": "The default BlogLiterately application",
          "hierarchy": "Text BlogLiterately Run",
          "module": "Text.BlogLiterately.Run",
          "name": "blogLiterately",
          "normalized": "IO()",
          "package": "BlogLiterately",
          "partial": "Literately",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Run.html#v:blogLiterately"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eblogLiterately\u003c/a\u003e\u003c/code\u003e, but with the ability to \u003cem\u003ereplace\u003c/em\u003e the\n   standard \u003ccode\u003e\u003ca\u003eTransform\u003c/a\u003e\u003c/code\u003es.  Use this to implement custom interleaving\n   orders of the standard transforms and your own, to exclude some\n   or all of the standard transforms, etc.\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Run",
          "name": "blogLiteratelyCustom",
          "package": "BlogLiterately",
          "signature": "[Transform] -\u003e IO ()",
          "source": "src/Text-BlogLiterately-Run.html#blogLiteratelyCustom",
          "type": "function"
        },
        "index": {
          "description": "Like blogLiterately but with the ability to replace the standard Transform Use this to implement custom interleaving orders of the standard transforms and your own to exclude some or all of the standard transforms etc",
          "hierarchy": "Text BlogLiterately Run",
          "module": "Text.BlogLiterately.Run",
          "name": "blogLiteratelyCustom",
          "normalized": "[Transform]-\u003eIO()",
          "package": "BlogLiterately",
          "partial": "Literately Custom",
          "signature": "[Transform]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Run.html#v:blogLiteratelyCustom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eblogLiterately\u003c/a\u003e\u003c/code\u003e, but with the ability to specify additional\n \u003ccode\u003e\u003ca\u003eTransform\u003c/a\u003e\u003c/code\u003es which will be applied \u003cem\u003eafter\u003c/em\u003e the standard ones.\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Run",
          "name": "blogLiteratelyWith",
          "package": "BlogLiterately",
          "signature": "[Transform] -\u003e IO ()",
          "source": "src/Text-BlogLiterately-Run.html#blogLiteratelyWith",
          "type": "function"
        },
        "index": {
          "description": "Like blogLiterately but with the ability to specify additional Transform which will be applied after the standard ones",
          "hierarchy": "Text BlogLiterately Run",
          "module": "Text.BlogLiterately.Run",
          "name": "blogLiteratelyWith",
          "normalized": "[Transform]-\u003eIO()",
          "package": "BlogLiterately",
          "partial": "Literately With",
          "signature": "[Transform]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Run.html#v:blogLiteratelyWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTools for putting together a pipeline transforming the source for a\n post into a completely formatted HTML document.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.BlogLiterately.Transform",
          "name": "Transform",
          "package": "BlogLiterately",
          "source": "src/Text-BlogLiterately-Transform.html",
          "type": "module"
        },
        "index": {
          "description": "Tools for putting together pipeline transforming the source for post into completely formatted HTML document",
          "hierarchy": "Text BlogLiterately Transform",
          "module": "Text.BlogLiterately.Transform",
          "name": "Transform",
          "package": "BlogLiterately",
          "partial": "Transform",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Transform.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA document transformation consists of two parts: an actual\n   transformation, expressed as a function over Pandoc documents, and\n   a condition specifying whether the transformation should actually\n   be applied.\n\u003c/p\u003e\u003cp\u003eThe transformation itself takes a \u003ccode\u003e\u003ca\u003eBlogLiterately\u003c/a\u003e\u003c/code\u003e configuration\n   as an argument.  You may of course ignore it if you do not need\n   to know anything about the configuration.  The \u003ccode\u003e--xtra\u003c/code\u003e (or \u003ccode\u003e-x\u003c/code\u003e)\n   flag is also provided especially as a method of getting\n   information from the command-line to custom extensions. Arguments\n   passed via \u003ccode\u003e-x\u003c/code\u003e on the command line are available from the \u003ccode\u003e\u003ca\u003extra\u003c/a\u003e\u003c/code\u003e\n   field of the \u003ccode\u003e\u003ca\u003eBlogLiterately\u003c/a\u003e\u003c/code\u003e configuration.\n\u003c/p\u003e\u003cp\u003eThe transformation is then specified as a stateful computation\n   over both a \u003ccode\u003eBlogLiterately\u003c/code\u003e options record, and a \u003ccode\u003ePandoc\u003c/code\u003e\n   document.  It may also have effects in the \u003ccode\u003eIO\u003c/code\u003e monad.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If you have a pure function of type \u003ccode\u003eBlogLiterately -\u003e Pandoc\n     -\u003e Pandoc\u003c/code\u003e, you can use the \u003ccode\u003e\u003ca\u003epureTransform\u003c/a\u003e\u003c/code\u003e function to create a\n     \u003ccode\u003e\u003ca\u003eTransform\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e If you have a function of type \u003ccode\u003eBlogLiterately -\u003e Pandoc -\u003e IO\n     Pandoc\u003c/code\u003e, you can use \u003ccode\u003e\u003ca\u003eioTransform\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Otherwise you can directly create something of type \u003ccode\u003eStateT\n     (BlogLiterately, Pandoc) IO ()\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFor examples, see the implementations of the standard transforms\n   below.\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Transform",
          "name": "Transform",
          "package": "BlogLiterately",
          "source": "src/Text-BlogLiterately-Transform.html#Transform",
          "type": "data"
        },
        "index": {
          "description": "document transformation consists of two parts an actual transformation expressed as function over Pandoc documents and condition specifying whether the transformation should actually be applied The transformation itself takes BlogLiterately configuration as an argument You may of course ignore it if you do not need to know anything about the configuration The xtra or flag is also provided especially as method of getting information from the command-line to custom extensions Arguments passed via on the command line are available from the xtra field of the BlogLiterately configuration The transformation is then specified as stateful computation over both BlogLiterately options record and Pandoc document It may also have effects in the IO monad If you have pure function of type BlogLiterately Pandoc Pandoc you can use the pureTransform function to create Transform If you have function of type BlogLiterately Pandoc IO Pandoc you can use ioTransform Otherwise you can directly create something of type StateT BlogLiterately Pandoc IO For examples see the implementations of the standard transforms below",
          "hierarchy": "Text BlogLiterately Transform",
          "module": "Text.BlogLiterately.Transform",
          "name": "Transform",
          "package": "BlogLiterately",
          "partial": "Transform",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Transform.html#t:Transform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.BlogLiterately.Transform",
          "name": "Transform",
          "package": "BlogLiterately",
          "signature": "Transform",
          "source": "src/Text-BlogLiterately-Transform.html#Transform",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text BlogLiterately Transform",
          "module": "Text.BlogLiterately.Transform",
          "name": "Transform",
          "package": "BlogLiterately",
          "partial": "Transform",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Transform.html#v:Transform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCenter any images which occur in a paragraph by themselves.\n   Inline images are not affected.\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Transform",
          "name": "centerImagesXF",
          "package": "BlogLiterately",
          "signature": "Transform",
          "source": "src/Text-BlogLiterately-Transform.html#centerImagesXF",
          "type": "function"
        },
        "index": {
          "description": "Center any images which occur in paragraph by themselves Inline images are not affected",
          "hierarchy": "Text BlogLiterately Transform",
          "module": "Text.BlogLiterately.Transform",
          "name": "centerImagesXF",
          "package": "BlogLiterately",
          "partial": "Images XF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Transform.html#v:centerImagesXF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormat citations.\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Transform",
          "name": "citationsXF",
          "package": "BlogLiterately",
          "signature": "Transform",
          "source": "src/Text-BlogLiterately-Transform.html#citationsXF",
          "type": "function"
        },
        "index": {
          "description": "Format citations",
          "hierarchy": "Text BlogLiterately Transform",
          "module": "Text.BlogLiterately.Transform",
          "name": "citationsXF",
          "package": "BlogLiterately",
          "partial": "XF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Transform.html#v:citationsXF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn \u003ccode\u003eCRLF\u003c/code\u003e pairs into a single \u003ccode\u003eLF\u003c/code\u003e.  This is necessary since\n   \u003ccode\u003e\u003ca\u003ereadMarkdown\u003c/a\u003e\u003c/code\u003e is picky about line endings.\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Transform",
          "name": "fixLineEndings",
          "package": "BlogLiterately",
          "signature": "String -\u003e String",
          "source": "src/Text-BlogLiterately-Transform.html#fixLineEndings",
          "type": "function"
        },
        "index": {
          "description": "Turn CRLF pairs into single LF This is necessary since readMarkdown is picky about line endings",
          "hierarchy": "Text BlogLiterately Transform",
          "module": "Text.BlogLiterately.Transform",
          "name": "fixLineEndings",
          "normalized": "String-\u003eString",
          "package": "BlogLiterately",
          "partial": "Line Endings",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Transform.html#v:fixLineEndings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA document transformation, which can transform\n   both the document and the options and have\n   effects in the IO monad.  The options record\n   can be transformed because the document itself\n   may contain information which affects the options.\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Transform",
          "name": "getTransform",
          "package": "BlogLiterately",
          "signature": "StateT (BlogLiterately, Pandoc) IO ()",
          "source": "src/Text-BlogLiterately-Transform.html#Transform",
          "type": "function"
        },
        "index": {
          "description": "document transformation which can transform both the document and the options and have effects in the IO monad The options record can be transformed because the document itself may contain information which affects the options",
          "hierarchy": "Text BlogLiterately Transform",
          "module": "Text.BlogLiterately.Transform",
          "name": "getTransform",
          "normalized": "StateT(BlogLiterately,Pandoc)IO()",
          "package": "BlogLiterately",
          "partial": "Transform",
          "signature": "StateT(BlogLiterately,Pandoc)IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Transform.html#v:getTransform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormat embedded \u003ccode\u003eghci\u003c/code\u003e sessions (if the \u003ccode\u003eghci\u003c/code\u003e flag is set).\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Transform",
          "name": "ghciXF",
          "package": "BlogLiterately",
          "signature": "Transform",
          "source": "src/Text-BlogLiterately-Transform.html#ghciXF",
          "type": "function"
        },
        "index": {
          "description": "Format embedded ghci sessions if the ghci flag is set",
          "hierarchy": "Text BlogLiterately Transform",
          "module": "Text.BlogLiterately.Transform",
          "name": "ghciXF",
          "package": "BlogLiterately",
          "partial": "XF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Transform.html#v:ghciXF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a user-supplied style file and add its contents to the\n   highlighting options.\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Transform",
          "name": "highlightOptsXF",
          "package": "BlogLiterately",
          "signature": "Transform",
          "source": "src/Text-BlogLiterately-Transform.html#highlightOptsXF",
          "type": "function"
        },
        "index": {
          "description": "Read user-supplied style file and add its contents to the highlighting options",
          "hierarchy": "Text BlogLiterately Transform",
          "module": "Text.BlogLiterately.Transform",
          "name": "highlightOptsXF",
          "package": "BlogLiterately",
          "partial": "Opts XF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Transform.html#v:highlightOptsXF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform syntax highlighting on code blocks.\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Transform",
          "name": "highlightXF",
          "package": "BlogLiterately",
          "signature": "Transform",
          "source": "src/Text-BlogLiterately-Transform.html#highlightXF",
          "type": "function"
        },
        "index": {
          "description": "Perform syntax highlighting on code blocks",
          "hierarchy": "Text BlogLiterately Transform",
          "module": "Text.BlogLiterately.Transform",
          "name": "highlightXF",
          "package": "BlogLiterately",
          "partial": "XF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Transform.html#v:highlightXF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a transformation from a function in the \u003ccode\u003eIO\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Transform",
          "name": "ioTransform",
          "package": "BlogLiterately",
          "signature": "(BlogLiterately -\u003e Pandoc -\u003e IO Pandoc) -\u003e (BlogLiterately -\u003e Bool) -\u003e Transform",
          "source": "src/Text-BlogLiterately-Transform.html#ioTransform",
          "type": "function"
        },
        "index": {
          "description": "Construct transformation from function in the IO monad",
          "hierarchy": "Text BlogLiterately Transform",
          "module": "Text.BlogLiterately.Transform",
          "name": "ioTransform",
          "normalized": "(BlogLiterately-\u003ePandoc-\u003eIO Pandoc)-\u003e(BlogLiterately-\u003eBool)-\u003eTransform",
          "package": "BlogLiterately",
          "partial": "Transform",
          "signature": "(BlogLiterately-\u003ePandoc-\u003eIO Pandoc)-\u003e(BlogLiterately-\u003eBool)-\u003eTransform",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Transform.html#v:ioTransform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract blocks tagged with \u003ccode\u003e[BLOpts]\u003c/code\u003e and use their contents as\n   options.\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Transform",
          "name": "optionsXF",
          "package": "BlogLiterately",
          "signature": "Transform",
          "source": "src/Text-BlogLiterately-Transform.html#optionsXF",
          "type": "function"
        },
        "index": {
          "description": "Extract blocks tagged with BLOpts and use their contents as options",
          "hierarchy": "Text BlogLiterately Transform",
          "module": "Text.BlogLiterately.Transform",
          "name": "optionsXF",
          "package": "BlogLiterately",
          "partial": "XF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Transform.html#v:optionsXF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrompt the user for a password if the \u003ccode\u003eblog\u003c/code\u003e field is set but no\n   password has been provided.\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Transform",
          "name": "passwordXF",
          "package": "BlogLiterately",
          "signature": "Transform",
          "source": "src/Text-BlogLiterately-Transform.html#passwordXF",
          "type": "function"
        },
        "index": {
          "description": "Prompt the user for password if the blog field is set but no password has been provided",
          "hierarchy": "Text BlogLiterately Transform",
          "module": "Text.BlogLiterately.Transform",
          "name": "passwordXF",
          "package": "BlogLiterately",
          "partial": "XF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Transform.html#v:passwordXF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad options from a profile if one is specified.\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Transform",
          "name": "profileXF",
          "package": "BlogLiterately",
          "signature": "Transform",
          "source": "src/Text-BlogLiterately-Transform.html#profileXF",
          "type": "function"
        },
        "index": {
          "description": "Load options from profile if one is specified",
          "hierarchy": "Text BlogLiterately Transform",
          "module": "Text.BlogLiterately.Transform",
          "name": "profileXF",
          "package": "BlogLiterately",
          "partial": "XF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Transform.html#v:profileXF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a transformation from a pure function.\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Transform",
          "name": "pureTransform",
          "package": "BlogLiterately",
          "signature": "(BlogLiterately -\u003e Pandoc -\u003e Pandoc) -\u003e (BlogLiterately -\u003e Bool) -\u003e Transform",
          "source": "src/Text-BlogLiterately-Transform.html#pureTransform",
          "type": "function"
        },
        "index": {
          "description": "Construct transformation from pure function",
          "hierarchy": "Text BlogLiterately Transform",
          "module": "Text.BlogLiterately.Transform",
          "name": "pureTransform",
          "normalized": "(BlogLiterately-\u003ePandoc-\u003ePandoc)-\u003e(BlogLiterately-\u003eBool)-\u003eTransform",
          "package": "BlogLiterately",
          "partial": "Transform",
          "signature": "(BlogLiterately-\u003ePandoc-\u003ePandoc)-\u003e(BlogLiterately-\u003eBool)-\u003eTransform",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Transform.html#v:pureTransform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003eTransform\u003c/a\u003e\u003c/code\u003e (if its condition is met).\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Transform",
          "name": "runTransform",
          "package": "BlogLiterately",
          "signature": "Transform -\u003e StateT (BlogLiterately, Pandoc) IO ()",
          "source": "src/Text-BlogLiterately-Transform.html#runTransform",
          "type": "function"
        },
        "index": {
          "description": "Run Transform if its condition is met",
          "hierarchy": "Text BlogLiterately Transform",
          "module": "Text.BlogLiterately.Transform",
          "name": "runTransform",
          "normalized": "Transform-\u003eStateT(BlogLiterately,Pandoc)IO()",
          "package": "BlogLiterately",
          "partial": "Transform",
          "signature": "Transform-\u003eStateT(BlogLiterately,Pandoc)IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Transform.html#v:runTransform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a pipeline of \u003ccode\u003e\u003ca\u003eTransform\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Transform",
          "name": "runTransforms",
          "package": "BlogLiterately",
          "signature": "[Transform] -\u003e BlogLiterately -\u003e Pandoc -\u003e IO (BlogLiterately, Pandoc)",
          "source": "src/Text-BlogLiterately-Transform.html#runTransforms",
          "type": "function"
        },
        "index": {
          "description": "Run pipeline of Transform",
          "hierarchy": "Text BlogLiterately Transform",
          "module": "Text.BlogLiterately.Transform",
          "name": "runTransforms",
          "normalized": "[Transform]-\u003eBlogLiterately-\u003ePandoc-\u003eIO(BlogLiterately,Pandoc)",
          "package": "BlogLiterately",
          "partial": "Transforms",
          "signature": "[Transform]-\u003eBlogLiterately-\u003ePandoc-\u003eIO(BlogLiterately,Pandoc)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Transform.html#v:runTransforms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe standard set of transforms that are run by default (in order\n   from top to bottom):\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eoptionsXF\u003c/a\u003e\u003c/code\u003e: extract options specified in \u003ccode\u003e[BLOpts]\u003c/code\u003e blocks in the file\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eprofileXF\u003c/a\u003e\u003c/code\u003e: load the requested profile (if any)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003epasswordXF\u003c/a\u003e\u003c/code\u003e: prompt the user for a password if needed\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003etitleXF\u003c/a\u003e\u003c/code\u003e: extract the title from a special title block\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ewptexifyXF\u003c/a\u003e\u003c/code\u003e: turn LaTeX into WordPress format if requested\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eghciXF\u003c/a\u003e\u003c/code\u003e: run and typeset ghci sessions if requested\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003euploadImagesXF\u003c/a\u003e\u003c/code\u003e: upload images if requested\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ecenterImagesXF\u003c/a\u003e\u003c/code\u003e: center images occurring in their own paragraph\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ehighlightOptsXF\u003c/a\u003e\u003c/code\u003e: load the requested highlighting style file\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ehighlightXF\u003c/a\u003e\u003c/code\u003e: perform syntax highlighting\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ecitationsXF\u003c/a\u003e\u003c/code\u003e: process citations\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Text.BlogLiterately.Transform",
          "name": "standardTransforms",
          "package": "BlogLiterately",
          "signature": "[Transform]",
          "source": "src/Text-BlogLiterately-Transform.html#standardTransforms",
          "type": "function"
        },
        "index": {
          "description": "The standard set of transforms that are run by default in order from top to bottom optionsXF extract options specified in BLOpts blocks in the file profileXF load the requested profile if any passwordXF prompt the user for password if needed titleXF extract the title from special title block wptexifyXF turn LaTeX into WordPress format if requested ghciXF run and typeset ghci sessions if requested uploadImagesXF upload images if requested centerImagesXF center images occurring in their own paragraph highlightOptsXF load the requested highlighting style file highlightXF perform syntax highlighting citationsXF process citations",
          "hierarchy": "Text BlogLiterately Transform",
          "module": "Text.BlogLiterately.Transform",
          "name": "standardTransforms",
          "normalized": "[Transform]",
          "package": "BlogLiterately",
          "partial": "Transforms",
          "signature": "[Transform]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Transform.html#v:standardTransforms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePotentially extract a title from the metadata block, and set it\n   in the options record.\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Transform",
          "name": "titleXF",
          "package": "BlogLiterately",
          "signature": "Transform",
          "source": "src/Text-BlogLiterately-Transform.html#titleXF",
          "type": "function"
        },
        "index": {
          "description": "Potentially extract title from the metadata block and set it in the options record",
          "hierarchy": "Text BlogLiterately Transform",
          "module": "Text.BlogLiterately.Transform",
          "name": "titleXF",
          "package": "BlogLiterately",
          "partial": "XF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Transform.html#v:titleXF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpload embedded local images to the server (if the \u003ccode\u003euploadImages\u003c/code\u003e\n   flag is set).\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Transform",
          "name": "uploadImagesXF",
          "package": "BlogLiterately",
          "signature": "Transform",
          "source": "src/Text-BlogLiterately-Transform.html#uploadImagesXF",
          "type": "function"
        },
        "index": {
          "description": "Upload embedded local images to the server if the uploadImages flag is set",
          "hierarchy": "Text BlogLiterately Transform",
          "module": "Text.BlogLiterately.Transform",
          "name": "uploadImagesXF",
          "package": "BlogLiterately",
          "partial": "Images XF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Transform.html#v:uploadImagesXF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormat embedded LaTeX for WordPress (if the \u003ccode\u003ewplatex\u003c/code\u003e flag is set).\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Transform",
          "name": "wptexifyXF",
          "package": "BlogLiterately",
          "signature": "Transform",
          "source": "src/Text-BlogLiterately-Transform.html#wptexifyXF",
          "type": "function"
        },
        "index": {
          "description": "Format embedded LaTeX for WordPress if the wplatex flag is set",
          "hierarchy": "Text BlogLiterately Transform",
          "module": "Text.BlogLiterately.Transform",
          "name": "wptexifyXF",
          "package": "BlogLiterately",
          "partial": "XF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Transform.html#v:wptexifyXF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA condition under which to run the transformation.\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Transform",
          "name": "xfCond",
          "package": "BlogLiterately",
          "signature": "BlogLiterately -\u003e Bool",
          "source": "src/Text-BlogLiterately-Transform.html#Transform",
          "type": "function"
        },
        "index": {
          "description": "condition under which to run the transformation",
          "hierarchy": "Text BlogLiterately Transform",
          "module": "Text.BlogLiterately.Transform",
          "name": "xfCond",
          "normalized": "BlogLiterately-\u003eBool",
          "package": "BlogLiterately",
          "partial": "Cond",
          "signature": "BlogLiterately-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Transform.html#v:xfCond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform a complete input document string to an HTML output\n   string, given a list of transformation passes.\n\u003c/p\u003e",
          "module": "Text.BlogLiterately.Transform",
          "name": "xformDoc",
          "package": "BlogLiterately",
          "signature": "BlogLiterately -\u003e [Transform] -\u003e String -\u003e IO (BlogLiterately, String)",
          "source": "src/Text-BlogLiterately-Transform.html#xformDoc",
          "type": "function"
        },
        "index": {
          "description": "Transform complete input document string to an HTML output string given list of transformation passes",
          "hierarchy": "Text BlogLiterately Transform",
          "module": "Text.BlogLiterately.Transform",
          "name": "xformDoc",
          "normalized": "BlogLiterately-\u003e[Transform]-\u003eString-\u003eIO(BlogLiterately,String)",
          "package": "BlogLiterately",
          "partial": "Doc",
          "signature": "BlogLiterately-\u003e[Transform]-\u003eString-\u003eIO(BlogLiterately,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Transform.html#v:xformDoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is provided as a convenient wrapper which re-exports\n all the other \u003ccode\u003eText.BlogLiterately.*\u003c/code\u003e modules.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.BlogLiterately",
          "name": "BlogLiterately",
          "package": "BlogLiterately",
          "source": "src/Text-BlogLiterately.html",
          "type": "module"
        },
        "index": {
          "description": "This module is provided as convenient wrapper which re-exports all the other Text.BlogLiterately modules",
          "hierarchy": "Text BlogLiterately",
          "module": "Text.BlogLiterately",
          "name": "BlogLiterately",
          "package": "BlogLiterately",
          "partial": "Blog Literately",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately.html#"
      }
    }
  ]
]