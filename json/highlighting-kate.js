[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Format-HTML.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFormatters that convert a list of annotated source lines to HTML.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.Highlighting.Kate.Format.HTML",
        "fct-package": "highlighting-kate",
        "fct-signature": "module",
        "fct-source": "src/Text-Highlighting-Kate-Format-HTML.html",
        "fct-type": "module",
        "title": "HTML"
      },
      "index": {
        "description": "Formatters that convert list of annotated source lines to HTML",
        "hierarchy": "Text Highlighting Kate Format HTML",
        "module": "Text.Highlighting.Kate.Format.HTML",
        "name": "HTML",
        "normalized": "",
        "package": "highlighting-kate",
        "partial": "HTML",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Format-HTML.html#v:formatHtmlBlock",
      "description": {
        "fct-descr": "\u003cp\u003eFormat tokens as an HTML \u003ccode\u003epre\u003c/code\u003e block. If line numbering is\n selected, this is put into a table row with line numbers in the\n left cell.\n\u003c/p\u003e",
        "fct-module": "Text.Highlighting.Kate.Format.HTML",
        "fct-package": "highlighting-kate",
        "fct-signature": "FormatOptions -\u003e [SourceLine] -\u003e Html",
        "fct-source": "src/Text-Highlighting-Kate-Format-HTML.html#formatHtmlBlock",
        "fct-type": "function",
        "title": "formatHtmlBlock"
      },
      "index": {
        "description": "Format tokens as an HTML pre block If line numbering is selected this is put into table row with line numbers in the left cell",
        "hierarchy": "Text Highlighting Kate Format HTML",
        "module": "Text.Highlighting.Kate.Format.HTML",
        "name": "formatHtmlBlock",
        "normalized": "FormatOptions-\u003e[SourceLine]-\u003eHtml",
        "package": "highlighting-kate",
        "partial": "Html Block",
        "signature": "FormatOptions-\u003e[SourceLine]-\u003eHtml"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Format-HTML.html#v:formatHtmlInline",
      "description": {
        "fct-descr": "\u003cp\u003eFormat tokens using HTML spans inside \u003ccode\u003ecode\u003c/code\u003e tags. For example,\n A \u003ccode\u003eKeywordTok\u003c/code\u003e is rendered as a span with class \u003ccode\u003ekw\u003c/code\u003e.\n Short class names correspond to \u003ccode\u003e\u003ca\u003eTokenType\u003c/a\u003e\u003c/code\u003es as follows:\n \u003ccode\u003e\u003ca\u003eKeywordTok\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003ekw\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eDataTypeTok\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003edt\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003eDecValTok\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003edv\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eBaseNTok\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003ebn\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eFloatTok\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003efl\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003eCharTok\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003ech\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eStringTok\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003est\u003c/code\u003e, \u003ccode\u003eCommontTok\u003c/code\u003e = \u003ccode\u003eco\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003eOtherTok\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003eot\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eAlertTok\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003eal\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eFunctionTok\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003efu\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003eRegionMarkerTok\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003ere\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eErrorTok\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003eer\u003c/code\u003e. A \u003ccode\u003e\u003ca\u003eNormalTok\u003c/a\u003e\u003c/code\u003e\n is not marked up at all.\n\u003c/p\u003e",
        "fct-module": "Text.Highlighting.Kate.Format.HTML",
        "fct-package": "highlighting-kate",
        "fct-signature": "FormatOptions -\u003e [SourceLine] -\u003e Html",
        "fct-source": "src/Text-Highlighting-Kate-Format-HTML.html#formatHtmlInline",
        "fct-type": "function",
        "title": "formatHtmlInline"
      },
      "index": {
        "description": "Format tokens using HTML spans inside code tags For example KeywordTok is rendered as span with class kw Short class names correspond to TokenType as follows KeywordTok kw DataTypeTok dt DecValTok dv BaseNTok bn FloatTok fl CharTok ch StringTok st CommontTok co OtherTok ot AlertTok al FunctionTok fu RegionMarkerTok re ErrorTok er NormalTok is not marked up at all",
        "hierarchy": "Text Highlighting Kate Format HTML",
        "module": "Text.Highlighting.Kate.Format.HTML",
        "name": "formatHtmlInline",
        "normalized": "FormatOptions-\u003e[SourceLine]-\u003eHtml",
        "package": "highlighting-kate",
        "partial": "Html Inline",
        "signature": "FormatOptions-\u003e[SourceLine]-\u003eHtml"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Format-HTML.html#v:styleToCss",
      "description": {
        "fct-descr": "\u003cp\u003eReturns CSS for styling highlighted code according to the given style.\n\u003c/p\u003e",
        "fct-module": "Text.Highlighting.Kate.Format.HTML",
        "fct-package": "highlighting-kate",
        "fct-signature": "Style -\u003e String",
        "fct-source": "src/Text-Highlighting-Kate-Format-HTML.html#styleToCss",
        "fct-type": "function",
        "title": "styleToCss"
      },
      "index": {
        "description": "Returns CSS for styling highlighted code according to the given style",
        "hierarchy": "Text Highlighting Kate Format HTML",
        "module": "Text.Highlighting.Kate.Format.HTML",
        "name": "styleToCss",
        "normalized": "Style-\u003eString",
        "package": "highlighting-kate",
        "partial": "To Css",
        "signature": "Style-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Format-LaTeX.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFormatters that convert a list of annotated source lines to LaTeX.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.Highlighting.Kate.Format.LaTeX",
        "fct-package": "highlighting-kate",
        "fct-signature": "module",
        "fct-source": "src/Text-Highlighting-Kate-Format-LaTeX.html",
        "fct-type": "module",
        "title": "LaTeX"
      },
      "index": {
        "description": "Formatters that convert list of annotated source lines to LaTeX",
        "hierarchy": "Text Highlighting Kate Format LaTeX",
        "module": "Text.Highlighting.Kate.Format.LaTeX",
        "name": "LaTeX",
        "normalized": "",
        "package": "highlighting-kate",
        "partial": "La Te",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Format-LaTeX.html#v:formatLaTeXBlock",
      "description": {
        "fct-descr": "\u003cp\u003eFormat tokens as a LaTeX \u003ccode\u003eHighlighting\u003c/code\u003e environment inside a\n \u003ccode\u003eShaded\u003c/code\u003e environment.  \u003ccode\u003eHighlighting\u003c/code\u003e and \u003ccode\u003eShaded\u003c/code\u003e are\n defined by the macros produced by \u003ccode\u003e\u003ca\u003estyleToLaTeX\u003c/a\u003e\u003c/code\u003e.  \u003ccode\u003eHighlighting\u003c/code\u003e\n is a verbatim environment using \u003ccode\u003efancyvrb\u003c/code\u003e; \u003ccode\u003e\\\u003c/code\u003e, \u003ccode\u003e{\u003c/code\u003e, and \u003ccode\u003e}\u003c/code\u003e\n have their normal meanings inside this environment, so that\n formatting commands work.  \u003ccode\u003eShaded\u003c/code\u003e is either nothing\n (if the style's background color is default) or a \u003ccode\u003esnugshade\u003c/code\u003e\n environment from \u003ccode\u003eframed\u003c/code\u003e, providing a background color\n for the whole code block, even if it spans multiple pages.\n\u003c/p\u003e",
        "fct-module": "Text.Highlighting.Kate.Format.LaTeX",
        "fct-package": "highlighting-kate",
        "fct-signature": "FormatOptions -\u003e [SourceLine] -\u003e String",
        "fct-source": "src/Text-Highlighting-Kate-Format-LaTeX.html#formatLaTeXBlock",
        "fct-type": "function",
        "title": "formatLaTeXBlock"
      },
      "index": {
        "description": "Format tokens as LaTeX Highlighting environment inside Shaded environment Highlighting and Shaded are defined by the macros produced by styleToLaTeX Highlighting is verbatim environment using fancyvrb and have their normal meanings inside this environment so that formatting commands work Shaded is either nothing if the style background color is default or snugshade environment from framed providing background color for the whole code block even if it spans multiple pages",
        "hierarchy": "Text Highlighting Kate Format LaTeX",
        "module": "Text.Highlighting.Kate.Format.LaTeX",
        "name": "formatLaTeXBlock",
        "normalized": "FormatOptions-\u003e[SourceLine]-\u003eString",
        "package": "highlighting-kate",
        "partial": "La Te XBlock",
        "signature": "FormatOptions-\u003e[SourceLine]-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Format-LaTeX.html#v:formatLaTeXInline",
      "description": {
        "fct-descr": "\u003cp\u003eFormats tokens as LaTeX using custom commands inside\n \u003ccode\u003e|\u003c/code\u003e characters. Assumes that \u003ccode\u003e|\u003c/code\u003e is defined as a short verbatim\n command by the macros produced by \u003ccode\u003e\u003ca\u003estyleToLaTeX\u003c/a\u003e\u003c/code\u003e.\n A \u003ccode\u003eKeywordTok\u003c/code\u003e is rendered using \u003ccode\u003e\\KeywordTok{..}\u003c/code\u003e, and so on.\n\u003c/p\u003e",
        "fct-module": "Text.Highlighting.Kate.Format.LaTeX",
        "fct-package": "highlighting-kate",
        "fct-signature": "FormatOptions -\u003e [SourceLine] -\u003e String",
        "fct-source": "src/Text-Highlighting-Kate-Format-LaTeX.html#formatLaTeXInline",
        "fct-type": "function",
        "title": "formatLaTeXInline"
      },
      "index": {
        "description": "Formats tokens as LaTeX using custom commands inside characters Assumes that is defined as short verbatim command by the macros produced by styleToLaTeX KeywordTok is rendered using KeywordTok and so on",
        "hierarchy": "Text Highlighting Kate Format LaTeX",
        "module": "Text.Highlighting.Kate.Format.LaTeX",
        "name": "formatLaTeXInline",
        "normalized": "FormatOptions-\u003e[SourceLine]-\u003eString",
        "package": "highlighting-kate",
        "partial": "La Te XInline",
        "signature": "FormatOptions-\u003e[SourceLine]-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Format-LaTeX.html#v:styleToLaTeX",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a \u003ccode\u003e\u003ca\u003eStyle\u003c/a\u003e\u003c/code\u003e to a set of LaTeX macro definitions,\n which should be placed in the document's preamble.\n Note: default LaTeX setup doesn't allow boldface typewriter font.\n To make boldface work in styles, you need to use a different typewriter\n font. This will work for computer modern:\n\u003c/p\u003e\u003cpre\u003e \\DeclareFontShape{OT1}{cmtt}{bx}{n}{\u003c5\u003e\u003c6\u003e\u003c7\u003e\u003c8\u003e\u003c9\u003e\u003c10\u003e\u003c10.95\u003e\u003c12\u003e\u003c14.4\u003e\u003c17.28\u003e\u003c20.74\u003e\u003c24.88\u003ecmttb10}{}\n\u003c/pre\u003e\u003cp\u003eOr, with xelatex:\n\u003c/p\u003e\u003cpre\u003e \\usepackage{fontspec}\n \\setmainfont[SmallCapsFont={* Caps}]{Latin Modern Roman}\n \\setsansfont{Latin Modern Sans}\n \\setmonofont[SmallCapsFont={Latin Modern Mono Caps}]{Latin Modern Mono Light}\n\u003c/pre\u003e",
        "fct-module": "Text.Highlighting.Kate.Format.LaTeX",
        "fct-package": "highlighting-kate",
        "fct-signature": "Style -\u003e String",
        "fct-source": "src/Text-Highlighting-Kate-Format-LaTeX.html#styleToLaTeX",
        "fct-type": "function",
        "title": "styleToLaTeX"
      },
      "index": {
        "description": "Converts Style to set of LaTeX macro definitions which should be placed in the document preamble Note default LaTeX setup doesn allow boldface typewriter font To make boldface work in styles you need to use different typewriter font This will work for computer modern DeclareFontShape OT1 cmtt bx cmttb10 Or with xelatex usepackage fontspec setmainfont SmallCapsFont Caps Latin Modern Roman setsansfont Latin Modern Sans setmonofont SmallCapsFont Latin Modern Mono Caps Latin Modern Mono Light",
        "hierarchy": "Text Highlighting Kate Format LaTeX",
        "module": "Text.Highlighting.Kate.Format.LaTeX",
        "name": "styleToLaTeX",
        "normalized": "Style-\u003eString",
        "package": "highlighting-kate",
        "partial": "To La Te",
        "signature": "Style-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Styles.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStyles for rendering annotated source lines.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.Highlighting.Kate.Styles",
        "fct-package": "highlighting-kate",
        "fct-signature": "module",
        "fct-source": "src/Text-Highlighting-Kate-Styles.html",
        "fct-type": "module",
        "title": "Styles"
      },
      "index": {
        "description": "Styles for rendering annotated source lines",
        "hierarchy": "Text Highlighting Kate Styles",
        "module": "Text.Highlighting.Kate.Styles",
        "name": "Styles",
        "normalized": "",
        "package": "highlighting-kate",
        "partial": "Styles",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Styles.html#v:espresso",
      "description": {
        "fct-descr": "\u003cp\u003eStyle based on ultraviolet's espresso_libre.css (dark background).\n\u003c/p\u003e",
        "fct-module": "Text.Highlighting.Kate.Styles",
        "fct-package": "highlighting-kate",
        "fct-signature": "Style",
        "fct-source": "src/Text-Highlighting-Kate-Styles.html#espresso",
        "fct-type": "function",
        "title": "espresso"
      },
      "index": {
        "description": "Style based on ultraviolet espresso libre.css dark background",
        "hierarchy": "Text Highlighting Kate Styles",
        "module": "Text.Highlighting.Kate.Styles",
        "name": "espresso",
        "normalized": "",
        "package": "highlighting-kate",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Styles.html#v:haddock",
      "description": {
        "fct-descr": "\u003cp\u003eStyle based on haddock's source highlighting.\n\u003c/p\u003e",
        "fct-module": "Text.Highlighting.Kate.Styles",
        "fct-package": "highlighting-kate",
        "fct-signature": "Style",
        "fct-source": "src/Text-Highlighting-Kate-Styles.html#haddock",
        "fct-type": "function",
        "title": "haddock"
      },
      "index": {
        "description": "Style based on haddock source highlighting",
        "hierarchy": "Text Highlighting Kate Styles",
        "module": "Text.Highlighting.Kate.Styles",
        "name": "haddock",
        "normalized": "",
        "package": "highlighting-kate",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Styles.html#v:kate",
      "description": {
        "fct-descr": "\u003cp\u003eStyle based on kate's default colors.\n\u003c/p\u003e",
        "fct-module": "Text.Highlighting.Kate.Styles",
        "fct-package": "highlighting-kate",
        "fct-signature": "Style",
        "fct-source": "src/Text-Highlighting-Kate-Styles.html#kate",
        "fct-type": "function",
        "title": "kate"
      },
      "index": {
        "description": "Style based on kate default colors",
        "hierarchy": "Text Highlighting Kate Styles",
        "module": "Text.Highlighting.Kate.Styles",
        "name": "kate",
        "normalized": "",
        "package": "highlighting-kate",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Styles.html#v:monochrome",
      "description": {
        "fct-descr": "\u003cp\u003eStyle with no colors.\n\u003c/p\u003e",
        "fct-module": "Text.Highlighting.Kate.Styles",
        "fct-package": "highlighting-kate",
        "fct-signature": "Style",
        "fct-source": "src/Text-Highlighting-Kate-Styles.html#monochrome",
        "fct-type": "function",
        "title": "monochrome"
      },
      "index": {
        "description": "Style with no colors",
        "hierarchy": "Text Highlighting Kate Styles",
        "module": "Text.Highlighting.Kate.Styles",
        "name": "monochrome",
        "normalized": "",
        "package": "highlighting-kate",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Styles.html#v:pygments",
      "description": {
        "fct-descr": "\u003cp\u003eStyle based on pygments's default colors.\n\u003c/p\u003e",
        "fct-module": "Text.Highlighting.Kate.Styles",
        "fct-package": "highlighting-kate",
        "fct-signature": "Style",
        "fct-source": "src/Text-Highlighting-Kate-Styles.html#pygments",
        "fct-type": "function",
        "title": "pygments"
      },
      "index": {
        "description": "Style based on pygments default colors",
        "hierarchy": "Text Highlighting Kate Styles",
        "module": "Text.Highlighting.Kate.Styles",
        "name": "pygments",
        "normalized": "",
        "package": "highlighting-kate",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Styles.html#v:tango",
      "description": {
        "fct-descr": "\u003cp\u003eStyle based on pygments's tango colors.\n\u003c/p\u003e",
        "fct-module": "Text.Highlighting.Kate.Styles",
        "fct-package": "highlighting-kate",
        "fct-signature": "Style",
        "fct-source": "src/Text-Highlighting-Kate-Styles.html#tango",
        "fct-type": "function",
        "title": "tango"
      },
      "index": {
        "description": "Style based on pygments tango colors",
        "hierarchy": "Text Highlighting Kate Styles",
        "module": "Text.Highlighting.Kate.Styles",
        "name": "tango",
        "normalized": "",
        "package": "highlighting-kate",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Styles.html#v:zenburn",
      "description": {
        "fct-descr": "\u003cp\u003eStyle based on the popular zenburn vim color scheme\n\u003c/p\u003e",
        "fct-module": "Text.Highlighting.Kate.Styles",
        "fct-package": "highlighting-kate",
        "fct-signature": "Style",
        "fct-source": "src/Text-Highlighting-Kate-Styles.html#zenburn",
        "fct-type": "function",
        "title": "zenburn"
      },
      "index": {
        "description": "Style based on the popular zenburn vim color scheme",
        "hierarchy": "Text Highlighting Kate Styles",
        "module": "Text.Highlighting.Kate.Styles",
        "name": "zenburn",
        "normalized": "",
        "package": "highlighting-kate",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Syntax.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eToken lexer for various languages.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.Highlighting.Kate.Syntax",
        "fct-package": "highlighting-kate",
        "fct-signature": "module",
        "fct-source": "src/Text-Highlighting-Kate-Syntax.html",
        "fct-type": "module",
        "title": "Syntax"
      },
      "index": {
        "description": "Token lexer for various languages",
        "hierarchy": "Text Highlighting Kate Syntax",
        "module": "Text.Highlighting.Kate.Syntax",
        "name": "Syntax",
        "normalized": "",
        "package": "highlighting-kate",
        "partial": "Syntax",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Syntax.html#v:highlightAs",
      "description": {
        "fct-descr": "\u003cp\u003eHighlight source code. The source language may be specified\n by its canonical name (case-insensitive) or by a canonical\n extension (if unique).\n The parsers read the input lazily and parse line by line;\n results are returned immediately.\n Supported languages: \u003ccode\u003eactionscript\u003c/code\u003e, \u003ccode\u003eada\u003c/code\u003e, \u003ccode\u003ealert\u003c/code\u003e, \u003ccode\u003ealert_indent\u003c/code\u003e, \u003ccode\u003eapache\u003c/code\u003e, \u003ccode\u003easn1\u003c/code\u003e, \u003ccode\u003easp\u003c/code\u003e, \u003ccode\u003eawk\u003c/code\u003e, \u003ccode\u003ebash\u003c/code\u003e, \u003ccode\u003ebibtex\u003c/code\u003e, \u003ccode\u003eboo\u003c/code\u003e, \u003ccode\u003ec\u003c/code\u003e, \u003ccode\u003echangelog\u003c/code\u003e, \u003ccode\u003eclojure\u003c/code\u003e, \u003ccode\u003ecmake\u003c/code\u003e, \u003ccode\u003ecoffee\u003c/code\u003e, \u003ccode\u003ecoldfusion\u003c/code\u003e, \u003ccode\u003ecommonlisp\u003c/code\u003e, \u003ccode\u003ecpp\u003c/code\u003e, \u003ccode\u003ecs\u003c/code\u003e, \u003ccode\u003ecss\u003c/code\u003e, \u003ccode\u003ecurry\u003c/code\u003e, \u003ccode\u003ed\u003c/code\u003e, \u003ccode\u003ediff\u003c/code\u003e, \u003ccode\u003edjangotemplate\u003c/code\u003e, \u003ccode\u003edoxygen\u003c/code\u003e, \u003ccode\u003edoxygenlua\u003c/code\u003e, \u003ccode\u003edtd\u003c/code\u003e, \u003ccode\u003eeiffel\u003c/code\u003e, \u003ccode\u003eemail\u003c/code\u003e, \u003ccode\u003eerlang\u003c/code\u003e, \u003ccode\u003efortran\u003c/code\u003e, \u003ccode\u003efsharp\u003c/code\u003e, \u003ccode\u003egnuassembler\u003c/code\u003e, \u003ccode\u003ego\u003c/code\u003e, \u003ccode\u003ehaskell\u003c/code\u003e, \u003ccode\u003ehaxe\u003c/code\u003e, \u003ccode\u003ehtml\u003c/code\u003e, \u003ccode\u003eini\u003c/code\u003e, \u003ccode\u003ejava\u003c/code\u003e, \u003ccode\u003ejavadoc\u003c/code\u003e, \u003ccode\u003ejavascript\u003c/code\u003e, \u003ccode\u003ejson\u003c/code\u003e, \u003ccode\u003ejsp\u003c/code\u003e, \u003ccode\u003ejulia\u003c/code\u003e, \u003ccode\u003elatex\u003c/code\u003e, \u003ccode\u003elex\u003c/code\u003e, \u003ccode\u003eliteratecurry\u003c/code\u003e, \u003ccode\u003eliteratehaskell\u003c/code\u003e, \u003ccode\u003elua\u003c/code\u003e, \u003ccode\u003emakefile\u003c/code\u003e, \u003ccode\u003emandoc\u003c/code\u003e, \u003ccode\u003emarkdown\u003c/code\u003e, \u003ccode\u003ematlab\u003c/code\u003e, \u003ccode\u003emaxima\u003c/code\u003e, \u003ccode\u003emetafont\u003c/code\u003e, \u003ccode\u003emips\u003c/code\u003e, \u003ccode\u003emodelines\u003c/code\u003e, \u003ccode\u003emodula2\u003c/code\u003e, \u003ccode\u003emodula3\u003c/code\u003e, \u003ccode\u003emonobasic\u003c/code\u003e, \u003ccode\u003enasm\u003c/code\u003e, \u003ccode\u003enoweb\u003c/code\u003e, \u003ccode\u003eobjectivec\u003c/code\u003e, \u003ccode\u003eobjectivecpp\u003c/code\u003e, \u003ccode\u003eocaml\u003c/code\u003e, \u003ccode\u003eoctave\u003c/code\u003e, \u003ccode\u003epascal\u003c/code\u003e, \u003ccode\u003eperl\u003c/code\u003e, \u003ccode\u003ephp\u003c/code\u003e, \u003ccode\u003epike\u003c/code\u003e, \u003ccode\u003epostscript\u003c/code\u003e, \u003ccode\u003eprolog\u003c/code\u003e, \u003ccode\u003epython\u003c/code\u003e, \u003ccode\u003er\u003c/code\u003e, \u003ccode\u003erelaxngcompact\u003c/code\u003e, \u003ccode\u003erestructuredtext\u003c/code\u003e, \u003ccode\u003erhtml\u003c/code\u003e, \u003ccode\u003eroff\u003c/code\u003e, \u003ccode\u003eruby\u003c/code\u003e, \u003ccode\u003erust\u003c/code\u003e, \u003ccode\u003escala\u003c/code\u003e, \u003ccode\u003escheme\u003c/code\u003e, \u003ccode\u003esci\u003c/code\u003e, \u003ccode\u003esed\u003c/code\u003e, \u003ccode\u003esgml\u003c/code\u003e, \u003ccode\u003esql\u003c/code\u003e, \u003ccode\u003esqlmysql\u003c/code\u003e, \u003ccode\u003esqlpostgresql\u003c/code\u003e, \u003ccode\u003etcl\u003c/code\u003e, \u003ccode\u003etexinfo\u003c/code\u003e, \u003ccode\u003everilog\u003c/code\u003e, \u003ccode\u003evhdl\u003c/code\u003e, \u003ccode\u003exml\u003c/code\u003e, \u003ccode\u003exorg\u003c/code\u003e, \u003ccode\u003exslt\u003c/code\u003e, \u003ccode\u003exul\u003c/code\u003e, \u003ccode\u003eyacc\u003c/code\u003e, \u003ccode\u003eyaml\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Highlighting.Kate.Syntax",
        "fct-package": "highlighting-kate",
        "fct-signature": "String-\u003e String-\u003e [SourceLine]",
        "fct-type": "function",
        "title": "highlightAs"
      },
      "index": {
        "description": "Highlight source code The source language may be specified by its canonical name case-insensitive or by canonical extension if unique The parsers read the input lazily and parse line by line results are returned immediately Supported languages actionscript ada alert alert indent apache asn1 asp awk bash bibtex boo changelog clojure cmake coffee coldfusion commonlisp cpp cs css curry diff djangotemplate doxygen doxygenlua dtd eiffel email erlang fortran fsharp gnuassembler go haskell haxe html ini java javadoc javascript json jsp julia latex lex literatecurry literatehaskell lua makefile mandoc markdown matlab maxima metafont mips modelines modula2 modula3 monobasic nasm noweb objectivec objectivecpp ocaml octave pascal perl php pike postscript prolog python relaxngcompact restructuredtext rhtml roff ruby rust scala scheme sci sed sgml sql sqlmysql sqlpostgresql tcl texinfo verilog vhdl xml xorg xslt xul yacc yaml",
        "hierarchy": "Text Highlighting Kate Syntax",
        "module": "Text.Highlighting.Kate.Syntax",
        "name": "highlightAs",
        "normalized": "String-\u003eString-\u003e[SourceLine]",
        "package": "highlighting-kate",
        "partial": "As",
        "signature": "String-\u003eString-\u003e[SourceLine]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Syntax.html#v:languages",
      "description": {
        "fct-descr": "\u003cp\u003eList of supported languages.\n\u003c/p\u003e",
        "fct-module": "Text.Highlighting.Kate.Syntax",
        "fct-package": "highlighting-kate",
        "fct-signature": "[String]",
        "fct-source": "src/Text-Highlighting-Kate-Syntax.html#languages",
        "fct-type": "function",
        "title": "languages"
      },
      "index": {
        "description": "List of supported languages",
        "hierarchy": "Text Highlighting Kate Syntax",
        "module": "Text.Highlighting.Kate.Syntax",
        "name": "languages",
        "normalized": "[String]",
        "package": "highlighting-kate",
        "partial": "",
        "signature": "[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Syntax.html#v:languagesByExtension",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a list of languages appropriate for the given file extension.\n\u003c/p\u003e",
        "fct-module": "Text.Highlighting.Kate.Syntax",
        "fct-package": "highlighting-kate",
        "fct-signature": "String -\u003e [String]",
        "fct-source": "src/Text-Highlighting-Kate-Syntax.html#languagesByExtension",
        "fct-type": "function",
        "title": "languagesByExtension"
      },
      "index": {
        "description": "Returns list of languages appropriate for the given file extension",
        "hierarchy": "Text Highlighting Kate Syntax",
        "module": "Text.Highlighting.Kate.Syntax",
        "name": "languagesByExtension",
        "normalized": "String-\u003e[String]",
        "package": "highlighting-kate",
        "partial": "By Extension",
        "signature": "String-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Syntax.html#v:languagesByFilename",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a list of languages appropriate for the given filename.\n\u003c/p\u003e",
        "fct-module": "Text.Highlighting.Kate.Syntax",
        "fct-package": "highlighting-kate",
        "fct-signature": "FilePath -\u003e [String]",
        "fct-source": "src/Text-Highlighting-Kate-Syntax.html#languagesByFilename",
        "fct-type": "function",
        "title": "languagesByFilename"
      },
      "index": {
        "description": "Returns list of languages appropriate for the given filename",
        "hierarchy": "Text Highlighting Kate Syntax",
        "module": "Text.Highlighting.Kate.Syntax",
        "name": "languagesByFilename",
        "normalized": "FilePath-\u003e[String]",
        "package": "highlighting-kate",
        "partial": "By Filename",
        "signature": "FilePath-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefinitions for data structures needed by highlighting-kate.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.Highlighting.Kate.Types",
        "fct-package": "highlighting-kate",
        "fct-signature": "module",
        "fct-source": "src/Text-Highlighting-Kate-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "Definitions for data structures needed by highlighting-kate",
        "hierarchy": "Text Highlighting Kate Types",
        "module": "Text.Highlighting.Kate.Types",
        "name": "Types",
        "normalized": "",
        "package": "highlighting-kate",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#t:Color",
      "description": {
        "fct-module": "Text.Highlighting.Kate.Types",
        "fct-package": "highlighting-kate",
        "fct-signature": "data",
        "fct-source": "src/Text-Highlighting-Kate-Types.html#Color",
        "fct-type": "data",
        "title": "Color"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Highlighting Kate Types",
        "module": "Text.Highlighting.Kate.Types",
        "name": "Color",
        "normalized": "",
        "package": "highlighting-kate",
        "partial": "Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#t:Context",
      "description": {
        "fct-descr": "\u003cp\u003eA context: pair of syntax name and context name.\n\u003c/p\u003e",
        "fct-module": "Text.Highlighting.Kate.Types",
        "fct-package": "highlighting-kate",
        "fct-signature": "type",
        "fct-source": "src/Text-Highlighting-Kate-Types.html#Context",
        "fct-type": "type",
        "title": "Context"
      },
      "index": {
        "description": "context pair of syntax name and context name",
        "hierarchy": "Text Highlighting Kate Types",
        "module": "Text.Highlighting.Kate.Types",
        "name": "Context",
        "normalized": "",
        "package": "highlighting-kate",
        "partial": "Context",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#t:ContextStack",
      "description": {
        "fct-descr": "\u003cp\u003eA stack of contexts.  (Language-specific context\n stacks must be maintained because of IncludeRules.)\n\u003c/p\u003e",
        "fct-module": "Text.Highlighting.Kate.Types",
        "fct-package": "highlighting-kate",
        "fct-signature": "type",
        "fct-source": "src/Text-Highlighting-Kate-Types.html#ContextStack",
        "fct-type": "type",
        "title": "ContextStack"
      },
      "index": {
        "description": "stack of contexts Language-specific context stacks must be maintained because of IncludeRules",
        "hierarchy": "Text Highlighting Kate Types",
        "module": "Text.Highlighting.Kate.Types",
        "name": "ContextStack",
        "normalized": "",
        "package": "highlighting-kate",
        "partial": "Context Stack",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#t:FormatOptions",
      "description": {
        "fct-descr": "\u003cp\u003eOptions for formatting source code.\n\u003c/p\u003e",
        "fct-module": "Text.Highlighting.Kate.Types",
        "fct-package": "highlighting-kate",
        "fct-signature": "data",
        "fct-source": "src/Text-Highlighting-Kate-Types.html#FormatOptions",
        "fct-type": "data",
        "title": "FormatOptions"
      },
      "index": {
        "description": "Options for formatting source code",
        "hierarchy": "Text Highlighting Kate Types",
        "module": "Text.Highlighting.Kate.Types",
        "name": "FormatOptions",
        "normalized": "",
        "package": "highlighting-kate",
        "partial": "Format Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#t:FromColor",
      "description": {
        "fct-module": "Text.Highlighting.Kate.Types",
        "fct-package": "highlighting-kate",
        "fct-signature": "class",
        "fct-source": "src/Text-Highlighting-Kate-Types.html#FromColor",
        "fct-type": "class",
        "title": "FromColor"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Highlighting Kate Types",
        "module": "Text.Highlighting.Kate.Types",
        "name": "FromColor",
        "normalized": "",
        "package": "highlighting-kate",
        "partial": "From Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#t:KateParser",
      "description": {
        "fct-module": "Text.Highlighting.Kate.Types",
        "fct-package": "highlighting-kate",
        "fct-signature": "type",
        "fct-source": "src/Text-Highlighting-Kate-Types.html#KateParser",
        "fct-type": "type",
        "title": "KateParser"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Highlighting Kate Types",
        "module": "Text.Highlighting.Kate.Types",
        "name": "KateParser",
        "normalized": "",
        "package": "highlighting-kate",
        "partial": "Kate Parser",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#t:SourceLine",
      "description": {
        "fct-descr": "\u003cp\u003eA line of source, list of labeled source items.\n\u003c/p\u003e",
        "fct-module": "Text.Highlighting.Kate.Types",
        "fct-package": "highlighting-kate",
        "fct-signature": "type",
        "fct-source": "src/Text-Highlighting-Kate-Types.html#SourceLine",
        "fct-type": "type",
        "title": "SourceLine"
      },
      "index": {
        "description": "line of source list of labeled source items",
        "hierarchy": "Text Highlighting Kate Types",
        "module": "Text.Highlighting.Kate.Types",
        "name": "SourceLine",
        "normalized": "",
        "package": "highlighting-kate",
        "partial": "Source Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#t:Style",
      "description": {
        "fct-module": "Text.Highlighting.Kate.Types",
        "fct-package": "highlighting-kate",
        "fct-signature": "data",
        "fct-source": "src/Text-Highlighting-Kate-Types.html#Style",
        "fct-type": "data",
        "title": "Style"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Highlighting Kate Types",
        "module": "Text.Highlighting.Kate.Types",
        "name": "Style",
        "normalized": "",
        "package": "highlighting-kate",
        "partial": "Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#t:SyntaxState",
      "description": {
        "fct-descr": "\u003cp\u003eState for syntax parser.\n\u003c/p\u003e",
        "fct-module": "Text.Highlighting.Kate.Types",
        "fct-package": "highlighting-kate",
        "fct-signature": "data",
        "fct-source": "src/Text-Highlighting-Kate-Types.html#SyntaxState",
        "fct-type": "data",
        "title": "SyntaxState"
      },
      "index": {
        "description": "State for syntax parser",
        "hierarchy": "Text Highlighting Kate Types",
        "module": "Text.Highlighting.Kate.Types",
        "name": "SyntaxState",
        "normalized": "",
        "package": "highlighting-kate",
        "partial": "Syntax State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#t:ToColor",
      "description": {
        "fct-module": "Text.Highlighting.Kate.Types",
        "fct-package": "highlighting-kate",
        "fct-signature": "class",
        "fct-source": "src/Text-Highlighting-Kate-Types.html#ToColor",
        "fct-type": "class",
        "title": "ToColor"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Highlighting Kate Types",
        "module": "Text.Highlighting.Kate.Types",
        "name": "ToColor",
        "normalized": "",
        "package": "highlighting-kate",
        "partial": "To Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#t:Token",
      "description": {
        "fct-descr": "\u003cp\u003eA pair consisting of a list of attributes and some text.\n\u003c/p\u003e",
        "fct-module": "Text.Highlighting.Kate.Types",
        "fct-package": "highlighting-kate",
        "fct-signature": "type",
        "fct-source": "src/Text-Highlighting-Kate-Types.html#Token",
        "fct-type": "type",
        "title": "Token"
      },
      "index": {
        "description": "pair consisting of list of attributes and some text",
        "hierarchy": "Text Highlighting Kate Types",
        "module": "Text.Highlighting.Kate.Types",
        "name": "Token",
        "normalized": "",
        "package": "highlighting-kate",
        "partial": "Token",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#t:TokenStyle",
      "description": {
        "fct-module": "Text.Highlighting.Kate.Types",
        "fct-package": "highlighting-kate",
        "fct-signature": "data",
        "fct-source": "src/Text-Highlighting-Kate-Types.html#TokenStyle",
        "fct-type": "data",
        "title": "TokenStyle"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Highlighting Kate Types",
        "module": "Text.Highlighting.Kate.Types",
        "name": "TokenStyle",
        "normalized": "",
        "package": "highlighting-kate",
        "partial": "Token Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#t:TokenType",
      "description": {
        "fct-module": "Text.Highlighting.Kate.Types",
        "fct-package": "highlighting-kate",
        "fct-signature": "data",
        "fct-source": "src/Text-Highlighting-Kate-Types.html#TokenType",
        "fct-type": "data",
        "title": "TokenType"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Highlighting Kate Types",
        "module": "Text.Highlighting.Kate.Types",
        "name": "TokenType",
        "normalized": "",
        "package": "highlighting-kate",
        "partial": "Token Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:AlertTok",
      "description": {
        "fct-module": "Text.Highlighting.Kate.Types",
        "fct-package": "highlighting-kate",
        "fct-signature": "AlertTok",
        "fct-source": "src/Text-Highlighting-Kate-Types.html#TokenType",
        "fct-type": "function",
        "title": "AlertTok"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Highlighting Kate Types",
        "module": "Text.Highlighting.Kate.Types",
        "name": "AlertTok",
        "normalized": "",
        "package": "highlighting-kate",
        "partial": "Alert Tok",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:BaseNTok",
      "description": {
        "fct-module": "Text.Highlighting.Kate.Types",
        "fct-package": "highlighting-kate",
        "fct-signature": "BaseNTok",
        "fct-source": "src/Text-Highlighting-Kate-Types.html#TokenType",
        "fct-type": "function",
        "title": "BaseNTok"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Highlighting Kate Types",
        "module": "Text.Highlighting.Kate.Types",
        "name": "BaseNTok",
        "normalized": "",
        "package": "highlighting-kate",
        "partial": "Base NTok",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:CharTok",
      "description": {
        "fct-module": "Text.Highlighting.Kate.Types",
        "fct-package": "highlighting-kate",
        "fct-signature": "CharTok",
        "fct-source": "src/Text-Highlighting-Kate-Types.html#TokenType",
        "fct-type": "function",
        "title": "CharTok"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Highlighting Kate Types",
        "module": "Text.Highlighting.Kate.Types",
        "name": "CharTok",
        "normalized": "",
        "package": "highlighting-kate",
        "partial": "Char Tok",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:CommentTok",
      "description": {
        "fct-module": "Text.Highlighting.Kate.Types",
        "fct-package": "highlighting-kate",
        "fct-signature": "CommentTok",
        "fct-source": "src/Text-Highlighting-Kate-Types.html#TokenType",
        "fct-type": "function",
        "title": "CommentTok"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Highlighting Kate Types",
        "module": "Text.Highlighting.Kate.Types",
        "name": "CommentTok",
        "normalized": "",
        "package": "highlighting-kate",
        "partial": "Comment Tok",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:DataTypeTok",
      "description": {
        "fct-module": "Text.Highlighting.Kate.Types",
        "fct-package": "highlighting-kate",
        "fct-signature": "DataTypeTok",
        "fct-source": "src/Text-Highlighting-Kate-Types.html#TokenType",
        "fct-type": "function",
        "title": "DataTypeTok"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Highlighting Kate Types",
        "module": "Text.Highlighting.Kate.Types",
        "name": "DataTypeTok",
        "normalized": "",
        "package": "highlighting-kate",
        "partial": "Data Type Tok",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:DecValTok",
      "description": {
        "fct-module": "Text.Highlighting.Kate.Types",
        "fct-package": "highlighting-kate",
        "fct-signature": "DecValTok",
        "fct-source": "src/Text-Highlighting-Kate-Types.html#TokenType",
        "fct-type": "function",
        "title": "DecValTok"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Highlighting Kate Types",
        "module": "Text.Highlighting.Kate.Types",
        "name": "DecValTok",
        "normalized": "",
        "package": "highlighting-kate",
        "partial": "Dec Val Tok",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:ErrorTok",
      "description": {
        "fct-module": "Text.Highlighting.Kate.Types",
        "fct-package": "highlighting-kate",
        "fct-signature": "ErrorTok",
        "fct-source": "src/Text-Highlighting-Kate-Types.html#TokenType",
        "fct-type": "function",
        "title": "ErrorTok"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Highlighting Kate Types",
        "module": "Text.Highlighting.Kate.Types",
        "name": "ErrorTok",
        "normalized": "",
        "package": "highlighting-kate",
        "partial": "Error Tok",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:FloatTok",
      "description": {
        "fct-module": "Text.Highlighting.Kate.Types",
        "fct-package": "highlighting-kate",
        "fct-signature": "FloatTok",
        "fct-source": "src/Text-Highlighting-Kate-Types.html#TokenType",
        "fct-type": "function",
        "title": "FloatTok"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Highlighting Kate Types",
        "module": "Text.Highlighting.Kate.Types",
        "name": "FloatTok",
        "normalized": "",
        "package": "highlighting-kate",
        "partial": "Float Tok",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:FormatOptions",
      "description": {
        "fct-module": "Text.Highlighting.Kate.Types",
        "fct-package": "highlighting-kate",
        "fct-signature": "FormatOptions",
        "fct-source": "src/Text-Highlighting-Kate-Types.html#FormatOptions",
        "fct-type": "function",
        "title": "FormatOptions"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Highlighting Kate Types",
        "module": "Text.Highlighting.Kate.Types",
        "name": "FormatOptions",
        "normalized": "",
        "package": "highlighting-kate",
        "partial": "Format Options",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:FunctionTok",
      "description": {
        "fct-module": "Text.Highlighting.Kate.Types",
        "fct-package": "highlighting-kate",
        "fct-signature": "FunctionTok",
        "fct-source": "src/Text-Highlighting-Kate-Types.html#TokenType",
        "fct-type": "function",
        "title": "FunctionTok"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Highlighting Kate Types",
        "module": "Text.Highlighting.Kate.Types",
        "name": "FunctionTok",
        "normalized": "",
        "package": "highlighting-kate",
        "partial": "Function Tok",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:KeywordTok",
      "description": {
        "fct-module": "Text.Highlighting.Kate.Types",
        "fct-package": "highlighting-kate",
        "fct-signature": "KeywordTok",
        "fct-source": "src/Text-Highlighting-Kate-Types.html#TokenType",
        "fct-type": "function",
        "title": "KeywordTok"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Highlighting Kate Types",
        "module": "Text.Highlighting.Kate.Types",
        "name": "KeywordTok",
        "normalized": "",
        "package": "highlighting-kate",
        "partial": "Keyword Tok",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:NormalTok",
      "description": {
        "fct-module": "Text.Highlighting.Kate.Types",
        "fct-package": "highlighting-kate",
        "fct-signature": "NormalTok",
        "fct-source": "src/Text-Highlighting-Kate-Types.html#TokenType",
        "fct-type": "function",
        "title": "NormalTok"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Highlighting Kate Types",
        "module": "Text.Highlighting.Kate.Types",
        "name": "NormalTok",
        "normalized": "",
        "package": "highlighting-kate",
        "partial": "Normal Tok",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:OtherTok",
      "description": {
        "fct-module": "Text.Highlighting.Kate.Types",
        "fct-package": "highlighting-kate",
        "fct-signature": "OtherTok",
        "fct-source": "src/Text-Highlighting-Kate-Types.html#TokenType",
        "fct-type": "function",
        "title": "OtherTok"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Highlighting Kate Types",
        "module": "Text.Highlighting.Kate.Types",
        "name": "OtherTok",
        "normalized": "",
        "package": "highlighting-kate",
        "partial": "Other Tok",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:RGB",
      "description": {
        "fct-module": "Text.Highlighting.Kate.Types",
        "fct-package": "highlighting-kate",
        "fct-signature": "RGB Word8 Word8 Word8",
        "fct-source": "src/Text-Highlighting-Kate-Types.html#Color",
        "fct-type": "function",
        "title": "RGB"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Highlighting Kate Types",
        "module": "Text.Highlighting.Kate.Types",
        "name": "RGB",
        "normalized": "",
        "package": "highlighting-kate",
        "partial": "RGB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:RegionMarkerTok",
      "description": {
        "fct-module": "Text.Highlighting.Kate.Types",
        "fct-package": "highlighting-kate",
        "fct-signature": "RegionMarkerTok",
        "fct-source": "src/Text-Highlighting-Kate-Types.html#TokenType",
        "fct-type": "function",
        "title": "RegionMarkerTok"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Highlighting Kate Types",
        "module": "Text.Highlighting.Kate.Types",
        "name": "RegionMarkerTok",
        "normalized": "",
        "package": "highlighting-kate",
        "partial": "Region Marker Tok",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:StringTok",
      "description": {
        "fct-module": "Text.Highlighting.Kate.Types",
        "fct-package": "highlighting-kate",
        "fct-signature": "StringTok",
        "fct-source": "src/Text-Highlighting-Kate-Types.html#TokenType",
        "fct-type": "function",
        "title": "StringTok"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Highlighting Kate Types",
        "module": "Text.Highlighting.Kate.Types",
        "name": "StringTok",
        "normalized": "",
        "package": "highlighting-kate",
        "partial": "String Tok",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:Style",
      "description": {
        "fct-module": "Text.Highlighting.Kate.Types",
        "fct-package": "highlighting-kate",
        "fct-signature": "Style",
        "fct-source": "src/Text-Highlighting-Kate-Types.html#Style",
        "fct-type": "function",
        "title": "Style"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Highlighting Kate Types",
        "module": "Text.Highlighting.Kate.Types",
        "name": "Style",
        "normalized": "",
        "package": "highlighting-kate",
        "partial": "Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:SyntaxState",
      "description": {
        "fct-module": "Text.Highlighting.Kate.Types",
        "fct-package": "highlighting-kate",
        "fct-signature": "SyntaxState",
        "fct-source": "src/Text-Highlighting-Kate-Types.html#SyntaxState",
        "fct-type": "function",
        "title": "SyntaxState"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Highlighting Kate Types",
        "module": "Text.Highlighting.Kate.Types",
        "name": "SyntaxState",
        "normalized": "",
        "package": "highlighting-kate",
        "partial": "Syntax State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:TokenStyle",
      "description": {
        "fct-module": "Text.Highlighting.Kate.Types",
        "fct-package": "highlighting-kate",
        "fct-signature": "TokenStyle",
        "fct-source": "src/Text-Highlighting-Kate-Types.html#TokenStyle",
        "fct-type": "function",
        "title": "TokenStyle"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Highlighting Kate Types",
        "module": "Text.Highlighting.Kate.Types",
        "name": "TokenStyle",
        "normalized": "",
        "package": "highlighting-kate",
        "partial": "Token Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:backgroundColor",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Highlighting.Kate.Types",
        "fct-package": "highlighting-kate",
        "fct-signature": "Maybe Color",
        "fct-source": "src/Text-Highlighting-Kate-Types.html#Style",
        "fct-type": "function",
        "title": "backgroundColor"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Highlighting Kate Types",
        "module": "Text.Highlighting.Kate.Types",
        "name": "backgroundColor",
        "normalized": "",
        "package": "highlighting-kate",
        "partial": "Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:codeClasses",
      "description": {
        "fct-descr": "\u003cp\u003eAdditional classes for Html code tag\n\u003c/p\u003e",
        "fct-module": "Text.Highlighting.Kate.Types",
        "fct-package": "highlighting-kate",
        "fct-signature": "[String]",
        "fct-source": "src/Text-Highlighting-Kate-Types.html#FormatOptions",
        "fct-type": "function",
        "title": "codeClasses"
      },
      "index": {
        "description": "Additional classes for Html code tag",
        "hierarchy": "Text Highlighting Kate Types",
        "module": "Text.Highlighting.Kate.Types",
        "name": "codeClasses",
        "normalized": "[String]",
        "package": "highlighting-kate",
        "partial": "Classes",
        "signature": "[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:containerClasses",
      "description": {
        "fct-descr": "\u003cp\u003eAdditional classes for Html container tag\n   (pre or table depending on numberLines)\n\u003c/p\u003e",
        "fct-module": "Text.Highlighting.Kate.Types",
        "fct-package": "highlighting-kate",
        "fct-signature": "[String]",
        "fct-source": "src/Text-Highlighting-Kate-Types.html#FormatOptions",
        "fct-type": "function",
        "title": "containerClasses"
      },
      "index": {
        "description": "Additional classes for Html container tag pre or table depending on numberLines",
        "hierarchy": "Text Highlighting Kate Types",
        "module": "Text.Highlighting.Kate.Types",
        "name": "containerClasses",
        "normalized": "[String]",
        "package": "highlighting-kate",
        "partial": "Classes",
        "signature": "[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:defStyle",
      "description": {
        "fct-module": "Text.Highlighting.Kate.Types",
        "fct-package": "highlighting-kate",
        "fct-signature": "TokenStyle",
        "fct-source": "src/Text-Highlighting-Kate-Types.html#defStyle",
        "fct-type": "function",
        "title": "defStyle"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Highlighting Kate Types",
        "module": "Text.Highlighting.Kate.Types",
        "name": "defStyle",
        "normalized": "",
        "package": "highlighting-kate",
        "partial": "Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:defaultColor",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Highlighting.Kate.Types",
        "fct-package": "highlighting-kate",
        "fct-signature": "Maybe Color",
        "fct-source": "src/Text-Highlighting-Kate-Types.html#Style",
        "fct-type": "function",
        "title": "defaultColor"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Highlighting Kate Types",
        "module": "Text.Highlighting.Kate.Types",
        "name": "defaultColor",
        "normalized": "",
        "package": "highlighting-kate",
        "partial": "Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:defaultFormatOpts",
      "description": {
        "fct-module": "Text.Highlighting.Kate.Types",
        "fct-package": "highlighting-kate",
        "fct-signature": "FormatOptions",
        "fct-source": "src/Text-Highlighting-Kate-Types.html#defaultFormatOpts",
        "fct-type": "function",
        "title": "defaultFormatOpts"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Highlighting Kate Types",
        "module": "Text.Highlighting.Kate.Types",
        "name": "defaultFormatOpts",
        "normalized": "",
        "package": "highlighting-kate",
        "partial": "Format Opts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:fromColor",
      "description": {
        "fct-module": "Text.Highlighting.Kate.Types",
        "fct-package": "highlighting-kate",
        "fct-signature": "Color -\u003e a",
        "fct-source": "src/Text-Highlighting-Kate-Types.html#fromColor",
        "fct-type": "method",
        "title": "fromColor"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Highlighting Kate Types",
        "module": "Text.Highlighting.Kate.Types",
        "name": "fromColor",
        "normalized": "Color-\u003ea",
        "package": "highlighting-kate",
        "partial": "Color",
        "signature": "Color-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:lineAnchors",
      "description": {
        "fct-descr": "\u003cp\u003eAnchors on each line number\n\u003c/p\u003e",
        "fct-module": "Text.Highlighting.Kate.Types",
        "fct-package": "highlighting-kate",
        "fct-signature": "Bool",
        "fct-source": "src/Text-Highlighting-Kate-Types.html#FormatOptions",
        "fct-type": "function",
        "title": "lineAnchors"
      },
      "index": {
        "description": "Anchors on each line number",
        "hierarchy": "Text Highlighting Kate Types",
        "module": "Text.Highlighting.Kate.Types",
        "name": "lineAnchors",
        "normalized": "",
        "package": "highlighting-kate",
        "partial": "Anchors",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:lineNumberBackgroundColor",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Highlighting.Kate.Types",
        "fct-package": "highlighting-kate",
        "fct-signature": "Maybe Color",
        "fct-source": "src/Text-Highlighting-Kate-Types.html#Style",
        "fct-type": "function",
        "title": "lineNumberBackgroundColor"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Highlighting Kate Types",
        "module": "Text.Highlighting.Kate.Types",
        "name": "lineNumberBackgroundColor",
        "normalized": "",
        "package": "highlighting-kate",
        "partial": "Number Background Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:lineNumberColor",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Highlighting.Kate.Types",
        "fct-package": "highlighting-kate",
        "fct-signature": "Maybe Color",
        "fct-source": "src/Text-Highlighting-Kate-Types.html#Style",
        "fct-type": "function",
        "title": "lineNumberColor"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Highlighting Kate Types",
        "module": "Text.Highlighting.Kate.Types",
        "name": "lineNumberColor",
        "normalized": "",
        "package": "highlighting-kate",
        "partial": "Number Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:numberLines",
      "description": {
        "fct-descr": "\u003cp\u003eNumber lines\n\u003c/p\u003e",
        "fct-module": "Text.Highlighting.Kate.Types",
        "fct-package": "highlighting-kate",
        "fct-signature": "Bool",
        "fct-source": "src/Text-Highlighting-Kate-Types.html#FormatOptions",
        "fct-type": "function",
        "title": "numberLines"
      },
      "index": {
        "description": "Number lines",
        "hierarchy": "Text Highlighting Kate Types",
        "module": "Text.Highlighting.Kate.Types",
        "name": "numberLines",
        "normalized": "",
        "package": "highlighting-kate",
        "partial": "Lines",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:startNumber",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of first line\n\u003c/p\u003e",
        "fct-module": "Text.Highlighting.Kate.Types",
        "fct-package": "highlighting-kate",
        "fct-signature": "Int",
        "fct-source": "src/Text-Highlighting-Kate-Types.html#FormatOptions",
        "fct-type": "function",
        "title": "startNumber"
      },
      "index": {
        "description": "Number of first line",
        "hierarchy": "Text Highlighting Kate Types",
        "module": "Text.Highlighting.Kate.Types",
        "name": "startNumber",
        "normalized": "",
        "package": "highlighting-kate",
        "partial": "Number",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:synStCaptures",
      "description": {
        "fct-descr": "\u003cp\u003eList of regex captures from\n   last capturing match\n\u003c/p\u003e",
        "fct-module": "Text.Highlighting.Kate.Types",
        "fct-package": "highlighting-kate",
        "fct-signature": "[String]",
        "fct-source": "src/Text-Highlighting-Kate-Types.html#SyntaxState",
        "fct-type": "function",
        "title": "synStCaptures"
      },
      "index": {
        "description": "List of regex captures from last capturing match",
        "hierarchy": "Text Highlighting Kate Types",
        "module": "Text.Highlighting.Kate.Types",
        "name": "synStCaptures",
        "normalized": "[String]",
        "package": "highlighting-kate",
        "partial": "St Captures",
        "signature": "[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:synStCaseSensitive",
      "description": {
        "fct-descr": "\u003cp\u003eLanguage is case-sensitive\n\u003c/p\u003e",
        "fct-module": "Text.Highlighting.Kate.Types",
        "fct-package": "highlighting-kate",
        "fct-signature": "Bool",
        "fct-source": "src/Text-Highlighting-Kate-Types.html#SyntaxState",
        "fct-type": "function",
        "title": "synStCaseSensitive"
      },
      "index": {
        "description": "Language is case-sensitive",
        "hierarchy": "Text Highlighting Kate Types",
        "module": "Text.Highlighting.Kate.Types",
        "name": "synStCaseSensitive",
        "normalized": "",
        "package": "highlighting-kate",
        "partial": "St Case Sensitive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:synStContexts",
      "description": {
        "fct-descr": "\u003cp\u003eStack of contexts\n\u003c/p\u003e",
        "fct-module": "Text.Highlighting.Kate.Types",
        "fct-package": "highlighting-kate",
        "fct-signature": "ContextStack",
        "fct-source": "src/Text-Highlighting-Kate-Types.html#SyntaxState",
        "fct-type": "function",
        "title": "synStContexts"
      },
      "index": {
        "description": "Stack of contexts",
        "hierarchy": "Text Highlighting Kate Types",
        "module": "Text.Highlighting.Kate.Types",
        "name": "synStContexts",
        "normalized": "",
        "package": "highlighting-kate",
        "partial": "St Contexts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:synStKeywordCaseSensitive",
      "description": {
        "fct-descr": "\u003cp\u003eKeywords are case-sensitive\n\u003c/p\u003e",
        "fct-module": "Text.Highlighting.Kate.Types",
        "fct-package": "highlighting-kate",
        "fct-signature": "Bool",
        "fct-source": "src/Text-Highlighting-Kate-Types.html#SyntaxState",
        "fct-type": "function",
        "title": "synStKeywordCaseSensitive"
      },
      "index": {
        "description": "Keywords are case-sensitive",
        "hierarchy": "Text Highlighting Kate Types",
        "module": "Text.Highlighting.Kate.Types",
        "name": "synStKeywordCaseSensitive",
        "normalized": "",
        "package": "highlighting-kate",
        "partial": "St Keyword Case Sensitive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:synStLineNumber",
      "description": {
        "fct-descr": "\u003cp\u003eNumber of current line\n\u003c/p\u003e",
        "fct-module": "Text.Highlighting.Kate.Types",
        "fct-package": "highlighting-kate",
        "fct-signature": "Int",
        "fct-source": "src/Text-Highlighting-Kate-Types.html#SyntaxState",
        "fct-type": "function",
        "title": "synStLineNumber"
      },
      "index": {
        "description": "Number of current line",
        "hierarchy": "Text Highlighting Kate Types",
        "module": "Text.Highlighting.Kate.Types",
        "name": "synStLineNumber",
        "normalized": "",
        "package": "highlighting-kate",
        "partial": "St Line Number",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:synStPrevChar",
      "description": {
        "fct-descr": "\u003cp\u003eLast character parsed\n\u003c/p\u003e",
        "fct-module": "Text.Highlighting.Kate.Types",
        "fct-package": "highlighting-kate",
        "fct-signature": "Char",
        "fct-source": "src/Text-Highlighting-Kate-Types.html#SyntaxState",
        "fct-type": "function",
        "title": "synStPrevChar"
      },
      "index": {
        "description": "Last character parsed",
        "hierarchy": "Text Highlighting Kate Types",
        "module": "Text.Highlighting.Kate.Types",
        "name": "synStPrevChar",
        "normalized": "",
        "package": "highlighting-kate",
        "partial": "St Prev Char",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:synStPrevNonspace",
      "description": {
        "fct-descr": "\u003cp\u003eTrue if we've parsed a nonspace\n\u003c/p\u003e",
        "fct-module": "Text.Highlighting.Kate.Types",
        "fct-package": "highlighting-kate",
        "fct-signature": "Bool",
        "fct-source": "src/Text-Highlighting-Kate-Types.html#SyntaxState",
        "fct-type": "function",
        "title": "synStPrevNonspace"
      },
      "index": {
        "description": "True if we ve parsed nonspace",
        "hierarchy": "Text Highlighting Kate Types",
        "module": "Text.Highlighting.Kate.Types",
        "name": "synStPrevNonspace",
        "normalized": "",
        "package": "highlighting-kate",
        "partial": "St Prev Nonspace",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:titleAttributes",
      "description": {
        "fct-descr": "\u003cp\u003eHtml titles with token types\n\u003c/p\u003e",
        "fct-module": "Text.Highlighting.Kate.Types",
        "fct-package": "highlighting-kate",
        "fct-signature": "Bool",
        "fct-source": "src/Text-Highlighting-Kate-Types.html#FormatOptions",
        "fct-type": "function",
        "title": "titleAttributes"
      },
      "index": {
        "description": "Html titles with token types",
        "hierarchy": "Text Highlighting Kate Types",
        "module": "Text.Highlighting.Kate.Types",
        "name": "titleAttributes",
        "normalized": "",
        "package": "highlighting-kate",
        "partial": "Attributes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:toColor",
      "description": {
        "fct-module": "Text.Highlighting.Kate.Types",
        "fct-package": "highlighting-kate",
        "fct-signature": "a -\u003e Maybe Color",
        "fct-source": "src/Text-Highlighting-Kate-Types.html#toColor",
        "fct-type": "method",
        "title": "toColor"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Highlighting Kate Types",
        "module": "Text.Highlighting.Kate.Types",
        "name": "toColor",
        "normalized": "a-\u003eMaybe Color",
        "package": "highlighting-kate",
        "partial": "Color",
        "signature": "a-\u003eMaybe Color"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:tokenBackground",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Highlighting.Kate.Types",
        "fct-package": "highlighting-kate",
        "fct-signature": "Maybe Color",
        "fct-source": "src/Text-Highlighting-Kate-Types.html#TokenStyle",
        "fct-type": "function",
        "title": "tokenBackground"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Highlighting Kate Types",
        "module": "Text.Highlighting.Kate.Types",
        "name": "tokenBackground",
        "normalized": "",
        "package": "highlighting-kate",
        "partial": "Background",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:tokenBold",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Highlighting.Kate.Types",
        "fct-package": "highlighting-kate",
        "fct-signature": "Bool",
        "fct-source": "src/Text-Highlighting-Kate-Types.html#TokenStyle",
        "fct-type": "function",
        "title": "tokenBold"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Highlighting Kate Types",
        "module": "Text.Highlighting.Kate.Types",
        "name": "tokenBold",
        "normalized": "",
        "package": "highlighting-kate",
        "partial": "Bold",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:tokenColor",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Highlighting.Kate.Types",
        "fct-package": "highlighting-kate",
        "fct-signature": "Maybe Color",
        "fct-source": "src/Text-Highlighting-Kate-Types.html#TokenStyle",
        "fct-type": "function",
        "title": "tokenColor"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Highlighting Kate Types",
        "module": "Text.Highlighting.Kate.Types",
        "name": "tokenColor",
        "normalized": "",
        "package": "highlighting-kate",
        "partial": "Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:tokenItalic",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Highlighting.Kate.Types",
        "fct-package": "highlighting-kate",
        "fct-signature": "Bool",
        "fct-source": "src/Text-Highlighting-Kate-Types.html#TokenStyle",
        "fct-type": "function",
        "title": "tokenItalic"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Highlighting Kate Types",
        "module": "Text.Highlighting.Kate.Types",
        "name": "tokenItalic",
        "normalized": "",
        "package": "highlighting-kate",
        "partial": "Italic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:tokenStyles",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Highlighting.Kate.Types",
        "fct-package": "highlighting-kate",
        "fct-signature": "[(TokenType, TokenStyle)]",
        "fct-source": "src/Text-Highlighting-Kate-Types.html#Style",
        "fct-type": "function",
        "title": "tokenStyles"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Highlighting Kate Types",
        "module": "Text.Highlighting.Kate.Types",
        "name": "tokenStyles",
        "normalized": "[(TokenType,TokenStyle)]",
        "package": "highlighting-kate",
        "partial": "Styles",
        "signature": "[(TokenType,TokenStyle)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:tokenUnderline",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Text.Highlighting.Kate.Types",
        "fct-package": "highlighting-kate",
        "fct-signature": "Bool",
        "fct-source": "src/Text-Highlighting-Kate-Types.html#TokenStyle",
        "fct-type": "function",
        "title": "tokenUnderline"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Highlighting Kate Types",
        "module": "Text.Highlighting.Kate.Types",
        "name": "tokenUnderline",
        "normalized": "",
        "package": "highlighting-kate",
        "partial": "Underline",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis helper module exports the main highlighting and formatting\nfunctions.\n\u003c/p\u003e\u003cp\u003eA typical application will combine a highlighter and a formatter.\nThis one reads ruby code from stdin and writes HTML:\n\u003c/p\u003e\u003cpre\u003e import Text.Highlighting.Kate\n import Text.Blaze.Html.Renderer.String (renderHtml)\n import Text.Blaze.Html (toHtml)\n import Text.Blaze.Html5 as H\n import Text.Blaze.Html5.Attributes as A\n\n main = do\n   code \u003c- getContents\n   putStrLn $ renderHtml\n            $ do H.head $ H.style ! A.type_ (toValue \"text/css\")\n                        $ toHtml $ styleToCss tango\n                 H.body $ toHtml\n                        $ formatHtmlBlock defaultFormatOpts\n                        $ highlightAs \"ruby\" code\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Text.Highlighting.Kate",
        "fct-package": "highlighting-kate",
        "fct-signature": "module",
        "fct-source": "src/Text-Highlighting-Kate.html",
        "fct-type": "module",
        "title": "Kate"
      },
      "index": {
        "description": "This helper module exports the main highlighting and formatting functions typical application will combine highlighter and formatter This one reads ruby code from stdin and writes HTML import Text.Highlighting.Kate import Text.Blaze.Html.Renderer.String renderHtml import Text.Blaze.Html toHtml import Text.Blaze.Html5 as import Text.Blaze.Html5.Attributes as main do code getContents putStrLn renderHtml do H.head H.style A.type toValue text css toHtml styleToCss tango H.body toHtml formatHtmlBlock defaultFormatOpts highlightAs ruby code",
        "hierarchy": "Text Highlighting Kate",
        "module": "Text.Highlighting.Kate",
        "name": "Kate",
        "normalized": "",
        "package": "highlighting-kate",
        "partial": "Kate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate.html#v:highlightAs",
      "description": {
        "fct-descr": "\u003cp\u003eHighlight source code. The source language may be specified\n by its canonical name (case-insensitive) or by a canonical\n extension (if unique).\n The parsers read the input lazily and parse line by line;\n results are returned immediately.\n Supported languages: \u003ccode\u003eactionscript\u003c/code\u003e, \u003ccode\u003eada\u003c/code\u003e, \u003ccode\u003ealert\u003c/code\u003e, \u003ccode\u003ealert_indent\u003c/code\u003e, \u003ccode\u003eapache\u003c/code\u003e, \u003ccode\u003easn1\u003c/code\u003e, \u003ccode\u003easp\u003c/code\u003e, \u003ccode\u003eawk\u003c/code\u003e, \u003ccode\u003ebash\u003c/code\u003e, \u003ccode\u003ebibtex\u003c/code\u003e, \u003ccode\u003eboo\u003c/code\u003e, \u003ccode\u003ec\u003c/code\u003e, \u003ccode\u003echangelog\u003c/code\u003e, \u003ccode\u003eclojure\u003c/code\u003e, \u003ccode\u003ecmake\u003c/code\u003e, \u003ccode\u003ecoffee\u003c/code\u003e, \u003ccode\u003ecoldfusion\u003c/code\u003e, \u003ccode\u003ecommonlisp\u003c/code\u003e, \u003ccode\u003ecpp\u003c/code\u003e, \u003ccode\u003ecs\u003c/code\u003e, \u003ccode\u003ecss\u003c/code\u003e, \u003ccode\u003ecurry\u003c/code\u003e, \u003ccode\u003ed\u003c/code\u003e, \u003ccode\u003ediff\u003c/code\u003e, \u003ccode\u003edjangotemplate\u003c/code\u003e, \u003ccode\u003edoxygen\u003c/code\u003e, \u003ccode\u003edoxygenlua\u003c/code\u003e, \u003ccode\u003edtd\u003c/code\u003e, \u003ccode\u003eeiffel\u003c/code\u003e, \u003ccode\u003eemail\u003c/code\u003e, \u003ccode\u003eerlang\u003c/code\u003e, \u003ccode\u003efortran\u003c/code\u003e, \u003ccode\u003efsharp\u003c/code\u003e, \u003ccode\u003egnuassembler\u003c/code\u003e, \u003ccode\u003ego\u003c/code\u003e, \u003ccode\u003ehaskell\u003c/code\u003e, \u003ccode\u003ehaxe\u003c/code\u003e, \u003ccode\u003ehtml\u003c/code\u003e, \u003ccode\u003eini\u003c/code\u003e, \u003ccode\u003ejava\u003c/code\u003e, \u003ccode\u003ejavadoc\u003c/code\u003e, \u003ccode\u003ejavascript\u003c/code\u003e, \u003ccode\u003ejson\u003c/code\u003e, \u003ccode\u003ejsp\u003c/code\u003e, \u003ccode\u003ejulia\u003c/code\u003e, \u003ccode\u003elatex\u003c/code\u003e, \u003ccode\u003elex\u003c/code\u003e, \u003ccode\u003eliteratecurry\u003c/code\u003e, \u003ccode\u003eliteratehaskell\u003c/code\u003e, \u003ccode\u003elua\u003c/code\u003e, \u003ccode\u003emakefile\u003c/code\u003e, \u003ccode\u003emandoc\u003c/code\u003e, \u003ccode\u003emarkdown\u003c/code\u003e, \u003ccode\u003ematlab\u003c/code\u003e, \u003ccode\u003emaxima\u003c/code\u003e, \u003ccode\u003emetafont\u003c/code\u003e, \u003ccode\u003emips\u003c/code\u003e, \u003ccode\u003emodelines\u003c/code\u003e, \u003ccode\u003emodula2\u003c/code\u003e, \u003ccode\u003emodula3\u003c/code\u003e, \u003ccode\u003emonobasic\u003c/code\u003e, \u003ccode\u003enasm\u003c/code\u003e, \u003ccode\u003enoweb\u003c/code\u003e, \u003ccode\u003eobjectivec\u003c/code\u003e, \u003ccode\u003eobjectivecpp\u003c/code\u003e, \u003ccode\u003eocaml\u003c/code\u003e, \u003ccode\u003eoctave\u003c/code\u003e, \u003ccode\u003epascal\u003c/code\u003e, \u003ccode\u003eperl\u003c/code\u003e, \u003ccode\u003ephp\u003c/code\u003e, \u003ccode\u003epike\u003c/code\u003e, \u003ccode\u003epostscript\u003c/code\u003e, \u003ccode\u003eprolog\u003c/code\u003e, \u003ccode\u003epython\u003c/code\u003e, \u003ccode\u003er\u003c/code\u003e, \u003ccode\u003erelaxngcompact\u003c/code\u003e, \u003ccode\u003erestructuredtext\u003c/code\u003e, \u003ccode\u003erhtml\u003c/code\u003e, \u003ccode\u003eroff\u003c/code\u003e, \u003ccode\u003eruby\u003c/code\u003e, \u003ccode\u003erust\u003c/code\u003e, \u003ccode\u003escala\u003c/code\u003e, \u003ccode\u003escheme\u003c/code\u003e, \u003ccode\u003esci\u003c/code\u003e, \u003ccode\u003esed\u003c/code\u003e, \u003ccode\u003esgml\u003c/code\u003e, \u003ccode\u003esql\u003c/code\u003e, \u003ccode\u003esqlmysql\u003c/code\u003e, \u003ccode\u003esqlpostgresql\u003c/code\u003e, \u003ccode\u003etcl\u003c/code\u003e, \u003ccode\u003etexinfo\u003c/code\u003e, \u003ccode\u003everilog\u003c/code\u003e, \u003ccode\u003evhdl\u003c/code\u003e, \u003ccode\u003exml\u003c/code\u003e, \u003ccode\u003exorg\u003c/code\u003e, \u003ccode\u003exslt\u003c/code\u003e, \u003ccode\u003exul\u003c/code\u003e, \u003ccode\u003eyacc\u003c/code\u003e, \u003ccode\u003eyaml\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Highlighting.Kate",
        "fct-package": "highlighting-kate",
        "fct-signature": "String-\u003e String-\u003e [SourceLine]",
        "fct-type": "function",
        "title": "highlightAs"
      },
      "index": {
        "description": "Highlight source code The source language may be specified by its canonical name case-insensitive or by canonical extension if unique The parsers read the input lazily and parse line by line results are returned immediately Supported languages actionscript ada alert alert indent apache asn1 asp awk bash bibtex boo changelog clojure cmake coffee coldfusion commonlisp cpp cs css curry diff djangotemplate doxygen doxygenlua dtd eiffel email erlang fortran fsharp gnuassembler go haskell haxe html ini java javadoc javascript json jsp julia latex lex literatecurry literatehaskell lua makefile mandoc markdown matlab maxima metafont mips modelines modula2 modula3 monobasic nasm noweb objectivec objectivecpp ocaml octave pascal perl php pike postscript prolog python relaxngcompact restructuredtext rhtml roff ruby rust scala scheme sci sed sgml sql sqlmysql sqlpostgresql tcl texinfo verilog vhdl xml xorg xslt xul yacc yaml",
        "hierarchy": "Text Highlighting Kate",
        "module": "Text.Highlighting.Kate",
        "name": "highlightAs",
        "normalized": "String-\u003eString-\u003e[SourceLine]",
        "package": "highlighting-kate",
        "partial": "As",
        "signature": "String-\u003eString-\u003e[SourceLine]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate.html#v:highlightingKateVersion",
      "description": {
        "fct-module": "Text.Highlighting.Kate",
        "fct-package": "highlighting-kate",
        "fct-signature": "String",
        "fct-source": "src/Text-Highlighting-Kate.html#highlightingKateVersion",
        "fct-type": "function",
        "title": "highlightingKateVersion"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Highlighting Kate",
        "module": "Text.Highlighting.Kate",
        "name": "highlightingKateVersion",
        "normalized": "",
        "package": "highlighting-kate",
        "partial": "Kate Version",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate.html#v:languages",
      "description": {
        "fct-descr": "\u003cp\u003eList of supported languages.\n\u003c/p\u003e",
        "fct-module": "Text.Highlighting.Kate",
        "fct-package": "highlighting-kate",
        "fct-signature": "[String]",
        "fct-source": "src/Text-Highlighting-Kate-Syntax.html#languages",
        "fct-type": "function",
        "title": "languages"
      },
      "index": {
        "description": "List of supported languages",
        "hierarchy": "Text Highlighting Kate",
        "module": "Text.Highlighting.Kate",
        "name": "languages",
        "normalized": "[String]",
        "package": "highlighting-kate",
        "partial": "",
        "signature": "[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate.html#v:languagesByExtension",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a list of languages appropriate for the given file extension.\n\u003c/p\u003e",
        "fct-module": "Text.Highlighting.Kate",
        "fct-package": "highlighting-kate",
        "fct-signature": "String -\u003e [String]",
        "fct-source": "src/Text-Highlighting-Kate-Syntax.html#languagesByExtension",
        "fct-type": "function",
        "title": "languagesByExtension"
      },
      "index": {
        "description": "Returns list of languages appropriate for the given file extension",
        "hierarchy": "Text Highlighting Kate",
        "module": "Text.Highlighting.Kate",
        "name": "languagesByExtension",
        "normalized": "String-\u003e[String]",
        "package": "highlighting-kate",
        "partial": "By Extension",
        "signature": "String-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate.html#v:languagesByFilename",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a list of languages appropriate for the given filename.\n\u003c/p\u003e",
        "fct-module": "Text.Highlighting.Kate",
        "fct-package": "highlighting-kate",
        "fct-signature": "FilePath -\u003e [String]",
        "fct-source": "src/Text-Highlighting-Kate-Syntax.html#languagesByFilename",
        "fct-type": "function",
        "title": "languagesByFilename"
      },
      "index": {
        "description": "Returns list of languages appropriate for the given filename",
        "hierarchy": "Text Highlighting Kate",
        "module": "Text.Highlighting.Kate",
        "name": "languagesByFilename",
        "normalized": "FilePath-\u003e[String]",
        "package": "highlighting-kate",
        "partial": "By Filename",
        "signature": "FilePath-\u003e[String]"
      }
    }
  }
]