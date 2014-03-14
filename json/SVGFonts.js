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
        "word": "SVGFonts"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVGFonts.CharReference",
          "name": "CharReference",
          "package": "SVGFonts",
          "source": "src/Graphics-SVGFonts-CharReference.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts CharReference",
          "module": "Graphics.SVGFonts.CharReference",
          "name": "CharReference",
          "package": "SVGFonts",
          "partial": "Char Reference",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-CharReference.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA string represents a glyph, i.e. the ligature \"ffi\" is a string that represents the ligature glyph ffi\n\u003c/p\u003e",
          "module": "Graphics.SVGFonts.CharReference",
          "name": "characterStrings",
          "package": "SVGFonts",
          "signature": "String -\u003e [String] -\u003e [Text]",
          "source": "src/Graphics-SVGFonts-CharReference.html#characterStrings",
          "type": "function"
        },
        "index": {
          "description": "string represents glyph i.e the ligature ffi is string that represents the ligature glyph ffi",
          "hierarchy": "Graphics SVGFonts CharReference",
          "module": "Graphics.SVGFonts.CharReference",
          "name": "characterStrings",
          "normalized": "String-\u003e[String]-\u003e[Text]",
          "package": "SVGFonts",
          "partial": "Strings",
          "signature": "String-\u003e[String]-\u003e[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-CharReference.html#v:characterStrings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParsing of xml character references.\n\u003c/p\u003e\u003cp\u003eI.e. \"&#x2e;&#x2e;&#x2e;\" is converted into a list of three Chars.\n\u003c/p\u003e\u003cp\u003e\"ffb\" is also parsed and converted into three Chars (not changing it).\n\u003c/p\u003e",
          "module": "Graphics.SVGFonts.CharReference",
          "name": "charsFromFullName",
          "package": "SVGFonts",
          "signature": "String -\u003e String",
          "source": "src/Graphics-SVGFonts-CharReference.html#charsFromFullName",
          "type": "function"
        },
        "index": {
          "description": "Parsing of xml character references I.e x2e x2e x2e is converted into list of three Chars ffb is also parsed and converted into three Chars not changing it",
          "hierarchy": "Graphics SVGFonts CharReference",
          "module": "Graphics.SVGFonts.CharReference",
          "name": "charsFromFullName",
          "normalized": "String-\u003eString",
          "package": "SVGFonts",
          "partial": "From Full Name",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-CharReference.html#v:charsFromFullName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "ReadFont",
          "package": "SVGFonts",
          "source": "src/Graphics-SVGFonts-ReadFont.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "ReadFont",
          "package": "SVGFonts",
          "partial": "Read Font",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "FileName",
          "package": "SVGFonts",
          "source": "src/Graphics-SVGFonts-ReadFont.html#FileName",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "FileName",
          "package": "SVGFonts",
          "partial": "File Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#t:FileName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis type contains everything that a typical SVG font file produced by fontforge contains.\n\u003c/p\u003e\u003cp\u003e(SvgGlyph, Kern, bbox-string, filename, (underlinePos, underlineThickness),\n   (fontHadv, fontFamily, fontWeight, fontStretch, unitsPerEm, panose, ascent, descent, xHeight, capHeight, stemh, stemv, unicodeRange) )\n\u003c/p\u003e",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "FontData",
          "package": "SVGFonts",
          "source": "src/Graphics-SVGFonts-ReadFont.html#FontData",
          "type": "data"
        },
        "index": {
          "description": "This type contains everything that typical SVG font file produced by fontforge contains SvgGlyph Kern bbox-string filename underlinePos underlineThickness fontHadv fontFamily fontWeight fontStretch unitsPerEm panose ascent descent xHeight capHeight stemh stemv unicodeRange",
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "FontData",
          "package": "SVGFonts",
          "partial": "Font Data",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#t:FontData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ca\u003ehttp://www.w3.org/TR/SVG/fonts.html#KernElements\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eSome explanation how kerning is computed:\n\u003c/p\u003e\u003cp\u003eIn Linlibertine.svg, there are two groups of chars: e.g.\n \u003chkern g1=\"f,longs,uni1E1F,f_f\" g2=\"parenright,bracketright,braceright\" k=\"-37\" /\u003e\n This line means: If there is an f followed by parentright, reduce the horizontal advance by -37 (add 37).\n Therefore to quickly check if two characters need kerning assign an index to the second group (g2 or u2)\n and assign to every unicode in the first group (g1 or u1) this index, then sort these tuples after their\n name (for binary search). Because the same unicode char can appear in several g1s, reduce this \u003ccode\u003emultiset\u003c/code\u003e,\n ie all the (\"name1\",0) (\"name1\",1) to (\"name1\",[0,1]).\n Now the g2s are converted in the same way as the g1s.\n Whenever two consecutive chars are being printed try to find an\n intersection of the list assigned to the first char and second char\n\u003c/p\u003e",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "Kern",
          "package": "SVGFonts",
          "source": "src/Graphics-SVGFonts-ReadFont.html#Kern",
          "type": "data"
        },
        "index": {
          "description": "See http www.w3.org TR SVG fonts.html KernElements Some explanation how kerning is computed In Linlibertine.svg there are two groups of chars e.g hkern g1 longs uni1E1F g2 parenright bracketright braceright This line means If there is an followed by parentright reduce the horizontal advance by add Therefore to quickly check if two characters need kerning assign an index to the second group g2 or u2 and assign to every unicode in the first group g1 or u1 this index then sort these tuples after their name for binary search Because the same unicode char can appear in several g1s reduce this multiset ie all the name1 name1 to name1 Now the g2s are converted in the same way as the g1s Whenever two consecutive chars are being printed try to find an intersection of the list assigned to the first char and second char",
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "Kern",
          "package": "SVGFonts",
          "partial": "Kern",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#t:Kern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "Mode",
          "package": "SVGFonts",
          "source": "src/Graphics-SVGFonts-ReadFont.html#Mode",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "Mode",
          "package": "SVGFonts",
          "partial": "Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#t:Mode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "OutlineMap",
          "package": "SVGFonts",
          "source": "src/Graphics-SVGFonts-ReadFont.html#OutlineMap",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "OutlineMap",
          "package": "SVGFonts",
          "partial": "Outline Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#t:OutlineMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ca\u003ehttp://en.wikipedia.org/wiki/Kerning\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "Spacing",
          "package": "SVGFonts",
          "source": "src/Graphics-SVGFonts-ReadFont.html#Spacing",
          "type": "data"
        },
        "index": {
          "description": "See http en.wikipedia.org wiki Kerning",
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "Spacing",
          "package": "SVGFonts",
          "partial": "Spacing",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#t:Spacing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "SvgGlyphs",
          "package": "SVGFonts",
          "source": "src/Graphics-SVGFonts-ReadFont.html#SvgGlyphs",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "SvgGlyphs",
          "package": "SVGFonts",
          "partial": "Svg Glyphs",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#t:SvgGlyphs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "TextOpts",
          "package": "SVGFonts",
          "source": "src/Graphics-SVGFonts-ReadFont.html#TextOpts",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "TextOpts",
          "package": "SVGFonts",
          "partial": "Text Opts",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#t:TextOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "FontData",
          "package": "SVGFonts",
          "signature": "FontData",
          "source": "src/Graphics-SVGFonts-ReadFont.html#FontData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "FontData",
          "package": "SVGFonts",
          "partial": "Font Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:FontData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvery glyph has a unique horiz. advance\n\u003c/p\u003e\u003cp\u003e\u003cimg src=\"diagrams/src_Graphics_SVGFonts_ReadFont_textHADV.svg#diagram=textHADV&width=400\"/\u003e\n\u003c/p\u003e",
          "module": "[\"Graphics.SVGFonts.ReadFont\",\"Graphics.SVGFonts\"]",
          "name": "HADV",
          "package": "SVGFonts",
          "signature": "HADV",
          "source": "src/Graphics-SVGFonts-ReadFont.html#Spacing",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:HADV\",\"http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts.html#v:HADV\"]"
        },
        "index": {
          "description": "Every glyph has unique horiz advance",
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "HADV",
          "package": "SVGFonts",
          "partial": "HADV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:HADV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe string fills the complete height, width adjusted. Used in text editors.\n The result can be smaller or bigger than the bounding box:\n\u003c/p\u003e\u003cp\u003e\u003cimg src=\"diagrams/src_Graphics_SVGFonts_ReadFont_textH.svg#diagram=textH&width=400\"/\u003e\n\u003c/p\u003e",
          "module": "[\"Graphics.SVGFonts.ReadFont\",\"Graphics.SVGFonts\"]",
          "name": "INSIDE_H",
          "package": "SVGFonts",
          "signature": "INSIDE_H",
          "source": "src/Graphics-SVGFonts-ReadFont.html#Mode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:INSIDE_H\",\"http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts.html#v:INSIDE_H\"]"
        },
        "index": {
          "description": "The string fills the complete height width adjusted Used in text editors The result can be smaller or bigger than the bounding box",
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "INSIDE_H",
          "package": "SVGFonts",
          "partial": "INSIDE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:INSIDE_H"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe string fills the complete width, height adjusted.\n May be useful for single words in a diagram, or for headlines.\n The result can be smaller or bigger than the bounding box:\n\u003c/p\u003e\u003cp\u003e\u003cimg src=\"diagrams/src_Graphics_SVGFonts_ReadFont_textW.svg#diagram=textW&width=400\"/\u003e\n\u003c/p\u003e",
          "module": "[\"Graphics.SVGFonts.ReadFont\",\"Graphics.SVGFonts\"]",
          "name": "INSIDE_W",
          "package": "SVGFonts",
          "signature": "INSIDE_W",
          "source": "src/Graphics-SVGFonts-ReadFont.html#Mode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:INSIDE_W\",\"http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts.html#v:INSIDE_W\"]"
        },
        "index": {
          "description": "The string fills the complete width height adjusted May be useful for single words in diagram or for headlines The result can be smaller or bigger than the bounding box",
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "INSIDE_W",
          "package": "SVGFonts",
          "partial": "INSIDE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:INSIDE_W"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe string is stretched inside Width and Height boundaries.\n The horizontal advances are increased if the string is shorter than there is space.\n The horizontal advances are decreased if the string is longer than there is space.\n This feature is experimental and might change in the future.\n\u003c/p\u003e\u003cp\u003e\u003cimg src=\"diagrams/src_Graphics_SVGFonts_ReadFont_textWH.svg#diagram=textWH&width=400\"/\u003e\n\u003c/p\u003e",
          "module": "[\"Graphics.SVGFonts.ReadFont\",\"Graphics.SVGFonts\"]",
          "name": "INSIDE_WH",
          "package": "SVGFonts",
          "signature": "INSIDE_WH",
          "source": "src/Graphics-SVGFonts-ReadFont.html#Mode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:INSIDE_WH\",\"http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts.html#v:INSIDE_WH\"]"
        },
        "index": {
          "description": "The string is stretched inside Width and Height boundaries The horizontal advances are increased if the string is shorter than there is space The horizontal advances are decreased if the string is longer than there is space This feature is experimental and might change in the future",
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "INSIDE_WH",
          "package": "SVGFonts",
          "partial": "INSIDE WH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:INSIDE_WH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecommended, same as HADV but sometimes overridden by kerning:\n As You can see there is less space between \"A\" and \"V\":\n\u003c/p\u003e\u003cp\u003e\u003cimg src=\"diagrams/src_Graphics_SVGFonts_ReadFont_textKern.svg#diagram=textKern&width=400\"/\u003e\n\u003c/p\u003e",
          "module": "[\"Graphics.SVGFonts.ReadFont\",\"Graphics.SVGFonts\"]",
          "name": "KERN",
          "package": "SVGFonts",
          "signature": "KERN",
          "source": "src/Graphics-SVGFonts-ReadFont.html#Spacing",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:KERN\",\"http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts.html#v:KERN\"]"
        },
        "index": {
          "description": "Recommended same as HADV but sometimes overridden by kerning As You can see there is less space between and",
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "KERN",
          "package": "SVGFonts",
          "partial": "KERN",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:KERN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "Kern",
          "package": "SVGFonts",
          "signature": "Kern",
          "source": "src/Graphics-SVGFonts-ReadFont.html#Kern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "Kern",
          "package": "SVGFonts",
          "partial": "Kern",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:Kern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.SVGFonts.ReadFont\",\"Graphics.SVGFonts\"]",
          "name": "TextOpts",
          "package": "SVGFonts",
          "signature": "TextOpts",
          "source": "src/Graphics-SVGFonts-ReadFont.html#TextOpts",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:TextOpts\",\"http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts.html#v:TextOpts\"]"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "TextOpts",
          "package": "SVGFonts",
          "partial": "Text Opts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:TextOpts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDifference between highest and lowest y-value of bounding box\n\u003c/p\u003e",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "bbox_dy",
          "package": "SVGFonts",
          "signature": "FontData -\u003e Double",
          "source": "src/Graphics-SVGFonts-ReadFont.html#bbox_dy",
          "type": "function"
        },
        "index": {
          "description": "Difference between highest and lowest y-value of bounding box",
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "bbox_dy",
          "normalized": "FontData-\u003eDouble",
          "package": "SVGFonts",
          "signature": "FontData-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:bbox_dy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLowest x-value of bounding box\n\u003c/p\u003e",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "bbox_lx",
          "package": "SVGFonts",
          "signature": "FontData -\u003e Double",
          "source": "src/Graphics-SVGFonts-ReadFont.html#bbox_lx",
          "type": "function"
        },
        "index": {
          "description": "Lowest x-value of bounding box",
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "bbox_lx",
          "normalized": "FontData-\u003eDouble",
          "package": "SVGFonts",
          "signature": "FontData-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:bbox_lx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLowest y-value of bounding box\n\u003c/p\u003e",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "bbox_ly",
          "package": "SVGFonts",
          "signature": "FontData -\u003e Double",
          "source": "src/Graphics-SVGFonts-ReadFont.html#bbox_ly",
          "type": "function"
        },
        "index": {
          "description": "Lowest y-value of bounding box",
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "bbox_ly",
          "normalized": "FontData-\u003eDouble",
          "package": "SVGFonts",
          "signature": "FontData-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:bbox_ly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBitstream, a standard monospaced font (used in gedit)\n\u003c/p\u003e",
          "module": "[\"Graphics.SVGFonts.ReadFont\",\"Graphics.SVGFonts\"]",
          "name": "bit",
          "package": "SVGFonts",
          "signature": "(FontData, OutlineMap)",
          "source": "src/Graphics-SVGFonts-ReadFont.html#bit",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:bit\",\"http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts.html#v:bit\"]"
        },
        "index": {
          "description": "Bitstream standard monospaced font used in gedit",
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "bit",
          "normalized": "(FontData,OutlineMap)",
          "package": "SVGFonts",
          "signature": "(FontData,OutlineMap)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:bit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "commands",
          "package": "SVGFonts",
          "signature": "String -\u003e SvgGlyphs -\u003e [PathCommand]",
          "source": "src/Graphics-SVGFonts-ReadFont.html#commands",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "commands",
          "normalized": "String-\u003eSvgGlyphs-\u003e[PathCommand]",
          "package": "SVGFonts",
          "signature": "String-\u003eSvgGlyphs-\u003e[PathCommand]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:commands"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "commandsToTrails",
          "package": "SVGFonts",
          "signature": "[PathCommand] -\u003e [Segment Closed R2] -\u003e R2 -\u003e R2 -\u003e R2 -\u003e [Path R2]",
          "source": "src/Graphics-SVGFonts-ReadFont.html#commandsToTrails",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "commandsToTrails",
          "normalized": "[PathCommand]-\u003e[Segment Closed R]-\u003eR-\u003eR-\u003eR-\u003e[Path R]",
          "package": "SVGFonts",
          "partial": "To Trails",
          "signature": "[PathCommand]-\u003e[Segment Closed R]-\u003eR-\u003eR-\u003eR-\u003e[Path R]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:commandsToTrails"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.SVGFonts.ReadFont\",\"Graphics.SVGFonts\"]",
          "name": "fdo",
          "package": "SVGFonts",
          "signature": "(FontData, OutlineMap)",
          "source": "src/Graphics-SVGFonts-ReadFont.html#TextOpts",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:fdo\",\"http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts.html#v:fdo\"]"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fdo",
          "normalized": "(FontData,OutlineMap)",
          "package": "SVGFonts",
          "signature": "(FontData,OutlineMap)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:fdo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataAccentHeight",
          "package": "SVGFonts",
          "signature": "Maybe Double",
          "source": "src/Graphics-SVGFonts-ReadFont.html#FontData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataAccentHeight",
          "package": "SVGFonts",
          "partial": "Data Accent Height",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:fontDataAccentHeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataAlphabeticBaseline",
          "package": "SVGFonts",
          "signature": "Maybe Double",
          "source": "src/Graphics-SVGFonts-ReadFont.html#FontData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataAlphabeticBaseline",
          "package": "SVGFonts",
          "partial": "Data Alphabetic Baseline",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:fontDataAlphabeticBaseline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataAscent",
          "package": "SVGFonts",
          "signature": "Double",
          "source": "src/Graphics-SVGFonts-ReadFont.html#FontData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataAscent",
          "package": "SVGFonts",
          "partial": "Data Ascent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:fontDataAscent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataBoundingBox",
          "package": "SVGFonts",
          "signature": "[Double]",
          "source": "src/Graphics-SVGFonts-ReadFont.html#FontData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataBoundingBox",
          "normalized": "[Double]",
          "package": "SVGFonts",
          "partial": "Data Bounding Box",
          "signature": "[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:fontDataBoundingBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataCapHeight",
          "package": "SVGFonts",
          "signature": "Double",
          "source": "src/Graphics-SVGFonts-ReadFont.html#FontData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataCapHeight",
          "package": "SVGFonts",
          "partial": "Data Cap Height",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:fontDataCapHeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataDescent",
          "package": "SVGFonts",
          "signature": "Double",
          "source": "src/Graphics-SVGFonts-ReadFont.html#FontData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataDescent",
          "package": "SVGFonts",
          "partial": "Data Descent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:fontDataDescent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataFamily",
          "package": "SVGFonts",
          "signature": "String",
          "source": "src/Graphics-SVGFonts-ReadFont.html#FontData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataFamily",
          "package": "SVGFonts",
          "partial": "Data Family",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:fontDataFamily"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataFileName",
          "package": "SVGFonts",
          "signature": "String",
          "source": "src/Graphics-SVGFonts-ReadFont.html#FontData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataFileName",
          "package": "SVGFonts",
          "partial": "Data File Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:fontDataFileName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataGlyphs",
          "package": "SVGFonts",
          "signature": "SvgGlyphs",
          "source": "src/Graphics-SVGFonts-ReadFont.html#FontData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataGlyphs",
          "package": "SVGFonts",
          "partial": "Data Glyphs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:fontDataGlyphs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataHangingBaseline",
          "package": "SVGFonts",
          "signature": "Maybe Double",
          "source": "src/Graphics-SVGFonts-ReadFont.html#FontData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataHangingBaseline",
          "package": "SVGFonts",
          "partial": "Data Hanging Baseline",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:fontDataHangingBaseline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataHorizontalAdvance",
          "package": "SVGFonts",
          "signature": "Double",
          "source": "src/Graphics-SVGFonts-ReadFont.html#FontData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataHorizontalAdvance",
          "package": "SVGFonts",
          "partial": "Data Horizontal Advance",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:fontDataHorizontalAdvance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis data is not available in some fonts (e.g. Source Code Pro)\n\u003c/p\u003e",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataHorizontalStem",
          "package": "SVGFonts",
          "signature": "Maybe Double",
          "source": "src/Graphics-SVGFonts-ReadFont.html#FontData",
          "type": "function"
        },
        "index": {
          "description": "This data is not available in some fonts e.g Source Code Pro",
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataHorizontalStem",
          "package": "SVGFonts",
          "partial": "Data Horizontal Stem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:fontDataHorizontalStem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataIdeographicBaseline",
          "package": "SVGFonts",
          "signature": "Maybe Double",
          "source": "src/Graphics-SVGFonts-ReadFont.html#FontData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataIdeographicBaseline",
          "package": "SVGFonts",
          "partial": "Data Ideographic Baseline",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:fontDataIdeographicBaseline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataKerning",
          "package": "SVGFonts",
          "signature": "Kern",
          "source": "src/Graphics-SVGFonts-ReadFont.html#FontData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataKerning",
          "package": "SVGFonts",
          "partial": "Data Kerning",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:fontDataKerning"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataMathematicalBaseline",
          "package": "SVGFonts",
          "signature": "Maybe Double",
          "source": "src/Graphics-SVGFonts-ReadFont.html#FontData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataMathematicalBaseline",
          "package": "SVGFonts",
          "partial": "Data Mathematical Baseline",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:fontDataMathematicalBaseline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataOverlinePos",
          "package": "SVGFonts",
          "signature": "Maybe Double",
          "source": "src/Graphics-SVGFonts-ReadFont.html#FontData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataOverlinePos",
          "package": "SVGFonts",
          "partial": "Data Overline Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:fontDataOverlinePos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataOverlineThickness",
          "package": "SVGFonts",
          "signature": "Maybe Double",
          "source": "src/Graphics-SVGFonts-ReadFont.html#FontData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataOverlineThickness",
          "package": "SVGFonts",
          "partial": "Data Overline Thickness",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:fontDataOverlineThickness"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataPanose",
          "package": "SVGFonts",
          "signature": "String",
          "source": "src/Graphics-SVGFonts-ReadFont.html#FontData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataPanose",
          "package": "SVGFonts",
          "partial": "Data Panose",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:fontDataPanose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataRawKernings",
          "package": "SVGFonts",
          "signature": "[(String, [String], [String], [String], [String])]",
          "source": "src/Graphics-SVGFonts-ReadFont.html#FontData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataRawKernings",
          "normalized": "[(String,[String],[String],[String],[String])]",
          "package": "SVGFonts",
          "partial": "Data Raw Kernings",
          "signature": "[(String,[String],[String],[String],[String])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:fontDataRawKernings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataSize",
          "package": "SVGFonts",
          "signature": "Maybe String",
          "source": "src/Graphics-SVGFonts-ReadFont.html#FontData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataSize",
          "package": "SVGFonts",
          "partial": "Data Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:fontDataSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataSlope",
          "package": "SVGFonts",
          "signature": "Maybe Double",
          "source": "src/Graphics-SVGFonts-ReadFont.html#FontData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataSlope",
          "package": "SVGFonts",
          "partial": "Data Slope",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:fontDataSlope"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataStretch",
          "package": "SVGFonts",
          "signature": "String",
          "source": "src/Graphics-SVGFonts-ReadFont.html#FontData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataStretch",
          "package": "SVGFonts",
          "partial": "Data Stretch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:fontDataStretch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataStrikethroughPos",
          "package": "SVGFonts",
          "signature": "Maybe Double",
          "source": "src/Graphics-SVGFonts-ReadFont.html#FontData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataStrikethroughPos",
          "package": "SVGFonts",
          "partial": "Data Strikethrough Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:fontDataStrikethroughPos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataStrikethroughThickness",
          "package": "SVGFonts",
          "signature": "Maybe Double",
          "source": "src/Graphics-SVGFonts-ReadFont.html#FontData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataStrikethroughThickness",
          "package": "SVGFonts",
          "partial": "Data Strikethrough Thickness",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:fontDataStrikethroughThickness"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataStyle",
          "package": "SVGFonts",
          "signature": "String",
          "source": "src/Graphics-SVGFonts-ReadFont.html#FontData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataStyle",
          "package": "SVGFonts",
          "partial": "Data Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:fontDataStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataUnderlinePos",
          "package": "SVGFonts",
          "signature": "Double",
          "source": "src/Graphics-SVGFonts-ReadFont.html#FontData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataUnderlinePos",
          "package": "SVGFonts",
          "partial": "Data Underline Pos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:fontDataUnderlinePos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataUnderlineThickness",
          "package": "SVGFonts",
          "signature": "Double",
          "source": "src/Graphics-SVGFonts-ReadFont.html#FontData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataUnderlineThickness",
          "package": "SVGFonts",
          "partial": "Data Underline Thickness",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:fontDataUnderlineThickness"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataUnicodeRange",
          "package": "SVGFonts",
          "signature": "String",
          "source": "src/Graphics-SVGFonts-ReadFont.html#FontData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataUnicodeRange",
          "package": "SVGFonts",
          "partial": "Data Unicode Range",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:fontDataUnicodeRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataUnitsPerEm",
          "package": "SVGFonts",
          "signature": "Double",
          "source": "src/Graphics-SVGFonts-ReadFont.html#FontData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataUnitsPerEm",
          "package": "SVGFonts",
          "partial": "Data Units Per Em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:fontDataUnitsPerEm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataVAlphabeticBaseline",
          "package": "SVGFonts",
          "signature": "Maybe Double",
          "source": "src/Graphics-SVGFonts-ReadFont.html#FontData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataVAlphabeticBaseline",
          "package": "SVGFonts",
          "partial": "Data VAlphabetic Baseline",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:fontDataVAlphabeticBaseline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e(k, g1, g2, u1, u2)\n\u003c/p\u003e",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataVHangingBaseline",
          "package": "SVGFonts",
          "signature": "Maybe Double",
          "source": "src/Graphics-SVGFonts-ReadFont.html#FontData",
          "type": "function"
        },
        "index": {
          "description": "g1 g2 u1 u2",
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataVHangingBaseline",
          "package": "SVGFonts",
          "partial": "Data VHanging Baseline",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:fontDataVHangingBaseline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataVIdeographicBaseline",
          "package": "SVGFonts",
          "signature": "Maybe Double",
          "source": "src/Graphics-SVGFonts-ReadFont.html#FontData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataVIdeographicBaseline",
          "package": "SVGFonts",
          "partial": "Data VIdeographic Baseline",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:fontDataVIdeographicBaseline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataVMathematicalBaseline",
          "package": "SVGFonts",
          "signature": "Maybe Double",
          "source": "src/Graphics-SVGFonts-ReadFont.html#FontData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataVMathematicalBaseline",
          "package": "SVGFonts",
          "partial": "Data VMathematical Baseline",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:fontDataVMathematicalBaseline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataVariant",
          "package": "SVGFonts",
          "signature": "String",
          "source": "src/Graphics-SVGFonts-ReadFont.html#FontData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataVariant",
          "package": "SVGFonts",
          "partial": "Data Variant",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:fontDataVariant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis data is not available in some fonts (e.g. Source Code Pro)\n\u003c/p\u003e",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataVerticalStem",
          "package": "SVGFonts",
          "signature": "Maybe Double",
          "source": "src/Graphics-SVGFonts-ReadFont.html#FontData",
          "type": "function"
        },
        "index": {
          "description": "This data is not available in some fonts e.g Source Code Pro",
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataVerticalStem",
          "package": "SVGFonts",
          "partial": "Data Vertical Stem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:fontDataVerticalStem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataWeight",
          "package": "SVGFonts",
          "signature": "String",
          "source": "src/Graphics-SVGFonts-ReadFont.html#FontData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataWeight",
          "package": "SVGFonts",
          "partial": "Data Weight",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:fontDataWeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataWidths",
          "package": "SVGFonts",
          "signature": "Maybe String",
          "source": "src/Graphics-SVGFonts-ReadFont.html#FontData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataWidths",
          "package": "SVGFonts",
          "partial": "Data Widths",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:fontDataWidths"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataXHeight",
          "package": "SVGFonts",
          "signature": "Double",
          "source": "src/Graphics-SVGFonts-ReadFont.html#FontData",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "fontDataXHeight",
          "package": "SVGFonts",
          "partial": "Data XHeight",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:fontDataXHeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHorizontal advance of a character consisting of its width and spacing, extracted out of the font data\n\u003c/p\u003e",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "hadv",
          "package": "SVGFonts",
          "signature": "String -\u003e FontData -\u003e Double",
          "source": "src/Graphics-SVGFonts-ReadFont.html#hadv",
          "type": "function"
        },
        "index": {
          "description": "Horizontal advance of character consisting of its width and spacing extracted out of the font data",
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "hadv",
          "normalized": "String-\u003eFontData-\u003eDouble",
          "package": "SVGFonts",
          "signature": "String-\u003eFontData-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:hadv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHorizontal advances of characters inside a string.\n A character is stored with a string (because of ligatures like \"ffi\").\n\u003c/p\u003e",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "horizontalAdvances",
          "package": "SVGFonts",
          "signature": "[String] -\u003e FontData -\u003e Bool -\u003e [Double]",
          "source": "src/Graphics-SVGFonts-ReadFont.html#horizontalAdvances",
          "type": "function"
        },
        "index": {
          "description": "Horizontal advances of characters inside string character is stored with string because of ligatures like ffi",
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "horizontalAdvances",
          "normalized": "[String]-\u003eFontData-\u003eBool-\u003e[Double]",
          "package": "SVGFonts",
          "partial": "Advances",
          "signature": "[String]-\u003eFontData-\u003eBool-\u003e[Double]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:horizontalAdvances"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "isKern",
          "package": "SVGFonts",
          "signature": "Spacing -\u003e Bool",
          "source": "src/Graphics-SVGFonts-ReadFont.html#isKern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "isKern",
          "normalized": "Spacing-\u003eBool",
          "package": "SVGFonts",
          "partial": "Kern",
          "signature": "Spacing-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:isKern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange the horizontal advance of two consective chars (kerning)\n\u003c/p\u003e",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "kernAdvance",
          "package": "SVGFonts",
          "signature": "String -\u003e String -\u003e Kern -\u003e Bool -\u003e Double",
          "source": "src/Graphics-SVGFonts-ReadFont.html#kernAdvance",
          "type": "function"
        },
        "index": {
          "description": "Change the horizontal advance of two consective chars kerning",
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "kernAdvance",
          "normalized": "String-\u003eString-\u003eKern-\u003eBool-\u003eDouble",
          "package": "SVGFonts",
          "partial": "Advance",
          "signature": "String-\u003eString-\u003eKern-\u003eBool-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:kernAdvance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "kernG1S",
          "package": "SVGFonts",
          "signature": "Map String [Int]",
          "source": "src/Graphics-SVGFonts-ReadFont.html#Kern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "kernG1S",
          "normalized": "Map String[Int]",
          "package": "SVGFonts",
          "signature": "Map String[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:kernG1S"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "kernG2S",
          "package": "SVGFonts",
          "signature": "Map String [Int]",
          "source": "src/Graphics-SVGFonts-ReadFont.html#Kern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "kernG2S",
          "normalized": "Map String[Int]",
          "package": "SVGFonts",
          "signature": "Map String[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:kernG2S"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "kernK",
          "package": "SVGFonts",
          "signature": "Vector Double",
          "source": "src/Graphics-SVGFonts-ReadFont.html#Kern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "kernK",
          "package": "SVGFonts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:kernK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "kernU1S",
          "package": "SVGFonts",
          "signature": "Map String [Int]",
          "source": "src/Graphics-SVGFonts-ReadFont.html#Kern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "kernU1S",
          "normalized": "Map String[Int]",
          "package": "SVGFonts",
          "signature": "Map String[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:kernU1S"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "kernU2S",
          "package": "SVGFonts",
          "signature": "Map String [Int]",
          "source": "src/Graphics-SVGFonts-ReadFont.html#Kern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "kernU2S",
          "normalized": "Map String[Int]",
          "package": "SVGFonts",
          "signature": "Map String[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:kernU2S"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLinux Libertine, for non-monospaced text: \u003ca\u003ehttp://www.linuxlibertine.org/\u003c/a\u003e, contains a lot of unicode characters\n\u003c/p\u003e",
          "module": "[\"Graphics.SVGFonts.ReadFont\",\"Graphics.SVGFonts\"]",
          "name": "lin",
          "package": "SVGFonts",
          "signature": "(FontData, OutlineMap)",
          "source": "src/Graphics-SVGFonts-ReadFont.html#lin",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:lin\",\"http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts.html#v:lin\"]"
        },
        "index": {
          "description": "Linux Libertine for non-monospaced text http www.linuxlibertine.org contains lot of unicode characters",
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "lin",
          "normalized": "(FontData,OutlineMap)",
          "package": "SVGFonts",
          "signature": "(FontData,OutlineMap)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:lin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLinux Libertine, cut to contain only the most common characters,\n   resulting in a smaller file and hence a quicker load time.\n\u003c/p\u003e",
          "module": "[\"Graphics.SVGFonts.ReadFont\",\"Graphics.SVGFonts\"]",
          "name": "lin2",
          "package": "SVGFonts",
          "signature": "(FontData, OutlineMap)",
          "source": "src/Graphics-SVGFonts-ReadFont.html#lin2",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:lin2\",\"http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts.html#v:lin2\"]"
        },
        "index": {
          "description": "Linux Libertine cut to contain only the most common characters resulting in smaller file and hence quicker load time",
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "lin2",
          "normalized": "(FontData,OutlineMap)",
          "package": "SVGFonts",
          "signature": "(FontData,OutlineMap)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:lin2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "mH",
          "package": "SVGFonts",
          "signature": "Mode -\u003e Bool",
          "source": "src/Graphics-SVGFonts-ReadFont.html#mH",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "mH",
          "normalized": "Mode-\u003eBool",
          "package": "SVGFonts",
          "signature": "Mode-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:mH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "mW",
          "package": "SVGFonts",
          "signature": "Mode -\u003e Bool",
          "source": "src/Graphics-SVGFonts-ReadFont.html#mW",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "mW",
          "normalized": "Mode-\u003eBool",
          "package": "SVGFonts",
          "signature": "Mode-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:mW"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "mWH",
          "package": "SVGFonts",
          "signature": "Mode -\u003e Bool",
          "source": "src/Graphics-SVGFonts-ReadFont.html#mWH",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "mWH",
          "normalized": "Mode-\u003eBool",
          "package": "SVGFonts",
          "partial": "WH",
          "signature": "Mode-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:mWH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.SVGFonts.ReadFont\",\"Graphics.SVGFonts\"]",
          "name": "mode",
          "package": "SVGFonts",
          "signature": "Mode",
          "source": "src/Graphics-SVGFonts-ReadFont.html#TextOpts",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:mode\",\"http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts.html#v:mode\"]"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "mode",
          "package": "SVGFonts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:mode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpen an SVG-Font File and extract the data\n\u003c/p\u003e",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "openFont",
          "package": "SVGFonts",
          "signature": "FilePath -\u003e FontData",
          "source": "src/Graphics-SVGFonts-ReadFont.html#openFont",
          "type": "function"
        },
        "index": {
          "description": "Open an SVG-Font File and extract the data",
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "openFont",
          "normalized": "FilePath-\u003eFontData",
          "package": "SVGFonts",
          "partial": "Font",
          "signature": "FilePath-\u003eFontData",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:openFont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate Font Data and a Map from chars to outline paths\n\u003c/p\u003e",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "outlMap",
          "package": "SVGFonts",
          "signature": "String -\u003e (FontData, OutlineMap)",
          "source": "src/Graphics-SVGFonts-ReadFont.html#outlMap",
          "type": "function"
        },
        "index": {
          "description": "Generate Font Data and Map from chars to outline paths",
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "outlMap",
          "normalized": "String-\u003e(FontData,OutlineMap)",
          "package": "SVGFonts",
          "partial": "Map",
          "signature": "String-\u003e(FontData,OutlineMap)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:outlMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eread only of static data (safe)\n\u003c/p\u003e",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "ro",
          "package": "SVGFonts",
          "signature": "FilePath -\u003e FilePath",
          "source": "src/Graphics-SVGFonts-ReadFont.html#ro",
          "type": "function"
        },
        "index": {
          "description": "read only of static data safe",
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "ro",
          "normalized": "FilePath-\u003eFilePath",
          "package": "SVGFonts",
          "signature": "FilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:ro"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.SVGFonts.ReadFont\",\"Graphics.SVGFonts\"]",
          "name": "spacing",
          "package": "SVGFonts",
          "signature": "Spacing",
          "source": "src/Graphics-SVGFonts-ReadFont.html#TextOpts",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:spacing\",\"http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts.html#v:spacing\"]"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "spacing",
          "package": "SVGFonts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:spacing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.SVGFonts.ReadFont\",\"Graphics.SVGFonts\"]",
          "name": "textHeight",
          "package": "SVGFonts",
          "signature": "Double",
          "source": "src/Graphics-SVGFonts-ReadFont.html#TextOpts",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:textHeight\",\"http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts.html#v:textHeight\"]"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "textHeight",
          "package": "SVGFonts",
          "partial": "Height",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:textHeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA short version of textSVG' with standard values. The Double value is the height.\n\u003c/p\u003e\u003cpre\u003e import Graphics.SVGFonts\n\n textSVGExample = stroke $ textSVG \"Hello World\" 1\n\u003c/pre\u003e\u003cp\u003e\u003cimg src=\"diagrams/src_Graphics_SVGFonts_ReadFont_textSVGExample.svg#diagram=textSVGExample&width=300\"/\u003e\n\u003c/p\u003e",
          "module": "[\"Graphics.SVGFonts.ReadFont\",\"Graphics.SVGFonts\"]",
          "name": "textSVG",
          "package": "SVGFonts",
          "signature": "String -\u003e Double -\u003e Path R2",
          "source": "src/Graphics-SVGFonts-ReadFont.html#textSVG",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:textSVG\",\"http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts.html#v:textSVG\"]"
        },
        "index": {
          "description": "short version of textSVG with standard values The Double value is the height import Graphics.SVGFonts textSVGExample stroke textSVG Hello World",
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "textSVG",
          "normalized": "String-\u003eDouble-\u003ePath R",
          "package": "SVGFonts",
          "partial": "SVG",
          "signature": "String-\u003eDouble-\u003ePath R",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:textSVG"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe origin is at the center of the text and the boundaries are\n   given by the outlines of the chars.\n\u003c/p\u003e\u003cpre\u003e import Graphics.SVGFonts\n\n text' t = stroke (textSVG' $ TextOpts t lin INSIDE_H KERN False 1 1 )\n            # fc blue # lc blue # bg lightgrey # fillRule EvenOdd # showOrigin\n\n textPic0 = (text' \"Hello World\") # showOrigin\n\u003c/pre\u003e\u003cp\u003e\u003cimg src=\"diagrams/src_Graphics_SVGFonts_ReadFont_textPic0.svg#diagram=textPic0&width=300\"/\u003e\n\u003c/p\u003e",
          "module": "[\"Graphics.SVGFonts.ReadFont\",\"Graphics.SVGFonts\"]",
          "name": "textSVG'",
          "package": "SVGFonts",
          "signature": "TextOpts -\u003e Path R2",
          "source": "src/Graphics-SVGFonts-ReadFont.html#textSVG%27",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:textSVG-39-\",\"http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts.html#v:textSVG-39-\"]"
        },
        "index": {
          "description": "The origin is at the center of the text and the boundaries are given by the outlines of the chars import Graphics.SVGFonts text stroke textSVG TextOpts lin INSIDE KERN False fc blue lc blue bg lightgrey fillRule EvenOdd showOrigin textPic0 text Hello World showOrigin",
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "textSVG'",
          "normalized": "TextOpts-\u003ePath R",
          "package": "SVGFonts",
          "partial": "SVG'",
          "signature": "TextOpts-\u003ePath R",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:textSVG-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe origin is at the left end of the baseline of of the text and the boundaries\n are given by the bounding box of the Font. This is best for combining Text of different\n fonts and for several lines of text.\n As you can see you can also underline text by setting underline to True.\n\u003c/p\u003e\u003cpre\u003e import Graphics.SVGFonts\n\n text'' t = (textSVG_ $ TextOpts t lin INSIDE_H KERN True 1 1 )\n            # fc blue # lc blue # bg lightgrey # fillRule EvenOdd # showOrigin\n\n textPic1 = text'' \"Hello World\"\n\u003c/pre\u003e\u003cp\u003e\u003cimg src=\"diagrams/src_Graphics_SVGFonts_ReadFont_textPic1.svg#diagram=textPic1&width=300\"/\u003e\n\u003c/p\u003e",
          "module": "[\"Graphics.SVGFonts.ReadFont\",\"Graphics.SVGFonts\"]",
          "name": "textSVG_",
          "package": "SVGFonts",
          "signature": "TextOpts -\u003e QDiagram b R2 Any",
          "source": "src/Graphics-SVGFonts-ReadFont.html#textSVG_",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:textSVG_\",\"http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts.html#v:textSVG_\"]"
        },
        "index": {
          "description": "The origin is at the left end of the baseline of of the text and the boundaries are given by the bounding box of the Font This is best for combining Text of different fonts and for several lines of text As you can see you can also underline text by setting underline to True import Graphics.SVGFonts text textSVG TextOpts lin INSIDE KERN True fc blue lc blue bg lightgrey fillRule EvenOdd showOrigin textPic1 text Hello World",
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "textSVG_",
          "normalized": "TextOpts-\u003eQDiagram a R Any",
          "package": "SVGFonts",
          "partial": "SVG",
          "signature": "TextOpts-\u003eQDiagram b R Any",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:textSVG_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.SVGFonts.ReadFont\",\"Graphics.SVGFonts\"]",
          "name": "textWidth",
          "package": "SVGFonts",
          "signature": "Double",
          "source": "src/Graphics-SVGFonts-ReadFont.html#TextOpts",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:textWidth\",\"http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts.html#v:textWidth\"]"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "textWidth",
          "package": "SVGFonts",
          "partial": "Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:textWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.SVGFonts.ReadFont\",\"Graphics.SVGFonts\"]",
          "name": "txt",
          "package": "SVGFonts",
          "signature": "String",
          "source": "src/Graphics-SVGFonts-ReadFont.html#TextOpts",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:txt\",\"http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts.html#v:txt\"]"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "txt",
          "package": "SVGFonts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:txt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.SVGFonts.ReadFont\",\"Graphics.SVGFonts\"]",
          "name": "underline",
          "package": "SVGFonts",
          "signature": "Bool",
          "source": "src/Graphics-SVGFonts-ReadFont.html#TextOpts",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:underline\",\"http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts.html#v:underline\"]"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "underline",
          "package": "SVGFonts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:underline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePosition of the underline bar\n\u003c/p\u003e",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "underlinePosition",
          "package": "SVGFonts",
          "signature": "FontData -\u003e Double",
          "source": "src/Graphics-SVGFonts-ReadFont.html#underlinePosition",
          "type": "function"
        },
        "index": {
          "description": "Position of the underline bar",
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "underlinePosition",
          "normalized": "FontData-\u003eDouble",
          "package": "SVGFonts",
          "partial": "Position",
          "signature": "FontData-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:underlinePosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThickness of the underline bar\n\u003c/p\u003e",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "underlineThickness",
          "package": "SVGFonts",
          "signature": "FontData -\u003e Double",
          "source": "src/Graphics-SVGFonts-ReadFont.html#underlineThickness",
          "type": "function"
        },
        "index": {
          "description": "Thickness of the underline bar",
          "hierarchy": "Graphics SVGFonts ReadFont",
          "module": "Graphics.SVGFonts.ReadFont",
          "name": "underlineThickness",
          "normalized": "FontData-\u003eDouble",
          "package": "SVGFonts",
          "partial": "Thickness",
          "signature": "FontData-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadFont.html#v:underlineThickness"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParsing the SVG path command, see \u003ca\u003ehttp://www.w3.org/TR/SVG/paths.html#PathData\u003c/a\u003e :\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.SVGFonts.ReadPath",
          "name": "ReadPath",
          "package": "SVGFonts",
          "source": "src/Graphics-SVGFonts-ReadPath.html",
          "type": "module"
        },
        "index": {
          "description": "Parsing the SVG path command see http www.w3.org TR SVG paths.html PathData",
          "hierarchy": "Graphics SVGFonts ReadPath",
          "module": "Graphics.SVGFonts.ReadPath",
          "name": "ReadPath",
          "package": "SVGFonts",
          "partial": "Read Path",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadPath.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVGFonts.ReadPath",
          "name": "PathCommand",
          "package": "SVGFonts",
          "source": "src/Graphics-SVGFonts-ReadPath.html#PathCommand",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts ReadPath",
          "module": "Graphics.SVGFonts.ReadPath",
          "name": "PathCommand",
          "package": "SVGFonts",
          "partial": "Path Command",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadPath.html#t:PathCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA = Elliptic arc (not used)\n\u003c/p\u003e",
          "module": "Graphics.SVGFonts.ReadPath",
          "name": "A_abs",
          "package": "SVGFonts",
          "signature": "A_abs",
          "source": "src/Graphics-SVGFonts-ReadPath.html#PathCommand",
          "type": "function"
        },
        "index": {
          "description": "Elliptic arc not used",
          "hierarchy": "Graphics SVGFonts ReadPath",
          "module": "Graphics.SVGFonts.ReadPath",
          "name": "A_abs",
          "package": "SVGFonts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadPath.html#v:A_abs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVGFonts.ReadPath",
          "name": "A_rel",
          "package": "SVGFonts",
          "signature": "A_rel",
          "source": "src/Graphics-SVGFonts-ReadPath.html#PathCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts ReadPath",
          "module": "Graphics.SVGFonts.ReadPath",
          "name": "A_rel",
          "package": "SVGFonts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadPath.html#v:A_rel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraws a cubic B&#233;zier curve from the current point to (x,y) using (x1,y1) as the\n ^control point at the beginning of the curve and (x2,y2) as the control point at the end of the curve.\n\u003c/p\u003e",
          "module": "Graphics.SVGFonts.ReadPath",
          "name": "C_abs",
          "package": "SVGFonts",
          "signature": "C_abs (X1, Y1, X2, Y2, X, Y)",
          "source": "src/Graphics-SVGFonts-ReadPath.html#PathCommand",
          "type": "function"
        },
        "index": {
          "description": "Draws cubic zier curve from the current point to using x1 y1 as the control point at the beginning of the curve and x2 y2 as the control point at the end of the curve",
          "hierarchy": "Graphics SVGFonts ReadPath",
          "module": "Graphics.SVGFonts.ReadPath",
          "name": "C_abs",
          "normalized": "C_abs(X,Y,X,Y,X,Y)",
          "package": "SVGFonts",
          "signature": "C_abs(X,Y,X,Y,X,Y)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadPath.html#v:C_abs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVGFonts.ReadPath",
          "name": "C_rel",
          "package": "SVGFonts",
          "signature": "C_rel (X1, Y1, X2, Y2, X, Y)",
          "source": "src/Graphics-SVGFonts-ReadPath.html#PathCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts ReadPath",
          "module": "Graphics.SVGFonts.ReadPath",
          "name": "C_rel",
          "normalized": "C_rel(X,Y,X,Y,X,Y)",
          "package": "SVGFonts",
          "signature": "C_rel(X,Y,X,Y,X,Y)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadPath.html#v:C_rel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA horizontal line from the current point (cpx, cpy) to (x, cpy)\n\u003c/p\u003e",
          "module": "Graphics.SVGFonts.ReadPath",
          "name": "H_abs",
          "package": "SVGFonts",
          "signature": "H_abs X",
          "source": "src/Graphics-SVGFonts-ReadPath.html#PathCommand",
          "type": "function"
        },
        "index": {
          "description": "horizontal line from the current point cpx cpy to cpy",
          "hierarchy": "Graphics SVGFonts ReadPath",
          "module": "Graphics.SVGFonts.ReadPath",
          "name": "H_abs",
          "package": "SVGFonts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadPath.html#v:H_abs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVGFonts.ReadPath",
          "name": "H_rel",
          "package": "SVGFonts",
          "signature": "H_rel X",
          "source": "src/Graphics-SVGFonts-ReadPath.html#PathCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts ReadPath",
          "module": "Graphics.SVGFonts.ReadPath",
          "name": "H_rel",
          "package": "SVGFonts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadPath.html#v:H_rel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA line from the current point to Tup which becomes the new current point\n\u003c/p\u003e",
          "module": "Graphics.SVGFonts.ReadPath",
          "name": "L_abs",
          "package": "SVGFonts",
          "signature": "L_abs Tup",
          "source": "src/Graphics-SVGFonts-ReadPath.html#PathCommand",
          "type": "function"
        },
        "index": {
          "description": "line from the current point to Tup which becomes the new current point",
          "hierarchy": "Graphics SVGFonts ReadPath",
          "module": "Graphics.SVGFonts.ReadPath",
          "name": "L_abs",
          "package": "SVGFonts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadPath.html#v:L_abs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVGFonts.ReadPath",
          "name": "L_rel",
          "package": "SVGFonts",
          "signature": "L_rel Tup",
          "source": "src/Graphics-SVGFonts-ReadPath.html#PathCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts ReadPath",
          "module": "Graphics.SVGFonts.ReadPath",
          "name": "L_rel",
          "package": "SVGFonts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadPath.html#v:L_rel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEstablish a new current point (with absolute coords)\n\u003c/p\u003e",
          "module": "Graphics.SVGFonts.ReadPath",
          "name": "M_abs",
          "package": "SVGFonts",
          "signature": "M_abs Tup",
          "source": "src/Graphics-SVGFonts-ReadPath.html#PathCommand",
          "type": "function"
        },
        "index": {
          "description": "Establish new current point with absolute coords",
          "hierarchy": "Graphics SVGFonts ReadPath",
          "module": "Graphics.SVGFonts.ReadPath",
          "name": "M_abs",
          "package": "SVGFonts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadPath.html#v:M_abs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEstablish a new current point (with coords relative to the current point)\n\u003c/p\u003e",
          "module": "Graphics.SVGFonts.ReadPath",
          "name": "M_rel",
          "package": "SVGFonts",
          "signature": "M_rel Tup",
          "source": "src/Graphics-SVGFonts-ReadPath.html#PathCommand",
          "type": "function"
        },
        "index": {
          "description": "Establish new current point with coords relative to the current point",
          "hierarchy": "Graphics SVGFonts ReadPath",
          "module": "Graphics.SVGFonts.ReadPath",
          "name": "M_rel",
          "package": "SVGFonts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadPath.html#v:M_rel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA quadr. B&#233;zier curve from the curr. point to (x,y) using (x1,y1) as the control point\n\u003c/p\u003e",
          "module": "Graphics.SVGFonts.ReadPath",
          "name": "Q_abs",
          "package": "SVGFonts",
          "signature": "Q_abs (X1, Y1, X, Y)",
          "source": "src/Graphics-SVGFonts-ReadPath.html#PathCommand",
          "type": "function"
        },
        "index": {
          "description": "quadr zier curve from the curr point to using x1 y1 as the control point",
          "hierarchy": "Graphics SVGFonts ReadPath",
          "module": "Graphics.SVGFonts.ReadPath",
          "name": "Q_abs",
          "normalized": "Q_abs(X,Y,X,Y)",
          "package": "SVGFonts",
          "signature": "Q_abs(X,Y,X,Y)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadPath.html#v:Q_abs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNearly the same as cubic, but with one point less\n\u003c/p\u003e",
          "module": "Graphics.SVGFonts.ReadPath",
          "name": "Q_rel",
          "package": "SVGFonts",
          "signature": "Q_rel (X1, Y1, X, Y)",
          "source": "src/Graphics-SVGFonts-ReadPath.html#PathCommand",
          "type": "function"
        },
        "index": {
          "description": "Nearly the same as cubic but with one point less",
          "hierarchy": "Graphics SVGFonts ReadPath",
          "module": "Graphics.SVGFonts.ReadPath",
          "name": "Q_rel",
          "normalized": "Q_rel(X,Y,X,Y)",
          "package": "SVGFonts",
          "signature": "Q_rel(X,Y,X,Y)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadPath.html#v:Q_rel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraws a cubic B&#233;zier curve from the current point to (x,y). The first control point is\n assumed to be the reflection of the second control point on the previous command relative to the current point.\n (If there is no previous command or if the previous command was not an C, c, S or s, assume the first control\n point is coincident with the current point.) (x2,y2) is the second control point (i.e., the control point at\n the end of the curve).\n\u003c/p\u003e",
          "module": "Graphics.SVGFonts.ReadPath",
          "name": "S_abs",
          "package": "SVGFonts",
          "signature": "S_abs (X2, Y2, X, Y)",
          "source": "src/Graphics-SVGFonts-ReadPath.html#PathCommand",
          "type": "function"
        },
        "index": {
          "description": "Draws cubic zier curve from the current point to The first control point is assumed to be the reflection of the second control point on the previous command relative to the current point If there is no previous command or if the previous command was not an or assume the first control point is coincident with the current point x2 y2 is the second control point i.e the control point at the end of the curve",
          "hierarchy": "Graphics SVGFonts ReadPath",
          "module": "Graphics.SVGFonts.ReadPath",
          "name": "S_abs",
          "normalized": "S_abs(X,Y,X,Y)",
          "package": "SVGFonts",
          "signature": "S_abs(X,Y,X,Y)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadPath.html#v:S_abs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVGFonts.ReadPath",
          "name": "S_rel",
          "package": "SVGFonts",
          "signature": "S_rel (X2, Y2, X, Y)",
          "source": "src/Graphics-SVGFonts-ReadPath.html#PathCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts ReadPath",
          "module": "Graphics.SVGFonts.ReadPath",
          "name": "S_rel",
          "normalized": "S_rel(X,Y,X,Y)",
          "package": "SVGFonts",
          "signature": "S_rel(X,Y,X,Y)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadPath.html#v:S_rel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eT_Abs = Shorthand/smooth quadratic Bezier curveto\n\u003c/p\u003e",
          "module": "Graphics.SVGFonts.ReadPath",
          "name": "T_abs",
          "package": "SVGFonts",
          "signature": "T_abs Tup",
          "source": "src/Graphics-SVGFonts-ReadPath.html#PathCommand",
          "type": "function"
        },
        "index": {
          "description": "Abs Shorthand smooth quadratic Bezier curveto",
          "hierarchy": "Graphics SVGFonts ReadPath",
          "module": "Graphics.SVGFonts.ReadPath",
          "name": "T_abs",
          "package": "SVGFonts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadPath.html#v:T_abs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVGFonts.ReadPath",
          "name": "T_rel",
          "package": "SVGFonts",
          "signature": "T_rel Tup",
          "source": "src/Graphics-SVGFonts-ReadPath.html#PathCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts ReadPath",
          "module": "Graphics.SVGFonts.ReadPath",
          "name": "T_rel",
          "package": "SVGFonts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadPath.html#v:T_rel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA vertical line from the current point (cpx, cpy) to (cpx, y)\n\u003c/p\u003e",
          "module": "Graphics.SVGFonts.ReadPath",
          "name": "V_abs",
          "package": "SVGFonts",
          "signature": "V_abs Y",
          "source": "src/Graphics-SVGFonts-ReadPath.html#PathCommand",
          "type": "function"
        },
        "index": {
          "description": "vertical line from the current point cpx cpy to cpx",
          "hierarchy": "Graphics SVGFonts ReadPath",
          "module": "Graphics.SVGFonts.ReadPath",
          "name": "V_abs",
          "package": "SVGFonts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadPath.html#v:V_abs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVGFonts.ReadPath",
          "name": "V_rel",
          "package": "SVGFonts",
          "signature": "V_rel Y",
          "source": "src/Graphics-SVGFonts-ReadPath.html#PathCommand",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts ReadPath",
          "module": "Graphics.SVGFonts.ReadPath",
          "name": "V_rel",
          "package": "SVGFonts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadPath.html#v:V_rel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClose current subpath by drawing a straight line from current point to current subpath's initial point\n\u003c/p\u003e",
          "module": "Graphics.SVGFonts.ReadPath",
          "name": "Z",
          "package": "SVGFonts",
          "signature": "Z",
          "source": "src/Graphics-SVGFonts-ReadPath.html#PathCommand",
          "type": "function"
        },
        "index": {
          "description": "Close current subpath by drawing straight line from current point to current subpath initial point",
          "hierarchy": "Graphics SVGFonts ReadPath",
          "module": "Graphics.SVGFonts.ReadPath",
          "name": "Z",
          "package": "SVGFonts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadPath.html#v:Z"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a SVG path string into a list of commands\n\u003c/p\u003e",
          "module": "Graphics.SVGFonts.ReadPath",
          "name": "pathFromString",
          "package": "SVGFonts",
          "signature": "String -\u003e Either String [PathCommand]",
          "source": "src/Graphics-SVGFonts-ReadPath.html#pathFromString",
          "type": "function"
        },
        "index": {
          "description": "Convert SVG path string into list of commands",
          "hierarchy": "Graphics SVGFonts ReadPath",
          "module": "Graphics.SVGFonts.ReadPath",
          "name": "pathFromString",
          "normalized": "String-\u003eEither String[PathCommand]",
          "package": "SVGFonts",
          "partial": "From String",
          "signature": "String-\u003eEither String[PathCommand]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-ReadPath.html#v:pathFromString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVGFonts.WriteFont",
          "name": "WriteFont",
          "package": "SVGFonts",
          "source": "src/Graphics-SVGFonts-WriteFont.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts WriteFont",
          "module": "Graphics.SVGFonts.WriteFont",
          "name": "WriteFont",
          "package": "SVGFonts",
          "partial": "Write Font",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-WriteFont.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVGFonts.WriteFont",
          "name": "makeSvgFont",
          "package": "SVGFonts",
          "signature": "(FontData, OutlineMap) -\u003e Set String -\u003e Svg",
          "source": "src/Graphics-SVGFonts-WriteFont.html#makeSvgFont",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts WriteFont",
          "module": "Graphics.SVGFonts.WriteFont",
          "name": "makeSvgFont",
          "normalized": "(FontData,OutlineMap)-\u003eSet String-\u003eSvg",
          "package": "SVGFonts",
          "partial": "Svg Font",
          "signature": "(FontData,OutlineMap)-\u003eSet String-\u003eSvg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts-WriteFont.html#v:makeSvgFont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVGFonts",
          "name": "SVGFonts",
          "package": "SVGFonts",
          "source": "src/Graphics-SVGFonts.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts",
          "module": "Graphics.SVGFonts",
          "name": "SVGFonts",
          "package": "SVGFonts",
          "partial": "SVGFonts",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVGFonts",
          "name": "Mode",
          "package": "SVGFonts",
          "source": "src/Graphics-SVGFonts-ReadFont.html#Mode",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts",
          "module": "Graphics.SVGFonts",
          "name": "Mode",
          "package": "SVGFonts",
          "partial": "Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts.html#t:Mode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ca\u003ehttp://en.wikipedia.org/wiki/Kerning\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Graphics.SVGFonts",
          "name": "Spacing",
          "package": "SVGFonts",
          "source": "src/Graphics-SVGFonts-ReadFont.html#Spacing",
          "type": "data"
        },
        "index": {
          "description": "See http en.wikipedia.org wiki Kerning",
          "hierarchy": "Graphics SVGFonts",
          "module": "Graphics.SVGFonts",
          "name": "Spacing",
          "package": "SVGFonts",
          "partial": "Spacing",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts.html#t:Spacing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.SVGFonts",
          "name": "TextOpts",
          "package": "SVGFonts",
          "source": "src/Graphics-SVGFonts-ReadFont.html#TextOpts",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics SVGFonts",
          "module": "Graphics.SVGFonts",
          "name": "TextOpts",
          "package": "SVGFonts",
          "partial": "Text Opts",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SVGFonts/docs/Graphics-SVGFonts.html#t:TextOpts"
      }
    }
  ]
]