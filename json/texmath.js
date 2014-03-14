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
        "word": "texmath"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for parsing LaTeX macro definitions and applying macros\n to LateX expressions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.TeXMath.Macros",
          "name": "Macros",
          "package": "texmath",
          "source": "src/Text-TeXMath-Macros.html",
          "type": "module"
        },
        "index": {
          "description": "Functions for parsing LaTeX macro definitions and applying macros to LateX expressions",
          "hierarchy": "Text TeXMath Macros",
          "module": "Text.TeXMath.Macros",
          "name": "Macros",
          "package": "texmath",
          "partial": "Macros",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-Macros.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.TeXMath.Macros",
          "name": "Macro",
          "package": "texmath",
          "source": "src/Text-TeXMath-Macros.html#Macro",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text TeXMath Macros",
          "module": "Text.TeXMath.Macros",
          "name": "Macro",
          "package": "texmath",
          "partial": "Macro",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-Macros.html#t:Macro"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApplies a list of macros to a string recursively until a fixed\n point is reached.  If there are several macros in the list with the\n same name, earlier ones will shadow later ones.\n\u003c/p\u003e",
          "module": "Text.TeXMath.Macros",
          "name": "applyMacros",
          "package": "texmath",
          "signature": "[Macro] -\u003e String -\u003e String",
          "source": "src/Text-TeXMath-Macros.html#applyMacros",
          "type": "function"
        },
        "index": {
          "description": "Applies list of macros to string recursively until fixed point is reached If there are several macros in the list with the same name earlier ones will shadow later ones",
          "hierarchy": "Text TeXMath Macros",
          "module": "Text.TeXMath.Macros",
          "name": "applyMacros",
          "normalized": "[Macro]-\u003eString-\u003eString",
          "package": "texmath",
          "partial": "Macros",
          "signature": "[Macro]-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-Macros.html#v:applyMacros"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a string for a list of macro definitions, optionally\n separated and ended by spaces and TeX comments.  Returns\n the list of macros (which may be empty) and the unparsed\n portion of the input string.\n\u003c/p\u003e",
          "module": "Text.TeXMath.Macros",
          "name": "parseMacroDefinitions",
          "package": "texmath",
          "signature": "String -\u003e ([Macro], String)",
          "source": "src/Text-TeXMath-Macros.html#parseMacroDefinitions",
          "type": "function"
        },
        "index": {
          "description": "Parses string for list of macro definitions optionally separated and ended by spaces and TeX comments Returns the list of macros which may be empty and the unparsed portion of the input string",
          "hierarchy": "Text TeXMath Macros",
          "module": "Text.TeXMath.Macros",
          "name": "parseMacroDefinitions",
          "normalized": "String-\u003e([Macro],String)",
          "package": "texmath",
          "partial": "Macro Definitions",
          "signature": "String-\u003e([Macro],String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-Macros.html#v:parseMacroDefinitions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for writing a parsed formula as MathML.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.TeXMath.MathML",
          "name": "MathML",
          "package": "texmath",
          "source": "src/Text-TeXMath-MathML.html",
          "type": "module"
        },
        "index": {
          "description": "Functions for writing parsed formula as MathML",
          "hierarchy": "Text TeXMath MathML",
          "module": "Text.TeXMath.MathML",
          "name": "MathML",
          "package": "texmath",
          "partial": "Math ML",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-MathML.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.TeXMath.MathML",
          "name": "showExp",
          "package": "texmath",
          "signature": "Exp -\u003e Element",
          "source": "src/Text-TeXMath-MathML.html#showExp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text TeXMath MathML",
          "module": "Text.TeXMath.MathML",
          "name": "showExp",
          "normalized": "Exp-\u003eElement",
          "package": "texmath",
          "partial": "Exp",
          "signature": "Exp-\u003eElement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-MathML.html#v:showExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.TeXMath.MathML",
          "name": "toMathML",
          "package": "texmath",
          "signature": "DisplayType -\u003e [Exp] -\u003e Element",
          "source": "src/Text-TeXMath-MathML.html#toMathML",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text TeXMath MathML",
          "module": "Text.TeXMath.MathML",
          "name": "toMathML",
          "normalized": "DisplayType-\u003e[Exp]-\u003eElement",
          "package": "texmath",
          "partial": "Math ML",
          "signature": "DisplayType-\u003e[Exp]-\u003eElement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-MathML.html#v:toMathML"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for writing a parsed formula as OMML.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.TeXMath.OMML",
          "name": "OMML",
          "package": "texmath",
          "source": "src/Text-TeXMath-OMML.html",
          "type": "module"
        },
        "index": {
          "description": "Functions for writing parsed formula as OMML",
          "hierarchy": "Text TeXMath OMML",
          "module": "Text.TeXMath.OMML",
          "name": "OMML",
          "package": "texmath",
          "partial": "OMML",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-OMML.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.TeXMath.OMML",
          "name": "showExp",
          "package": "texmath",
          "signature": "Exp -\u003e [Element]",
          "source": "src/Text-TeXMath-OMML.html#showExp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text TeXMath OMML",
          "module": "Text.TeXMath.OMML",
          "name": "showExp",
          "normalized": "Exp-\u003e[Element]",
          "package": "texmath",
          "partial": "Exp",
          "signature": "Exp-\u003e[Element]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-OMML.html#v:showExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.TeXMath.OMML",
          "name": "toOMML",
          "package": "texmath",
          "signature": "DisplayType -\u003e [Exp] -\u003e Element",
          "source": "src/Text-TeXMath-OMML.html#toOMML",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text TeXMath OMML",
          "module": "Text.TeXMath.OMML",
          "name": "toOMML",
          "normalized": "DisplayType-\u003e[Exp]-\u003eElement",
          "package": "texmath",
          "partial": "OMML",
          "signature": "DisplayType-\u003e[Exp]-\u003eElement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-OMML.html#v:toOMML"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for writing a parsed formula as a list of Pandoc\n     Inlines.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.TeXMath.Pandoc",
          "name": "Pandoc",
          "package": "texmath",
          "source": "src/Text-TeXMath-Pandoc.html",
          "type": "module"
        },
        "index": {
          "description": "Functions for writing parsed formula as list of Pandoc Inlines",
          "hierarchy": "Text TeXMath Pandoc",
          "module": "Text.TeXMath.Pandoc",
          "name": "Pandoc",
          "package": "texmath",
          "partial": "Pandoc",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-Pandoc.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a formula to a list of \u003ccode\u003e\u003ca\u003ePandoc\u003c/a\u003e\u003c/code\u003e inlines.\n Defaults to raw formula between \u003ccode\u003e$\u003c/code\u003e characters if entire formula\n can't be converted.\n\u003c/p\u003e",
          "module": "Text.TeXMath.Pandoc",
          "name": "toPandoc",
          "package": "texmath",
          "signature": "DisplayType -\u003e [Exp] -\u003e Maybe [Inline]",
          "source": "src/Text-TeXMath-Pandoc.html#toPandoc",
          "type": "function"
        },
        "index": {
          "description": "Converts formula to list of Pandoc inlines Defaults to raw formula between characters if entire formula can be converted",
          "hierarchy": "Text TeXMath Pandoc",
          "module": "Text.TeXMath.Pandoc",
          "name": "toPandoc",
          "normalized": "DisplayType-\u003e[Exp]-\u003eMaybe[Inline]",
          "package": "texmath",
          "partial": "Pandoc",
          "signature": "DisplayType-\u003e[Exp]-\u003eMaybe[Inline]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-Pandoc.html#v:toPandoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for parsing a LaTeX formula to a Haskell representation.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.TeXMath.Parser",
          "name": "Parser",
          "package": "texmath",
          "source": "src/Text-TeXMath-Parser.html",
          "type": "module"
        },
        "index": {
          "description": "Functions for parsing LaTeX formula to Haskell representation",
          "hierarchy": "Text TeXMath Parser",
          "module": "Text.TeXMath.Parser",
          "name": "Parser",
          "package": "texmath",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a formula, returning a list of \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.TeXMath.Parser",
          "name": "parseFormula",
          "package": "texmath",
          "signature": "String -\u003e Either String [Exp]",
          "source": "src/Text-TeXMath-Parser.html#parseFormula",
          "type": "function"
        },
        "index": {
          "description": "Parse formula returning list of Exp",
          "hierarchy": "Text TeXMath Parser",
          "module": "Text.TeXMath.Parser",
          "name": "parseFormula",
          "normalized": "String-\u003eEither String[Exp]",
          "package": "texmath",
          "partial": "Formula",
          "signature": "String-\u003eEither String[Exp]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-Parser.html#v:parseFormula"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunction for replacing strings of characters with their respective mathvariant\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.TeXMath.ToUnicode",
          "name": "ToUnicode",
          "package": "texmath",
          "source": "src/Text-TeXMath-ToUnicode.html",
          "type": "module"
        },
        "index": {
          "description": "Function for replacing strings of characters with their respective mathvariant",
          "hierarchy": "Text TeXMath ToUnicode",
          "module": "Text.TeXMath.ToUnicode",
          "name": "ToUnicode",
          "package": "texmath",
          "partial": "To Unicode",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-ToUnicode.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace all characters in the string A-Z, a-z with their corresponding mathvariant unicode character.\n | MathML has a mathvariant attribute which is unimplemented in Firefox\n | (see https:\u003cem/\u003ebugzilla.mozilla.org/show_bug.cgi?id=114365)\n | Therefore, we may want to translate mathscr, etc to unicode symbols directly.\n\u003c/p\u003e",
          "module": "Text.TeXMath.ToUnicode",
          "name": "toUnicode",
          "package": "texmath",
          "signature": "TextType -\u003e String -\u003e String",
          "source": "src/Text-TeXMath-ToUnicode.html#toUnicode",
          "type": "function"
        },
        "index": {
          "description": "Replace all characters in the string A-Z a-z with their corresponding mathvariant unicode character MathML has mathvariant attribute which is unimplemented in Firefox see https bugzilla.mozilla.org show bug.cgi id Therefore we may want to translate mathscr etc to unicode symbols directly",
          "hierarchy": "Text TeXMath ToUnicode",
          "module": "Text.TeXMath.ToUnicode",
          "name": "toUnicode",
          "normalized": "TextType-\u003eString-\u003eString",
          "package": "texmath",
          "partial": "Unicode",
          "signature": "TextType-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-ToUnicode.html#v:toUnicode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTypes for representing a structured formula.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.TeXMath.Types",
          "name": "Types",
          "package": "texmath",
          "source": "src/Text-TeXMath-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Types for representing structured formula",
          "hierarchy": "Text TeXMath Types",
          "module": "Text.TeXMath.Types",
          "name": "Types",
          "package": "texmath",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.TeXMath.Types",
          "name": "Alignment",
          "package": "texmath",
          "source": "src/Text-TeXMath-Types.html#Alignment",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text TeXMath Types",
          "module": "Text.TeXMath.Types",
          "name": "Alignment",
          "package": "texmath",
          "partial": "Alignment",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-Types.html#t:Alignment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.TeXMath.Types",
          "name": "ArrayLine",
          "package": "texmath",
          "source": "src/Text-TeXMath-Types.html#ArrayLine",
          "type": "type"
        },
        "index": {
          "hierarchy": "Text TeXMath Types",
          "module": "Text.TeXMath.Types",
          "name": "ArrayLine",
          "package": "texmath",
          "partial": "Array Line",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-Types.html#t:ArrayLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.TeXMath.Types",
          "name": "DisplayType",
          "package": "texmath",
          "source": "src/Text-TeXMath-Types.html#DisplayType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text TeXMath Types",
          "module": "Text.TeXMath.Types",
          "name": "DisplayType",
          "package": "texmath",
          "partial": "Display Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-Types.html#t:DisplayType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.TeXMath.Types",
          "name": "Exp",
          "package": "texmath",
          "source": "src/Text-TeXMath-Types.html#Exp",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text TeXMath Types",
          "module": "Text.TeXMath.Types",
          "name": "Exp",
          "package": "texmath",
          "partial": "Exp",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-Types.html#t:Exp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.TeXMath.Types",
          "name": "TeXSymbolType",
          "package": "texmath",
          "source": "src/Text-TeXMath-Types.html#TeXSymbolType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text TeXMath Types",
          "module": "Text.TeXMath.Types",
          "name": "TeXSymbolType",
          "package": "texmath",
          "partial": "Te XSymbol Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-Types.html#t:TeXSymbolType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.TeXMath.Types",
          "name": "TextType",
          "package": "texmath",
          "source": "src/Text-TeXMath-Types.html#TextType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text TeXMath Types",
          "module": "Text.TeXMath.Types",
          "name": "TextType",
          "package": "texmath",
          "partial": "Text Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-Types.html#t:TextType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.TeXMath.Types",
          "name": "Accent",
          "package": "texmath",
          "signature": "Accent",
          "source": "src/Text-TeXMath-Types.html#TeXSymbolType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text TeXMath Types",
          "module": "Text.TeXMath.Types",
          "name": "Accent",
          "package": "texmath",
          "partial": "Accent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-Types.html#v:Accent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.TeXMath.Types",
          "name": "AlignCenter",
          "package": "texmath",
          "signature": "AlignCenter",
          "source": "src/Text-TeXMath-Types.html#Alignment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text TeXMath Types",
          "module": "Text.TeXMath.Types",
          "name": "AlignCenter",
          "package": "texmath",
          "partial": "Align Center",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-Types.html#v:AlignCenter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.TeXMath.Types",
          "name": "AlignDefault",
          "package": "texmath",
          "signature": "AlignDefault",
          "source": "src/Text-TeXMath-Types.html#Alignment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text TeXMath Types",
          "module": "Text.TeXMath.Types",
          "name": "AlignDefault",
          "package": "texmath",
          "partial": "Align Default",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-Types.html#v:AlignDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.TeXMath.Types",
          "name": "AlignLeft",
          "package": "texmath",
          "signature": "AlignLeft",
          "source": "src/Text-TeXMath-Types.html#Alignment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text TeXMath Types",
          "module": "Text.TeXMath.Types",
          "name": "AlignLeft",
          "package": "texmath",
          "partial": "Align Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-Types.html#v:AlignLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.TeXMath.Types",
          "name": "AlignRight",
          "package": "texmath",
          "signature": "AlignRight",
          "source": "src/Text-TeXMath-Types.html#Alignment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text TeXMath Types",
          "module": "Text.TeXMath.Types",
          "name": "AlignRight",
          "package": "texmath",
          "partial": "Align Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-Types.html#v:AlignRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.TeXMath.Types",
          "name": "Bin",
          "package": "texmath",
          "signature": "Bin",
          "source": "src/Text-TeXMath-Types.html#TeXSymbolType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text TeXMath Types",
          "module": "Text.TeXMath.Types",
          "name": "Bin",
          "package": "texmath",
          "partial": "Bin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-Types.html#v:Bin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.TeXMath.Types",
          "name": "Close",
          "package": "texmath",
          "signature": "Close",
          "source": "src/Text-TeXMath-Types.html#TeXSymbolType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text TeXMath Types",
          "module": "Text.TeXMath.Types",
          "name": "Close",
          "package": "texmath",
          "partial": "Close",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-Types.html#v:Close"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.TeXMath.Types\",\"Text.TeXMath\"]",
          "name": "DisplayBlock",
          "package": "texmath",
          "signature": "DisplayBlock",
          "source": "src/Text-TeXMath-Types.html#DisplayType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-Types.html#v:DisplayBlock\",\"http://hackage.haskell.org/package/texmath/docs/Text-TeXMath.html#v:DisplayBlock\"]"
        },
        "index": {
          "hierarchy": "Text TeXMath Types",
          "module": "Text.TeXMath.Types",
          "name": "DisplayBlock",
          "package": "texmath",
          "partial": "Display Block",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-Types.html#v:DisplayBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Text.TeXMath.Types\",\"Text.TeXMath\"]",
          "name": "DisplayInline",
          "package": "texmath",
          "signature": "DisplayInline",
          "source": "src/Text-TeXMath-Types.html#DisplayType",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-Types.html#v:DisplayInline\",\"http://hackage.haskell.org/package/texmath/docs/Text-TeXMath.html#v:DisplayInline\"]"
        },
        "index": {
          "hierarchy": "Text TeXMath Types",
          "module": "Text.TeXMath.Types",
          "name": "DisplayInline",
          "package": "texmath",
          "partial": "Display Inline",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-Types.html#v:DisplayInline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.TeXMath.Types",
          "name": "EArray",
          "package": "texmath",
          "signature": "EArray [Alignment] [ArrayLine]",
          "source": "src/Text-TeXMath-Types.html#Exp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text TeXMath Types",
          "module": "Text.TeXMath.Types",
          "name": "EArray",
          "normalized": "EArray[Alignment][ArrayLine]",
          "package": "texmath",
          "partial": "EArray",
          "signature": "EArray[Alignment][ArrayLine]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-Types.html#v:EArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.TeXMath.Types",
          "name": "EBinary",
          "package": "texmath",
          "signature": "EBinary String Exp Exp",
          "source": "src/Text-TeXMath-Types.html#Exp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text TeXMath Types",
          "module": "Text.TeXMath.Types",
          "name": "EBinary",
          "package": "texmath",
          "partial": "EBinary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-Types.html#v:EBinary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.TeXMath.Types",
          "name": "EDelimited",
          "package": "texmath",
          "signature": "EDelimited String String [Exp]",
          "source": "src/Text-TeXMath-Types.html#Exp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text TeXMath Types",
          "module": "Text.TeXMath.Types",
          "name": "EDelimited",
          "normalized": "EDelimited String String[Exp]",
          "package": "texmath",
          "partial": "EDelimited",
          "signature": "EDelimited String String[Exp]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-Types.html#v:EDelimited"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.TeXMath.Types",
          "name": "EDown",
          "package": "texmath",
          "signature": "EDown Exp Exp",
          "source": "src/Text-TeXMath-Types.html#Exp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text TeXMath Types",
          "module": "Text.TeXMath.Types",
          "name": "EDown",
          "package": "texmath",
          "partial": "EDown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-Types.html#v:EDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.TeXMath.Types",
          "name": "EDownup",
          "package": "texmath",
          "signature": "EDownup Exp Exp Exp",
          "source": "src/Text-TeXMath-Types.html#Exp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text TeXMath Types",
          "module": "Text.TeXMath.Types",
          "name": "EDownup",
          "package": "texmath",
          "partial": "EDownup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-Types.html#v:EDownup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.TeXMath.Types",
          "name": "EGrouped",
          "package": "texmath",
          "signature": "EGrouped [Exp]",
          "source": "src/Text-TeXMath-Types.html#Exp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text TeXMath Types",
          "module": "Text.TeXMath.Types",
          "name": "EGrouped",
          "normalized": "EGrouped[Exp]",
          "package": "texmath",
          "partial": "EGrouped",
          "signature": "EGrouped[Exp]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-Types.html#v:EGrouped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.TeXMath.Types",
          "name": "EIdentifier",
          "package": "texmath",
          "signature": "EIdentifier String",
          "source": "src/Text-TeXMath-Types.html#Exp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text TeXMath Types",
          "module": "Text.TeXMath.Types",
          "name": "EIdentifier",
          "package": "texmath",
          "partial": "EIdentifier",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-Types.html#v:EIdentifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.TeXMath.Types",
          "name": "EMathOperator",
          "package": "texmath",
          "signature": "EMathOperator String",
          "source": "src/Text-TeXMath-Types.html#Exp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text TeXMath Types",
          "module": "Text.TeXMath.Types",
          "name": "EMathOperator",
          "package": "texmath",
          "partial": "EMath Operator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-Types.html#v:EMathOperator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.TeXMath.Types",
          "name": "ENumber",
          "package": "texmath",
          "signature": "ENumber String",
          "source": "src/Text-TeXMath-Types.html#Exp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text TeXMath Types",
          "module": "Text.TeXMath.Types",
          "name": "ENumber",
          "package": "texmath",
          "partial": "ENumber",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-Types.html#v:ENumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.TeXMath.Types",
          "name": "EOver",
          "package": "texmath",
          "signature": "EOver Exp Exp",
          "source": "src/Text-TeXMath-Types.html#Exp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text TeXMath Types",
          "module": "Text.TeXMath.Types",
          "name": "EOver",
          "package": "texmath",
          "partial": "EOver",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-Types.html#v:EOver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.TeXMath.Types",
          "name": "EScaled",
          "package": "texmath",
          "signature": "EScaled String Exp",
          "source": "src/Text-TeXMath-Types.html#Exp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text TeXMath Types",
          "module": "Text.TeXMath.Types",
          "name": "EScaled",
          "package": "texmath",
          "partial": "EScaled",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-Types.html#v:EScaled"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.TeXMath.Types",
          "name": "ESpace",
          "package": "texmath",
          "signature": "ESpace String",
          "source": "src/Text-TeXMath-Types.html#Exp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text TeXMath Types",
          "module": "Text.TeXMath.Types",
          "name": "ESpace",
          "package": "texmath",
          "partial": "ESpace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-Types.html#v:ESpace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.TeXMath.Types",
          "name": "EStretchy",
          "package": "texmath",
          "signature": "EStretchy Exp",
          "source": "src/Text-TeXMath-Types.html#Exp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text TeXMath Types",
          "module": "Text.TeXMath.Types",
          "name": "EStretchy",
          "package": "texmath",
          "partial": "EStretchy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-Types.html#v:EStretchy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.TeXMath.Types",
          "name": "ESub",
          "package": "texmath",
          "signature": "ESub Exp Exp",
          "source": "src/Text-TeXMath-Types.html#Exp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text TeXMath Types",
          "module": "Text.TeXMath.Types",
          "name": "ESub",
          "package": "texmath",
          "partial": "ESub",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-Types.html#v:ESub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.TeXMath.Types",
          "name": "ESubsup",
          "package": "texmath",
          "signature": "ESubsup Exp Exp Exp",
          "source": "src/Text-TeXMath-Types.html#Exp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text TeXMath Types",
          "module": "Text.TeXMath.Types",
          "name": "ESubsup",
          "package": "texmath",
          "partial": "ESubsup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-Types.html#v:ESubsup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.TeXMath.Types",
          "name": "ESuper",
          "package": "texmath",
          "signature": "ESuper Exp Exp",
          "source": "src/Text-TeXMath-Types.html#Exp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text TeXMath Types",
          "module": "Text.TeXMath.Types",
          "name": "ESuper",
          "package": "texmath",
          "partial": "ESuper",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-Types.html#v:ESuper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.TeXMath.Types",
          "name": "ESymbol",
          "package": "texmath",
          "signature": "ESymbol TeXSymbolType String",
          "source": "src/Text-TeXMath-Types.html#Exp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text TeXMath Types",
          "module": "Text.TeXMath.Types",
          "name": "ESymbol",
          "package": "texmath",
          "partial": "ESymbol",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-Types.html#v:ESymbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.TeXMath.Types",
          "name": "EText",
          "package": "texmath",
          "signature": "EText TextType String",
          "source": "src/Text-TeXMath-Types.html#Exp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text TeXMath Types",
          "module": "Text.TeXMath.Types",
          "name": "EText",
          "package": "texmath",
          "partial": "EText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-Types.html#v:EText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.TeXMath.Types",
          "name": "EUnary",
          "package": "texmath",
          "signature": "EUnary String Exp",
          "source": "src/Text-TeXMath-Types.html#Exp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text TeXMath Types",
          "module": "Text.TeXMath.Types",
          "name": "EUnary",
          "package": "texmath",
          "partial": "EUnary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-Types.html#v:EUnary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.TeXMath.Types",
          "name": "EUnder",
          "package": "texmath",
          "signature": "EUnder Exp Exp",
          "source": "src/Text-TeXMath-Types.html#Exp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text TeXMath Types",
          "module": "Text.TeXMath.Types",
          "name": "EUnder",
          "package": "texmath",
          "partial": "EUnder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-Types.html#v:EUnder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.TeXMath.Types",
          "name": "EUnderover",
          "package": "texmath",
          "signature": "EUnderover Exp Exp Exp",
          "source": "src/Text-TeXMath-Types.html#Exp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text TeXMath Types",
          "module": "Text.TeXMath.Types",
          "name": "EUnderover",
          "package": "texmath",
          "partial": "EUnderover",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-Types.html#v:EUnderover"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.TeXMath.Types",
          "name": "EUp",
          "package": "texmath",
          "signature": "EUp Exp Exp",
          "source": "src/Text-TeXMath-Types.html#Exp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text TeXMath Types",
          "module": "Text.TeXMath.Types",
          "name": "EUp",
          "package": "texmath",
          "partial": "EUp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-Types.html#v:EUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.TeXMath.Types",
          "name": "Op",
          "package": "texmath",
          "signature": "Op",
          "source": "src/Text-TeXMath-Types.html#TeXSymbolType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text TeXMath Types",
          "module": "Text.TeXMath.Types",
          "name": "Op",
          "package": "texmath",
          "partial": "Op",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-Types.html#v:Op"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.TeXMath.Types",
          "name": "Open",
          "package": "texmath",
          "signature": "Open",
          "source": "src/Text-TeXMath-Types.html#TeXSymbolType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text TeXMath Types",
          "module": "Text.TeXMath.Types",
          "name": "Open",
          "package": "texmath",
          "partial": "Open",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-Types.html#v:Open"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.TeXMath.Types",
          "name": "Ord",
          "package": "texmath",
          "signature": "Ord",
          "source": "src/Text-TeXMath-Types.html#TeXSymbolType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text TeXMath Types",
          "module": "Text.TeXMath.Types",
          "name": "Ord",
          "package": "texmath",
          "partial": "Ord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-Types.html#v:Ord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.TeXMath.Types",
          "name": "Pun",
          "package": "texmath",
          "signature": "Pun",
          "source": "src/Text-TeXMath-Types.html#TeXSymbolType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text TeXMath Types",
          "module": "Text.TeXMath.Types",
          "name": "Pun",
          "package": "texmath",
          "partial": "Pun",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-Types.html#v:Pun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.TeXMath.Types",
          "name": "Rel",
          "package": "texmath",
          "signature": "Rel",
          "source": "src/Text-TeXMath-Types.html#TeXSymbolType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text TeXMath Types",
          "module": "Text.TeXMath.Types",
          "name": "Rel",
          "package": "texmath",
          "partial": "Rel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-Types.html#v:Rel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.TeXMath.Types",
          "name": "TextBold",
          "package": "texmath",
          "signature": "TextBold",
          "source": "src/Text-TeXMath-Types.html#TextType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text TeXMath Types",
          "module": "Text.TeXMath.Types",
          "name": "TextBold",
          "package": "texmath",
          "partial": "Text Bold",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-Types.html#v:TextBold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.TeXMath.Types",
          "name": "TextBoldFraktur",
          "package": "texmath",
          "signature": "TextBoldFraktur",
          "source": "src/Text-TeXMath-Types.html#TextType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text TeXMath Types",
          "module": "Text.TeXMath.Types",
          "name": "TextBoldFraktur",
          "package": "texmath",
          "partial": "Text Bold Fraktur",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-Types.html#v:TextBoldFraktur"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.TeXMath.Types",
          "name": "TextBoldItalic",
          "package": "texmath",
          "signature": "TextBoldItalic",
          "source": "src/Text-TeXMath-Types.html#TextType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text TeXMath Types",
          "module": "Text.TeXMath.Types",
          "name": "TextBoldItalic",
          "package": "texmath",
          "partial": "Text Bold Italic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-Types.html#v:TextBoldItalic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.TeXMath.Types",
          "name": "TextBoldSansSerif",
          "package": "texmath",
          "signature": "TextBoldSansSerif",
          "source": "src/Text-TeXMath-Types.html#TextType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text TeXMath Types",
          "module": "Text.TeXMath.Types",
          "name": "TextBoldSansSerif",
          "package": "texmath",
          "partial": "Text Bold Sans Serif",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-Types.html#v:TextBoldSansSerif"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.TeXMath.Types",
          "name": "TextBoldSansSerifItalic",
          "package": "texmath",
          "signature": "TextBoldSansSerifItalic",
          "source": "src/Text-TeXMath-Types.html#TextType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text TeXMath Types",
          "module": "Text.TeXMath.Types",
          "name": "TextBoldSansSerifItalic",
          "package": "texmath",
          "partial": "Text Bold Sans Serif Italic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-Types.html#v:TextBoldSansSerifItalic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.TeXMath.Types",
          "name": "TextBoldScript",
          "package": "texmath",
          "signature": "TextBoldScript",
          "source": "src/Text-TeXMath-Types.html#TextType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text TeXMath Types",
          "module": "Text.TeXMath.Types",
          "name": "TextBoldScript",
          "package": "texmath",
          "partial": "Text Bold Script",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-Types.html#v:TextBoldScript"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.TeXMath.Types",
          "name": "TextDoubleStruck",
          "package": "texmath",
          "signature": "TextDoubleStruck",
          "source": "src/Text-TeXMath-Types.html#TextType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text TeXMath Types",
          "module": "Text.TeXMath.Types",
          "name": "TextDoubleStruck",
          "package": "texmath",
          "partial": "Text Double Struck",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-Types.html#v:TextDoubleStruck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.TeXMath.Types",
          "name": "TextFraktur",
          "package": "texmath",
          "signature": "TextFraktur",
          "source": "src/Text-TeXMath-Types.html#TextType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text TeXMath Types",
          "module": "Text.TeXMath.Types",
          "name": "TextFraktur",
          "package": "texmath",
          "partial": "Text Fraktur",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-Types.html#v:TextFraktur"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.TeXMath.Types",
          "name": "TextItalic",
          "package": "texmath",
          "signature": "TextItalic",
          "source": "src/Text-TeXMath-Types.html#TextType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text TeXMath Types",
          "module": "Text.TeXMath.Types",
          "name": "TextItalic",
          "package": "texmath",
          "partial": "Text Italic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-Types.html#v:TextItalic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.TeXMath.Types",
          "name": "TextMonospace",
          "package": "texmath",
          "signature": "TextMonospace",
          "source": "src/Text-TeXMath-Types.html#TextType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text TeXMath Types",
          "module": "Text.TeXMath.Types",
          "name": "TextMonospace",
          "package": "texmath",
          "partial": "Text Monospace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-Types.html#v:TextMonospace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.TeXMath.Types",
          "name": "TextNormal",
          "package": "texmath",
          "signature": "TextNormal",
          "source": "src/Text-TeXMath-Types.html#TextType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text TeXMath Types",
          "module": "Text.TeXMath.Types",
          "name": "TextNormal",
          "package": "texmath",
          "partial": "Text Normal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-Types.html#v:TextNormal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.TeXMath.Types",
          "name": "TextSansSerif",
          "package": "texmath",
          "signature": "TextSansSerif",
          "source": "src/Text-TeXMath-Types.html#TextType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text TeXMath Types",
          "module": "Text.TeXMath.Types",
          "name": "TextSansSerif",
          "package": "texmath",
          "partial": "Text Sans Serif",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-Types.html#v:TextSansSerif"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.TeXMath.Types",
          "name": "TextSansSerifItalic",
          "package": "texmath",
          "signature": "TextSansSerifItalic",
          "source": "src/Text-TeXMath-Types.html#TextType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text TeXMath Types",
          "module": "Text.TeXMath.Types",
          "name": "TextSansSerifItalic",
          "package": "texmath",
          "partial": "Text Sans Serif Italic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-Types.html#v:TextSansSerifItalic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.TeXMath.Types",
          "name": "TextScript",
          "package": "texmath",
          "signature": "TextScript",
          "source": "src/Text-TeXMath-Types.html#TextType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text TeXMath Types",
          "module": "Text.TeXMath.Types",
          "name": "TextScript",
          "package": "texmath",
          "partial": "Text Script",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath-Types.html#v:TextScript"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for converting LaTeX math formulas to MathML.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.TeXMath",
          "name": "TeXMath",
          "package": "texmath",
          "source": "src/Text-TeXMath.html",
          "type": "module"
        },
        "index": {
          "description": "Functions for converting LaTeX math formulas to MathML",
          "hierarchy": "Text TeXMath",
          "module": "Text.TeXMath",
          "name": "TeXMath",
          "package": "texmath",
          "partial": "Te XMath",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.TeXMath",
          "name": "DisplayType",
          "package": "texmath",
          "source": "src/Text-TeXMath-Types.html#DisplayType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text TeXMath",
          "module": "Text.TeXMath",
          "name": "DisplayType",
          "package": "texmath",
          "partial": "Display Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath.html#t:DisplayType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.TeXMath",
          "name": "texMathToMathML",
          "package": "texmath",
          "signature": "DisplayType -\u003e String -\u003e Either String Element",
          "source": "src/Text-TeXMath.html#texMathToMathML",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text TeXMath",
          "module": "Text.TeXMath",
          "name": "texMathToMathML",
          "normalized": "DisplayType-\u003eString-\u003eEither String Element",
          "package": "texmath",
          "partial": "Math To Math ML",
          "signature": "DisplayType-\u003eString-\u003eEither String Element",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath.html#v:texMathToMathML"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.TeXMath",
          "name": "texMathToOMML",
          "package": "texmath",
          "signature": "DisplayType -\u003e String -\u003e Either String Element",
          "source": "src/Text-TeXMath.html#texMathToOMML",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text TeXMath",
          "module": "Text.TeXMath",
          "name": "texMathToOMML",
          "normalized": "DisplayType-\u003eString-\u003eEither String Element",
          "package": "texmath",
          "partial": "Math To OMML",
          "signature": "DisplayType-\u003eString-\u003eEither String Element",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath.html#v:texMathToOMML"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.TeXMath",
          "name": "texMathToPandoc",
          "package": "texmath",
          "signature": "DisplayType -\u003e String -\u003e Either String [Inline]",
          "source": "src/Text-TeXMath.html#texMathToPandoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text TeXMath",
          "module": "Text.TeXMath",
          "name": "texMathToPandoc",
          "normalized": "DisplayType-\u003eString-\u003eEither String[Inline]",
          "package": "texmath",
          "partial": "Math To Pandoc",
          "signature": "DisplayType-\u003eString-\u003eEither String[Inline]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/texmath/docs/Text-TeXMath.html#v:texMathToPandoc"
      }
    }
  ]
]