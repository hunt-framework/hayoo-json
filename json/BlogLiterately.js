[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Block.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtilities for working with code blocks.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.BlogLiterately.Block",
        "fct-package": "BlogLiterately",
        "fct-signature": "module",
        "fct-source": "src/Text-BlogLiterately-Block.html",
        "fct-type": "module",
        "title": "Block"
      },
      "index": {
        "description": "Utilities for working with code blocks",
        "hierarchy": "Text BlogLiterately Block",
        "module": "Text.BlogLiterately.Block",
        "name": "Block",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "Block",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Block.html#v:onTag",
      "description": {
        "fct-descr": "\u003cp\u003eRun the given function on the attributes and source code of code\n   blocks with a tag matching the given tag (case insensitive).  On\n   any other blocks (which don't have a matching tag, or are not code\n   blocks), run the other function.\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Block",
        "fct-package": "BlogLiterately",
        "fct-signature": "String -\u003e (Attr -\u003e String -\u003e a) -\u003e (Block -\u003e a) -\u003e Block -\u003e a",
        "fct-source": "src/Text-BlogLiterately-Block.html#onTag",
        "fct-type": "function",
        "title": "onTag"
      },
      "index": {
        "description": "Run the given function on the attributes and source code of code blocks with tag matching the given tag case insensitive On any other blocks which don have matching tag or are not code blocks run the other function",
        "hierarchy": "Text BlogLiterately Block",
        "module": "Text.BlogLiterately.Block",
        "name": "onTag",
        "normalized": "String-\u003e(Attr-\u003eString-\u003ea)-\u003e(Block-\u003ea)-\u003eBlock-\u003ea",
        "package": "BlogLiterately",
        "partial": "Tag",
        "signature": "String-\u003e(Attr-\u003eString-\u003ea)-\u003e(Block-\u003ea)-\u003eBlock-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Block.html#v:unTag",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a block, if begins with a tag in square brackets, strip off\n   the tag and return a pair consisting of the tag and de-tagged\n   block.  Otherwise, return \u003ccode\u003eNothing\u003c/code\u003e and the unchanged block.\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Block",
        "fct-package": "BlogLiterately",
        "fct-signature": "String -\u003e (Maybe String, String)",
        "fct-source": "src/Text-BlogLiterately-Block.html#unTag",
        "fct-type": "function",
        "title": "unTag"
      },
      "index": {
        "description": "Given block if begins with tag in square brackets strip off the tag and return pair consisting of the tag and de-tagged block Otherwise return Nothing and the unchanged block",
        "hierarchy": "Text BlogLiterately Block",
        "module": "Text.BlogLiterately.Block",
        "name": "unTag",
        "normalized": "String-\u003e(Maybe String,String)",
        "package": "BlogLiterately",
        "partial": "Tag",
        "signature": "String-\u003e(Maybe String,String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Ghci.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFormat specially marked blocks as interactive ghci sessions.  Uses\n some ugly but effective code for interacting with an external ghci\n process taken from lhs2TeX.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.BlogLiterately.Ghci",
        "fct-package": "BlogLiterately",
        "fct-signature": "module",
        "fct-source": "src/Text-BlogLiterately-Ghci.html",
        "fct-type": "module",
        "title": "Ghci"
      },
      "index": {
        "description": "Format specially marked blocks as interactive ghci sessions Uses some ugly but effective code for interacting with an external ghci process taken from lhs2TeX",
        "hierarchy": "Text BlogLiterately Ghci",
        "module": "Text.BlogLiterately.Ghci",
        "name": "Ghci",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "Ghci",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Ghci.html#t:ProcessInfo",
      "description": {
        "fct-descr": "\u003cp\u003eInformation about a running process: stdin, stdout, stderr, and a\n   handle.\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Ghci",
        "fct-package": "BlogLiterately",
        "fct-signature": "type",
        "fct-source": "src/Text-BlogLiterately-Ghci.html#ProcessInfo",
        "fct-type": "type",
        "title": "ProcessInfo"
      },
      "index": {
        "description": "Information about running process stdin stdout stderr and handle",
        "hierarchy": "Text BlogLiterately Ghci",
        "module": "Text.BlogLiterately.Ghci",
        "name": "ProcessInfo",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "Process Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Ghci.html#v:breaks",
      "description": {
        "fct-module": "Text.BlogLiterately.Ghci",
        "fct-package": "BlogLiterately",
        "fct-signature": "([a] -\u003e Bool) -\u003e [a] -\u003e ([a], [a])",
        "fct-source": "src/Text-BlogLiterately-Ghci.html#breaks",
        "fct-type": "function",
        "title": "breaks"
      },
      "index": {
        "description": "",
        "hierarchy": "Text BlogLiterately Ghci",
        "module": "Text.BlogLiterately.Ghci",
        "name": "breaks",
        "normalized": "([a]-\u003eBool)-\u003e[a]-\u003e([a],[a])",
        "package": "BlogLiterately",
        "partial": "",
        "signature": "([a]-\u003eBool)-\u003e[a]-\u003e([a],[a])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Ghci.html#v:extract",
      "description": {
        "fct-module": "Text.BlogLiterately.Ghci",
        "fct-package": "BlogLiterately",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Text-BlogLiterately-Ghci.html#extract",
        "fct-type": "function",
        "title": "extract"
      },
      "index": {
        "description": "",
        "hierarchy": "Text BlogLiterately Ghci",
        "module": "Text.BlogLiterately.Ghci",
        "name": "extract",
        "normalized": "String-\u003eString",
        "package": "BlogLiterately",
        "partial": "",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Ghci.html#v:extract-39-",
      "description": {
        "fct-module": "Text.BlogLiterately.Ghci",
        "fct-package": "BlogLiterately",
        "fct-signature": "Handle -\u003e IO String",
        "fct-source": "src/Text-BlogLiterately-Ghci.html#extract%27",
        "fct-type": "function",
        "title": "extract'"
      },
      "index": {
        "description": "",
        "hierarchy": "Text BlogLiterately Ghci",
        "module": "Text.BlogLiterately.Ghci",
        "name": "extract'",
        "normalized": "Handle-\u003eIO String",
        "package": "BlogLiterately",
        "partial": "",
        "signature": "Handle-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Ghci.html#v:formatInlineGhci",
      "description": {
        "fct-descr": "\u003cp\u003eGiven the path to the \u003ccode\u003e.lhs\u003c/code\u003e source and its representation as a\n   \u003ccode\u003ePandoc\u003c/code\u003e document, \u003ccode\u003eformatInlineGhci\u003c/code\u003e finds any \u003ccode\u003e[ghci]\u003c/code\u003e blocks\n   in it, runs them through \u003ccode\u003eghci\u003c/code\u003e, and formats the results as an\n   interactive \u003ccode\u003eghci\u003c/code\u003e session.\n\u003c/p\u003e\u003cp\u003eLines beginning in the first column of the block are interpreted\n   as inputs.  Lines indented by one or more space are interpreted\n   as \u003cem\u003eexpected outputs\u003c/em\u003e.  Consecutive indented lines are\n   interpreted as one multi-line expected output, with a number of\n   spaces removed from the beginning of each line equal to the\n   number of spaces at the start of the first indented line.\n\u003c/p\u003e\u003cp\u003eIf the output for a given input is the same as the expected\n   output (or if no expected output is given), the result is typeset\n   normally.  If the actual and expected outputs differ, the actual\n   output is typeset first in red, then the expected output in blue.\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Ghci",
        "fct-package": "BlogLiterately",
        "fct-signature": "FilePath -\u003e Pandoc -\u003e IO Pandoc",
        "fct-source": "src/Text-BlogLiterately-Ghci.html#formatInlineGhci",
        "fct-type": "function",
        "title": "formatInlineGhci"
      },
      "index": {
        "description": "Given the path to the lhs source and its representation as Pandoc document formatInlineGhci finds any ghci blocks in it runs them through ghci and formats the results as an interactive ghci session Lines beginning in the first column of the block are interpreted as inputs Lines indented by one or more space are interpreted as expected outputs Consecutive indented lines are interpreted as one multi-line expected output with number of spaces removed from the beginning of each line equal to the number of spaces at the start of the first indented line If the output for given input is the same as the expected output or if no expected output is given the result is typeset normally If the actual and expected outputs differ the actual output is typeset first in red then the expected output in blue",
        "hierarchy": "Text BlogLiterately Ghci",
        "module": "Text.BlogLiterately.Ghci",
        "name": "formatInlineGhci",
        "normalized": "FilePath-\u003ePandoc-\u003eIO Pandoc",
        "package": "BlogLiterately",
        "partial": "Inline Ghci",
        "signature": "FilePath-\u003ePandoc-\u003eIO Pandoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Ghci.html#v:ghciEval",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate an expression using an external \u003ccode\u003eghci\u003c/code\u003e process.\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Ghci",
        "fct-package": "BlogLiterately",
        "fct-signature": "GhciInput -\u003e ReaderT ProcessInfo IO GhciOutput",
        "fct-source": "src/Text-BlogLiterately-Ghci.html#ghciEval",
        "fct-type": "function",
        "title": "ghciEval"
      },
      "index": {
        "description": "Evaluate an expression using an external ghci process",
        "hierarchy": "Text BlogLiterately Ghci",
        "module": "Text.BlogLiterately.Ghci",
        "name": "ghciEval",
        "normalized": "GhciInput-\u003eReaderT ProcessInfo IO GhciOutput",
        "package": "BlogLiterately",
        "partial": "Eval",
        "signature": "GhciInput-\u003eReaderT ProcessInfo IO GhciOutput"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Ghci.html#v:isLiterate",
      "description": {
        "fct-descr": "\u003cp\u003ePoor man's check to see whether we have a literate Haskell file.\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Ghci",
        "fct-package": "BlogLiterately",
        "fct-signature": "FilePath -\u003e IO Bool",
        "fct-source": "src/Text-BlogLiterately-Ghci.html#isLiterate",
        "fct-type": "function",
        "title": "isLiterate"
      },
      "index": {
        "description": "Poor man check to see whether we have literate Haskell file",
        "hierarchy": "Text BlogLiterately Ghci",
        "module": "Text.BlogLiterately.Ghci",
        "name": "isLiterate",
        "normalized": "FilePath-\u003eIO Bool",
        "package": "BlogLiterately",
        "partial": "Literate",
        "signature": "FilePath-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Ghci.html#v:magic",
      "description": {
        "fct-descr": "\u003cp\u003eThere is nothing magic about the magic string.\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Ghci",
        "fct-package": "BlogLiterately",
        "fct-signature": "String",
        "fct-source": "src/Text-BlogLiterately-Ghci.html#magic",
        "fct-type": "function",
        "title": "magic"
      },
      "index": {
        "description": "There is nothing magic about the magic string",
        "hierarchy": "Text BlogLiterately Ghci",
        "module": "Text.BlogLiterately.Ghci",
        "name": "magic",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Ghci.html#v:stopGhci",
      "description": {
        "fct-descr": "\u003cp\u003eStop a ghci process by passing it \u003ccode\u003e:q\u003c/code\u003e and waiting for it to exit.\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Ghci",
        "fct-package": "BlogLiterately",
        "fct-signature": "ProcessInfo -\u003e IO ()",
        "fct-source": "src/Text-BlogLiterately-Ghci.html#stopGhci",
        "fct-type": "function",
        "title": "stopGhci"
      },
      "index": {
        "description": "Stop ghci process by passing it and waiting for it to exit",
        "hierarchy": "Text BlogLiterately Ghci",
        "module": "Text.BlogLiterately.Ghci",
        "name": "stopGhci",
        "normalized": "ProcessInfo-\u003eIO()",
        "package": "BlogLiterately",
        "partial": "Ghci",
        "signature": "ProcessInfo-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Ghci.html#v:withGhciProcess",
      "description": {
        "fct-descr": "\u003cp\u003eStart an external ghci process, run a computation with access to\n   it, and finally stop the process.\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Ghci",
        "fct-package": "BlogLiterately",
        "fct-signature": "FilePath -\u003e ReaderT ProcessInfo IO a -\u003e IO a",
        "fct-source": "src/Text-BlogLiterately-Ghci.html#withGhciProcess",
        "fct-type": "function",
        "title": "withGhciProcess"
      },
      "index": {
        "description": "Start an external ghci process run computation with access to it and finally stop the process",
        "hierarchy": "Text BlogLiterately Ghci",
        "module": "Text.BlogLiterately.Ghci",
        "name": "withGhciProcess",
        "normalized": "FilePath-\u003eReaderT ProcessInfo IO a-\u003eIO a",
        "package": "BlogLiterately",
        "partial": "Ghci Process",
        "signature": "FilePath-\u003eReaderT ProcessInfo IO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Highlight.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSyntax highlighting.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.BlogLiterately.Highlight",
        "fct-package": "BlogLiterately",
        "fct-signature": "module",
        "fct-source": "src/Text-BlogLiterately-Highlight.html",
        "fct-type": "module",
        "title": "Highlight"
      },
      "index": {
        "description": "Syntax highlighting",
        "hierarchy": "Text BlogLiterately Highlight",
        "module": "Text.BlogLiterately.Highlight",
        "name": "Highlight",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "Highlight",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Highlight.html#t:HsHighlight",
      "description": {
        "fct-descr": "\u003cp\u003eFour modes for highlighting Haskell.\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Highlight",
        "fct-package": "BlogLiterately",
        "fct-signature": "data",
        "fct-source": "src/Text-BlogLiterately-Highlight.html#HsHighlight",
        "fct-type": "data",
        "title": "HsHighlight"
      },
      "index": {
        "description": "Four modes for highlighting Haskell",
        "hierarchy": "Text BlogLiterately Highlight",
        "module": "Text.BlogLiterately.Highlight",
        "name": "HsHighlight",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "Hs Highlight",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Highlight.html#t:StylePrefs",
      "description": {
        "fct-descr": "\u003cp\u003eStyle preferences are specified as a list of mappings from class\n   attributes to CSS style attributes.\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Highlight",
        "fct-package": "BlogLiterately",
        "fct-signature": "type",
        "fct-source": "src/Text-BlogLiterately-Highlight.html#StylePrefs",
        "fct-type": "type",
        "title": "StylePrefs"
      },
      "index": {
        "description": "Style preferences are specified as list of mappings from class attributes to CSS style attributes",
        "hierarchy": "Text BlogLiterately Highlight",
        "module": "Text.BlogLiterately.Highlight",
        "name": "StylePrefs",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "Style Prefs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Highlight.html#v:HsColourCSS",
      "description": {
        "fct-descr": "\u003cp\u003eUse hscolour in conjunction with\n   an external CSS style sheet.\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Highlight",
        "fct-package": "BlogLiterately",
        "fct-signature": "HsColourCSS",
        "fct-source": "src/Text-BlogLiterately-Highlight.html#HsHighlight",
        "fct-type": "function",
        "title": "HsColourCSS"
      },
      "index": {
        "description": "Use hscolour in conjunction with an external CSS style sheet",
        "hierarchy": "Text BlogLiterately Highlight",
        "module": "Text.BlogLiterately.Highlight",
        "name": "HsColourCSS",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "Hs Colour CSS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Highlight.html#v:HsColourInline",
      "description": {
        "fct-descr": "\u003cp\u003eUse hscolour and inline the styles.\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Highlight",
        "fct-package": "BlogLiterately",
        "fct-signature": "HsColourInline StylePrefs",
        "fct-source": "src/Text-BlogLiterately-Highlight.html#HsHighlight",
        "fct-type": "function",
        "title": "HsColourInline"
      },
      "index": {
        "description": "Use hscolour and inline the styles",
        "hierarchy": "Text BlogLiterately Highlight",
        "module": "Text.BlogLiterately.Highlight",
        "name": "HsColourInline",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "Hs Colour Inline",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Highlight.html#v:HsKate",
      "description": {
        "fct-descr": "\u003cp\u003eUse highlighting-kate.\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Highlight",
        "fct-package": "BlogLiterately",
        "fct-signature": "HsKate",
        "fct-source": "src/Text-BlogLiterately-Highlight.html#HsHighlight",
        "fct-type": "function",
        "title": "HsKate"
      },
      "index": {
        "description": "Use highlighting-kate",
        "hierarchy": "Text BlogLiterately Highlight",
        "module": "Text.BlogLiterately.Highlight",
        "name": "HsKate",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "Hs Kate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Highlight.html#v:HsNoHighlight",
      "description": {
        "fct-descr": "\u003cp\u003eDo not highlight Haskell.\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Highlight",
        "fct-package": "BlogLiterately",
        "fct-signature": "HsNoHighlight",
        "fct-source": "src/Text-BlogLiterately-Highlight.html#HsHighlight",
        "fct-type": "function",
        "title": "HsNoHighlight"
      },
      "index": {
        "description": "Do not highlight Haskell",
        "hierarchy": "Text BlogLiterately Highlight",
        "module": "Text.BlogLiterately.Highlight",
        "name": "HsNoHighlight",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "Hs No Highlight",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Highlight.html#v:_HsColourInline",
      "description": {
        "fct-module": "Text.BlogLiterately.Highlight",
        "fct-package": "BlogLiterately",
        "fct-signature": "Prism' HsHighlight StylePrefs",
        "fct-source": "src/Text-BlogLiterately-Highlight.html#_HsColourInline",
        "fct-type": "function",
        "title": "_HsColourInline"
      },
      "index": {
        "description": "",
        "hierarchy": "Text BlogLiterately Highlight",
        "module": "Text.BlogLiterately.Highlight",
        "name": "_HsColourInline",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "Hs Colour Inline",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Highlight.html#v:bakeStyles",
      "description": {
        "fct-descr": "\u003cp\u003eTake a \u003ccode\u003eString\u003c/code\u003e of HTML produced by hscolour, and \"bake\" styles\n   into it by replacing class attributes with appropriate style\n   attributes.\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Highlight",
        "fct-package": "BlogLiterately",
        "fct-signature": "StylePrefs -\u003e String -\u003e String",
        "fct-source": "src/Text-BlogLiterately-Highlight.html#bakeStyles",
        "fct-type": "function",
        "title": "bakeStyles"
      },
      "index": {
        "description": "Take String of HTML produced by hscolour and bake styles into it by replacing class attributes with appropriate style attributes",
        "hierarchy": "Text BlogLiterately Highlight",
        "module": "Text.BlogLiterately.Highlight",
        "name": "bakeStyles",
        "normalized": "StylePrefs-\u003eString-\u003eString",
        "package": "BlogLiterately",
        "partial": "Styles",
        "signature": "StylePrefs-\u003eString-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Highlight.html#v:colourIt",
      "description": {
        "fct-descr": "\u003cp\u003eUse hscolour to syntax highlight some Haskell code.  The first\n argument indicates whether the code is literate Haskell.\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Highlight",
        "fct-package": "BlogLiterately",
        "fct-signature": "Bool -\u003e String -\u003e String",
        "fct-source": "src/Text-BlogLiterately-Highlight.html#colourIt",
        "fct-type": "function",
        "title": "colourIt"
      },
      "index": {
        "description": "Use hscolour to syntax highlight some Haskell code The first argument indicates whether the code is literate Haskell",
        "hierarchy": "Text BlogLiterately Highlight",
        "module": "Text.BlogLiterately.Highlight",
        "name": "colourIt",
        "normalized": "Bool-\u003eString-\u003eString",
        "package": "BlogLiterately",
        "partial": "It",
        "signature": "Bool-\u003eString-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Highlight.html#v:colouriseCodeBlock",
      "description": {
        "fct-descr": "\u003cp\u003eTransform a \u003ccode\u003eCodeBlock\u003c/code\u003e into a \u003ccode\u003eRawHtml\u003c/code\u003e block, where\n   the content contains marked up Haskell (possibly with literate\n   markers), or marked up non-Haskell, if highlighting of non-Haskell has\n   been selected.\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Highlight",
        "fct-package": "BlogLiterately",
        "fct-signature": "HsHighlight -\u003e Bool -\u003e Block -\u003e Block",
        "fct-source": "src/Text-BlogLiterately-Highlight.html#colouriseCodeBlock",
        "fct-type": "function",
        "title": "colouriseCodeBlock"
      },
      "index": {
        "description": "Transform CodeBlock into RawHtml block where the content contains marked up Haskell possibly with literate markers or marked up non-Haskell if highlighting of non-Haskell has been selected",
        "hierarchy": "Text BlogLiterately Highlight",
        "module": "Text.BlogLiterately.Highlight",
        "name": "colouriseCodeBlock",
        "normalized": "HsHighlight-\u003eBool-\u003eBlock-\u003eBlock",
        "package": "BlogLiterately",
        "partial": "Code Block",
        "signature": "HsHighlight-\u003eBool-\u003eBlock-\u003eBlock"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Highlight.html#v:colourisePandoc",
      "description": {
        "fct-descr": "\u003cp\u003ePerform syntax highlighting on an entire Pandoc document.\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Highlight",
        "fct-package": "BlogLiterately",
        "fct-signature": "HsHighlight -\u003e Bool -\u003e Pandoc -\u003e Pandoc",
        "fct-source": "src/Text-BlogLiterately-Highlight.html#colourisePandoc",
        "fct-type": "function",
        "title": "colourisePandoc"
      },
      "index": {
        "description": "Perform syntax highlighting on an entire Pandoc document",
        "hierarchy": "Text BlogLiterately Highlight",
        "module": "Text.BlogLiterately.Highlight",
        "name": "colourisePandoc",
        "normalized": "HsHighlight-\u003eBool-\u003ePandoc-\u003ePandoc",
        "package": "BlogLiterately",
        "partial": "Pandoc",
        "signature": "HsHighlight-\u003eBool-\u003ePandoc-\u003ePandoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Highlight.html#v:defaultStylePrefs",
      "description": {
        "fct-descr": "\u003cp\u003eA default style that produces something that looks like the\n   source listings on Hackage.\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Highlight",
        "fct-package": "BlogLiterately",
        "fct-signature": "StylePrefs",
        "fct-source": "src/Text-BlogLiterately-Highlight.html#defaultStylePrefs",
        "fct-type": "function",
        "title": "defaultStylePrefs"
      },
      "index": {
        "description": "default style that produces something that looks like the source listings on Hackage",
        "hierarchy": "Text BlogLiterately Highlight",
        "module": "Text.BlogLiterately.Highlight",
        "name": "defaultStylePrefs",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "Style Prefs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Highlight.html#v:getStylePrefs",
      "description": {
        "fct-descr": "\u003cp\u003eRead style preferences in from a file using the \u003ccode\u003eRead\u003c/code\u003e instance\n   for \u003ccode\u003eStylePrefs\u003c/code\u003e, or return the default style if the file name is\n   empty.\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Highlight",
        "fct-package": "BlogLiterately",
        "fct-signature": "Maybe FilePath -\u003e IO StylePrefs",
        "fct-source": "src/Text-BlogLiterately-Highlight.html#getStylePrefs",
        "fct-type": "function",
        "title": "getStylePrefs"
      },
      "index": {
        "description": "Read style preferences in from file using the Read instance for StylePrefs or return the default style if the file name is empty",
        "hierarchy": "Text BlogLiterately Highlight",
        "module": "Text.BlogLiterately.Highlight",
        "name": "getStylePrefs",
        "normalized": "Maybe FilePath-\u003eIO StylePrefs",
        "package": "BlogLiterately",
        "partial": "Style Prefs",
        "signature": "Maybe FilePath-\u003eIO StylePrefs"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Highlight.html#v:litify",
      "description": {
        "fct-descr": "\u003cp\u003ePrepend literate Haskell markers to some source code.\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Highlight",
        "fct-package": "BlogLiterately",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Text-BlogLiterately-Highlight.html#litify",
        "fct-type": "function",
        "title": "litify"
      },
      "index": {
        "description": "Prepend literate Haskell markers to some source code",
        "hierarchy": "Text BlogLiterately Highlight",
        "module": "Text.BlogLiterately.Highlight",
        "name": "litify",
        "normalized": "String-\u003eString",
        "package": "BlogLiterately",
        "partial": "",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Highlight.html#v:replaceBreaks",
      "description": {
        "fct-descr": "\u003cp\u003eReplace \u003ccode\u003e\u003cbr/\u003e\u003c/code\u003e tags with newlines.\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Highlight",
        "fct-package": "BlogLiterately",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Text-BlogLiterately-Highlight.html#replaceBreaks",
        "fct-type": "function",
        "title": "replaceBreaks"
      },
      "index": {
        "description": "Replace br tags with newlines",
        "hierarchy": "Text BlogLiterately Highlight",
        "module": "Text.BlogLiterately.Highlight",
        "name": "replaceBreaks",
        "normalized": "String-\u003eString",
        "package": "BlogLiterately",
        "partial": "Breaks",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Image.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUploading images embedded in posts to the server.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.BlogLiterately.Image",
        "fct-package": "BlogLiterately",
        "fct-signature": "module",
        "fct-source": "src/Text-BlogLiterately-Image.html",
        "fct-type": "module",
        "title": "Image"
      },
      "index": {
        "description": "Uploading images embedded in posts to the server",
        "hierarchy": "Text BlogLiterately Image",
        "module": "Text.BlogLiterately.Image",
        "name": "Image",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "Image",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Image.html#v:mkMediaObject",
      "description": {
        "fct-descr": "\u003cp\u003ePrepare a file for upload.\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Image",
        "fct-package": "BlogLiterately",
        "fct-signature": "FilePath -\u003e IO (Maybe Value)",
        "fct-source": "src/Text-BlogLiterately-Image.html#mkMediaObject",
        "fct-type": "function",
        "title": "mkMediaObject"
      },
      "index": {
        "description": "Prepare file for upload",
        "hierarchy": "Text BlogLiterately Image",
        "module": "Text.BlogLiterately.Image",
        "name": "mkMediaObject",
        "normalized": "FilePath-\u003eIO(Maybe Value)",
        "package": "BlogLiterately",
        "partial": "Media Object",
        "signature": "FilePath-\u003eIO(Maybe Value)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Image.html#v:uploadAllImages",
      "description": {
        "fct-descr": "\u003cp\u003eTransform a document by uploading any \"local\" images to the\n   server, and replacing their filenames with the URLs returned by\n   the server.  Only upload any given image once (determined by file\n   name), even across runs: uploaded images and their associated URL\n   on the server is tracked in a special dotfile,\n   \u003ccode\u003e.BlogLiterately-uploaded-images\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Image",
        "fct-package": "BlogLiterately",
        "fct-signature": "BlogLiterately -\u003e Pandoc -\u003e IO Pandoc",
        "fct-source": "src/Text-BlogLiterately-Image.html#uploadAllImages",
        "fct-type": "function",
        "title": "uploadAllImages"
      },
      "index": {
        "description": "Transform document by uploading any local images to the server and replacing their filenames with the URLs returned by the server Only upload any given image once determined by file name even across runs uploaded images and their associated URL on the server is tracked in special dotfile BlogLiterately-uploaded-images",
        "hierarchy": "Text BlogLiterately Image",
        "module": "Text.BlogLiterately.Image",
        "name": "uploadAllImages",
        "normalized": "BlogLiterately-\u003ePandoc-\u003eIO Pandoc",
        "package": "BlogLiterately",
        "partial": "All Images",
        "signature": "BlogLiterately-\u003ePandoc-\u003eIO Pandoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Image.html#v:uploadIt",
      "description": {
        "fct-descr": "\u003cp\u003eUpload a file using the \u003ccode\u003emetaWeblog.newMediaObject\u003c/code\u003e XML-RPC method\n   call.\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Image",
        "fct-package": "BlogLiterately",
        "fct-signature": "String -\u003e FilePath -\u003e BlogLiterately -\u003e IO (Maybe Value)",
        "fct-source": "src/Text-BlogLiterately-Image.html#uploadIt",
        "fct-type": "function",
        "title": "uploadIt"
      },
      "index": {
        "description": "Upload file using the metaWeblog.newMediaObject XML-RPC method call",
        "hierarchy": "Text BlogLiterately Image",
        "module": "Text.BlogLiterately.Image",
        "name": "uploadIt",
        "normalized": "String-\u003eFilePath-\u003eBlogLiterately-\u003eIO(Maybe Value)",
        "package": "BlogLiterately",
        "partial": "It",
        "signature": "String-\u003eFilePath-\u003eBlogLiterately-\u003eIO(Maybe Value)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-LaTeX.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtilities for working with embedded LaTeX.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.BlogLiterately.LaTeX",
        "fct-package": "BlogLiterately",
        "fct-signature": "module",
        "fct-source": "src/Text-BlogLiterately-LaTeX.html",
        "fct-type": "module",
        "title": "LaTeX"
      },
      "index": {
        "description": "Utilities for working with embedded LaTeX",
        "hierarchy": "Text BlogLiterately LaTeX",
        "module": "Text.BlogLiterately.LaTeX",
        "name": "LaTeX",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "La Te",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-LaTeX.html#v:wpTeXify",
      "description": {
        "fct-descr": "\u003cp\u003eWordPress can render LaTeX, but expects it in a special non-standard\n   format (\u003ccode\u003e$latex foo$\u003c/code\u003e).  The \u003ccode\u003ewpTeXify\u003c/code\u003e function formats LaTeX code\n   using this format so that it can be processed by WordPress.\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.LaTeX",
        "fct-package": "BlogLiterately",
        "fct-signature": "Pandoc -\u003e Pandoc",
        "fct-source": "src/Text-BlogLiterately-LaTeX.html#wpTeXify",
        "fct-type": "function",
        "title": "wpTeXify"
      },
      "index": {
        "description": "WordPress can render LaTeX but expects it in special non-standard format latex foo The wpTeXify function formats LaTeX code using this format so that it can be processed by WordPress",
        "hierarchy": "Text BlogLiterately LaTeX",
        "module": "Text.BlogLiterately.LaTeX",
        "name": "wpTeXify",
        "normalized": "Pandoc-\u003ePandoc",
        "package": "BlogLiterately",
        "partial": "Te Xify",
        "signature": "Pandoc-\u003ePandoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options-Parse.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParsing configuration options from special \u003ccode\u003e[BLOpts]\u003c/code\u003e blocks.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.BlogLiterately.Options.Parse",
        "fct-package": "BlogLiterately",
        "fct-signature": "module",
        "fct-source": "src/Text-BlogLiterately-Options-Parse.html",
        "fct-type": "module",
        "title": "Parse"
      },
      "index": {
        "description": "Parsing configuration options from special BLOpts blocks",
        "hierarchy": "Text BlogLiterately Options Parse",
        "module": "Text.BlogLiterately.Options.Parse",
        "name": "Parse",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "Parse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options-Parse.html#v:parseBLOption",
      "description": {
        "fct-descr": "\u003cp\u003eParse a single line from a \u003ccode\u003e[BLOpts]\u003c/code\u003e block.\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Options.Parse",
        "fct-package": "BlogLiterately",
        "fct-signature": "Parser BlogLiterately",
        "fct-source": "src/Text-BlogLiterately-Options-Parse.html#parseBLOption",
        "fct-type": "function",
        "title": "parseBLOption"
      },
      "index": {
        "description": "Parse single line from BLOpts block",
        "hierarchy": "Text BlogLiterately Options Parse",
        "module": "Text.BlogLiterately.Options.Parse",
        "name": "parseBLOption",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "BLOption",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options-Parse.html#v:readBLOption",
      "description": {
        "fct-descr": "\u003cp\u003eRead a single line from a \u003ccode\u003e[BLOpts]\u003c/code\u003e block.\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Options.Parse",
        "fct-package": "BlogLiterately",
        "fct-signature": "String -\u003e Either ParseError BlogLiterately",
        "fct-source": "src/Text-BlogLiterately-Options-Parse.html#readBLOption",
        "fct-type": "function",
        "title": "readBLOption"
      },
      "index": {
        "description": "Read single line from BLOpts block",
        "hierarchy": "Text BlogLiterately Options Parse",
        "module": "Text.BlogLiterately.Options.Parse",
        "name": "readBLOption",
        "normalized": "String-\u003eEither ParseError BlogLiterately",
        "package": "BlogLiterately",
        "partial": "BLOption",
        "signature": "String-\u003eEither ParseError BlogLiterately"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options-Parse.html#v:readBLOptions",
      "description": {
        "fct-descr": "\u003cp\u003eConvert the contents of a \u003ccode\u003e[BLOpts]\u003c/code\u003e block into an options record\n   and a list of parse errors.\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Options.Parse",
        "fct-package": "BlogLiterately",
        "fct-signature": "String -\u003e ([ParseError], BlogLiterately)",
        "fct-source": "src/Text-BlogLiterately-Options-Parse.html#readBLOptions",
        "fct-type": "function",
        "title": "readBLOptions"
      },
      "index": {
        "description": "Convert the contents of BLOpts block into an options record and list of parse errors",
        "hierarchy": "Text BlogLiterately Options Parse",
        "module": "Text.BlogLiterately.Options.Parse",
        "name": "readBLOptions",
        "normalized": "String-\u003e([ParseError],BlogLiterately)",
        "package": "BlogLiterately",
        "partial": "BLOptions",
        "signature": "String-\u003e([ParseError],BlogLiterately)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConfiguation and command-line options.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "module",
        "fct-source": "src/Text-BlogLiterately-Options.html",
        "fct-type": "module",
        "title": "Options"
      },
      "index": {
        "description": "Configuation and command-line options",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "Options",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#t:BlogLiterately",
      "description": {
        "fct-descr": "\u003cp\u003eConfiguration record (and command-line options) for \u003ccode\u003eBlogLiterately\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "data",
        "fct-source": "src/Text-BlogLiterately-Options.html#BlogLiterately",
        "fct-type": "data",
        "title": "BlogLiterately"
      },
      "index": {
        "description": "Configuration record and command-line options for BlogLiterately",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "BlogLiterately",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "Blog Literately",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:BlogLiterately",
      "description": {
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "BlogLiterately",
        "fct-source": "src/Text-BlogLiterately-Options.html#BlogLiterately",
        "fct-type": "function",
        "title": "BlogLiterately"
      },
      "index": {
        "description": "",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "BlogLiterately",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "Blog Literately",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:_blog",
      "description": {
        "fct-descr": "\u003cp\u003eBlog xmlrpc URL\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "Maybe String",
        "fct-source": "src/Text-BlogLiterately-Options.html#BlogLiterately",
        "fct-type": "function",
        "title": "_blog"
      },
      "index": {
        "description": "Blog xmlrpc URL",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "_blog",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:_blogid",
      "description": {
        "fct-descr": "\u003cp\u003eBlog-specific identifier\n   (e.g. for blogging software\n   handling multiple blogs)\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "Maybe String",
        "fct-source": "src/Text-BlogLiterately-Options.html#BlogLiterately",
        "fct-type": "function",
        "title": "_blogid"
      },
      "index": {
        "description": "Blog-specific identifier e.g for blogging software handling multiple blogs",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "_blogid",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:_categories",
      "description": {
        "fct-descr": "\u003cp\u003eCategories for the post\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "[String]",
        "fct-source": "src/Text-BlogLiterately-Options.html#BlogLiterately",
        "fct-type": "function",
        "title": "_categories"
      },
      "index": {
        "description": "Categories for the post",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "_categories",
        "normalized": "[String]",
        "package": "BlogLiterately",
        "partial": "",
        "signature": "[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:_citations",
      "description": {
        "fct-descr": "\u003cp\u003eProcess citations? (default: true)\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "Maybe Bool",
        "fct-source": "src/Text-BlogLiterately-Options.html#BlogLiterately",
        "fct-type": "function",
        "title": "_citations"
      },
      "index": {
        "description": "Process citations default true",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "_citations",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:_file",
      "description": {
        "fct-descr": "\u003cp\u003eFile to post\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "Maybe String",
        "fct-source": "src/Text-BlogLiterately-Options.html#BlogLiterately",
        "fct-type": "function",
        "title": "_file"
      },
      "index": {
        "description": "File to post",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "_file",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:_format",
      "description": {
        "fct-descr": "\u003cp\u003eFormat of the file\n   (currently supported:\n   markdown, rst)\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "Maybe String",
        "fct-source": "src/Text-BlogLiterately-Options.html#BlogLiterately",
        "fct-type": "function",
        "title": "_format"
      },
      "index": {
        "description": "Format of the file currently supported markdown rst",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "_format",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:_ghci",
      "description": {
        "fct-descr": "\u003cp\u003eAutomatically process ghci sessions?\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "Maybe Bool",
        "fct-source": "src/Text-BlogLiterately-Options.html#BlogLiterately",
        "fct-type": "function",
        "title": "_ghci"
      },
      "index": {
        "description": "Automatically process ghci sessions",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "_ghci",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:_hsHighlight",
      "description": {
        "fct-descr": "\u003cp\u003eHaskell highlighting mode\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "Maybe HsHighlight",
        "fct-source": "src/Text-BlogLiterately-Options.html#BlogLiterately",
        "fct-type": "function",
        "title": "_hsHighlight"
      },
      "index": {
        "description": "Haskell highlighting mode",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "_hsHighlight",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "Highlight",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:_htmlOnly",
      "description": {
        "fct-descr": "\u003cp\u003eDon't upload anything;\n   just output HTML to\n   stdout.\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "Maybe Bool",
        "fct-source": "src/Text-BlogLiterately-Options.html#BlogLiterately",
        "fct-type": "function",
        "title": "_htmlOnly"
      },
      "index": {
        "description": "Don upload anything just output HTML to stdout",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "_htmlOnly",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "Only",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:_math",
      "description": {
        "fct-descr": "\u003cp\u003eIndicate how to format math\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "Maybe String",
        "fct-source": "src/Text-BlogLiterately-Options.html#BlogLiterately",
        "fct-type": "function",
        "title": "_math"
      },
      "index": {
        "description": "Indicate how to format math",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "_math",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:_otherHighlight",
      "description": {
        "fct-descr": "\u003cp\u003eUse highlighting-kate for\n   non-Haskell?\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "Maybe Bool",
        "fct-source": "src/Text-BlogLiterately-Options.html#BlogLiterately",
        "fct-type": "function",
        "title": "_otherHighlight"
      },
      "index": {
        "description": "Use highlighting-kate for non-Haskell",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "_otherHighlight",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "Highlight",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:_page",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a \"page\" instead of a post\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "Maybe Bool",
        "fct-source": "src/Text-BlogLiterately-Options.html#BlogLiterately",
        "fct-type": "function",
        "title": "_page"
      },
      "index": {
        "description": "Create page instead of post",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "_page",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:_password",
      "description": {
        "fct-descr": "\u003cp\u003eBlog password (omit to be interactively prompted)\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "Maybe String",
        "fct-source": "src/Text-BlogLiterately-Options.html#BlogLiterately",
        "fct-type": "function",
        "title": "_password"
      },
      "index": {
        "description": "Blog password omit to be interactively prompted",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "_password",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:_postid",
      "description": {
        "fct-descr": "\u003cp\u003eID of a post to update\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "Maybe String",
        "fct-source": "src/Text-BlogLiterately-Options.html#BlogLiterately",
        "fct-type": "function",
        "title": "_postid"
      },
      "index": {
        "description": "ID of post to update",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "_postid",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:_profile",
      "description": {
        "fct-descr": "\u003cp\u003eName of profile to use.\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "Maybe String",
        "fct-source": "src/Text-BlogLiterately-Options.html#BlogLiterately",
        "fct-type": "function",
        "title": "_profile"
      },
      "index": {
        "description": "Name of profile to use",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "_profile",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:_publish",
      "description": {
        "fct-descr": "\u003cp\u003eShould the post be published?\n   (Otherwise it is uploaded as a draft.)\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "Maybe Bool",
        "fct-source": "src/Text-BlogLiterately-Options.html#BlogLiterately",
        "fct-type": "function",
        "title": "_publish"
      },
      "index": {
        "description": "Should the post be published Otherwise it is uploaded as draft",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "_publish",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:_style",
      "description": {
        "fct-descr": "\u003cp\u003eName of a style file\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "Maybe String",
        "fct-source": "src/Text-BlogLiterately-Options.html#BlogLiterately",
        "fct-type": "function",
        "title": "_style"
      },
      "index": {
        "description": "Name of style file",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "_style",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:_tags",
      "description": {
        "fct-descr": "\u003cp\u003eTags for the post\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "[String]",
        "fct-source": "src/Text-BlogLiterately-Options.html#BlogLiterately",
        "fct-type": "function",
        "title": "_tags"
      },
      "index": {
        "description": "Tags for the post",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "_tags",
        "normalized": "[String]",
        "package": "BlogLiterately",
        "partial": "",
        "signature": "[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:_title",
      "description": {
        "fct-descr": "\u003cp\u003ePost title\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "Maybe String",
        "fct-source": "src/Text-BlogLiterately-Options.html#BlogLiterately",
        "fct-type": "function",
        "title": "_title"
      },
      "index": {
        "description": "Post title",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "_title",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:_toc",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a table of contents?\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "Maybe Bool",
        "fct-source": "src/Text-BlogLiterately-Options.html#BlogLiterately",
        "fct-type": "function",
        "title": "_toc"
      },
      "index": {
        "description": "Generate table of contents",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "_toc",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:_uploadImages",
      "description": {
        "fct-descr": "\u003cp\u003eAutomatically upload images?\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "Maybe Bool",
        "fct-source": "src/Text-BlogLiterately-Options.html#BlogLiterately",
        "fct-type": "function",
        "title": "_uploadImages"
      },
      "index": {
        "description": "Automatically upload images",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "_uploadImages",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "Images",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:_user",
      "description": {
        "fct-descr": "\u003cp\u003eBlog user name\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "Maybe String",
        "fct-source": "src/Text-BlogLiterately-Options.html#BlogLiterately",
        "fct-type": "function",
        "title": "_user"
      },
      "index": {
        "description": "Blog user name",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "_user",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:_wplatex",
      "description": {
        "fct-descr": "\u003cp\u003eFormat LaTeX for WordPress?\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "Maybe Bool",
        "fct-source": "src/Text-BlogLiterately-Options.html#BlogLiterately",
        "fct-type": "function",
        "title": "_wplatex"
      },
      "index": {
        "description": "Format LaTeX for WordPress",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "_wplatex",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:_xtra",
      "description": {
        "fct-descr": "\u003cp\u003eExtension arguments, for use e.g. by\n   custom transforms\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "[String]",
        "fct-source": "src/Text-BlogLiterately-Options.html#BlogLiterately",
        "fct-type": "function",
        "title": "_xtra"
      },
      "index": {
        "description": "Extension arguments for use e.g by custom transforms",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "_xtra",
        "normalized": "[String]",
        "package": "BlogLiterately",
        "partial": "",
        "signature": "[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:blOpts",
      "description": {
        "fct-descr": "\u003cp\u003eCommand-line configuration for use with \u003ccode\u003ecmdargs\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "BlogLiterately",
        "fct-source": "src/Text-BlogLiterately-Options.html#blOpts",
        "fct-type": "function",
        "title": "blOpts"
      },
      "index": {
        "description": "Command-line configuration for use with cmdargs",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "blOpts",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "Opts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:blog",
      "description": {
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "Lens' BlogLiterately (Maybe String)",
        "fct-source": "src/Text-BlogLiterately-Options.html#blog",
        "fct-type": "function",
        "title": "blog"
      },
      "index": {
        "description": "",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "blog",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:blog-39-",
      "description": {
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "BlogLiterately -\u003e String",
        "fct-source": "src/Text-BlogLiterately-Options.html#blog%27",
        "fct-type": "function",
        "title": "blog'"
      },
      "index": {
        "description": "",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "blog'",
        "normalized": "BlogLiterately-\u003eString",
        "package": "BlogLiterately",
        "partial": "",
        "signature": "BlogLiterately-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:blogid",
      "description": {
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "Lens' BlogLiterately (Maybe String)",
        "fct-source": "src/Text-BlogLiterately-Options.html#blogid",
        "fct-type": "function",
        "title": "blogid"
      },
      "index": {
        "description": "",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "blogid",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:blogid-39-",
      "description": {
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "BlogLiterately -\u003e String",
        "fct-source": "src/Text-BlogLiterately-Options.html#blogid%27",
        "fct-type": "function",
        "title": "blogid'"
      },
      "index": {
        "description": "",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "blogid'",
        "normalized": "BlogLiterately-\u003eString",
        "package": "BlogLiterately",
        "partial": "",
        "signature": "BlogLiterately-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:categories",
      "description": {
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "Lens' BlogLiterately [String]",
        "fct-source": "src/Text-BlogLiterately-Options.html#categories",
        "fct-type": "function",
        "title": "categories"
      },
      "index": {
        "description": "",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "categories",
        "normalized": "Lens' BlogLiterately[String]",
        "package": "BlogLiterately",
        "partial": "",
        "signature": "Lens' BlogLiterately[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:citations",
      "description": {
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "Lens' BlogLiterately (Maybe Bool)",
        "fct-source": "src/Text-BlogLiterately-Options.html#citations",
        "fct-type": "function",
        "title": "citations"
      },
      "index": {
        "description": "",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "citations",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:citations-39-",
      "description": {
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "BlogLiterately -\u003e Bool",
        "fct-source": "src/Text-BlogLiterately-Options.html#citations%27",
        "fct-type": "function",
        "title": "citations'"
      },
      "index": {
        "description": "",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "citations'",
        "normalized": "BlogLiterately-\u003eBool",
        "package": "BlogLiterately",
        "partial": "",
        "signature": "BlogLiterately-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:file",
      "description": {
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "Lens' BlogLiterately (Maybe String)",
        "fct-source": "src/Text-BlogLiterately-Options.html#file",
        "fct-type": "function",
        "title": "file"
      },
      "index": {
        "description": "",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "file",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:file-39-",
      "description": {
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "BlogLiterately -\u003e String",
        "fct-source": "src/Text-BlogLiterately-Options.html#file%27",
        "fct-type": "function",
        "title": "file'"
      },
      "index": {
        "description": "",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "file'",
        "normalized": "BlogLiterately-\u003eString",
        "package": "BlogLiterately",
        "partial": "",
        "signature": "BlogLiterately-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:format",
      "description": {
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "Lens' BlogLiterately (Maybe String)",
        "fct-source": "src/Text-BlogLiterately-Options.html#format",
        "fct-type": "function",
        "title": "format"
      },
      "index": {
        "description": "",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "format",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:format-39-",
      "description": {
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "BlogLiterately -\u003e String",
        "fct-source": "src/Text-BlogLiterately-Options.html#format%27",
        "fct-type": "function",
        "title": "format'"
      },
      "index": {
        "description": "",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "format'",
        "normalized": "BlogLiterately-\u003eString",
        "package": "BlogLiterately",
        "partial": "",
        "signature": "BlogLiterately-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:ghci",
      "description": {
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "Lens' BlogLiterately (Maybe Bool)",
        "fct-source": "src/Text-BlogLiterately-Options.html#ghci",
        "fct-type": "function",
        "title": "ghci"
      },
      "index": {
        "description": "",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "ghci",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:ghci-39-",
      "description": {
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "BlogLiterately -\u003e Bool",
        "fct-source": "src/Text-BlogLiterately-Options.html#ghci%27",
        "fct-type": "function",
        "title": "ghci'"
      },
      "index": {
        "description": "",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "ghci'",
        "normalized": "BlogLiterately-\u003eBool",
        "package": "BlogLiterately",
        "partial": "",
        "signature": "BlogLiterately-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:hsHighlight",
      "description": {
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "Lens' BlogLiterately (Maybe HsHighlight)",
        "fct-source": "src/Text-BlogLiterately-Options.html#hsHighlight",
        "fct-type": "function",
        "title": "hsHighlight"
      },
      "index": {
        "description": "",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "hsHighlight",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "Highlight",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:hsHighlight-39-",
      "description": {
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "BlogLiterately -\u003e HsHighlight",
        "fct-source": "src/Text-BlogLiterately-Options.html#hsHighlight%27",
        "fct-type": "function",
        "title": "hsHighlight'"
      },
      "index": {
        "description": "",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "hsHighlight'",
        "normalized": "BlogLiterately-\u003eHsHighlight",
        "package": "BlogLiterately",
        "partial": "Highlight'",
        "signature": "BlogLiterately-\u003eHsHighlight"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:htmlOnly",
      "description": {
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "Lens' BlogLiterately (Maybe Bool)",
        "fct-source": "src/Text-BlogLiterately-Options.html#htmlOnly",
        "fct-type": "function",
        "title": "htmlOnly"
      },
      "index": {
        "description": "",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "htmlOnly",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "Only",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:htmlOnly-39-",
      "description": {
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "BlogLiterately -\u003e Bool",
        "fct-source": "src/Text-BlogLiterately-Options.html#htmlOnly%27",
        "fct-type": "function",
        "title": "htmlOnly'"
      },
      "index": {
        "description": "",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "htmlOnly'",
        "normalized": "BlogLiterately-\u003eBool",
        "package": "BlogLiterately",
        "partial": "Only'",
        "signature": "BlogLiterately-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:math",
      "description": {
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "Lens' BlogLiterately (Maybe String)",
        "fct-source": "src/Text-BlogLiterately-Options.html#math",
        "fct-type": "function",
        "title": "math"
      },
      "index": {
        "description": "",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "math",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:math-39-",
      "description": {
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "BlogLiterately -\u003e String",
        "fct-source": "src/Text-BlogLiterately-Options.html#math%27",
        "fct-type": "function",
        "title": "math'"
      },
      "index": {
        "description": "",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "math'",
        "normalized": "BlogLiterately-\u003eString",
        "package": "BlogLiterately",
        "partial": "",
        "signature": "BlogLiterately-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:otherHighlight",
      "description": {
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "Lens' BlogLiterately (Maybe Bool)",
        "fct-source": "src/Text-BlogLiterately-Options.html#otherHighlight",
        "fct-type": "function",
        "title": "otherHighlight"
      },
      "index": {
        "description": "",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "otherHighlight",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "Highlight",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:otherHighlight-39-",
      "description": {
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "BlogLiterately -\u003e Bool",
        "fct-source": "src/Text-BlogLiterately-Options.html#otherHighlight%27",
        "fct-type": "function",
        "title": "otherHighlight'"
      },
      "index": {
        "description": "",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "otherHighlight'",
        "normalized": "BlogLiterately-\u003eBool",
        "package": "BlogLiterately",
        "partial": "Highlight'",
        "signature": "BlogLiterately-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:page",
      "description": {
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "Lens' BlogLiterately (Maybe Bool)",
        "fct-source": "src/Text-BlogLiterately-Options.html#page",
        "fct-type": "function",
        "title": "page"
      },
      "index": {
        "description": "",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "page",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:page-39-",
      "description": {
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "BlogLiterately -\u003e Bool",
        "fct-source": "src/Text-BlogLiterately-Options.html#page%27",
        "fct-type": "function",
        "title": "page'"
      },
      "index": {
        "description": "",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "page'",
        "normalized": "BlogLiterately-\u003eBool",
        "package": "BlogLiterately",
        "partial": "",
        "signature": "BlogLiterately-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:password",
      "description": {
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "Lens' BlogLiterately (Maybe String)",
        "fct-source": "src/Text-BlogLiterately-Options.html#password",
        "fct-type": "function",
        "title": "password"
      },
      "index": {
        "description": "",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "password",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:password-39-",
      "description": {
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "BlogLiterately -\u003e String",
        "fct-source": "src/Text-BlogLiterately-Options.html#password%27",
        "fct-type": "function",
        "title": "password'"
      },
      "index": {
        "description": "",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "password'",
        "normalized": "BlogLiterately-\u003eString",
        "package": "BlogLiterately",
        "partial": "",
        "signature": "BlogLiterately-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:postid",
      "description": {
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "Lens' BlogLiterately (Maybe String)",
        "fct-source": "src/Text-BlogLiterately-Options.html#postid",
        "fct-type": "function",
        "title": "postid"
      },
      "index": {
        "description": "",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "postid",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:postid-39-",
      "description": {
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "BlogLiterately -\u003e String",
        "fct-source": "src/Text-BlogLiterately-Options.html#postid%27",
        "fct-type": "function",
        "title": "postid'"
      },
      "index": {
        "description": "",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "postid'",
        "normalized": "BlogLiterately-\u003eString",
        "package": "BlogLiterately",
        "partial": "",
        "signature": "BlogLiterately-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:profile",
      "description": {
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "Lens' BlogLiterately (Maybe String)",
        "fct-source": "src/Text-BlogLiterately-Options.html#profile",
        "fct-type": "function",
        "title": "profile"
      },
      "index": {
        "description": "",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "profile",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:profile-39-",
      "description": {
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "BlogLiterately -\u003e String",
        "fct-source": "src/Text-BlogLiterately-Options.html#profile%27",
        "fct-type": "function",
        "title": "profile'"
      },
      "index": {
        "description": "",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "profile'",
        "normalized": "BlogLiterately-\u003eString",
        "package": "BlogLiterately",
        "partial": "",
        "signature": "BlogLiterately-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:publish",
      "description": {
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "Lens' BlogLiterately (Maybe Bool)",
        "fct-source": "src/Text-BlogLiterately-Options.html#publish",
        "fct-type": "function",
        "title": "publish"
      },
      "index": {
        "description": "",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "publish",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:publish-39-",
      "description": {
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "BlogLiterately -\u003e Bool",
        "fct-source": "src/Text-BlogLiterately-Options.html#publish%27",
        "fct-type": "function",
        "title": "publish'"
      },
      "index": {
        "description": "",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "publish'",
        "normalized": "BlogLiterately-\u003eBool",
        "package": "BlogLiterately",
        "partial": "",
        "signature": "BlogLiterately-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:style",
      "description": {
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "Lens' BlogLiterately (Maybe String)",
        "fct-source": "src/Text-BlogLiterately-Options.html#style",
        "fct-type": "function",
        "title": "style"
      },
      "index": {
        "description": "",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "style",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:style-39-",
      "description": {
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "BlogLiterately -\u003e String",
        "fct-source": "src/Text-BlogLiterately-Options.html#style%27",
        "fct-type": "function",
        "title": "style'"
      },
      "index": {
        "description": "",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "style'",
        "normalized": "BlogLiterately-\u003eString",
        "package": "BlogLiterately",
        "partial": "",
        "signature": "BlogLiterately-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:tags",
      "description": {
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "Lens' BlogLiterately [String]",
        "fct-source": "src/Text-BlogLiterately-Options.html#tags",
        "fct-type": "function",
        "title": "tags"
      },
      "index": {
        "description": "",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "tags",
        "normalized": "Lens' BlogLiterately[String]",
        "package": "BlogLiterately",
        "partial": "",
        "signature": "Lens' BlogLiterately[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:title",
      "description": {
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "Lens' BlogLiterately (Maybe String)",
        "fct-source": "src/Text-BlogLiterately-Options.html#title",
        "fct-type": "function",
        "title": "title"
      },
      "index": {
        "description": "",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "title",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:title-39-",
      "description": {
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "BlogLiterately -\u003e String",
        "fct-source": "src/Text-BlogLiterately-Options.html#title%27",
        "fct-type": "function",
        "title": "title'"
      },
      "index": {
        "description": "",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "title'",
        "normalized": "BlogLiterately-\u003eString",
        "package": "BlogLiterately",
        "partial": "",
        "signature": "BlogLiterately-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:toc",
      "description": {
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "Lens' BlogLiterately (Maybe Bool)",
        "fct-source": "src/Text-BlogLiterately-Options.html#toc",
        "fct-type": "function",
        "title": "toc"
      },
      "index": {
        "description": "",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "toc",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:toc-39-",
      "description": {
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "BlogLiterately -\u003e Bool",
        "fct-source": "src/Text-BlogLiterately-Options.html#toc%27",
        "fct-type": "function",
        "title": "toc'"
      },
      "index": {
        "description": "",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "toc'",
        "normalized": "BlogLiterately-\u003eBool",
        "package": "BlogLiterately",
        "partial": "",
        "signature": "BlogLiterately-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:uploadImages",
      "description": {
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "Lens' BlogLiterately (Maybe Bool)",
        "fct-source": "src/Text-BlogLiterately-Options.html#uploadImages",
        "fct-type": "function",
        "title": "uploadImages"
      },
      "index": {
        "description": "",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "uploadImages",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "Images",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:uploadImages-39-",
      "description": {
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "BlogLiterately -\u003e Bool",
        "fct-source": "src/Text-BlogLiterately-Options.html#uploadImages%27",
        "fct-type": "function",
        "title": "uploadImages'"
      },
      "index": {
        "description": "",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "uploadImages'",
        "normalized": "BlogLiterately-\u003eBool",
        "package": "BlogLiterately",
        "partial": "Images'",
        "signature": "BlogLiterately-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:user",
      "description": {
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "Lens' BlogLiterately (Maybe String)",
        "fct-source": "src/Text-BlogLiterately-Options.html#user",
        "fct-type": "function",
        "title": "user"
      },
      "index": {
        "description": "",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "user",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:user-39-",
      "description": {
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "BlogLiterately -\u003e String",
        "fct-source": "src/Text-BlogLiterately-Options.html#user%27",
        "fct-type": "function",
        "title": "user'"
      },
      "index": {
        "description": "",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "user'",
        "normalized": "BlogLiterately-\u003eString",
        "package": "BlogLiterately",
        "partial": "",
        "signature": "BlogLiterately-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:wplatex",
      "description": {
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "Lens' BlogLiterately (Maybe Bool)",
        "fct-source": "src/Text-BlogLiterately-Options.html#wplatex",
        "fct-type": "function",
        "title": "wplatex"
      },
      "index": {
        "description": "",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "wplatex",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:wplatex-39-",
      "description": {
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "BlogLiterately -\u003e Bool",
        "fct-source": "src/Text-BlogLiterately-Options.html#wplatex%27",
        "fct-type": "function",
        "title": "wplatex'"
      },
      "index": {
        "description": "",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "wplatex'",
        "normalized": "BlogLiterately-\u003eBool",
        "package": "BlogLiterately",
        "partial": "",
        "signature": "BlogLiterately-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Options.html#v:xtra",
      "description": {
        "fct-module": "Text.BlogLiterately.Options",
        "fct-package": "BlogLiterately",
        "fct-signature": "Lens' BlogLiterately [String]",
        "fct-source": "src/Text-BlogLiterately-Options.html#xtra",
        "fct-type": "function",
        "title": "xtra"
      },
      "index": {
        "description": "",
        "hierarchy": "Text BlogLiterately Options",
        "module": "Text.BlogLiterately.Options",
        "name": "xtra",
        "normalized": "Lens' BlogLiterately[String]",
        "package": "BlogLiterately",
        "partial": "",
        "signature": "Lens' BlogLiterately[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Post.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUploading posts to the server.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.BlogLiterately.Post",
        "fct-package": "BlogLiterately",
        "fct-signature": "module",
        "fct-source": "src/Text-BlogLiterately-Post.html",
        "fct-type": "module",
        "title": "Post"
      },
      "index": {
        "description": "Uploading posts to the server",
        "hierarchy": "Text BlogLiterately Post",
        "module": "Text.BlogLiterately.Post",
        "name": "Post",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "Post",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Post.html#v:mkArray",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a name and a list of values, create a named \"array\" field\n   suitable for inclusion in an XML-RPC struct.\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Post",
        "fct-package": "BlogLiterately",
        "fct-signature": "String -\u003e [a] -\u003e [(String, Value)]",
        "fct-source": "src/Text-BlogLiterately-Post.html#mkArray",
        "fct-type": "function",
        "title": "mkArray"
      },
      "index": {
        "description": "Given name and list of values create named array field suitable for inclusion in an XML-RPC struct",
        "hierarchy": "Text BlogLiterately Post",
        "module": "Text.BlogLiterately.Post",
        "name": "mkArray",
        "normalized": "String-\u003e[a]-\u003e[(String,Value)]",
        "package": "BlogLiterately",
        "partial": "Array",
        "signature": "String-\u003e[a]-\u003e[(String,Value)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Post.html#v:mkPost",
      "description": {
        "fct-descr": "\u003cp\u003ePrepare a post for uploading by creating something of the proper\n   form to be an argument to an XML-RPC call.\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Post",
        "fct-package": "BlogLiterately",
        "fct-signature": "String-\u003e String-\u003e [String]-\u003e [String]-\u003e Bool-\u003e [(String, Value)]",
        "fct-type": "function",
        "title": "mkPost"
      },
      "index": {
        "description": "Prepare post for uploading by creating something of the proper form to be an argument to an XML-RPC call",
        "hierarchy": "Text BlogLiterately Post",
        "module": "Text.BlogLiterately.Post",
        "name": "mkPost",
        "normalized": "String-\u003eString-\u003e[String]-\u003e[String]-\u003eBool-\u003e[(String,Value)]",
        "package": "BlogLiterately",
        "partial": "Post",
        "signature": "String-\u003eString-\u003e[String]-\u003e[String]-\u003eBool-\u003e[(String,Value)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Post.html#v:postIt",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a configuration and a formatted post, upload it to the server.\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Post",
        "fct-package": "BlogLiterately",
        "fct-signature": "BlogLiterately -\u003e String -\u003e IO ()",
        "fct-source": "src/Text-BlogLiterately-Post.html#postIt",
        "fct-type": "function",
        "title": "postIt"
      },
      "index": {
        "description": "Given configuration and formatted post upload it to the server",
        "hierarchy": "Text BlogLiterately Post",
        "module": "Text.BlogLiterately.Post",
        "name": "postIt",
        "normalized": "BlogLiterately-\u003eString-\u003eIO()",
        "package": "BlogLiterately",
        "partial": "It",
        "signature": "BlogLiterately-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Run.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for creating \u003ccode\u003eBlogLiterately\u003c/code\u003e executables.  By default,\n installing this library results in the installation of a standard\n executable, called \u003ccode\u003eBlogLiterately\u003c/code\u003e, which corresponds to\n \u003ccode\u003e\u003ca\u003eblogLiterately\u003c/a\u003e\u003c/code\u003e from this module.  However, you can create your\n own custom executables with extra custom functionality using\n \u003ccode\u003e\u003ca\u003eblogLiteratelyWith\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eblogLiteratelyCustom\u003c/a\u003e\u003c/code\u003e.  For example:\n\u003c/p\u003e\u003cpre\u003e module Main where\n import Text.BlogLiterately\n\n myCustomXF1 = pureTransform ...\n myCustomXF2 = Transform ...\n main = blogLiteratelyWith [myCustomXF1, myCustomXF2]\n\u003c/pre\u003e\u003cp\u003eSee \u003ca\u003eText.BlogLiterately.Transform\u003c/a\u003e for examples of transforms,\n additional transforms which are not enabled by default, and help in\n creating your own.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.BlogLiterately.Run",
        "fct-package": "BlogLiterately",
        "fct-signature": "module",
        "fct-source": "src/Text-BlogLiterately-Run.html",
        "fct-type": "module",
        "title": "Run"
      },
      "index": {
        "description": "Functions for creating BlogLiterately executables By default installing this library results in the installation of standard executable called BlogLiterately which corresponds to blogLiterately from this module However you can create your own custom executables with extra custom functionality using blogLiteratelyWith or blogLiteratelyCustom For example module Main where import Text.BlogLiterately myCustomXF1 pureTransform myCustomXF2 Transform main blogLiteratelyWith myCustomXF1 myCustomXF2 See Text.BlogLiterately.Transform for examples of transforms additional transforms which are not enabled by default and help in creating your own",
        "hierarchy": "Text BlogLiterately Run",
        "module": "Text.BlogLiterately.Run",
        "name": "Run",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "Run",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Run.html#v:blogLiterately",
      "description": {
        "fct-descr": "\u003cp\u003eThe default BlogLiterately application.\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Run",
        "fct-package": "BlogLiterately",
        "fct-signature": "IO ()",
        "fct-source": "src/Text-BlogLiterately-Run.html#blogLiterately",
        "fct-type": "function",
        "title": "blogLiterately"
      },
      "index": {
        "description": "The default BlogLiterately application",
        "hierarchy": "Text BlogLiterately Run",
        "module": "Text.BlogLiterately.Run",
        "name": "blogLiterately",
        "normalized": "IO()",
        "package": "BlogLiterately",
        "partial": "Literately",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Run.html#v:blogLiteratelyCustom",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eblogLiterately\u003c/a\u003e\u003c/code\u003e, but with the ability to \u003cem\u003ereplace\u003c/em\u003e the\n   standard \u003ccode\u003e\u003ca\u003eTransform\u003c/a\u003e\u003c/code\u003es.  Use this to implement custom interleaving\n   orders of the standard transforms and your own, to exclude some\n   or all of the standard transforms, etc.\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Run",
        "fct-package": "BlogLiterately",
        "fct-signature": "[Transform] -\u003e IO ()",
        "fct-source": "src/Text-BlogLiterately-Run.html#blogLiteratelyCustom",
        "fct-type": "function",
        "title": "blogLiteratelyCustom"
      },
      "index": {
        "description": "Like blogLiterately but with the ability to replace the standard Transform Use this to implement custom interleaving orders of the standard transforms and your own to exclude some or all of the standard transforms etc",
        "hierarchy": "Text BlogLiterately Run",
        "module": "Text.BlogLiterately.Run",
        "name": "blogLiteratelyCustom",
        "normalized": "[Transform]-\u003eIO()",
        "package": "BlogLiterately",
        "partial": "Literately Custom",
        "signature": "[Transform]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Run.html#v:blogLiteratelyWith",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eblogLiterately\u003c/a\u003e\u003c/code\u003e, but with the ability to specify additional\n \u003ccode\u003e\u003ca\u003eTransform\u003c/a\u003e\u003c/code\u003es which will be applied \u003cem\u003eafter\u003c/em\u003e the standard ones.\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Run",
        "fct-package": "BlogLiterately",
        "fct-signature": "[Transform] -\u003e IO ()",
        "fct-source": "src/Text-BlogLiterately-Run.html#blogLiteratelyWith",
        "fct-type": "function",
        "title": "blogLiteratelyWith"
      },
      "index": {
        "description": "Like blogLiterately but with the ability to specify additional Transform which will be applied after the standard ones",
        "hierarchy": "Text BlogLiterately Run",
        "module": "Text.BlogLiterately.Run",
        "name": "blogLiteratelyWith",
        "normalized": "[Transform]-\u003eIO()",
        "package": "BlogLiterately",
        "partial": "Literately With",
        "signature": "[Transform]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Transform.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTools for putting together a pipeline transforming the source for a\n post into a completely formatted HTML document.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.BlogLiterately.Transform",
        "fct-package": "BlogLiterately",
        "fct-signature": "module",
        "fct-source": "src/Text-BlogLiterately-Transform.html",
        "fct-type": "module",
        "title": "Transform"
      },
      "index": {
        "description": "Tools for putting together pipeline transforming the source for post into completely formatted HTML document",
        "hierarchy": "Text BlogLiterately Transform",
        "module": "Text.BlogLiterately.Transform",
        "name": "Transform",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "Transform",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Transform.html#t:Transform",
      "description": {
        "fct-descr": "\u003cp\u003eA document transformation consists of two parts: an actual\n   transformation, expressed as a function over Pandoc documents, and\n   a condition specifying whether the transformation should actually\n   be applied.\n\u003c/p\u003e\u003cp\u003eThe transformation itself takes a \u003ccode\u003e\u003ca\u003eBlogLiterately\u003c/a\u003e\u003c/code\u003e configuration\n   as an argument.  You may of course ignore it if you do not need\n   to know anything about the configuration.  The \u003ccode\u003e--xtra\u003c/code\u003e (or \u003ccode\u003e-x\u003c/code\u003e)\n   flag is also provided especially as a method of getting\n   information from the command-line to custom extensions. Arguments\n   passed via \u003ccode\u003e-x\u003c/code\u003e on the command line are available from the \u003ccode\u003e\u003ca\u003extra\u003c/a\u003e\u003c/code\u003e\n   field of the \u003ccode\u003e\u003ca\u003eBlogLiterately\u003c/a\u003e\u003c/code\u003e configuration.\n\u003c/p\u003e\u003cp\u003eThe transformation is then specified as a stateful computation\n   over both a \u003ccode\u003eBlogLiterately\u003c/code\u003e options record, and a \u003ccode\u003ePandoc\u003c/code\u003e\n   document.  It may also have effects in the \u003ccode\u003eIO\u003c/code\u003e monad.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If you have a pure function of type \u003ccode\u003eBlogLiterately -\u003e Pandoc\n     -\u003e Pandoc\u003c/code\u003e, you can use the \u003ccode\u003e\u003ca\u003epureTransform\u003c/a\u003e\u003c/code\u003e function to create a\n     \u003ccode\u003e\u003ca\u003eTransform\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e If you have a function of type \u003ccode\u003eBlogLiterately -\u003e Pandoc -\u003e IO\n     Pandoc\u003c/code\u003e, you can use \u003ccode\u003e\u003ca\u003eioTransform\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Otherwise you can directly create something of type \u003ccode\u003eStateT\n     (BlogLiterately, Pandoc) IO ()\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eFor examples, see the implementations of the standard transforms\n   below.\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Transform",
        "fct-package": "BlogLiterately",
        "fct-signature": "data",
        "fct-source": "src/Text-BlogLiterately-Transform.html#Transform",
        "fct-type": "data",
        "title": "Transform"
      },
      "index": {
        "description": "document transformation consists of two parts an actual transformation expressed as function over Pandoc documents and condition specifying whether the transformation should actually be applied The transformation itself takes BlogLiterately configuration as an argument You may of course ignore it if you do not need to know anything about the configuration The xtra or flag is also provided especially as method of getting information from the command-line to custom extensions Arguments passed via on the command line are available from the xtra field of the BlogLiterately configuration The transformation is then specified as stateful computation over both BlogLiterately options record and Pandoc document It may also have effects in the IO monad If you have pure function of type BlogLiterately Pandoc Pandoc you can use the pureTransform function to create Transform If you have function of type BlogLiterately Pandoc IO Pandoc you can use ioTransform Otherwise you can directly create something of type StateT BlogLiterately Pandoc IO For examples see the implementations of the standard transforms below",
        "hierarchy": "Text BlogLiterately Transform",
        "module": "Text.BlogLiterately.Transform",
        "name": "Transform",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "Transform",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Transform.html#v:Transform",
      "description": {
        "fct-module": "Text.BlogLiterately.Transform",
        "fct-package": "BlogLiterately",
        "fct-signature": "Transform",
        "fct-source": "src/Text-BlogLiterately-Transform.html#Transform",
        "fct-type": "function",
        "title": "Transform"
      },
      "index": {
        "description": "",
        "hierarchy": "Text BlogLiterately Transform",
        "module": "Text.BlogLiterately.Transform",
        "name": "Transform",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "Transform",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Transform.html#v:centerImagesXF",
      "description": {
        "fct-descr": "\u003cp\u003eCenter any images which occur in a paragraph by themselves.\n   Inline images are not affected.\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Transform",
        "fct-package": "BlogLiterately",
        "fct-signature": "Transform",
        "fct-source": "src/Text-BlogLiterately-Transform.html#centerImagesXF",
        "fct-type": "function",
        "title": "centerImagesXF"
      },
      "index": {
        "description": "Center any images which occur in paragraph by themselves Inline images are not affected",
        "hierarchy": "Text BlogLiterately Transform",
        "module": "Text.BlogLiterately.Transform",
        "name": "centerImagesXF",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "Images XF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Transform.html#v:citationsXF",
      "description": {
        "fct-descr": "\u003cp\u003eFormat citations.\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Transform",
        "fct-package": "BlogLiterately",
        "fct-signature": "Transform",
        "fct-source": "src/Text-BlogLiterately-Transform.html#citationsXF",
        "fct-type": "function",
        "title": "citationsXF"
      },
      "index": {
        "description": "Format citations",
        "hierarchy": "Text BlogLiterately Transform",
        "module": "Text.BlogLiterately.Transform",
        "name": "citationsXF",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "XF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Transform.html#v:fixLineEndings",
      "description": {
        "fct-descr": "\u003cp\u003eTurn \u003ccode\u003eCRLF\u003c/code\u003e pairs into a single \u003ccode\u003eLF\u003c/code\u003e.  This is necessary since\n   \u003ccode\u003e\u003ca\u003ereadMarkdown\u003c/a\u003e\u003c/code\u003e is picky about line endings.\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Transform",
        "fct-package": "BlogLiterately",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Text-BlogLiterately-Transform.html#fixLineEndings",
        "fct-type": "function",
        "title": "fixLineEndings"
      },
      "index": {
        "description": "Turn CRLF pairs into single LF This is necessary since readMarkdown is picky about line endings",
        "hierarchy": "Text BlogLiterately Transform",
        "module": "Text.BlogLiterately.Transform",
        "name": "fixLineEndings",
        "normalized": "String-\u003eString",
        "package": "BlogLiterately",
        "partial": "Line Endings",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Transform.html#v:getTransform",
      "description": {
        "fct-descr": "\u003cp\u003eA document transformation, which can transform\n   both the document and the options and have\n   effects in the IO monad.  The options record\n   can be transformed because the document itself\n   may contain information which affects the options.\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Transform",
        "fct-package": "BlogLiterately",
        "fct-signature": "StateT (BlogLiterately, Pandoc) IO ()",
        "fct-source": "src/Text-BlogLiterately-Transform.html#Transform",
        "fct-type": "function",
        "title": "getTransform"
      },
      "index": {
        "description": "document transformation which can transform both the document and the options and have effects in the IO monad The options record can be transformed because the document itself may contain information which affects the options",
        "hierarchy": "Text BlogLiterately Transform",
        "module": "Text.BlogLiterately.Transform",
        "name": "getTransform",
        "normalized": "StateT(BlogLiterately,Pandoc)IO()",
        "package": "BlogLiterately",
        "partial": "Transform",
        "signature": "StateT(BlogLiterately,Pandoc)IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Transform.html#v:ghciXF",
      "description": {
        "fct-descr": "\u003cp\u003eFormat embedded \u003ccode\u003eghci\u003c/code\u003e sessions (if the \u003ccode\u003eghci\u003c/code\u003e flag is set).\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Transform",
        "fct-package": "BlogLiterately",
        "fct-signature": "Transform",
        "fct-source": "src/Text-BlogLiterately-Transform.html#ghciXF",
        "fct-type": "function",
        "title": "ghciXF"
      },
      "index": {
        "description": "Format embedded ghci sessions if the ghci flag is set",
        "hierarchy": "Text BlogLiterately Transform",
        "module": "Text.BlogLiterately.Transform",
        "name": "ghciXF",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "XF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Transform.html#v:highlightOptsXF",
      "description": {
        "fct-descr": "\u003cp\u003eRead a user-supplied style file and add its contents to the\n   highlighting options.\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Transform",
        "fct-package": "BlogLiterately",
        "fct-signature": "Transform",
        "fct-source": "src/Text-BlogLiterately-Transform.html#highlightOptsXF",
        "fct-type": "function",
        "title": "highlightOptsXF"
      },
      "index": {
        "description": "Read user-supplied style file and add its contents to the highlighting options",
        "hierarchy": "Text BlogLiterately Transform",
        "module": "Text.BlogLiterately.Transform",
        "name": "highlightOptsXF",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "Opts XF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Transform.html#v:highlightXF",
      "description": {
        "fct-descr": "\u003cp\u003ePerform syntax highlighting on code blocks.\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Transform",
        "fct-package": "BlogLiterately",
        "fct-signature": "Transform",
        "fct-source": "src/Text-BlogLiterately-Transform.html#highlightXF",
        "fct-type": "function",
        "title": "highlightXF"
      },
      "index": {
        "description": "Perform syntax highlighting on code blocks",
        "hierarchy": "Text BlogLiterately Transform",
        "module": "Text.BlogLiterately.Transform",
        "name": "highlightXF",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "XF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Transform.html#v:ioTransform",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a transformation from a function in the \u003ccode\u003eIO\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Transform",
        "fct-package": "BlogLiterately",
        "fct-signature": "(BlogLiterately -\u003e Pandoc -\u003e IO Pandoc) -\u003e (BlogLiterately -\u003e Bool) -\u003e Transform",
        "fct-source": "src/Text-BlogLiterately-Transform.html#ioTransform",
        "fct-type": "function",
        "title": "ioTransform"
      },
      "index": {
        "description": "Construct transformation from function in the IO monad",
        "hierarchy": "Text BlogLiterately Transform",
        "module": "Text.BlogLiterately.Transform",
        "name": "ioTransform",
        "normalized": "(BlogLiterately-\u003ePandoc-\u003eIO Pandoc)-\u003e(BlogLiterately-\u003eBool)-\u003eTransform",
        "package": "BlogLiterately",
        "partial": "Transform",
        "signature": "(BlogLiterately-\u003ePandoc-\u003eIO Pandoc)-\u003e(BlogLiterately-\u003eBool)-\u003eTransform"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Transform.html#v:optionsXF",
      "description": {
        "fct-descr": "\u003cp\u003eExtract blocks tagged with \u003ccode\u003e[BLOpts]\u003c/code\u003e and use their contents as\n   options.\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Transform",
        "fct-package": "BlogLiterately",
        "fct-signature": "Transform",
        "fct-source": "src/Text-BlogLiterately-Transform.html#optionsXF",
        "fct-type": "function",
        "title": "optionsXF"
      },
      "index": {
        "description": "Extract blocks tagged with BLOpts and use their contents as options",
        "hierarchy": "Text BlogLiterately Transform",
        "module": "Text.BlogLiterately.Transform",
        "name": "optionsXF",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "XF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Transform.html#v:passwordXF",
      "description": {
        "fct-descr": "\u003cp\u003ePrompt the user for a password if the \u003ccode\u003eblog\u003c/code\u003e field is set but no\n   password has been provided.\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Transform",
        "fct-package": "BlogLiterately",
        "fct-signature": "Transform",
        "fct-source": "src/Text-BlogLiterately-Transform.html#passwordXF",
        "fct-type": "function",
        "title": "passwordXF"
      },
      "index": {
        "description": "Prompt the user for password if the blog field is set but no password has been provided",
        "hierarchy": "Text BlogLiterately Transform",
        "module": "Text.BlogLiterately.Transform",
        "name": "passwordXF",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "XF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Transform.html#v:profileXF",
      "description": {
        "fct-descr": "\u003cp\u003eLoad options from a profile if one is specified.\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Transform",
        "fct-package": "BlogLiterately",
        "fct-signature": "Transform",
        "fct-source": "src/Text-BlogLiterately-Transform.html#profileXF",
        "fct-type": "function",
        "title": "profileXF"
      },
      "index": {
        "description": "Load options from profile if one is specified",
        "hierarchy": "Text BlogLiterately Transform",
        "module": "Text.BlogLiterately.Transform",
        "name": "profileXF",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "XF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Transform.html#v:pureTransform",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a transformation from a pure function.\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Transform",
        "fct-package": "BlogLiterately",
        "fct-signature": "(BlogLiterately -\u003e Pandoc -\u003e Pandoc) -\u003e (BlogLiterately -\u003e Bool) -\u003e Transform",
        "fct-source": "src/Text-BlogLiterately-Transform.html#pureTransform",
        "fct-type": "function",
        "title": "pureTransform"
      },
      "index": {
        "description": "Construct transformation from pure function",
        "hierarchy": "Text BlogLiterately Transform",
        "module": "Text.BlogLiterately.Transform",
        "name": "pureTransform",
        "normalized": "(BlogLiterately-\u003ePandoc-\u003ePandoc)-\u003e(BlogLiterately-\u003eBool)-\u003eTransform",
        "package": "BlogLiterately",
        "partial": "Transform",
        "signature": "(BlogLiterately-\u003ePandoc-\u003ePandoc)-\u003e(BlogLiterately-\u003eBool)-\u003eTransform"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Transform.html#v:runTransform",
      "description": {
        "fct-descr": "\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003eTransform\u003c/a\u003e\u003c/code\u003e (if its condition is met).\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Transform",
        "fct-package": "BlogLiterately",
        "fct-signature": "Transform -\u003e StateT (BlogLiterately, Pandoc) IO ()",
        "fct-source": "src/Text-BlogLiterately-Transform.html#runTransform",
        "fct-type": "function",
        "title": "runTransform"
      },
      "index": {
        "description": "Run Transform if its condition is met",
        "hierarchy": "Text BlogLiterately Transform",
        "module": "Text.BlogLiterately.Transform",
        "name": "runTransform",
        "normalized": "Transform-\u003eStateT(BlogLiterately,Pandoc)IO()",
        "package": "BlogLiterately",
        "partial": "Transform",
        "signature": "Transform-\u003eStateT(BlogLiterately,Pandoc)IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Transform.html#v:runTransforms",
      "description": {
        "fct-descr": "\u003cp\u003eRun a pipeline of \u003ccode\u003e\u003ca\u003eTransform\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Transform",
        "fct-package": "BlogLiterately",
        "fct-signature": "[Transform] -\u003e BlogLiterately -\u003e Pandoc -\u003e IO (BlogLiterately, Pandoc)",
        "fct-source": "src/Text-BlogLiterately-Transform.html#runTransforms",
        "fct-type": "function",
        "title": "runTransforms"
      },
      "index": {
        "description": "Run pipeline of Transform",
        "hierarchy": "Text BlogLiterately Transform",
        "module": "Text.BlogLiterately.Transform",
        "name": "runTransforms",
        "normalized": "[Transform]-\u003eBlogLiterately-\u003ePandoc-\u003eIO(BlogLiterately,Pandoc)",
        "package": "BlogLiterately",
        "partial": "Transforms",
        "signature": "[Transform]-\u003eBlogLiterately-\u003ePandoc-\u003eIO(BlogLiterately,Pandoc)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Transform.html#v:standardTransforms",
      "description": {
        "fct-descr": "\u003cp\u003eThe standard set of transforms that are run by default (in order\n   from top to bottom):\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eoptionsXF\u003c/a\u003e\u003c/code\u003e: extract options specified in \u003ccode\u003e[BLOpts]\u003c/code\u003e blocks in the file\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eprofileXF\u003c/a\u003e\u003c/code\u003e: load the requested profile (if any)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003epasswordXF\u003c/a\u003e\u003c/code\u003e: prompt the user for a password if needed\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003etitleXF\u003c/a\u003e\u003c/code\u003e: extract the title from a special title block\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ewptexifyXF\u003c/a\u003e\u003c/code\u003e: turn LaTeX into WordPress format if requested\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eghciXF\u003c/a\u003e\u003c/code\u003e: run and typeset ghci sessions if requested\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003euploadImagesXF\u003c/a\u003e\u003c/code\u003e: upload images if requested\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ecenterImagesXF\u003c/a\u003e\u003c/code\u003e: center images occurring in their own paragraph\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ehighlightOptsXF\u003c/a\u003e\u003c/code\u003e: load the requested highlighting style file\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ehighlightXF\u003c/a\u003e\u003c/code\u003e: perform syntax highlighting\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ecitationsXF\u003c/a\u003e\u003c/code\u003e: process citations\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Text.BlogLiterately.Transform",
        "fct-package": "BlogLiterately",
        "fct-signature": "[Transform]",
        "fct-source": "src/Text-BlogLiterately-Transform.html#standardTransforms",
        "fct-type": "function",
        "title": "standardTransforms"
      },
      "index": {
        "description": "The standard set of transforms that are run by default in order from top to bottom optionsXF extract options specified in BLOpts blocks in the file profileXF load the requested profile if any passwordXF prompt the user for password if needed titleXF extract the title from special title block wptexifyXF turn LaTeX into WordPress format if requested ghciXF run and typeset ghci sessions if requested uploadImagesXF upload images if requested centerImagesXF center images occurring in their own paragraph highlightOptsXF load the requested highlighting style file highlightXF perform syntax highlighting citationsXF process citations",
        "hierarchy": "Text BlogLiterately Transform",
        "module": "Text.BlogLiterately.Transform",
        "name": "standardTransforms",
        "normalized": "[Transform]",
        "package": "BlogLiterately",
        "partial": "Transforms",
        "signature": "[Transform]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Transform.html#v:titleXF",
      "description": {
        "fct-descr": "\u003cp\u003ePotentially extract a title from the metadata block, and set it\n   in the options record.\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Transform",
        "fct-package": "BlogLiterately",
        "fct-signature": "Transform",
        "fct-source": "src/Text-BlogLiterately-Transform.html#titleXF",
        "fct-type": "function",
        "title": "titleXF"
      },
      "index": {
        "description": "Potentially extract title from the metadata block and set it in the options record",
        "hierarchy": "Text BlogLiterately Transform",
        "module": "Text.BlogLiterately.Transform",
        "name": "titleXF",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "XF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Transform.html#v:uploadImagesXF",
      "description": {
        "fct-descr": "\u003cp\u003eUpload embedded local images to the server (if the \u003ccode\u003euploadImages\u003c/code\u003e\n   flag is set).\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Transform",
        "fct-package": "BlogLiterately",
        "fct-signature": "Transform",
        "fct-source": "src/Text-BlogLiterately-Transform.html#uploadImagesXF",
        "fct-type": "function",
        "title": "uploadImagesXF"
      },
      "index": {
        "description": "Upload embedded local images to the server if the uploadImages flag is set",
        "hierarchy": "Text BlogLiterately Transform",
        "module": "Text.BlogLiterately.Transform",
        "name": "uploadImagesXF",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "Images XF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Transform.html#v:wptexifyXF",
      "description": {
        "fct-descr": "\u003cp\u003eFormat embedded LaTeX for WordPress (if the \u003ccode\u003ewplatex\u003c/code\u003e flag is set).\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Transform",
        "fct-package": "BlogLiterately",
        "fct-signature": "Transform",
        "fct-source": "src/Text-BlogLiterately-Transform.html#wptexifyXF",
        "fct-type": "function",
        "title": "wptexifyXF"
      },
      "index": {
        "description": "Format embedded LaTeX for WordPress if the wplatex flag is set",
        "hierarchy": "Text BlogLiterately Transform",
        "module": "Text.BlogLiterately.Transform",
        "name": "wptexifyXF",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "XF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Transform.html#v:xfCond",
      "description": {
        "fct-descr": "\u003cp\u003eA condition under which to run the transformation.\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Transform",
        "fct-package": "BlogLiterately",
        "fct-signature": "BlogLiterately -\u003e Bool",
        "fct-source": "src/Text-BlogLiterately-Transform.html#Transform",
        "fct-type": "function",
        "title": "xfCond"
      },
      "index": {
        "description": "condition under which to run the transformation",
        "hierarchy": "Text BlogLiterately Transform",
        "module": "Text.BlogLiterately.Transform",
        "name": "xfCond",
        "normalized": "BlogLiterately-\u003eBool",
        "package": "BlogLiterately",
        "partial": "Cond",
        "signature": "BlogLiterately-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately-Transform.html#v:xformDoc",
      "description": {
        "fct-descr": "\u003cp\u003eTransform a complete input document string to an HTML output\n   string, given a list of transformation passes.\n\u003c/p\u003e",
        "fct-module": "Text.BlogLiterately.Transform",
        "fct-package": "BlogLiterately",
        "fct-signature": "BlogLiterately -\u003e [Transform] -\u003e String -\u003e IO (BlogLiterately, String)",
        "fct-source": "src/Text-BlogLiterately-Transform.html#xformDoc",
        "fct-type": "function",
        "title": "xformDoc"
      },
      "index": {
        "description": "Transform complete input document string to an HTML output string given list of transformation passes",
        "hierarchy": "Text BlogLiterately Transform",
        "module": "Text.BlogLiterately.Transform",
        "name": "xformDoc",
        "normalized": "BlogLiterately-\u003e[Transform]-\u003eString-\u003eIO(BlogLiterately,String)",
        "package": "BlogLiterately",
        "partial": "Doc",
        "signature": "BlogLiterately-\u003e[Transform]-\u003eString-\u003eIO(BlogLiterately,String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/BlogLiterately/docs/Text-BlogLiterately.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module is provided as a convenient wrapper which re-exports\n all the other \u003ccode\u003eText.BlogLiterately.*\u003c/code\u003e modules.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.BlogLiterately",
        "fct-package": "BlogLiterately",
        "fct-signature": "module",
        "fct-source": "src/Text-BlogLiterately.html",
        "fct-type": "module",
        "title": "BlogLiterately"
      },
      "index": {
        "description": "This module is provided as convenient wrapper which re-exports all the other Text.BlogLiterately modules",
        "hierarchy": "Text BlogLiterately",
        "module": "Text.BlogLiterately",
        "name": "BlogLiterately",
        "normalized": "",
        "package": "BlogLiterately",
        "partial": "Blog Literately",
        "signature": ""
      }
    }
  }
]