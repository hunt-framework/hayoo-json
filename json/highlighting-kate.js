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
        "word": "highlighting-kate"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFormatters that convert a list of annotated source lines to HTML.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Highlighting.Kate.Format.HTML",
          "name": "HTML",
          "package": "highlighting-kate",
          "source": "src/Text-Highlighting-Kate-Format-HTML.html",
          "type": "module"
        },
        "index": {
          "description": "Formatters that convert list of annotated source lines to HTML",
          "hierarchy": "Text Highlighting Kate Format HTML",
          "module": "Text.Highlighting.Kate.Format.HTML",
          "name": "HTML",
          "package": "highlighting-kate",
          "partial": "HTML",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Format-HTML.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormat tokens as an HTML \u003ccode\u003epre\u003c/code\u003e block. If line numbering is\n selected, this is put into a table row with line numbers in the\n left cell.\n\u003c/p\u003e",
          "module": "Text.Highlighting.Kate.Format.HTML",
          "name": "formatHtmlBlock",
          "package": "highlighting-kate",
          "signature": "FormatOptions -\u003e [SourceLine] -\u003e Html",
          "source": "src/Text-Highlighting-Kate-Format-HTML.html#formatHtmlBlock",
          "type": "function"
        },
        "index": {
          "description": "Format tokens as an HTML pre block If line numbering is selected this is put into table row with line numbers in the left cell",
          "hierarchy": "Text Highlighting Kate Format HTML",
          "module": "Text.Highlighting.Kate.Format.HTML",
          "name": "formatHtmlBlock",
          "normalized": "FormatOptions-\u003e[SourceLine]-\u003eHtml",
          "package": "highlighting-kate",
          "partial": "Html Block",
          "signature": "FormatOptions-\u003e[SourceLine]-\u003eHtml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Format-HTML.html#v:formatHtmlBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormat tokens using HTML spans inside \u003ccode\u003ecode\u003c/code\u003e tags. For example,\n A \u003ccode\u003eKeywordTok\u003c/code\u003e is rendered as a span with class \u003ccode\u003ekw\u003c/code\u003e.\n Short class names correspond to \u003ccode\u003e\u003ca\u003eTokenType\u003c/a\u003e\u003c/code\u003es as follows:\n \u003ccode\u003e\u003ca\u003eKeywordTok\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003ekw\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eDataTypeTok\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003edt\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003eDecValTok\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003edv\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eBaseNTok\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003ebn\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eFloatTok\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003efl\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003eCharTok\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003ech\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eStringTok\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003est\u003c/code\u003e, \u003ccode\u003eCommontTok\u003c/code\u003e = \u003ccode\u003eco\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003eOtherTok\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003eot\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eAlertTok\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003eal\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eFunctionTok\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003efu\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003eRegionMarkerTok\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003ere\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eErrorTok\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003eer\u003c/code\u003e. A \u003ccode\u003e\u003ca\u003eNormalTok\u003c/a\u003e\u003c/code\u003e\n is not marked up at all.\n\u003c/p\u003e",
          "module": "Text.Highlighting.Kate.Format.HTML",
          "name": "formatHtmlInline",
          "package": "highlighting-kate",
          "signature": "FormatOptions -\u003e [SourceLine] -\u003e Html",
          "source": "src/Text-Highlighting-Kate-Format-HTML.html#formatHtmlInline",
          "type": "function"
        },
        "index": {
          "description": "Format tokens using HTML spans inside code tags For example KeywordTok is rendered as span with class kw Short class names correspond to TokenType as follows KeywordTok kw DataTypeTok dt DecValTok dv BaseNTok bn FloatTok fl CharTok ch StringTok st CommontTok co OtherTok ot AlertTok al FunctionTok fu RegionMarkerTok re ErrorTok er NormalTok is not marked up at all",
          "hierarchy": "Text Highlighting Kate Format HTML",
          "module": "Text.Highlighting.Kate.Format.HTML",
          "name": "formatHtmlInline",
          "normalized": "FormatOptions-\u003e[SourceLine]-\u003eHtml",
          "package": "highlighting-kate",
          "partial": "Html Inline",
          "signature": "FormatOptions-\u003e[SourceLine]-\u003eHtml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Format-HTML.html#v:formatHtmlInline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns CSS for styling highlighted code according to the given style.\n\u003c/p\u003e",
          "module": "Text.Highlighting.Kate.Format.HTML",
          "name": "styleToCss",
          "package": "highlighting-kate",
          "signature": "Style -\u003e String",
          "source": "src/Text-Highlighting-Kate-Format-HTML.html#styleToCss",
          "type": "function"
        },
        "index": {
          "description": "Returns CSS for styling highlighted code according to the given style",
          "hierarchy": "Text Highlighting Kate Format HTML",
          "module": "Text.Highlighting.Kate.Format.HTML",
          "name": "styleToCss",
          "normalized": "Style-\u003eString",
          "package": "highlighting-kate",
          "partial": "To Css",
          "signature": "Style-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Format-HTML.html#v:styleToCss"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFormatters that convert a list of annotated source lines to LaTeX.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Highlighting.Kate.Format.LaTeX",
          "name": "LaTeX",
          "package": "highlighting-kate",
          "source": "src/Text-Highlighting-Kate-Format-LaTeX.html",
          "type": "module"
        },
        "index": {
          "description": "Formatters that convert list of annotated source lines to LaTeX",
          "hierarchy": "Text Highlighting Kate Format LaTeX",
          "module": "Text.Highlighting.Kate.Format.LaTeX",
          "name": "LaTeX",
          "package": "highlighting-kate",
          "partial": "La Te",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Format-LaTeX.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormat tokens as a LaTeX \u003ccode\u003eHighlighting\u003c/code\u003e environment inside a\n \u003ccode\u003eShaded\u003c/code\u003e environment.  \u003ccode\u003eHighlighting\u003c/code\u003e and \u003ccode\u003eShaded\u003c/code\u003e are\n defined by the macros produced by \u003ccode\u003e\u003ca\u003estyleToLaTeX\u003c/a\u003e\u003c/code\u003e.  \u003ccode\u003eHighlighting\u003c/code\u003e\n is a verbatim environment using \u003ccode\u003efancyvrb\u003c/code\u003e; \u003ccode\u003e\\\u003c/code\u003e, \u003ccode\u003e{\u003c/code\u003e, and \u003ccode\u003e}\u003c/code\u003e\n have their normal meanings inside this environment, so that\n formatting commands work.  \u003ccode\u003eShaded\u003c/code\u003e is either nothing\n (if the style's background color is default) or a \u003ccode\u003esnugshade\u003c/code\u003e\n environment from \u003ccode\u003eframed\u003c/code\u003e, providing a background color\n for the whole code block, even if it spans multiple pages.\n\u003c/p\u003e",
          "module": "Text.Highlighting.Kate.Format.LaTeX",
          "name": "formatLaTeXBlock",
          "package": "highlighting-kate",
          "signature": "FormatOptions -\u003e [SourceLine] -\u003e String",
          "source": "src/Text-Highlighting-Kate-Format-LaTeX.html#formatLaTeXBlock",
          "type": "function"
        },
        "index": {
          "description": "Format tokens as LaTeX Highlighting environment inside Shaded environment Highlighting and Shaded are defined by the macros produced by styleToLaTeX Highlighting is verbatim environment using fancyvrb and have their normal meanings inside this environment so that formatting commands work Shaded is either nothing if the style background color is default or snugshade environment from framed providing background color for the whole code block even if it spans multiple pages",
          "hierarchy": "Text Highlighting Kate Format LaTeX",
          "module": "Text.Highlighting.Kate.Format.LaTeX",
          "name": "formatLaTeXBlock",
          "normalized": "FormatOptions-\u003e[SourceLine]-\u003eString",
          "package": "highlighting-kate",
          "partial": "La Te XBlock",
          "signature": "FormatOptions-\u003e[SourceLine]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Format-LaTeX.html#v:formatLaTeXBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormats tokens as LaTeX using custom commands inside\n \u003ccode\u003e|\u003c/code\u003e characters. Assumes that \u003ccode\u003e|\u003c/code\u003e is defined as a short verbatim\n command by the macros produced by \u003ccode\u003e\u003ca\u003estyleToLaTeX\u003c/a\u003e\u003c/code\u003e.\n A \u003ccode\u003eKeywordTok\u003c/code\u003e is rendered using \u003ccode\u003e\\KeywordTok{..}\u003c/code\u003e, and so on.\n\u003c/p\u003e",
          "module": "Text.Highlighting.Kate.Format.LaTeX",
          "name": "formatLaTeXInline",
          "package": "highlighting-kate",
          "signature": "FormatOptions -\u003e [SourceLine] -\u003e String",
          "source": "src/Text-Highlighting-Kate-Format-LaTeX.html#formatLaTeXInline",
          "type": "function"
        },
        "index": {
          "description": "Formats tokens as LaTeX using custom commands inside characters Assumes that is defined as short verbatim command by the macros produced by styleToLaTeX KeywordTok is rendered using KeywordTok and so on",
          "hierarchy": "Text Highlighting Kate Format LaTeX",
          "module": "Text.Highlighting.Kate.Format.LaTeX",
          "name": "formatLaTeXInline",
          "normalized": "FormatOptions-\u003e[SourceLine]-\u003eString",
          "package": "highlighting-kate",
          "partial": "La Te XInline",
          "signature": "FormatOptions-\u003e[SourceLine]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Format-LaTeX.html#v:formatLaTeXInline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a \u003ccode\u003e\u003ca\u003eStyle\u003c/a\u003e\u003c/code\u003e to a set of LaTeX macro definitions,\n which should be placed in the document's preamble.\n Note: default LaTeX setup doesn't allow boldface typewriter font.\n To make boldface work in styles, you need to use a different typewriter\n font. This will work for computer modern:\n\u003c/p\u003e\u003cpre\u003e \\DeclareFontShape{OT1}{cmtt}{bx}{n}{\u003c5\u003e\u003c6\u003e\u003c7\u003e\u003c8\u003e\u003c9\u003e\u003c10\u003e\u003c10.95\u003e\u003c12\u003e\u003c14.4\u003e\u003c17.28\u003e\u003c20.74\u003e\u003c24.88\u003ecmttb10}{}\n\u003c/pre\u003e\u003cp\u003eOr, with xelatex:\n\u003c/p\u003e\u003cpre\u003e \\usepackage{fontspec}\n \\setmainfont[SmallCapsFont={* Caps}]{Latin Modern Roman}\n \\setsansfont{Latin Modern Sans}\n \\setmonofont[SmallCapsFont={Latin Modern Mono Caps}]{Latin Modern Mono Light}\n\u003c/pre\u003e",
          "module": "Text.Highlighting.Kate.Format.LaTeX",
          "name": "styleToLaTeX",
          "package": "highlighting-kate",
          "signature": "Style -\u003e String",
          "source": "src/Text-Highlighting-Kate-Format-LaTeX.html#styleToLaTeX",
          "type": "function"
        },
        "index": {
          "description": "Converts Style to set of LaTeX macro definitions which should be placed in the document preamble Note default LaTeX setup doesn allow boldface typewriter font To make boldface work in styles you need to use different typewriter font This will work for computer modern DeclareFontShape OT1 cmtt bx cmttb10 Or with xelatex usepackage fontspec setmainfont SmallCapsFont Caps Latin Modern Roman setsansfont Latin Modern Sans setmonofont SmallCapsFont Latin Modern Mono Caps Latin Modern Mono Light",
          "hierarchy": "Text Highlighting Kate Format LaTeX",
          "module": "Text.Highlighting.Kate.Format.LaTeX",
          "name": "styleToLaTeX",
          "normalized": "Style-\u003eString",
          "package": "highlighting-kate",
          "partial": "To La Te",
          "signature": "Style-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Format-LaTeX.html#v:styleToLaTeX"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStyles for rendering annotated source lines.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Highlighting.Kate.Styles",
          "name": "Styles",
          "package": "highlighting-kate",
          "source": "src/Text-Highlighting-Kate-Styles.html",
          "type": "module"
        },
        "index": {
          "description": "Styles for rendering annotated source lines",
          "hierarchy": "Text Highlighting Kate Styles",
          "module": "Text.Highlighting.Kate.Styles",
          "name": "Styles",
          "package": "highlighting-kate",
          "partial": "Styles",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Styles.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStyle based on ultraviolet's espresso_libre.css (dark background).\n\u003c/p\u003e",
          "module": "Text.Highlighting.Kate.Styles",
          "name": "espresso",
          "package": "highlighting-kate",
          "signature": "Style",
          "source": "src/Text-Highlighting-Kate-Styles.html#espresso",
          "type": "function"
        },
        "index": {
          "description": "Style based on ultraviolet espresso libre.css dark background",
          "hierarchy": "Text Highlighting Kate Styles",
          "module": "Text.Highlighting.Kate.Styles",
          "name": "espresso",
          "package": "highlighting-kate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Styles.html#v:espresso"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStyle based on haddock's source highlighting.\n\u003c/p\u003e",
          "module": "Text.Highlighting.Kate.Styles",
          "name": "haddock",
          "package": "highlighting-kate",
          "signature": "Style",
          "source": "src/Text-Highlighting-Kate-Styles.html#haddock",
          "type": "function"
        },
        "index": {
          "description": "Style based on haddock source highlighting",
          "hierarchy": "Text Highlighting Kate Styles",
          "module": "Text.Highlighting.Kate.Styles",
          "name": "haddock",
          "package": "highlighting-kate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Styles.html#v:haddock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStyle based on kate's default colors.\n\u003c/p\u003e",
          "module": "Text.Highlighting.Kate.Styles",
          "name": "kate",
          "package": "highlighting-kate",
          "signature": "Style",
          "source": "src/Text-Highlighting-Kate-Styles.html#kate",
          "type": "function"
        },
        "index": {
          "description": "Style based on kate default colors",
          "hierarchy": "Text Highlighting Kate Styles",
          "module": "Text.Highlighting.Kate.Styles",
          "name": "kate",
          "package": "highlighting-kate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Styles.html#v:kate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStyle with no colors.\n\u003c/p\u003e",
          "module": "Text.Highlighting.Kate.Styles",
          "name": "monochrome",
          "package": "highlighting-kate",
          "signature": "Style",
          "source": "src/Text-Highlighting-Kate-Styles.html#monochrome",
          "type": "function"
        },
        "index": {
          "description": "Style with no colors",
          "hierarchy": "Text Highlighting Kate Styles",
          "module": "Text.Highlighting.Kate.Styles",
          "name": "monochrome",
          "package": "highlighting-kate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Styles.html#v:monochrome"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStyle based on pygments's default colors.\n\u003c/p\u003e",
          "module": "Text.Highlighting.Kate.Styles",
          "name": "pygments",
          "package": "highlighting-kate",
          "signature": "Style",
          "source": "src/Text-Highlighting-Kate-Styles.html#pygments",
          "type": "function"
        },
        "index": {
          "description": "Style based on pygments default colors",
          "hierarchy": "Text Highlighting Kate Styles",
          "module": "Text.Highlighting.Kate.Styles",
          "name": "pygments",
          "package": "highlighting-kate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Styles.html#v:pygments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStyle based on pygments's tango colors.\n\u003c/p\u003e",
          "module": "Text.Highlighting.Kate.Styles",
          "name": "tango",
          "package": "highlighting-kate",
          "signature": "Style",
          "source": "src/Text-Highlighting-Kate-Styles.html#tango",
          "type": "function"
        },
        "index": {
          "description": "Style based on pygments tango colors",
          "hierarchy": "Text Highlighting Kate Styles",
          "module": "Text.Highlighting.Kate.Styles",
          "name": "tango",
          "package": "highlighting-kate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Styles.html#v:tango"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStyle based on the popular zenburn vim color scheme\n\u003c/p\u003e",
          "module": "Text.Highlighting.Kate.Styles",
          "name": "zenburn",
          "package": "highlighting-kate",
          "signature": "Style",
          "source": "src/Text-Highlighting-Kate-Styles.html#zenburn",
          "type": "function"
        },
        "index": {
          "description": "Style based on the popular zenburn vim color scheme",
          "hierarchy": "Text Highlighting Kate Styles",
          "module": "Text.Highlighting.Kate.Styles",
          "name": "zenburn",
          "package": "highlighting-kate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Styles.html#v:zenburn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eToken lexer for various languages.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Highlighting.Kate.Syntax",
          "name": "Syntax",
          "package": "highlighting-kate",
          "source": "src/Text-Highlighting-Kate-Syntax.html",
          "type": "module"
        },
        "index": {
          "description": "Token lexer for various languages",
          "hierarchy": "Text Highlighting Kate Syntax",
          "module": "Text.Highlighting.Kate.Syntax",
          "name": "Syntax",
          "package": "highlighting-kate",
          "partial": "Syntax",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Syntax.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHighlight source code. The source language may be specified\n by its canonical name (case-insensitive) or by a canonical\n extension (if unique).\n The parsers read the input lazily and parse line by line;\n results are returned immediately.\n Supported languages: \u003ccode\u003eactionscript\u003c/code\u003e, \u003ccode\u003eada\u003c/code\u003e, \u003ccode\u003ealert\u003c/code\u003e, \u003ccode\u003ealert_indent\u003c/code\u003e, \u003ccode\u003eapache\u003c/code\u003e, \u003ccode\u003easn1\u003c/code\u003e, \u003ccode\u003easp\u003c/code\u003e, \u003ccode\u003eawk\u003c/code\u003e, \u003ccode\u003ebash\u003c/code\u003e, \u003ccode\u003ebibtex\u003c/code\u003e, \u003ccode\u003eboo\u003c/code\u003e, \u003ccode\u003ec\u003c/code\u003e, \u003ccode\u003echangelog\u003c/code\u003e, \u003ccode\u003eclojure\u003c/code\u003e, \u003ccode\u003ecmake\u003c/code\u003e, \u003ccode\u003ecoffee\u003c/code\u003e, \u003ccode\u003ecoldfusion\u003c/code\u003e, \u003ccode\u003ecommonlisp\u003c/code\u003e, \u003ccode\u003ecpp\u003c/code\u003e, \u003ccode\u003ecs\u003c/code\u003e, \u003ccode\u003ecss\u003c/code\u003e, \u003ccode\u003ecurry\u003c/code\u003e, \u003ccode\u003ed\u003c/code\u003e, \u003ccode\u003ediff\u003c/code\u003e, \u003ccode\u003edjangotemplate\u003c/code\u003e, \u003ccode\u003edoxygen\u003c/code\u003e, \u003ccode\u003edoxygenlua\u003c/code\u003e, \u003ccode\u003edtd\u003c/code\u003e, \u003ccode\u003eeiffel\u003c/code\u003e, \u003ccode\u003eemail\u003c/code\u003e, \u003ccode\u003eerlang\u003c/code\u003e, \u003ccode\u003efortran\u003c/code\u003e, \u003ccode\u003efsharp\u003c/code\u003e, \u003ccode\u003egnuassembler\u003c/code\u003e, \u003ccode\u003ego\u003c/code\u003e, \u003ccode\u003ehaskell\u003c/code\u003e, \u003ccode\u003ehaxe\u003c/code\u003e, \u003ccode\u003ehtml\u003c/code\u003e, \u003ccode\u003eini\u003c/code\u003e, \u003ccode\u003ejava\u003c/code\u003e, \u003ccode\u003ejavadoc\u003c/code\u003e, \u003ccode\u003ejavascript\u003c/code\u003e, \u003ccode\u003ejson\u003c/code\u003e, \u003ccode\u003ejsp\u003c/code\u003e, \u003ccode\u003ejulia\u003c/code\u003e, \u003ccode\u003elatex\u003c/code\u003e, \u003ccode\u003elex\u003c/code\u003e, \u003ccode\u003eliteratecurry\u003c/code\u003e, \u003ccode\u003eliteratehaskell\u003c/code\u003e, \u003ccode\u003elua\u003c/code\u003e, \u003ccode\u003emakefile\u003c/code\u003e, \u003ccode\u003emandoc\u003c/code\u003e, \u003ccode\u003emarkdown\u003c/code\u003e, \u003ccode\u003ematlab\u003c/code\u003e, \u003ccode\u003emaxima\u003c/code\u003e, \u003ccode\u003emetafont\u003c/code\u003e, \u003ccode\u003emips\u003c/code\u003e, \u003ccode\u003emodelines\u003c/code\u003e, \u003ccode\u003emodula2\u003c/code\u003e, \u003ccode\u003emodula3\u003c/code\u003e, \u003ccode\u003emonobasic\u003c/code\u003e, \u003ccode\u003enasm\u003c/code\u003e, \u003ccode\u003enoweb\u003c/code\u003e, \u003ccode\u003eobjectivec\u003c/code\u003e, \u003ccode\u003eobjectivecpp\u003c/code\u003e, \u003ccode\u003eocaml\u003c/code\u003e, \u003ccode\u003eoctave\u003c/code\u003e, \u003ccode\u003epascal\u003c/code\u003e, \u003ccode\u003eperl\u003c/code\u003e, \u003ccode\u003ephp\u003c/code\u003e, \u003ccode\u003epike\u003c/code\u003e, \u003ccode\u003epostscript\u003c/code\u003e, \u003ccode\u003eprolog\u003c/code\u003e, \u003ccode\u003epython\u003c/code\u003e, \u003ccode\u003er\u003c/code\u003e, \u003ccode\u003erelaxngcompact\u003c/code\u003e, \u003ccode\u003erestructuredtext\u003c/code\u003e, \u003ccode\u003erhtml\u003c/code\u003e, \u003ccode\u003eroff\u003c/code\u003e, \u003ccode\u003eruby\u003c/code\u003e, \u003ccode\u003erust\u003c/code\u003e, \u003ccode\u003escala\u003c/code\u003e, \u003ccode\u003escheme\u003c/code\u003e, \u003ccode\u003esci\u003c/code\u003e, \u003ccode\u003esed\u003c/code\u003e, \u003ccode\u003esgml\u003c/code\u003e, \u003ccode\u003esql\u003c/code\u003e, \u003ccode\u003esqlmysql\u003c/code\u003e, \u003ccode\u003esqlpostgresql\u003c/code\u003e, \u003ccode\u003etcl\u003c/code\u003e, \u003ccode\u003etexinfo\u003c/code\u003e, \u003ccode\u003everilog\u003c/code\u003e, \u003ccode\u003evhdl\u003c/code\u003e, \u003ccode\u003exml\u003c/code\u003e, \u003ccode\u003exorg\u003c/code\u003e, \u003ccode\u003exslt\u003c/code\u003e, \u003ccode\u003exul\u003c/code\u003e, \u003ccode\u003eyacc\u003c/code\u003e, \u003ccode\u003eyaml\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Text.Highlighting.Kate.Syntax\",\"Text.Highlighting.Kate\"]",
          "name": "highlightAs",
          "package": "highlighting-kate",
          "signature": "String-\u003e String-\u003e [SourceLine]",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Syntax.html#v:highlightAs\",\"http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate.html#v:highlightAs\"]"
        },
        "index": {
          "description": "Highlight source code The source language may be specified by its canonical name case-insensitive or by canonical extension if unique The parsers read the input lazily and parse line by line results are returned immediately Supported languages actionscript ada alert alert indent apache asn1 asp awk bash bibtex boo changelog clojure cmake coffee coldfusion commonlisp cpp cs css curry diff djangotemplate doxygen doxygenlua dtd eiffel email erlang fortran fsharp gnuassembler go haskell haxe html ini java javadoc javascript json jsp julia latex lex literatecurry literatehaskell lua makefile mandoc markdown matlab maxima metafont mips modelines modula2 modula3 monobasic nasm noweb objectivec objectivecpp ocaml octave pascal perl php pike postscript prolog python relaxngcompact restructuredtext rhtml roff ruby rust scala scheme sci sed sgml sql sqlmysql sqlpostgresql tcl texinfo verilog vhdl xml xorg xslt xul yacc yaml",
          "hierarchy": "Text Highlighting Kate Syntax",
          "module": "Text.Highlighting.Kate.Syntax",
          "name": "highlightAs",
          "normalized": "String-\u003eString-\u003e[SourceLine]",
          "package": "highlighting-kate",
          "partial": "As",
          "signature": "String-\u003eString-\u003e[SourceLine]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Syntax.html#v:highlightAs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of supported languages.\n\u003c/p\u003e",
          "module": "[\"Text.Highlighting.Kate.Syntax\",\"Text.Highlighting.Kate\"]",
          "name": "languages",
          "package": "highlighting-kate",
          "signature": "[String]",
          "source": "src/Text-Highlighting-Kate-Syntax.html#languages",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Syntax.html#v:languages\",\"http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate.html#v:languages\"]"
        },
        "index": {
          "description": "List of supported languages",
          "hierarchy": "Text Highlighting Kate Syntax",
          "module": "Text.Highlighting.Kate.Syntax",
          "name": "languages",
          "normalized": "[String]",
          "package": "highlighting-kate",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Syntax.html#v:languages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a list of languages appropriate for the given file extension.\n\u003c/p\u003e",
          "module": "[\"Text.Highlighting.Kate.Syntax\",\"Text.Highlighting.Kate\"]",
          "name": "languagesByExtension",
          "package": "highlighting-kate",
          "signature": "String -\u003e [String]",
          "source": "src/Text-Highlighting-Kate-Syntax.html#languagesByExtension",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Syntax.html#v:languagesByExtension\",\"http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate.html#v:languagesByExtension\"]"
        },
        "index": {
          "description": "Returns list of languages appropriate for the given file extension",
          "hierarchy": "Text Highlighting Kate Syntax",
          "module": "Text.Highlighting.Kate.Syntax",
          "name": "languagesByExtension",
          "normalized": "String-\u003e[String]",
          "package": "highlighting-kate",
          "partial": "By Extension",
          "signature": "String-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Syntax.html#v:languagesByExtension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a list of languages appropriate for the given filename.\n\u003c/p\u003e",
          "module": "[\"Text.Highlighting.Kate.Syntax\",\"Text.Highlighting.Kate\"]",
          "name": "languagesByFilename",
          "package": "highlighting-kate",
          "signature": "FilePath -\u003e [String]",
          "source": "src/Text-Highlighting-Kate-Syntax.html#languagesByFilename",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Syntax.html#v:languagesByFilename\",\"http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate.html#v:languagesByFilename\"]"
        },
        "index": {
          "description": "Returns list of languages appropriate for the given filename",
          "hierarchy": "Text Highlighting Kate Syntax",
          "module": "Text.Highlighting.Kate.Syntax",
          "name": "languagesByFilename",
          "normalized": "FilePath-\u003e[String]",
          "package": "highlighting-kate",
          "partial": "By Filename",
          "signature": "FilePath-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Syntax.html#v:languagesByFilename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefinitions for data structures needed by highlighting-kate.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Highlighting.Kate.Types",
          "name": "Types",
          "package": "highlighting-kate",
          "source": "src/Text-Highlighting-Kate-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Definitions for data structures needed by highlighting-kate",
          "hierarchy": "Text Highlighting Kate Types",
          "module": "Text.Highlighting.Kate.Types",
          "name": "Types",
          "package": "highlighting-kate",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Highlighting.Kate.Types",
          "name": "Color",
          "package": "highlighting-kate",
          "source": "src/Text-Highlighting-Kate-Types.html#Color",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Highlighting Kate Types",
          "module": "Text.Highlighting.Kate.Types",
          "name": "Color",
          "package": "highlighting-kate",
          "partial": "Color",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#t:Color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA context: pair of syntax name and context name.\n\u003c/p\u003e",
          "module": "Text.Highlighting.Kate.Types",
          "name": "Context",
          "package": "highlighting-kate",
          "source": "src/Text-Highlighting-Kate-Types.html#Context",
          "type": "type"
        },
        "index": {
          "description": "context pair of syntax name and context name",
          "hierarchy": "Text Highlighting Kate Types",
          "module": "Text.Highlighting.Kate.Types",
          "name": "Context",
          "package": "highlighting-kate",
          "partial": "Context",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#t:Context"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA stack of contexts.  (Language-specific context\n stacks must be maintained because of IncludeRules.)\n\u003c/p\u003e",
          "module": "Text.Highlighting.Kate.Types",
          "name": "ContextStack",
          "package": "highlighting-kate",
          "source": "src/Text-Highlighting-Kate-Types.html#ContextStack",
          "type": "type"
        },
        "index": {
          "description": "stack of contexts Language-specific context stacks must be maintained because of IncludeRules",
          "hierarchy": "Text Highlighting Kate Types",
          "module": "Text.Highlighting.Kate.Types",
          "name": "ContextStack",
          "package": "highlighting-kate",
          "partial": "Context Stack",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#t:ContextStack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptions for formatting source code.\n\u003c/p\u003e",
          "module": "Text.Highlighting.Kate.Types",
          "name": "FormatOptions",
          "package": "highlighting-kate",
          "source": "src/Text-Highlighting-Kate-Types.html#FormatOptions",
          "type": "data"
        },
        "index": {
          "description": "Options for formatting source code",
          "hierarchy": "Text Highlighting Kate Types",
          "module": "Text.Highlighting.Kate.Types",
          "name": "FormatOptions",
          "package": "highlighting-kate",
          "partial": "Format Options",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#t:FormatOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Highlighting.Kate.Types",
          "name": "FromColor",
          "package": "highlighting-kate",
          "source": "src/Text-Highlighting-Kate-Types.html#FromColor",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text Highlighting Kate Types",
          "module": "Text.Highlighting.Kate.Types",
          "name": "FromColor",
          "package": "highlighting-kate",
          "partial": "From Color",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#t:FromColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Highlighting.Kate.Types",
          "name": "KateParser",
          "package": "highlighting-kate",
          "source": "src/Text-Highlighting-Kate-Types.html#KateParser",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text Highlighting Kate Types",
          "module": "Text.Highlighting.Kate.Types",
          "name": "KateParser",
          "package": "highlighting-kate",
          "partial": "Kate Parser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#t:KateParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA line of source, list of labeled source items.\n\u003c/p\u003e",
          "module": "Text.Highlighting.Kate.Types",
          "name": "SourceLine",
          "package": "highlighting-kate",
          "source": "src/Text-Highlighting-Kate-Types.html#SourceLine",
          "type": "type"
        },
        "index": {
          "description": "line of source list of labeled source items",
          "hierarchy": "Text Highlighting Kate Types",
          "module": "Text.Highlighting.Kate.Types",
          "name": "SourceLine",
          "package": "highlighting-kate",
          "partial": "Source Line",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#t:SourceLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Highlighting.Kate.Types",
          "name": "Style",
          "package": "highlighting-kate",
          "source": "src/Text-Highlighting-Kate-Types.html#Style",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Highlighting Kate Types",
          "module": "Text.Highlighting.Kate.Types",
          "name": "Style",
          "package": "highlighting-kate",
          "partial": "Style",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#t:Style"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eState for syntax parser.\n\u003c/p\u003e",
          "module": "Text.Highlighting.Kate.Types",
          "name": "SyntaxState",
          "package": "highlighting-kate",
          "source": "src/Text-Highlighting-Kate-Types.html#SyntaxState",
          "type": "data"
        },
        "index": {
          "description": "State for syntax parser",
          "hierarchy": "Text Highlighting Kate Types",
          "module": "Text.Highlighting.Kate.Types",
          "name": "SyntaxState",
          "package": "highlighting-kate",
          "partial": "Syntax State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#t:SyntaxState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Highlighting.Kate.Types",
          "name": "ToColor",
          "package": "highlighting-kate",
          "source": "src/Text-Highlighting-Kate-Types.html#ToColor",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text Highlighting Kate Types",
          "module": "Text.Highlighting.Kate.Types",
          "name": "ToColor",
          "package": "highlighting-kate",
          "partial": "To Color",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#t:ToColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA pair consisting of a list of attributes and some text.\n\u003c/p\u003e",
          "module": "Text.Highlighting.Kate.Types",
          "name": "Token",
          "package": "highlighting-kate",
          "source": "src/Text-Highlighting-Kate-Types.html#Token",
          "type": "type"
        },
        "index": {
          "description": "pair consisting of list of attributes and some text",
          "hierarchy": "Text Highlighting Kate Types",
          "module": "Text.Highlighting.Kate.Types",
          "name": "Token",
          "package": "highlighting-kate",
          "partial": "Token",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#t:Token"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Highlighting.Kate.Types",
          "name": "TokenStyle",
          "package": "highlighting-kate",
          "source": "src/Text-Highlighting-Kate-Types.html#TokenStyle",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Highlighting Kate Types",
          "module": "Text.Highlighting.Kate.Types",
          "name": "TokenStyle",
          "package": "highlighting-kate",
          "partial": "Token Style",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#t:TokenStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Highlighting.Kate.Types",
          "name": "TokenType",
          "package": "highlighting-kate",
          "source": "src/Text-Highlighting-Kate-Types.html#TokenType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Highlighting Kate Types",
          "module": "Text.Highlighting.Kate.Types",
          "name": "TokenType",
          "package": "highlighting-kate",
          "partial": "Token Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#t:TokenType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Highlighting.Kate.Types",
          "name": "AlertTok",
          "package": "highlighting-kate",
          "signature": "AlertTok",
          "source": "src/Text-Highlighting-Kate-Types.html#TokenType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Highlighting Kate Types",
          "module": "Text.Highlighting.Kate.Types",
          "name": "AlertTok",
          "package": "highlighting-kate",
          "partial": "Alert Tok",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:AlertTok"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Highlighting.Kate.Types",
          "name": "BaseNTok",
          "package": "highlighting-kate",
          "signature": "BaseNTok",
          "source": "src/Text-Highlighting-Kate-Types.html#TokenType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Highlighting Kate Types",
          "module": "Text.Highlighting.Kate.Types",
          "name": "BaseNTok",
          "package": "highlighting-kate",
          "partial": "Base NTok",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:BaseNTok"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Highlighting.Kate.Types",
          "name": "CharTok",
          "package": "highlighting-kate",
          "signature": "CharTok",
          "source": "src/Text-Highlighting-Kate-Types.html#TokenType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Highlighting Kate Types",
          "module": "Text.Highlighting.Kate.Types",
          "name": "CharTok",
          "package": "highlighting-kate",
          "partial": "Char Tok",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:CharTok"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Highlighting.Kate.Types",
          "name": "CommentTok",
          "package": "highlighting-kate",
          "signature": "CommentTok",
          "source": "src/Text-Highlighting-Kate-Types.html#TokenType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Highlighting Kate Types",
          "module": "Text.Highlighting.Kate.Types",
          "name": "CommentTok",
          "package": "highlighting-kate",
          "partial": "Comment Tok",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:CommentTok"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Highlighting.Kate.Types",
          "name": "DataTypeTok",
          "package": "highlighting-kate",
          "signature": "DataTypeTok",
          "source": "src/Text-Highlighting-Kate-Types.html#TokenType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Highlighting Kate Types",
          "module": "Text.Highlighting.Kate.Types",
          "name": "DataTypeTok",
          "package": "highlighting-kate",
          "partial": "Data Type Tok",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:DataTypeTok"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Highlighting.Kate.Types",
          "name": "DecValTok",
          "package": "highlighting-kate",
          "signature": "DecValTok",
          "source": "src/Text-Highlighting-Kate-Types.html#TokenType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Highlighting Kate Types",
          "module": "Text.Highlighting.Kate.Types",
          "name": "DecValTok",
          "package": "highlighting-kate",
          "partial": "Dec Val Tok",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:DecValTok"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Highlighting.Kate.Types",
          "name": "ErrorTok",
          "package": "highlighting-kate",
          "signature": "ErrorTok",
          "source": "src/Text-Highlighting-Kate-Types.html#TokenType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Highlighting Kate Types",
          "module": "Text.Highlighting.Kate.Types",
          "name": "ErrorTok",
          "package": "highlighting-kate",
          "partial": "Error Tok",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:ErrorTok"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Highlighting.Kate.Types",
          "name": "FloatTok",
          "package": "highlighting-kate",
          "signature": "FloatTok",
          "source": "src/Text-Highlighting-Kate-Types.html#TokenType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Highlighting Kate Types",
          "module": "Text.Highlighting.Kate.Types",
          "name": "FloatTok",
          "package": "highlighting-kate",
          "partial": "Float Tok",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:FloatTok"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Highlighting.Kate.Types",
          "name": "FormatOptions",
          "package": "highlighting-kate",
          "signature": "FormatOptions",
          "source": "src/Text-Highlighting-Kate-Types.html#FormatOptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Highlighting Kate Types",
          "module": "Text.Highlighting.Kate.Types",
          "name": "FormatOptions",
          "package": "highlighting-kate",
          "partial": "Format Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:FormatOptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Highlighting.Kate.Types",
          "name": "FunctionTok",
          "package": "highlighting-kate",
          "signature": "FunctionTok",
          "source": "src/Text-Highlighting-Kate-Types.html#TokenType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Highlighting Kate Types",
          "module": "Text.Highlighting.Kate.Types",
          "name": "FunctionTok",
          "package": "highlighting-kate",
          "partial": "Function Tok",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:FunctionTok"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Highlighting.Kate.Types",
          "name": "KeywordTok",
          "package": "highlighting-kate",
          "signature": "KeywordTok",
          "source": "src/Text-Highlighting-Kate-Types.html#TokenType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Highlighting Kate Types",
          "module": "Text.Highlighting.Kate.Types",
          "name": "KeywordTok",
          "package": "highlighting-kate",
          "partial": "Keyword Tok",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:KeywordTok"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Highlighting.Kate.Types",
          "name": "NormalTok",
          "package": "highlighting-kate",
          "signature": "NormalTok",
          "source": "src/Text-Highlighting-Kate-Types.html#TokenType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Highlighting Kate Types",
          "module": "Text.Highlighting.Kate.Types",
          "name": "NormalTok",
          "package": "highlighting-kate",
          "partial": "Normal Tok",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:NormalTok"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Highlighting.Kate.Types",
          "name": "OtherTok",
          "package": "highlighting-kate",
          "signature": "OtherTok",
          "source": "src/Text-Highlighting-Kate-Types.html#TokenType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Highlighting Kate Types",
          "module": "Text.Highlighting.Kate.Types",
          "name": "OtherTok",
          "package": "highlighting-kate",
          "partial": "Other Tok",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:OtherTok"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Highlighting.Kate.Types",
          "name": "RGB",
          "package": "highlighting-kate",
          "signature": "RGB Word8 Word8 Word8",
          "source": "src/Text-Highlighting-Kate-Types.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Highlighting Kate Types",
          "module": "Text.Highlighting.Kate.Types",
          "name": "RGB",
          "package": "highlighting-kate",
          "partial": "RGB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:RGB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Highlighting.Kate.Types",
          "name": "RegionMarkerTok",
          "package": "highlighting-kate",
          "signature": "RegionMarkerTok",
          "source": "src/Text-Highlighting-Kate-Types.html#TokenType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Highlighting Kate Types",
          "module": "Text.Highlighting.Kate.Types",
          "name": "RegionMarkerTok",
          "package": "highlighting-kate",
          "partial": "Region Marker Tok",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:RegionMarkerTok"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Highlighting.Kate.Types",
          "name": "StringTok",
          "package": "highlighting-kate",
          "signature": "StringTok",
          "source": "src/Text-Highlighting-Kate-Types.html#TokenType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Highlighting Kate Types",
          "module": "Text.Highlighting.Kate.Types",
          "name": "StringTok",
          "package": "highlighting-kate",
          "partial": "String Tok",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:StringTok"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Highlighting.Kate.Types",
          "name": "Style",
          "package": "highlighting-kate",
          "signature": "Style",
          "source": "src/Text-Highlighting-Kate-Types.html#Style",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Highlighting Kate Types",
          "module": "Text.Highlighting.Kate.Types",
          "name": "Style",
          "package": "highlighting-kate",
          "partial": "Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:Style"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Highlighting.Kate.Types",
          "name": "SyntaxState",
          "package": "highlighting-kate",
          "signature": "SyntaxState",
          "source": "src/Text-Highlighting-Kate-Types.html#SyntaxState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Highlighting Kate Types",
          "module": "Text.Highlighting.Kate.Types",
          "name": "SyntaxState",
          "package": "highlighting-kate",
          "partial": "Syntax State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:SyntaxState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Highlighting.Kate.Types",
          "name": "TokenStyle",
          "package": "highlighting-kate",
          "signature": "TokenStyle",
          "source": "src/Text-Highlighting-Kate-Types.html#TokenStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Highlighting Kate Types",
          "module": "Text.Highlighting.Kate.Types",
          "name": "TokenStyle",
          "package": "highlighting-kate",
          "partial": "Token Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:TokenStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Highlighting.Kate.Types",
          "name": "backgroundColor",
          "package": "highlighting-kate",
          "signature": "Maybe Color",
          "source": "src/Text-Highlighting-Kate-Types.html#Style",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Highlighting Kate Types",
          "module": "Text.Highlighting.Kate.Types",
          "name": "backgroundColor",
          "package": "highlighting-kate",
          "partial": "Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:backgroundColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdditional classes for Html code tag\n\u003c/p\u003e",
          "module": "Text.Highlighting.Kate.Types",
          "name": "codeClasses",
          "package": "highlighting-kate",
          "signature": "[String]",
          "source": "src/Text-Highlighting-Kate-Types.html#FormatOptions",
          "type": "function"
        },
        "index": {
          "description": "Additional classes for Html code tag",
          "hierarchy": "Text Highlighting Kate Types",
          "module": "Text.Highlighting.Kate.Types",
          "name": "codeClasses",
          "normalized": "[String]",
          "package": "highlighting-kate",
          "partial": "Classes",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:codeClasses"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdditional classes for Html container tag\n   (pre or table depending on numberLines)\n\u003c/p\u003e",
          "module": "Text.Highlighting.Kate.Types",
          "name": "containerClasses",
          "package": "highlighting-kate",
          "signature": "[String]",
          "source": "src/Text-Highlighting-Kate-Types.html#FormatOptions",
          "type": "function"
        },
        "index": {
          "description": "Additional classes for Html container tag pre or table depending on numberLines",
          "hierarchy": "Text Highlighting Kate Types",
          "module": "Text.Highlighting.Kate.Types",
          "name": "containerClasses",
          "normalized": "[String]",
          "package": "highlighting-kate",
          "partial": "Classes",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:containerClasses"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Highlighting.Kate.Types",
          "name": "defStyle",
          "package": "highlighting-kate",
          "signature": "TokenStyle",
          "source": "src/Text-Highlighting-Kate-Types.html#defStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Highlighting Kate Types",
          "module": "Text.Highlighting.Kate.Types",
          "name": "defStyle",
          "package": "highlighting-kate",
          "partial": "Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:defStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Highlighting.Kate.Types",
          "name": "defaultColor",
          "package": "highlighting-kate",
          "signature": "Maybe Color",
          "source": "src/Text-Highlighting-Kate-Types.html#Style",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Highlighting Kate Types",
          "module": "Text.Highlighting.Kate.Types",
          "name": "defaultColor",
          "package": "highlighting-kate",
          "partial": "Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:defaultColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Highlighting.Kate.Types",
          "name": "defaultFormatOpts",
          "package": "highlighting-kate",
          "signature": "FormatOptions",
          "source": "src/Text-Highlighting-Kate-Types.html#defaultFormatOpts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Highlighting Kate Types",
          "module": "Text.Highlighting.Kate.Types",
          "name": "defaultFormatOpts",
          "package": "highlighting-kate",
          "partial": "Format Opts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:defaultFormatOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Highlighting.Kate.Types",
          "name": "fromColor",
          "package": "highlighting-kate",
          "signature": "Color -\u003e a",
          "source": "src/Text-Highlighting-Kate-Types.html#fromColor",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Highlighting Kate Types",
          "module": "Text.Highlighting.Kate.Types",
          "name": "fromColor",
          "normalized": "Color-\u003ea",
          "package": "highlighting-kate",
          "partial": "Color",
          "signature": "Color-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:fromColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnchors on each line number\n\u003c/p\u003e",
          "module": "Text.Highlighting.Kate.Types",
          "name": "lineAnchors",
          "package": "highlighting-kate",
          "signature": "Bool",
          "source": "src/Text-Highlighting-Kate-Types.html#FormatOptions",
          "type": "function"
        },
        "index": {
          "description": "Anchors on each line number",
          "hierarchy": "Text Highlighting Kate Types",
          "module": "Text.Highlighting.Kate.Types",
          "name": "lineAnchors",
          "package": "highlighting-kate",
          "partial": "Anchors",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:lineAnchors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Highlighting.Kate.Types",
          "name": "lineNumberBackgroundColor",
          "package": "highlighting-kate",
          "signature": "Maybe Color",
          "source": "src/Text-Highlighting-Kate-Types.html#Style",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Highlighting Kate Types",
          "module": "Text.Highlighting.Kate.Types",
          "name": "lineNumberBackgroundColor",
          "package": "highlighting-kate",
          "partial": "Number Background Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:lineNumberBackgroundColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Highlighting.Kate.Types",
          "name": "lineNumberColor",
          "package": "highlighting-kate",
          "signature": "Maybe Color",
          "source": "src/Text-Highlighting-Kate-Types.html#Style",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Highlighting Kate Types",
          "module": "Text.Highlighting.Kate.Types",
          "name": "lineNumberColor",
          "package": "highlighting-kate",
          "partial": "Number Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:lineNumberColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber lines\n\u003c/p\u003e",
          "module": "Text.Highlighting.Kate.Types",
          "name": "numberLines",
          "package": "highlighting-kate",
          "signature": "Bool",
          "source": "src/Text-Highlighting-Kate-Types.html#FormatOptions",
          "type": "function"
        },
        "index": {
          "description": "Number lines",
          "hierarchy": "Text Highlighting Kate Types",
          "module": "Text.Highlighting.Kate.Types",
          "name": "numberLines",
          "package": "highlighting-kate",
          "partial": "Lines",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:numberLines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of first line\n\u003c/p\u003e",
          "module": "Text.Highlighting.Kate.Types",
          "name": "startNumber",
          "package": "highlighting-kate",
          "signature": "Int",
          "source": "src/Text-Highlighting-Kate-Types.html#FormatOptions",
          "type": "function"
        },
        "index": {
          "description": "Number of first line",
          "hierarchy": "Text Highlighting Kate Types",
          "module": "Text.Highlighting.Kate.Types",
          "name": "startNumber",
          "package": "highlighting-kate",
          "partial": "Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:startNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of regex captures from\n   last capturing match\n\u003c/p\u003e",
          "module": "Text.Highlighting.Kate.Types",
          "name": "synStCaptures",
          "package": "highlighting-kate",
          "signature": "[String]",
          "source": "src/Text-Highlighting-Kate-Types.html#SyntaxState",
          "type": "function"
        },
        "index": {
          "description": "List of regex captures from last capturing match",
          "hierarchy": "Text Highlighting Kate Types",
          "module": "Text.Highlighting.Kate.Types",
          "name": "synStCaptures",
          "normalized": "[String]",
          "package": "highlighting-kate",
          "partial": "St Captures",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:synStCaptures"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLanguage is case-sensitive\n\u003c/p\u003e",
          "module": "Text.Highlighting.Kate.Types",
          "name": "synStCaseSensitive",
          "package": "highlighting-kate",
          "signature": "Bool",
          "source": "src/Text-Highlighting-Kate-Types.html#SyntaxState",
          "type": "function"
        },
        "index": {
          "description": "Language is case-sensitive",
          "hierarchy": "Text Highlighting Kate Types",
          "module": "Text.Highlighting.Kate.Types",
          "name": "synStCaseSensitive",
          "package": "highlighting-kate",
          "partial": "St Case Sensitive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:synStCaseSensitive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStack of contexts\n\u003c/p\u003e",
          "module": "Text.Highlighting.Kate.Types",
          "name": "synStContexts",
          "package": "highlighting-kate",
          "signature": "ContextStack",
          "source": "src/Text-Highlighting-Kate-Types.html#SyntaxState",
          "type": "function"
        },
        "index": {
          "description": "Stack of contexts",
          "hierarchy": "Text Highlighting Kate Types",
          "module": "Text.Highlighting.Kate.Types",
          "name": "synStContexts",
          "package": "highlighting-kate",
          "partial": "St Contexts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:synStContexts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeywords are case-sensitive\n\u003c/p\u003e",
          "module": "Text.Highlighting.Kate.Types",
          "name": "synStKeywordCaseSensitive",
          "package": "highlighting-kate",
          "signature": "Bool",
          "source": "src/Text-Highlighting-Kate-Types.html#SyntaxState",
          "type": "function"
        },
        "index": {
          "description": "Keywords are case-sensitive",
          "hierarchy": "Text Highlighting Kate Types",
          "module": "Text.Highlighting.Kate.Types",
          "name": "synStKeywordCaseSensitive",
          "package": "highlighting-kate",
          "partial": "St Keyword Case Sensitive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:synStKeywordCaseSensitive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of current line\n\u003c/p\u003e",
          "module": "Text.Highlighting.Kate.Types",
          "name": "synStLineNumber",
          "package": "highlighting-kate",
          "signature": "Int",
          "source": "src/Text-Highlighting-Kate-Types.html#SyntaxState",
          "type": "function"
        },
        "index": {
          "description": "Number of current line",
          "hierarchy": "Text Highlighting Kate Types",
          "module": "Text.Highlighting.Kate.Types",
          "name": "synStLineNumber",
          "package": "highlighting-kate",
          "partial": "St Line Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:synStLineNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLast character parsed\n\u003c/p\u003e",
          "module": "Text.Highlighting.Kate.Types",
          "name": "synStPrevChar",
          "package": "highlighting-kate",
          "signature": "Char",
          "source": "src/Text-Highlighting-Kate-Types.html#SyntaxState",
          "type": "function"
        },
        "index": {
          "description": "Last character parsed",
          "hierarchy": "Text Highlighting Kate Types",
          "module": "Text.Highlighting.Kate.Types",
          "name": "synStPrevChar",
          "package": "highlighting-kate",
          "partial": "St Prev Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:synStPrevChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if we've parsed a nonspace\n\u003c/p\u003e",
          "module": "Text.Highlighting.Kate.Types",
          "name": "synStPrevNonspace",
          "package": "highlighting-kate",
          "signature": "Bool",
          "source": "src/Text-Highlighting-Kate-Types.html#SyntaxState",
          "type": "function"
        },
        "index": {
          "description": "True if we ve parsed nonspace",
          "hierarchy": "Text Highlighting Kate Types",
          "module": "Text.Highlighting.Kate.Types",
          "name": "synStPrevNonspace",
          "package": "highlighting-kate",
          "partial": "St Prev Nonspace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:synStPrevNonspace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHtml titles with token types\n\u003c/p\u003e",
          "module": "Text.Highlighting.Kate.Types",
          "name": "titleAttributes",
          "package": "highlighting-kate",
          "signature": "Bool",
          "source": "src/Text-Highlighting-Kate-Types.html#FormatOptions",
          "type": "function"
        },
        "index": {
          "description": "Html titles with token types",
          "hierarchy": "Text Highlighting Kate Types",
          "module": "Text.Highlighting.Kate.Types",
          "name": "titleAttributes",
          "package": "highlighting-kate",
          "partial": "Attributes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:titleAttributes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Highlighting.Kate.Types",
          "name": "toColor",
          "package": "highlighting-kate",
          "signature": "a -\u003e Maybe Color",
          "source": "src/Text-Highlighting-Kate-Types.html#toColor",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Highlighting Kate Types",
          "module": "Text.Highlighting.Kate.Types",
          "name": "toColor",
          "normalized": "a-\u003eMaybe Color",
          "package": "highlighting-kate",
          "partial": "Color",
          "signature": "a-\u003eMaybe Color",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:toColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Highlighting.Kate.Types",
          "name": "tokenBackground",
          "package": "highlighting-kate",
          "signature": "Maybe Color",
          "source": "src/Text-Highlighting-Kate-Types.html#TokenStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Highlighting Kate Types",
          "module": "Text.Highlighting.Kate.Types",
          "name": "tokenBackground",
          "package": "highlighting-kate",
          "partial": "Background",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:tokenBackground"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Highlighting.Kate.Types",
          "name": "tokenBold",
          "package": "highlighting-kate",
          "signature": "Bool",
          "source": "src/Text-Highlighting-Kate-Types.html#TokenStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Highlighting Kate Types",
          "module": "Text.Highlighting.Kate.Types",
          "name": "tokenBold",
          "package": "highlighting-kate",
          "partial": "Bold",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:tokenBold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Highlighting.Kate.Types",
          "name": "tokenColor",
          "package": "highlighting-kate",
          "signature": "Maybe Color",
          "source": "src/Text-Highlighting-Kate-Types.html#TokenStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Highlighting Kate Types",
          "module": "Text.Highlighting.Kate.Types",
          "name": "tokenColor",
          "package": "highlighting-kate",
          "partial": "Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:tokenColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Highlighting.Kate.Types",
          "name": "tokenItalic",
          "package": "highlighting-kate",
          "signature": "Bool",
          "source": "src/Text-Highlighting-Kate-Types.html#TokenStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Highlighting Kate Types",
          "module": "Text.Highlighting.Kate.Types",
          "name": "tokenItalic",
          "package": "highlighting-kate",
          "partial": "Italic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:tokenItalic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Highlighting.Kate.Types",
          "name": "tokenStyles",
          "package": "highlighting-kate",
          "signature": "[(TokenType, TokenStyle)]",
          "source": "src/Text-Highlighting-Kate-Types.html#Style",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Highlighting Kate Types",
          "module": "Text.Highlighting.Kate.Types",
          "name": "tokenStyles",
          "normalized": "[(TokenType,TokenStyle)]",
          "package": "highlighting-kate",
          "partial": "Styles",
          "signature": "[(TokenType,TokenStyle)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:tokenStyles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Highlighting.Kate.Types",
          "name": "tokenUnderline",
          "package": "highlighting-kate",
          "signature": "Bool",
          "source": "src/Text-Highlighting-Kate-Types.html#TokenStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Highlighting Kate Types",
          "module": "Text.Highlighting.Kate.Types",
          "name": "tokenUnderline",
          "package": "highlighting-kate",
          "partial": "Underline",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate-Types.html#v:tokenUnderline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis helper module exports the main highlighting and formatting\nfunctions.\n\u003c/p\u003e\u003cp\u003eA typical application will combine a highlighter and a formatter.\nThis one reads ruby code from stdin and writes HTML:\n\u003c/p\u003e\u003cpre\u003e import Text.Highlighting.Kate\n import Text.Blaze.Html.Renderer.String (renderHtml)\n import Text.Blaze.Html (toHtml)\n import Text.Blaze.Html5 as H\n import Text.Blaze.Html5.Attributes as A\n\n main = do\n   code \u003c- getContents\n   putStrLn $ renderHtml\n            $ do H.head $ H.style ! A.type_ (toValue \"text/css\")\n                        $ toHtml $ styleToCss tango\n                 H.body $ toHtml\n                        $ formatHtmlBlock defaultFormatOpts\n                        $ highlightAs \"ruby\" code\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Text.Highlighting.Kate",
          "name": "Kate",
          "package": "highlighting-kate",
          "source": "src/Text-Highlighting-Kate.html",
          "type": "module"
        },
        "index": {
          "description": "This helper module exports the main highlighting and formatting functions typical application will combine highlighter and formatter This one reads ruby code from stdin and writes HTML import Text.Highlighting.Kate import Text.Blaze.Html.Renderer.String renderHtml import Text.Blaze.Html toHtml import Text.Blaze.Html5 as import Text.Blaze.Html5.Attributes as main do code getContents putStrLn renderHtml do H.head H.style A.type toValue text css toHtml styleToCss tango H.body toHtml formatHtmlBlock defaultFormatOpts highlightAs ruby code",
          "hierarchy": "Text Highlighting Kate",
          "module": "Text.Highlighting.Kate",
          "name": "Kate",
          "package": "highlighting-kate",
          "partial": "Kate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Highlighting.Kate",
          "name": "highlightingKateVersion",
          "package": "highlighting-kate",
          "signature": "String",
          "source": "src/Text-Highlighting-Kate.html#highlightingKateVersion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Highlighting Kate",
          "module": "Text.Highlighting.Kate",
          "name": "highlightingKateVersion",
          "package": "highlighting-kate",
          "partial": "Kate Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/highlighting-kate/docs/Text-Highlighting-Kate.html#v:highlightingKateVersion"
      }
    }
  ]
]