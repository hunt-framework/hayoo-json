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
        "word": "vty"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Binary.UTF8.Width",
          "name": "Width",
          "package": "vty",
          "source": "src/Codec-Binary-UTF8-Width.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Codec Binary UTF8 Width",
          "module": "Codec.Binary.UTF8.Width",
          "name": "Width",
          "package": "vty",
          "partial": "Width",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Codec-Binary-UTF8-Width.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Codec.Binary.UTF8.Width\",\"Graphics.Vty.Image\"]",
          "name": "wcswidth",
          "package": "vty",
          "signature": "String -\u003e Int",
          "source": "src/Codec-Binary-UTF8-Width.html#wcswidth",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vty/docs/Codec-Binary-UTF8-Width.html#v:wcswidth\",\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Image.html#v:wcswidth\"]"
        },
        "index": {
          "hierarchy": "Codec Binary UTF8 Width",
          "module": "Codec.Binary.UTF8.Width",
          "name": "wcswidth",
          "normalized": "String-\u003eInt",
          "package": "vty",
          "signature": "String-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Codec-Binary-UTF8-Width.html#v:wcswidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Codec.Binary.UTF8.Width\",\"Graphics.Vty.Image\"]",
          "name": "wcwidth",
          "package": "vty",
          "signature": "Char -\u003e Int",
          "source": "src/Codec-Binary-UTF8-Width.html#wcwidth",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vty/docs/Codec-Binary-UTF8-Width.html#v:wcwidth\",\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Image.html#v:wcwidth\"]"
        },
        "index": {
          "hierarchy": "Codec Binary UTF8 Width",
          "module": "Codec.Binary.UTF8.Width",
          "name": "wcwidth",
          "normalized": "Char-\u003eInt",
          "package": "vty",
          "signature": "Char-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Codec-Binary-UTF8-Width.html#v:wcwidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDisplay attributes\n\u003c/p\u003e\u003cp\u003eFor efficiency, this could be encoded into a single 32 bit word. The 32 bit word is first divided\n into 4 groups of 8 bits where: The first group codes what action should be taken with regards to\n the other groups.\n      XXYYZZ__\n      XX - style action\n          00 =\u003e reset to default\n          01 =\u003e unchanged\n          10 =\u003e set\n      YY - foreground color action\n          00 =\u003e reset to default\n          01 =\u003e unchanged\n          10 =\u003e set\n      ZZ - background color action\n          00 =\u003e reset to default\n          01 =\u003e unchanged\n          10 =\u003e set\n      __ - unused\n\u003c/p\u003e\u003cp\u003eNext is the style flags\n      SURBDO__\n      S - standout\n      U - underline\n      R - reverse video\n      B - blink\n      D - dim\n      O - bold\n      __ - unused\n\u003c/p\u003e\u003cp\u003eThen the foreground color encoded into 8 bits.\n  Then the background color encoded into 8 bits.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.Vty.Attributes",
          "name": "Attributes",
          "package": "vty",
          "source": "src/Graphics-Vty-Attributes.html",
          "type": "module"
        },
        "index": {
          "description": "Display attributes For efficiency this could be encoded into single bit word The bit word is first divided into groups of bits where The first group codes what action should be taken with regards to the other groups XXYYZZ XX style action reset to default unchanged set YY foreground color action reset to default unchanged set ZZ background color action reset to default unchanged set unused Next is the style flags SURBDO standout underline reverse video blink dim bold unused Then the foreground color encoded into bits Then the background color encoded into bits",
          "hierarchy": "Graphics Vty Attributes",
          "module": "Graphics.Vty.Attributes",
          "name": "Attributes",
          "package": "vty",
          "partial": "Attributes",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Attributes.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA display attribute defines the Color and Style of all the characters rendered after the\n attribute is applied.\n\u003c/p\u003e\u003cp\u003eAt most 256 colors, picked from a 240 and 16 color palette, are possible for the background and\n  foreground. The 240 colors and 16 colors are points in different palettes. See Color for more\n  information.\n\u003c/p\u003e",
          "module": "Graphics.Vty.Attributes",
          "name": "Attr",
          "package": "vty",
          "source": "src/Graphics-Vty-Attributes.html#Attr",
          "type": "data"
        },
        "index": {
          "description": "display attribute defines the Color and Style of all the characters rendered after the attribute is applied At most colors picked from and color palette are possible for the background and foreground The colors and colors are points in different palettes See Color for more information",
          "hierarchy": "Graphics Vty Attributes",
          "module": "Graphics.Vty.Attributes",
          "name": "Attr",
          "package": "vty",
          "partial": "Attr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Attributes.html#t:Attr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbstract data type representing a color.\n\u003c/p\u003e\u003cp\u003eCurrently the foreground and background color are specified as points in either a:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 16 color palette. Where the first 8 colors are equal to the 8 colors of the ISO 6429 (ANSI) 8\n  color palette and the second 8 colors are bright/vivid versions of the first 8 colors.\n\u003c/li\u003e\u003cli\u003e 240 color palette. This palette is a regular sampling of the full RGB colorspace. \n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe 8 ISO 6429 (ANSI) colors are as follows:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e black\n\u003c/li\u003e\u003cli\u003e red\n\u003c/li\u003e\u003cli\u003e green\n\u003c/li\u003e\u003cli\u003e yellow\n\u003c/li\u003e\u003cli\u003e blue\n\u003c/li\u003e\u003cli\u003e magenta\n\u003c/li\u003e\u003cli\u003e cyan\n\u003c/li\u003e\u003cli\u003e white\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eThe mapping from points in the 240 color palette to colors actually displayable by the terminal\n depends on the number of colors the terminal claims to support. Which is usually determined by\n the terminfo \u003ca\u003ecolors\u003c/a\u003e property. If this property is not being accurately reported then the color\n reproduction will be incorrect.\n\u003c/p\u003e\u003cp\u003eIf the terminal reports \u003c= 16 colors then the 240 color palette points are only mapped to the 8\n color pallete. I'm not sure of the RGB points for the \u003ca\u003ebright\u003c/a\u003e colors which is why they are not\n addressable via the 240 color palette. \n\u003c/p\u003e\u003cp\u003eIf the terminal reports \u003e 16 colors then the 240 color palette points are mapped to the nearest\n points in a (\u003ca\u003ecolor count\u003c/a\u003e - 16) subsampling of the 240 color palette.\n\u003c/p\u003e\u003cp\u003eAll of this assumes the terminals are behaving similarly to xterm and rxvt when handling colors.\n And that the individual colors have not been remapped by the user. There may be a way to verify\n this through terminfo but I don't know it.\n\u003c/p\u003e\u003cp\u003eSeriously, terminal color support is INSANE.\n\u003c/p\u003e",
          "module": "Graphics.Vty.Attributes",
          "name": "Color",
          "package": "vty",
          "source": "src/Graphics-Vty-Attributes.html#Color",
          "type": "data"
        },
        "index": {
          "description": "Abstract data type representing color Currently the foreground and background color are specified as points in either color palette Where the first colors are equal to the colors of the ISO ANSI color palette and the second colors are bright vivid versions of the first colors color palette This palette is regular sampling of the full RGB colorspace The ISO ANSI colors are as follows black red green yellow blue magenta cyan white The mapping from points in the color palette to colors actually displayable by the terminal depends on the number of colors the terminal claims to support Which is usually determined by the terminfo colors property If this property is not being accurately reported then the color reproduction will be incorrect If the terminal reports colors then the color palette points are only mapped to the color pallete not sure of the RGB points for the bright colors which is why they are not addressable via the color palette If the terminal reports colors then the color palette points are mapped to the nearest points in color count subsampling of the color palette All of this assumes the terminals are behaving similarly to xterm and rxvt when handling colors And that the individual colors have not been remapped by the user There may be way to verify this through terminfo but don know it Seriously terminal color support is INSANE",
          "hierarchy": "Graphics Vty Attributes",
          "module": "Graphics.Vty.Attributes",
          "name": "Color",
          "package": "vty",
          "partial": "Color",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Attributes.html#t:Color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecifies the display attributes such that the final style and color values do not depend on\n the previously applied display attribute. The display attributes can still depend on the\n terminal's default colors (unfortunately).\n\u003c/p\u003e",
          "module": "Graphics.Vty.Attributes",
          "name": "FixedAttr",
          "package": "vty",
          "source": "src/Graphics-Vty-Attributes.html#FixedAttr",
          "type": "data"
        },
        "index": {
          "description": "Specifies the display attributes such that the final style and color values do not depend on the previously applied display attribute The display attributes can still depend on the terminal default colors unfortunately",
          "hierarchy": "Graphics Vty Attributes",
          "module": "Graphics.Vty.Attributes",
          "name": "FixedAttr",
          "package": "vty",
          "partial": "Fixed Attr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Attributes.html#t:FixedAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe style and color attributes can either be the terminal defaults. Or be equivalent to the\n previously applied style. Or be a specific value.\n\u003c/p\u003e",
          "module": "Graphics.Vty.Attributes",
          "name": "MaybeDefault",
          "package": "vty",
          "source": "src/Graphics-Vty-Attributes.html#MaybeDefault",
          "type": "data"
        },
        "index": {
          "description": "The style and color attributes can either be the terminal defaults Or be equivalent to the previously applied style Or be specific value",
          "hierarchy": "Graphics Vty Attributes",
          "module": "Graphics.Vty.Attributes",
          "name": "MaybeDefault",
          "package": "vty",
          "partial": "Maybe Default",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Attributes.html#t:MaybeDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStyles are represented as an 8 bit word. Each bit in the word is 1 if the style attribute\n assigned to that bit should be applied and 0 if the style attribute should not be applied.\n\u003c/p\u003e",
          "module": "Graphics.Vty.Attributes",
          "name": "Style",
          "package": "vty",
          "source": "src/Graphics-Vty-Attributes.html#Style",
          "type": "type"
        },
        "index": {
          "description": "Styles are represented as an bit word Each bit in the word is if the style attribute assigned to that bit should be applied and if the style attribute should not be applied",
          "hierarchy": "Graphics Vty Attributes",
          "module": "Graphics.Vty.Attributes",
          "name": "Style",
          "package": "vty",
          "partial": "Style",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Attributes.html#t:Style"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Vty.Attributes",
          "name": "Attr",
          "package": "vty",
          "signature": "Attr",
          "source": "src/Graphics-Vty-Attributes.html#Attr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Vty Attributes",
          "module": "Graphics.Vty.Attributes",
          "name": "Attr",
          "package": "vty",
          "partial": "Attr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Attributes.html#v:Attr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Vty.Attributes",
          "name": "Color240",
          "package": "vty",
          "signature": "Color240 !Word8",
          "source": "src/Graphics-Vty-Attributes.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Vty Attributes",
          "module": "Graphics.Vty.Attributes",
          "name": "Color240",
          "package": "vty",
          "partial": "Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Attributes.html#v:Color240"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Vty.Attributes",
          "name": "Default",
          "package": "vty",
          "signature": "MaybeDefault v",
          "source": "src/Graphics-Vty-Attributes.html#MaybeDefault",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Vty Attributes",
          "module": "Graphics.Vty.Attributes",
          "name": "Default",
          "package": "vty",
          "partial": "Default",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Attributes.html#v:Default"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Vty.Attributes",
          "name": "FixedAttr",
          "package": "vty",
          "signature": "FixedAttr",
          "source": "src/Graphics-Vty-Attributes.html#FixedAttr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Vty Attributes",
          "module": "Graphics.Vty.Attributes",
          "name": "FixedAttr",
          "package": "vty",
          "partial": "Fixed Attr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Attributes.html#v:FixedAttr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Vty.Attributes",
          "name": "ISOColor",
          "package": "vty",
          "signature": "ISOColor !Word8",
          "source": "src/Graphics-Vty-Attributes.html#Color",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Vty Attributes",
          "module": "Graphics.Vty.Attributes",
          "name": "ISOColor",
          "package": "vty",
          "partial": "ISOColor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Attributes.html#v:ISOColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Vty.Attributes",
          "name": "KeepCurrent",
          "package": "vty",
          "signature": "MaybeDefault v",
          "source": "src/Graphics-Vty-Attributes.html#MaybeDefault",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Vty Attributes",
          "module": "Graphics.Vty.Attributes",
          "name": "KeepCurrent",
          "package": "vty",
          "partial": "Keep Current",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Attributes.html#v:KeepCurrent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Vty.Attributes",
          "name": "SetTo",
          "package": "vty",
          "signature": "v -\u003e MaybeDefault v",
          "source": "src/Graphics-Vty-Attributes.html#MaybeDefault",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Vty Attributes",
          "module": "Graphics.Vty.Attributes",
          "name": "SetTo",
          "normalized": "a-\u003eMaybeDefault a",
          "package": "vty",
          "partial": "Set To",
          "signature": "v-\u003eMaybeDefault v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Attributes.html#v:SetTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Vty.Attributes",
          "name": "attr_back_color",
          "package": "vty",
          "signature": "(MaybeDefault Color)",
          "source": "src/Graphics-Vty-Attributes.html#Attr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Vty Attributes",
          "module": "Graphics.Vty.Attributes",
          "name": "attr_back_color",
          "package": "vty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Attributes.html#v:attr_back_color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Vty.Attributes",
          "name": "attr_fore_color",
          "package": "vty",
          "signature": "(MaybeDefault Color)",
          "source": "src/Graphics-Vty-Attributes.html#Attr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Vty Attributes",
          "module": "Graphics.Vty.Attributes",
          "name": "attr_fore_color",
          "package": "vty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Attributes.html#v:attr_fore_color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Vty.Attributes",
          "name": "attr_style",
          "package": "vty",
          "signature": "(MaybeDefault Style)",
          "source": "src/Graphics-Vty-Attributes.html#Attr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Vty Attributes",
          "module": "Graphics.Vty.Attributes",
          "name": "attr_style",
          "package": "vty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Attributes.html#v:attr_style"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStandard 8-color ANSI terminal color codes.\n\u003c/p\u003e",
          "module": "Graphics.Vty.Attributes",
          "name": "black",
          "package": "vty",
          "signature": "Color",
          "source": "src/Graphics-Vty-Attributes.html#black",
          "type": "function"
        },
        "index": {
          "description": "Standard color ANSI terminal color codes",
          "hierarchy": "Graphics Vty Attributes",
          "module": "Graphics.Vty.Attributes",
          "name": "black",
          "package": "vty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Attributes.html#v:black"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe 6 possible style attributes:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e standout\n\u003c/li\u003e\u003cli\u003e underline\n\u003c/li\u003e\u003cli\u003e reverse_video\n\u003c/li\u003e\u003cli\u003e blink\n\u003c/li\u003e\u003cli\u003e dim\n\u003c/li\u003e\u003cli\u003e bold/bright\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e( The invisible, protect, and altcharset display attributes some terminals support are not\n  supported via VTY.)\n\u003c/p\u003e",
          "module": "Graphics.Vty.Attributes",
          "name": "blink",
          "package": "vty",
          "signature": "Style",
          "source": "src/Graphics-Vty-Attributes.html#blink",
          "type": "function"
        },
        "index": {
          "description": "The possible style attributes standout underline reverse video blink dim bold bright The invisible protect and altcharset display attributes some terminals support are not supported via VTY",
          "hierarchy": "Graphics Vty Attributes",
          "module": "Graphics.Vty.Attributes",
          "name": "blink",
          "package": "vty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Attributes.html#v:blink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStandard 8-color ANSI terminal color codes.\n\u003c/p\u003e",
          "module": "Graphics.Vty.Attributes",
          "name": "blue",
          "package": "vty",
          "signature": "Color",
          "source": "src/Graphics-Vty-Attributes.html#blue",
          "type": "function"
        },
        "index": {
          "description": "Standard color ANSI terminal color codes",
          "hierarchy": "Graphics Vty Attributes",
          "module": "Graphics.Vty.Attributes",
          "name": "blue",
          "package": "vty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Attributes.html#v:blue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe 6 possible style attributes:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e standout\n\u003c/li\u003e\u003cli\u003e underline\n\u003c/li\u003e\u003cli\u003e reverse_video\n\u003c/li\u003e\u003cli\u003e blink\n\u003c/li\u003e\u003cli\u003e dim\n\u003c/li\u003e\u003cli\u003e bold/bright\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e( The invisible, protect, and altcharset display attributes some terminals support are not\n  supported via VTY.)\n\u003c/p\u003e",
          "module": "Graphics.Vty.Attributes",
          "name": "bold",
          "package": "vty",
          "signature": "Style",
          "source": "src/Graphics-Vty-Attributes.html#bold",
          "type": "function"
        },
        "index": {
          "description": "The possible style attributes standout underline reverse video blink dim bold bright The invisible protect and altcharset display attributes some terminals support are not supported via VTY",
          "hierarchy": "Graphics Vty Attributes",
          "module": "Graphics.Vty.Attributes",
          "name": "bold",
          "package": "vty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Attributes.html#v:bold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBright/Vivid variants of the standard 8-color ANSI \n\u003c/p\u003e",
          "module": "Graphics.Vty.Attributes",
          "name": "bright_black",
          "package": "vty",
          "signature": "Color",
          "source": "src/Graphics-Vty-Attributes.html#bright_black",
          "type": "function"
        },
        "index": {
          "description": "Bright Vivid variants of the standard color ANSI",
          "hierarchy": "Graphics Vty Attributes",
          "module": "Graphics.Vty.Attributes",
          "name": "bright_black",
          "package": "vty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Attributes.html#v:bright_black"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Vty.Attributes",
          "name": "bright_blue",
          "package": "vty",
          "signature": "Color",
          "source": "src/Graphics-Vty-Attributes.html#bright_blue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Vty Attributes",
          "module": "Graphics.Vty.Attributes",
          "name": "bright_blue",
          "package": "vty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Attributes.html#v:bright_blue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Vty.Attributes",
          "name": "bright_cyan",
          "package": "vty",
          "signature": "Color",
          "source": "src/Graphics-Vty-Attributes.html#bright_cyan",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Vty Attributes",
          "module": "Graphics.Vty.Attributes",
          "name": "bright_cyan",
          "package": "vty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Attributes.html#v:bright_cyan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBright/Vivid variants of the standard 8-color ANSI \n\u003c/p\u003e",
          "module": "Graphics.Vty.Attributes",
          "name": "bright_green",
          "package": "vty",
          "signature": "Color",
          "source": "src/Graphics-Vty-Attributes.html#bright_green",
          "type": "function"
        },
        "index": {
          "description": "Bright Vivid variants of the standard color ANSI",
          "hierarchy": "Graphics Vty Attributes",
          "module": "Graphics.Vty.Attributes",
          "name": "bright_green",
          "package": "vty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Attributes.html#v:bright_green"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Vty.Attributes",
          "name": "bright_magenta",
          "package": "vty",
          "signature": "Color",
          "source": "src/Graphics-Vty-Attributes.html#bright_magenta",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Vty Attributes",
          "module": "Graphics.Vty.Attributes",
          "name": "bright_magenta",
          "package": "vty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Attributes.html#v:bright_magenta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBright/Vivid variants of the standard 8-color ANSI \n\u003c/p\u003e",
          "module": "Graphics.Vty.Attributes",
          "name": "bright_red",
          "package": "vty",
          "signature": "Color",
          "source": "src/Graphics-Vty-Attributes.html#bright_red",
          "type": "function"
        },
        "index": {
          "description": "Bright Vivid variants of the standard color ANSI",
          "hierarchy": "Graphics Vty Attributes",
          "module": "Graphics.Vty.Attributes",
          "name": "bright_red",
          "package": "vty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Attributes.html#v:bright_red"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Vty.Attributes",
          "name": "bright_white",
          "package": "vty",
          "signature": "Color",
          "source": "src/Graphics-Vty-Attributes.html#bright_white",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Vty Attributes",
          "module": "Graphics.Vty.Attributes",
          "name": "bright_white",
          "package": "vty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Attributes.html#v:bright_white"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBright/Vivid variants of the standard 8-color ANSI \n\u003c/p\u003e",
          "module": "Graphics.Vty.Attributes",
          "name": "bright_yellow",
          "package": "vty",
          "signature": "Color",
          "source": "src/Graphics-Vty-Attributes.html#bright_yellow",
          "type": "function"
        },
        "index": {
          "description": "Bright Vivid variants of the standard color ANSI",
          "hierarchy": "Graphics Vty Attributes",
          "module": "Graphics.Vty.Attributes",
          "name": "bright_yellow",
          "package": "vty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Attributes.html#v:bright_yellow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeeps the style, background color and foreground color that was previously set. Used to\n override some part of the previous style.\n\u003c/p\u003e\u003cp\u003eEG: current_style \u003ccode\u003e\u003ca\u003ewith_fore_color\u003c/a\u003e\u003c/code\u003e bright_magenta\n\u003c/p\u003e\u003cp\u003eWould be the currently applied style (be it underline, bold, etc) but with the foreground color\n set to bright_magenta.\n\u003c/p\u003e",
          "module": "Graphics.Vty.Attributes",
          "name": "current_attr",
          "package": "vty",
          "signature": "Attr",
          "source": "src/Graphics-Vty-Attributes.html#current_attr",
          "type": "function"
        },
        "index": {
          "description": "Keeps the style background color and foreground color that was previously set Used to override some part of the previous style EG current style with fore color bright magenta Would be the currently applied style be it underline bold etc but with the foreground color set to bright magenta",
          "hierarchy": "Graphics Vty Attributes",
          "module": "Graphics.Vty.Attributes",
          "name": "current_attr",
          "package": "vty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Attributes.html#v:current_attr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStandard 8-color ANSI terminal color codes.\n\u003c/p\u003e",
          "module": "Graphics.Vty.Attributes",
          "name": "cyan",
          "package": "vty",
          "signature": "Color",
          "source": "src/Graphics-Vty-Attributes.html#cyan",
          "type": "function"
        },
        "index": {
          "description": "Standard color ANSI terminal color codes",
          "hierarchy": "Graphics Vty Attributes",
          "module": "Graphics.Vty.Attributes",
          "name": "cyan",
          "package": "vty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Attributes.html#v:cyan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the style, background color and foreground color to the default values for the terminal.\n There is no easy way to determine what the default background and foreground colors are.\n\u003c/p\u003e",
          "module": "Graphics.Vty.Attributes",
          "name": "def_attr",
          "package": "vty",
          "signature": "Attr",
          "source": "src/Graphics-Vty-Attributes.html#def_attr",
          "type": "function"
        },
        "index": {
          "description": "Sets the style background color and foreground color to the default values for the terminal There is no easy way to determine what the default background and foreground colors are",
          "hierarchy": "Graphics Vty Attributes",
          "module": "Graphics.Vty.Attributes",
          "name": "def_attr",
          "package": "vty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Attributes.html#v:def_attr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Vty.Attributes",
          "name": "default_style_mask",
          "package": "vty",
          "signature": "Style",
          "source": "src/Graphics-Vty-Attributes.html#default_style_mask",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Vty Attributes",
          "module": "Graphics.Vty.Attributes",
          "name": "default_style_mask",
          "package": "vty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Attributes.html#v:default_style_mask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe 6 possible style attributes:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e standout\n\u003c/li\u003e\u003cli\u003e underline\n\u003c/li\u003e\u003cli\u003e reverse_video\n\u003c/li\u003e\u003cli\u003e blink\n\u003c/li\u003e\u003cli\u003e dim\n\u003c/li\u003e\u003cli\u003e bold/bright\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e( The invisible, protect, and altcharset display attributes some terminals support are not\n  supported via VTY.)\n\u003c/p\u003e",
          "module": "Graphics.Vty.Attributes",
          "name": "dim",
          "package": "vty",
          "signature": "Style",
          "source": "src/Graphics-Vty-Attributes.html#dim",
          "type": "function"
        },
        "index": {
          "description": "The possible style attributes standout underline reverse video blink dim bold bright The invisible protect and altcharset display attributes some terminals support are not supported via VTY",
          "hierarchy": "Graphics Vty Attributes",
          "module": "Graphics.Vty.Attributes",
          "name": "dim",
          "package": "vty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Attributes.html#v:dim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Vty.Attributes",
          "name": "fixed_back_color",
          "package": "vty",
          "signature": "(Maybe Color)",
          "source": "src/Graphics-Vty-Attributes.html#FixedAttr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Vty Attributes",
          "module": "Graphics.Vty.Attributes",
          "name": "fixed_back_color",
          "package": "vty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Attributes.html#v:fixed_back_color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Vty.Attributes",
          "name": "fixed_fore_color",
          "package": "vty",
          "signature": "(Maybe Color)",
          "source": "src/Graphics-Vty-Attributes.html#FixedAttr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Vty Attributes",
          "module": "Graphics.Vty.Attributes",
          "name": "fixed_fore_color",
          "package": "vty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Attributes.html#v:fixed_fore_color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Vty.Attributes",
          "name": "fixed_style",
          "package": "vty",
          "signature": "Style",
          "source": "src/Graphics-Vty-Attributes.html#FixedAttr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Vty Attributes",
          "module": "Graphics.Vty.Attributes",
          "name": "fixed_style",
          "package": "vty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Attributes.html#v:fixed_style"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStandard 8-color ANSI terminal color codes.\n\u003c/p\u003e",
          "module": "Graphics.Vty.Attributes",
          "name": "green",
          "package": "vty",
          "signature": "Color",
          "source": "src/Graphics-Vty-Attributes.html#green",
          "type": "function"
        },
        "index": {
          "description": "Standard color ANSI terminal color codes",
          "hierarchy": "Graphics Vty Attributes",
          "module": "Graphics.Vty.Attributes",
          "name": "green",
          "package": "vty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Attributes.html#v:green"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etrue if the given Style value has the specified Style set.\n\u003c/p\u003e",
          "module": "Graphics.Vty.Attributes",
          "name": "has_style",
          "package": "vty",
          "signature": "Style -\u003e Style -\u003e Bool",
          "source": "src/Graphics-Vty-Attributes.html#has_style",
          "type": "function"
        },
        "index": {
          "description": "true if the given Style value has the specified Style set",
          "hierarchy": "Graphics Vty Attributes",
          "module": "Graphics.Vty.Attributes",
          "name": "has_style",
          "normalized": "Style-\u003eStyle-\u003eBool",
          "package": "vty",
          "signature": "Style-\u003eStyle-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Attributes.html#v:has_style"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStandard 8-color ANSI terminal color codes.\n\u003c/p\u003e",
          "module": "Graphics.Vty.Attributes",
          "name": "magenta",
          "package": "vty",
          "signature": "Color",
          "source": "src/Graphics-Vty-Attributes.html#magenta",
          "type": "function"
        },
        "index": {
          "description": "Standard color ANSI terminal color codes",
          "hierarchy": "Graphics Vty Attributes",
          "module": "Graphics.Vty.Attributes",
          "name": "magenta",
          "package": "vty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Attributes.html#v:magenta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStandard 8-color ANSI terminal color codes.\n\u003c/p\u003e",
          "module": "Graphics.Vty.Attributes",
          "name": "red",
          "package": "vty",
          "signature": "Color",
          "source": "src/Graphics-Vty-Attributes.html#red",
          "type": "function"
        },
        "index": {
          "description": "Standard color ANSI terminal color codes",
          "hierarchy": "Graphics Vty Attributes",
          "module": "Graphics.Vty.Attributes",
          "name": "red",
          "package": "vty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Attributes.html#v:red"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe 6 possible style attributes:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e standout\n\u003c/li\u003e\u003cli\u003e underline\n\u003c/li\u003e\u003cli\u003e reverse_video\n\u003c/li\u003e\u003cli\u003e blink\n\u003c/li\u003e\u003cli\u003e dim\n\u003c/li\u003e\u003cli\u003e bold/bright\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e( The invisible, protect, and altcharset display attributes some terminals support are not\n  supported via VTY.)\n\u003c/p\u003e",
          "module": "Graphics.Vty.Attributes",
          "name": "reverse_video",
          "package": "vty",
          "signature": "Style",
          "source": "src/Graphics-Vty-Attributes.html#reverse_video",
          "type": "function"
        },
        "index": {
          "description": "The possible style attributes standout underline reverse video blink dim bold bright The invisible protect and altcharset display attributes some terminals support are not supported via VTY",
          "hierarchy": "Graphics Vty Attributes",
          "module": "Graphics.Vty.Attributes",
          "name": "reverse_video",
          "package": "vty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Attributes.html#v:reverse_video"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe 6 possible style attributes:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e standout\n\u003c/li\u003e\u003cli\u003e underline\n\u003c/li\u003e\u003cli\u003e reverse_video\n\u003c/li\u003e\u003cli\u003e blink\n\u003c/li\u003e\u003cli\u003e dim\n\u003c/li\u003e\u003cli\u003e bold/bright\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e( The invisible, protect, and altcharset display attributes some terminals support are not\n  supported via VTY.)\n\u003c/p\u003e",
          "module": "Graphics.Vty.Attributes",
          "name": "standout",
          "package": "vty",
          "signature": "Style",
          "source": "src/Graphics-Vty-Attributes.html#standout",
          "type": "function"
        },
        "index": {
          "description": "The possible style attributes standout underline reverse video blink dim bold bright The invisible protect and altcharset display attributes some terminals support are not supported via VTY",
          "hierarchy": "Graphics Vty Attributes",
          "module": "Graphics.Vty.Attributes",
          "name": "standout",
          "package": "vty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Attributes.html#v:standout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Vty.Attributes",
          "name": "style_mask",
          "package": "vty",
          "signature": "Attr -\u003e Word8",
          "source": "src/Graphics-Vty-Attributes.html#style_mask",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Vty Attributes",
          "module": "Graphics.Vty.Attributes",
          "name": "style_mask",
          "normalized": "Attr-\u003eWord",
          "package": "vty",
          "signature": "Attr-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Attributes.html#v:style_mask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe 6 possible style attributes:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e standout\n\u003c/li\u003e\u003cli\u003e underline\n\u003c/li\u003e\u003cli\u003e reverse_video\n\u003c/li\u003e\u003cli\u003e blink\n\u003c/li\u003e\u003cli\u003e dim\n\u003c/li\u003e\u003cli\u003e bold/bright\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e( The invisible, protect, and altcharset display attributes some terminals support are not\n  supported via VTY.)\n\u003c/p\u003e",
          "module": "Graphics.Vty.Attributes",
          "name": "underline",
          "package": "vty",
          "signature": "Style",
          "source": "src/Graphics-Vty-Attributes.html#underline",
          "type": "function"
        },
        "index": {
          "description": "The possible style attributes standout underline reverse video blink dim bold bright The invisible protect and altcharset display attributes some terminals support are not supported via VTY",
          "hierarchy": "Graphics Vty Attributes",
          "module": "Graphics.Vty.Attributes",
          "name": "underline",
          "package": "vty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Attributes.html#v:underline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStandard 8-color ANSI terminal color codes.\n\u003c/p\u003e",
          "module": "Graphics.Vty.Attributes",
          "name": "white",
          "package": "vty",
          "signature": "Color",
          "source": "src/Graphics-Vty-Attributes.html#white",
          "type": "function"
        },
        "index": {
          "description": "Standard color ANSI terminal color codes",
          "hierarchy": "Graphics Vty Attributes",
          "module": "Graphics.Vty.Attributes",
          "name": "white",
          "package": "vty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Attributes.html#v:white"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the background color of an \u003ccode\u003e\u003ca\u003eAttr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Vty.Attributes",
          "name": "with_back_color",
          "package": "vty",
          "signature": "Attr -\u003e Color -\u003e Attr",
          "source": "src/Graphics-Vty-Attributes.html#with_back_color",
          "type": "function"
        },
        "index": {
          "description": "Set the background color of an Attr",
          "hierarchy": "Graphics Vty Attributes",
          "module": "Graphics.Vty.Attributes",
          "name": "with_back_color",
          "normalized": "Attr-\u003eColor-\u003eAttr",
          "package": "vty",
          "signature": "Attr-\u003eColor-\u003eAttr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Attributes.html#v:with_back_color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the foreground color of an \u003ccode\u003e\u003ca\u003eAttr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Vty.Attributes",
          "name": "with_fore_color",
          "package": "vty",
          "signature": "Attr -\u003e Color -\u003e Attr",
          "source": "src/Graphics-Vty-Attributes.html#with_fore_color",
          "type": "function"
        },
        "index": {
          "description": "Set the foreground color of an Attr",
          "hierarchy": "Graphics Vty Attributes",
          "module": "Graphics.Vty.Attributes",
          "name": "with_fore_color",
          "normalized": "Attr-\u003eColor-\u003eAttr",
          "package": "vty",
          "signature": "Attr-\u003eColor-\u003eAttr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Attributes.html#v:with_fore_color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd the given style attribute\n\u003c/p\u003e",
          "module": "Graphics.Vty.Attributes",
          "name": "with_style",
          "package": "vty",
          "signature": "Attr -\u003e Style -\u003e Attr",
          "source": "src/Graphics-Vty-Attributes.html#with_style",
          "type": "function"
        },
        "index": {
          "description": "Add the given style attribute",
          "hierarchy": "Graphics Vty Attributes",
          "module": "Graphics.Vty.Attributes",
          "name": "with_style",
          "normalized": "Attr-\u003eStyle-\u003eAttr",
          "package": "vty",
          "signature": "Attr-\u003eStyle-\u003eAttr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Attributes.html#v:with_style"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStandard 8-color ANSI terminal color codes.\n\u003c/p\u003e",
          "module": "Graphics.Vty.Attributes",
          "name": "yellow",
          "package": "vty",
          "signature": "Color",
          "source": "src/Graphics-Vty-Attributes.html#yellow",
          "type": "function"
        },
        "index": {
          "description": "Standard color ANSI terminal color codes",
          "hierarchy": "Graphics Vty Attributes",
          "module": "Graphics.Vty.Attributes",
          "name": "yellow",
          "package": "vty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Attributes.html#v:yellow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Vty.DisplayRegion",
          "name": "DisplayRegion",
          "package": "vty",
          "source": "src/Graphics-Vty-DisplayRegion.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics Vty DisplayRegion",
          "module": "Graphics.Vty.DisplayRegion",
          "name": "DisplayRegion",
          "package": "vty",
          "partial": "Display Region",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-DisplayRegion.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRegion of the terminal that vty will output to. Units are columns not characters.\n\u003c/p\u003e",
          "module": "Graphics.Vty.DisplayRegion",
          "name": "DisplayRegion",
          "package": "vty",
          "source": "src/Graphics-Vty-DisplayRegion.html#DisplayRegion",
          "type": "data"
        },
        "index": {
          "description": "Region of the terminal that vty will output to Units are columns not characters",
          "hierarchy": "Graphics Vty DisplayRegion",
          "module": "Graphics.Vty.DisplayRegion",
          "name": "DisplayRegion",
          "package": "vty",
          "partial": "Display Region",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-DisplayRegion.html#t:DisplayRegion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Vty.DisplayRegion",
          "name": "DisplayRegion",
          "package": "vty",
          "signature": "DisplayRegion",
          "source": "src/Graphics-Vty-DisplayRegion.html#DisplayRegion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Vty DisplayRegion",
          "module": "Graphics.Vty.DisplayRegion",
          "name": "DisplayRegion",
          "package": "vty",
          "partial": "Display Region",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-DisplayRegion.html#v:DisplayRegion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Vty.DisplayRegion",
          "name": "region_height",
          "package": "vty",
          "signature": "Word",
          "source": "src/Graphics-Vty-DisplayRegion.html#DisplayRegion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Vty DisplayRegion",
          "module": "Graphics.Vty.DisplayRegion",
          "name": "region_height",
          "package": "vty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-DisplayRegion.html#v:region_height"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Vty.DisplayRegion",
          "name": "region_width",
          "package": "vty",
          "signature": "Word",
          "source": "src/Graphics-Vty-DisplayRegion.html#DisplayRegion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Vty DisplayRegion",
          "module": "Graphics.Vty.DisplayRegion",
          "name": "region_width",
          "package": "vty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-DisplayRegion.html#v:region_width"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Vty.Image",
          "name": "Image",
          "package": "vty",
          "source": "src/Graphics-Vty-Image.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics Vty Image",
          "module": "Graphics.Vty.Image",
          "name": "Image",
          "package": "vty",
          "partial": "Image",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Image.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe pair each character with it's display length. This way we only compute the length once per\n character.\n * Though currently the width of some strings is still compute multiple times. \n\u003c/p\u003e",
          "module": "Graphics.Vty.Image",
          "name": "DisplayString",
          "package": "vty",
          "source": "src/Graphics-Vty-Image.html#DisplayString",
          "type": "type"
        },
        "index": {
          "description": "We pair each character with it display length This way we only compute the length once per character Though currently the width of some strings is still compute multiple times",
          "hierarchy": "Graphics Vty Image",
          "module": "Graphics.Vty.Image",
          "name": "DisplayString",
          "package": "vty",
          "partial": "Display String",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Image.html#t:DisplayString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn image in VTY defines:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e properties required to display the image. These are properties that effect the output image\n    but are independent of position \n\u003c/li\u003e\u003cli\u003e A set of position-dependent text and attribute regions. The possible regions are:\n\u003c/li\u003e\u003cli\u003e a point. ( char )\n\u003c/li\u003e\u003cli\u003e a horizontal line of characters with a single attribute. (string, utf8_string,\n      utf8_bytestring )\n\u003c/li\u003e\u003cli\u003e a fill of a single character. (char_fill)\n\u003c/li\u003e\u003cli\u003e a fill of the picture's background. (background_fill)\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003etodo: increase the number of encoded bytestring formats supported.\n\u003c/p\u003e",
          "module": "Graphics.Vty.Image",
          "name": "Image",
          "package": "vty",
          "source": "src/Graphics-Vty-Image.html#Image",
          "type": "data"
        },
        "index": {
          "description": "An image in VTY defines properties required to display the image These are properties that effect the output image but are independent of position set of position-dependent text and attribute regions The possible regions are point char horizontal line of characters with single attribute string utf8 string utf8 bytestring fill of single character char fill fill of the picture background background fill todo increase the number of encoded bytestring formats supported",
          "hierarchy": "Graphics Vty Image",
          "module": "Graphics.Vty.Image",
          "name": "Image",
          "package": "vty",
          "partial": "Image",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Image.html#t:Image"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombines two images side by side.\n\u003c/p\u003e\u003cp\u003eThe result image will have a width equal to the sum of the two images width.  And the height will\n equal the largest height of the two images.  The area not defined in one image due to a height\n missmatch will be filled with the background pattern.\n\u003c/p\u003e",
          "module": "[\"Graphics.Vty.Image\",\"Graphics.Vty.Picture\"]",
          "name": "(\u003c|\u003e)",
          "package": "vty",
          "signature": "Image -\u003e Image -\u003e Image",
          "source": "src/Graphics-Vty-Image.html#%3C%7C%3E",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Image.html#v:-60--124--62-\",\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Picture.html#v:-60--124--62-\"]"
        },
        "index": {
          "description": "Combines two images side by side The result image will have width equal to the sum of the two images width And the height will equal the largest height of the two images The area not defined in one image due to height missmatch will be filled with the background pattern",
          "hierarchy": "Graphics Vty Image",
          "module": "Graphics.Vty.Image",
          "name": "(\u003c|\u003e) \u003c|\u003e",
          "normalized": "Image-\u003eImage-\u003eImage",
          "package": "vty",
          "signature": "Image-\u003eImage-\u003eImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Image.html#v:-60--124--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombines two images vertically.\n The result image will have a height equal to the sum of the heights of both images.\n The width will equal the largest width of the two images.\n The area not defined in one image due to a width missmatch will be filled with the background\n pattern.\n\u003c/p\u003e",
          "module": "[\"Graphics.Vty.Image\",\"Graphics.Vty.Picture\"]",
          "name": "(\u003c-\u003e)",
          "package": "vty",
          "signature": "Image -\u003e Image -\u003e Image",
          "source": "src/Graphics-Vty-Image.html#%3C-%3E",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Image.html#v:-60--45--62-\",\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Picture.html#v:-60--45--62-\"]"
        },
        "index": {
          "description": "Combines two images vertically The result image will have height equal to the sum of the heights of both images The width will equal the largest width of the two images The area not defined in one image due to width missmatch will be filled with the background pattern",
          "hierarchy": "Graphics Vty Image",
          "module": "Graphics.Vty.Image",
          "name": "(\u003c-\u003e) \u003c-\u003e",
          "normalized": "Image-\u003eImage-\u003eImage",
          "package": "vty",
          "signature": "Image-\u003eImage-\u003eImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Image.html#v:-60--45--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Vty.Image",
          "name": "BGFill",
          "package": "vty",
          "signature": "BGFill",
          "source": "src/Graphics-Vty-Image.html#Image",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Vty Image",
          "module": "Graphics.Vty.Image",
          "name": "BGFill",
          "package": "vty",
          "partial": "BGFill",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Image.html#v:BGFill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Vty.Image",
          "name": "EmptyImage",
          "package": "vty",
          "signature": "EmptyImage",
          "source": "src/Graphics-Vty-Image.html#Image",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Vty Image",
          "module": "Graphics.Vty.Image",
          "name": "EmptyImage",
          "package": "vty",
          "partial": "Empty Image",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Image.html#v:EmptyImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Vty.Image",
          "name": "HorizJoin",
          "package": "vty",
          "signature": "HorizJoin",
          "source": "src/Graphics-Vty-Image.html#Image",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Vty Image",
          "module": "Graphics.Vty.Image",
          "name": "HorizJoin",
          "package": "vty",
          "partial": "Horiz Join",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Image.html#v:HorizJoin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Vty.Image",
          "name": "HorizText",
          "package": "vty",
          "signature": "HorizText",
          "source": "src/Graphics-Vty-Image.html#Image",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Vty Image",
          "module": "Graphics.Vty.Image",
          "name": "HorizText",
          "package": "vty",
          "partial": "Horiz Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Image.html#v:HorizText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Vty.Image",
          "name": "ImageCrop",
          "package": "vty",
          "signature": "ImageCrop (Word, Word) Image",
          "source": "src/Graphics-Vty-Image.html#Image",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Vty Image",
          "module": "Graphics.Vty.Image",
          "name": "ImageCrop",
          "normalized": "ImageCrop(Word,Word)Image",
          "package": "vty",
          "partial": "Image Crop",
          "signature": "ImageCrop(Word,Word)Image",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Image.html#v:ImageCrop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Vty.Image",
          "name": "ImagePad",
          "package": "vty",
          "signature": "ImagePad (Word, Word) Image",
          "source": "src/Graphics-Vty-Image.html#Image",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Vty Image",
          "module": "Graphics.Vty.Image",
          "name": "ImagePad",
          "normalized": "ImagePad(Word,Word)Image",
          "package": "vty",
          "partial": "Image Pad",
          "signature": "ImagePad(Word,Word)Image",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Image.html#v:ImagePad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Vty.Image",
          "name": "Translation",
          "package": "vty",
          "signature": "Translation (Int, Int) Image",
          "source": "src/Graphics-Vty-Image.html#Image",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Vty Image",
          "module": "Graphics.Vty.Image",
          "name": "Translation",
          "normalized": "Translation(Int,Int)Image",
          "package": "vty",
          "partial": "Translation",
          "signature": "Translation(Int,Int)Image",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Image.html#v:Translation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Vty.Image",
          "name": "VertJoin",
          "package": "vty",
          "signature": "VertJoin",
          "source": "src/Graphics-Vty-Image.html#Image",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Vty Image",
          "module": "Graphics.Vty.Image",
          "name": "VertJoin",
          "package": "vty",
          "partial": "Vert Join",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Image.html#v:VertJoin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Vty.Image",
          "name": "attr",
          "package": "vty",
          "signature": "Attr",
          "source": "src/Graphics-Vty-Image.html#Image",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Vty Image",
          "module": "Graphics.Vty.Image",
          "name": "attr",
          "package": "vty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Image.html#v:attr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn area of the picture's bacground (See Background) of w columns and h rows.\n\u003c/p\u003e",
          "module": "[\"Graphics.Vty.Image\",\"Graphics.Vty.Picture\"]",
          "name": "background_fill",
          "package": "vty",
          "signature": "Word -\u003e Word -\u003e Image",
          "source": "src/Graphics-Vty-Image.html#background_fill",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Image.html#v:background_fill\",\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Picture.html#v:background_fill\"]"
        },
        "index": {
          "description": "An area of the picture bacground See Background of columns and rows",
          "hierarchy": "Graphics Vty Image",
          "module": "Graphics.Vty.Image",
          "name": "background_fill",
          "normalized": "Word-\u003eWord-\u003eImage",
          "package": "vty",
          "signature": "Word-\u003eWord-\u003eImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Image.html#v:background_fill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ean image of a single character. This is a standard Haskell 31-bit character assumed to be in\n the ISO-10646 encoding.\n\u003c/p\u003e",
          "module": "[\"Graphics.Vty.Image\",\"Graphics.Vty.Picture\"]",
          "name": "char",
          "package": "vty",
          "signature": "Attr -\u003e Char -\u003e Image",
          "source": "src/Graphics-Vty-Image.html#char",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Image.html#v:char\",\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Picture.html#v:char\"]"
        },
        "index": {
          "description": "an image of single character This is standard Haskell bit character assumed to be in the ISO-10646 encoding",
          "hierarchy": "Graphics Vty Image",
          "module": "Graphics.Vty.Image",
          "name": "char",
          "normalized": "Attr-\u003eChar-\u003eImage",
          "package": "vty",
          "signature": "Attr-\u003eChar-\u003eImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Image.html#v:char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecreates a fill of the specified character. The dimensions are in number of characters wide and\n number of rows high.\n\u003c/p\u003e\u003cp\u003eUnlike the Background fill character this character can have double column display width.\n\u003c/p\u003e",
          "module": "[\"Graphics.Vty.Image\",\"Graphics.Vty.Picture\"]",
          "name": "char_fill",
          "package": "vty",
          "signature": "Attr -\u003e Char -\u003e d -\u003e d -\u003e Image",
          "source": "src/Graphics-Vty-Image.html#char_fill",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Image.html#v:char_fill\",\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Picture.html#v:char_fill\"]"
        },
        "index": {
          "description": "creates fill of the specified character The dimensions are in number of characters wide and number of rows high Unlike the Background fill character this character can have double column display width",
          "hierarchy": "Graphics Vty Image",
          "module": "Graphics.Vty.Image",
          "name": "char_fill",
          "normalized": "Attr-\u003eChar-\u003ea-\u003ea-\u003eImage",
          "package": "vty",
          "signature": "Attr-\u003eChar-\u003ed-\u003ed-\u003eImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Image.html#v:char_fill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Vty.Image",
          "name": "char_width",
          "package": "vty",
          "signature": "Word",
          "source": "src/Graphics-Vty-Image.html#Image",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Vty Image",
          "module": "Graphics.Vty.Image",
          "name": "char_width",
          "package": "vty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Image.html#v:char_width"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnsure an image is no larger than the provided size. If the image is larger then crop.\n\u003c/p\u003e",
          "module": "[\"Graphics.Vty.Image\",\"Graphics.Vty.Picture\"]",
          "name": "crop",
          "package": "vty",
          "signature": "(Word, Word) -\u003e Image -\u003e Image",
          "source": "src/Graphics-Vty-Image.html#crop",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Image.html#v:crop\",\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Picture.html#v:crop\"]"
        },
        "index": {
          "description": "Ensure an image is no larger than the provided size If the image is larger then crop",
          "hierarchy": "Graphics Vty Image",
          "module": "Graphics.Vty.Image",
          "name": "crop",
          "normalized": "(Word,Word)-\u003eImage-\u003eImage",
          "package": "vty",
          "signature": "(Word,Word)-\u003eImage-\u003eImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Image.html#v:crop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe empty image. Useful for fold combinators. These occupy no space nor define any display\n attributes.\n\u003c/p\u003e",
          "module": "[\"Graphics.Vty.Image\",\"Graphics.Vty.Picture\"]",
          "name": "empty_image",
          "package": "vty",
          "signature": "Image",
          "source": "src/Graphics-Vty-Image.html#empty_image",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Image.html#v:empty_image\",\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Picture.html#v:empty_image\"]"
        },
        "index": {
          "description": "The empty image Useful for fold combinators These occupy no space nor define any display attributes",
          "hierarchy": "Graphics Vty Image",
          "module": "Graphics.Vty.Image",
          "name": "empty_image",
          "package": "vty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Image.html#v:empty_image"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompose any number of images horizontally.\n\u003c/p\u003e",
          "module": "[\"Graphics.Vty.Image\",\"Graphics.Vty.Picture\"]",
          "name": "horiz_cat",
          "package": "vty",
          "signature": "[Image] -\u003e Image",
          "source": "src/Graphics-Vty-Image.html#horiz_cat",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Image.html#v:horiz_cat\",\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Picture.html#v:horiz_cat\"]"
        },
        "index": {
          "description": "Compose any number of images horizontally",
          "hierarchy": "Graphics Vty Image",
          "module": "Graphics.Vty.Image",
          "name": "horiz_cat",
          "normalized": "[Image]-\u003eImage",
          "package": "vty",
          "signature": "[Image]-\u003eImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Image.html#v:horiz_cat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe height of an Image. This is the number of display rows the image will occupy.\n\u003c/p\u003e",
          "module": "[\"Graphics.Vty.Image\",\"Graphics.Vty.Picture\"]",
          "name": "image_height",
          "package": "vty",
          "signature": "Image -\u003e Word",
          "source": "src/Graphics-Vty-Image.html#image_height",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Image.html#v:image_height\",\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Picture.html#v:image_height\"]"
        },
        "index": {
          "description": "The height of an Image This is the number of display rows the image will occupy",
          "hierarchy": "Graphics Vty Image",
          "module": "Graphics.Vty.Image",
          "name": "image_height",
          "normalized": "Image-\u003eWord",
          "package": "vty",
          "signature": "Image-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Image.html#v:image_height"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe width of an Image. This is the number display columns the image will occupy.\n\u003c/p\u003e",
          "module": "[\"Graphics.Vty.Image\",\"Graphics.Vty.Picture\"]",
          "name": "image_width",
          "package": "vty",
          "signature": "Image -\u003e Word",
          "source": "src/Graphics-Vty-Image.html#image_width",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Image.html#v:image_width\",\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Picture.html#v:image_width\"]"
        },
        "index": {
          "description": "The width of an Image This is the number display columns the image will occupy",
          "hierarchy": "Graphics Vty Image",
          "module": "Graphics.Vty.Image",
          "name": "image_width",
          "normalized": "Image-\u003eWord",
          "package": "vty",
          "signature": "Image-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Image.html#v:image_width"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA string of characters layed out on a single row with the same display attribute. The string is\n assumed to be a sequence of ISO-10646 characters. \n\u003c/p\u003e\u003cp\u003eNote: depending on how the Haskell compiler represents string literals a string literal in a\n UTF-8 encoded source file, for example, may be represented as a ISO-10646 string. \n That is, I think, the case with GHC 6.10. This means, for the most part, you don't need to worry\n about the encoding format when outputting string literals. Just provide the string literal\n directly to iso_10646_string or string.\n\u003c/p\u003e",
          "module": "[\"Graphics.Vty.Image\",\"Graphics.Vty.Picture\"]",
          "name": "iso_10646_string",
          "package": "vty",
          "signature": "Attr -\u003e String -\u003e Image",
          "source": "src/Graphics-Vty-Image.html#iso_10646_string",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Image.html#v:iso_10646_string\",\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Picture.html#v:iso_10646_string\"]"
        },
        "index": {
          "description": "string of characters layed out on single row with the same display attribute The string is assumed to be sequence of ISO-10646 characters Note depending on how the Haskell compiler represents string literals string literal in UTF-8 encoded source file for example may be represented as ISO-10646 string That is think the case with GHC This means for the most part you don need to worry about the encoding format when outputting string literals Just provide the string literal directly to iso string or string",
          "hierarchy": "Graphics Vty Image",
          "module": "Graphics.Vty.Image",
          "name": "iso_10646_string",
          "normalized": "Attr-\u003eString-\u003eImage",
          "package": "vty",
          "signature": "Attr-\u003eString-\u003eImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Image.html#v:iso_10646_string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Vty.Image",
          "name": "output_height",
          "package": "vty",
          "signature": "Word",
          "source": "src/Graphics-Vty-Image.html#Image",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Vty Image",
          "module": "Graphics.Vty.Image",
          "name": "output_height",
          "package": "vty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Image.html#v:output_height"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Vty.Image",
          "name": "output_width",
          "package": "vty",
          "signature": "Word",
          "source": "src/Graphics-Vty-Image.html#Image",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Vty Image",
          "module": "Graphics.Vty.Image",
          "name": "output_width",
          "package": "vty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Image.html#v:output_width"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnsure an image is at least the provided size. If the image is smaller then pad.\n\u003c/p\u003e",
          "module": "[\"Graphics.Vty.Image\",\"Graphics.Vty.Picture\"]",
          "name": "pad",
          "package": "vty",
          "signature": "(Word, Word) -\u003e Image -\u003e Image",
          "source": "src/Graphics-Vty-Image.html#pad",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Image.html#v:pad\",\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Picture.html#v:pad\"]"
        },
        "index": {
          "description": "Ensure an image is at least the provided size If the image is smaller then pad",
          "hierarchy": "Graphics Vty Image",
          "module": "Graphics.Vty.Image",
          "name": "pad",
          "normalized": "(Word,Word)-\u003eImage-\u003eImage",
          "package": "vty",
          "signature": "(Word,Word)-\u003eImage-\u003eImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Image.html#v:pad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Vty.Image",
          "name": "part_bottom",
          "package": "vty",
          "signature": "Image",
          "source": "src/Graphics-Vty-Image.html#Image",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Vty Image",
          "module": "Graphics.Vty.Image",
          "name": "part_bottom",
          "package": "vty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Image.html#v:part_bottom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Vty.Image",
          "name": "part_left",
          "package": "vty",
          "signature": "Image",
          "source": "src/Graphics-Vty-Image.html#Image",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Vty Image",
          "module": "Graphics.Vty.Image",
          "name": "part_left",
          "package": "vty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Image.html#v:part_left"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Vty.Image",
          "name": "part_right",
          "package": "vty",
          "signature": "Image",
          "source": "src/Graphics-Vty-Image.html#Image",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Vty Image",
          "module": "Graphics.Vty.Image",
          "name": "part_right",
          "package": "vty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Image.html#v:part_right"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Vty.Image",
          "name": "part_top",
          "package": "vty",
          "signature": "Image",
          "source": "src/Graphics-Vty-Image.html#Image",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Vty Image",
          "module": "Graphics.Vty.Image",
          "name": "part_top",
          "package": "vty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Image.html#v:part_top"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the display width of a string. Assumes all characters with unknown widths are 1 width\n\u003c/p\u003e",
          "module": "Graphics.Vty.Image",
          "name": "safe_wcswidth",
          "package": "vty",
          "signature": "String -\u003e Word",
          "source": "src/Graphics-Vty-Image.html#safe_wcswidth",
          "type": "function"
        },
        "index": {
          "description": "Returns the display width of string Assumes all characters with unknown widths are width",
          "hierarchy": "Graphics Vty Image",
          "module": "Graphics.Vty.Image",
          "name": "safe_wcswidth",
          "normalized": "String-\u003eWord",
          "package": "vty",
          "signature": "String-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Image.html#v:safe_wcswidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the display width of a character. Assumes all characters with unknown widths are 1 width\n\u003c/p\u003e",
          "module": "Graphics.Vty.Image",
          "name": "safe_wcwidth",
          "package": "vty",
          "signature": "Char -\u003e Word",
          "source": "src/Graphics-Vty-Image.html#safe_wcwidth",
          "type": "function"
        },
        "index": {
          "description": "Returns the display width of character Assumes all characters with unknown widths are width",
          "hierarchy": "Graphics Vty Image",
          "module": "Graphics.Vty.Image",
          "name": "safe_wcwidth",
          "normalized": "Char-\u003eWord",
          "package": "vty",
          "signature": "Char-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Image.html#v:safe_wcwidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlias for iso_10646_string. Since the usual case is that a literal string like \u003ca\u003efoo\u003c/a\u003e is\n represented internally as a list of ISO 10646 31 bit characters.  \n\u003c/p\u003e\u003cp\u003eNote: Keep in mind that GHC will compile source encoded as UTF-8 but the literal strings, while\n UTF-8 encoded in the source, will be transcoded to a ISO 10646 31 bit characters runtime\n representation.\n\u003c/p\u003e",
          "module": "[\"Graphics.Vty.Image\",\"Graphics.Vty.Picture\"]",
          "name": "string",
          "package": "vty",
          "signature": "Attr -\u003e String -\u003e Image",
          "source": "src/Graphics-Vty-Image.html#string",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Image.html#v:string\",\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Picture.html#v:string\"]"
        },
        "index": {
          "description": "Alias for iso string Since the usual case is that literal string like foo is represented internally as list of ISO bit characters Note Keep in mind that GHC will compile source encoded as UTF-8 but the literal strings while UTF-8 encoded in the source will be transcoded to ISO bit characters runtime representation",
          "hierarchy": "Graphics Vty Image",
          "module": "Graphics.Vty.Image",
          "name": "string",
          "normalized": "Attr-\u003eString-\u003eImage",
          "package": "vty",
          "signature": "Attr-\u003eString-\u003eImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Image.html#v:string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Vty.Image",
          "name": "text",
          "package": "vty",
          "signature": "DisplayString",
          "source": "src/Graphics-Vty-Image.html#Image",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Vty Image",
          "module": "Graphics.Vty.Image",
          "name": "text",
          "package": "vty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Image.html#v:text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply the given offset to the image.\n\u003c/p\u003e",
          "module": "[\"Graphics.Vty.Image\",\"Graphics.Vty.Picture\"]",
          "name": "translate",
          "package": "vty",
          "signature": "(Int, Int) -\u003e Image -\u003e Image",
          "source": "src/Graphics-Vty-Image.html#translate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Image.html#v:translate\",\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Picture.html#v:translate\"]"
        },
        "index": {
          "description": "Apply the given offset to the image",
          "hierarchy": "Graphics Vty Image",
          "module": "Graphics.Vty.Image",
          "name": "translate",
          "normalized": "(Int,Int)-\u003eImage-\u003eImage",
          "package": "vty",
          "signature": "(Int,Int)-\u003eImage-\u003eImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Image.html#v:translate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRenders a UTF-8 encoded bytestring. \n\u003c/p\u003e",
          "module": "[\"Graphics.Vty.Image\",\"Graphics.Vty.Picture\"]",
          "name": "utf8_bytestring",
          "package": "vty",
          "signature": "Attr -\u003e ByteString -\u003e Image",
          "source": "src/Graphics-Vty-Image.html#utf8_bytestring",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Image.html#v:utf8_bytestring\",\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Picture.html#v:utf8_bytestring\"]"
        },
        "index": {
          "description": "Renders UTF-8 encoded bytestring",
          "hierarchy": "Graphics Vty Image",
          "module": "Graphics.Vty.Image",
          "name": "utf8_bytestring",
          "normalized": "Attr-\u003eByteString-\u003eImage",
          "package": "vty",
          "signature": "Attr-\u003eByteString-\u003eImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Image.html#v:utf8_bytestring"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA string of characters layed out on a single row. The string is assumed to be a sequence of\n UTF-8 characters.\n\u003c/p\u003e",
          "module": "[\"Graphics.Vty.Image\",\"Graphics.Vty.Picture\"]",
          "name": "utf8_string",
          "package": "vty",
          "signature": "Attr -\u003e [Word8] -\u003e Image",
          "source": "src/Graphics-Vty-Image.html#utf8_string",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Image.html#v:utf8_string\",\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Picture.html#v:utf8_string\"]"
        },
        "index": {
          "description": "string of characters layed out on single row The string is assumed to be sequence of UTF-8 characters",
          "hierarchy": "Graphics Vty Image",
          "module": "Graphics.Vty.Image",
          "name": "utf8_string",
          "normalized": "Attr-\u003e[Word]-\u003eImage",
          "package": "vty",
          "signature": "Attr-\u003e[Word]-\u003eImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Image.html#v:utf8_string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompose any number of images vertically.\n\u003c/p\u003e",
          "module": "[\"Graphics.Vty.Image\",\"Graphics.Vty.Picture\"]",
          "name": "vert_cat",
          "package": "vty",
          "signature": "[Image] -\u003e Image",
          "source": "src/Graphics-Vty-Image.html#vert_cat",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Image.html#v:vert_cat\",\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Picture.html#v:vert_cat\"]"
        },
        "index": {
          "description": "Compose any number of images vertically",
          "hierarchy": "Graphics Vty Image",
          "module": "Graphics.Vty.Image",
          "name": "vert_cat",
          "normalized": "[Image]-\u003eImage",
          "package": "vty",
          "signature": "[Image]-\u003eImage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Image.html#v:vert_cat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe inline module provides a limited interface to changing the style of terminal output. The\n intention is for this interface to be used inline with other output systems. \n\u003c/p\u003e\u003cp\u003eThe changes specified by the InlineM monad are applied to the terminals display attributes. These\n display attributes effect the display of all following text output to the terminal file\n descriptor.\n\u003c/p\u003e\u003cp\u003eFor example, in an IO monad the following code with print the text \"Not styled. \" Followed by the\n text \" Styled! \" drawn over a red background and underlined.\n\u003c/p\u003e\u003cpre\u003e\n      t \u003c- terminal_handle\n      putStr \"Not styled. \"\n      put_attr_change t $ do\n          back_color red \n          apply_style underline\n      putStr \" Styled! \"\n      put_attr_change t $ default_all\n      putStrLn \"Not styled.\"\n      release_terminal t\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eput_attr_change\u003c/a\u003e\u003c/code\u003e outputs the control codes to the terminal device \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e. This is a duplicate\n of the \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e handle when the \u003ccode\u003eterminal_handle\u003c/code\u003e was (first) acquired. If \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e has since been\n changed then \u003ccode\u003e\u003ca\u003eputStr\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eputStrLn\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eprint\u003c/a\u003e\u003c/code\u003e etc.. will output to a different \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e than\n \u003ccode\u003e\u003ca\u003eput_attr_change\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eCopyright 2009-2010 Corey O'Connor\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.Vty.Inline",
          "name": "Inline",
          "package": "vty",
          "source": "src/Graphics-Vty-Inline.html",
          "type": "module"
        },
        "index": {
          "description": "The inline module provides limited interface to changing the style of terminal output The intention is for this interface to be used inline with other output systems The changes specified by the InlineM monad are applied to the terminals display attributes These display attributes effect the display of all following text output to the terminal file descriptor For example in an IO monad the following code with print the text Not styled Followed by the text Styled drawn over red background and underlined terminal handle putStr Not styled put attr change do back color red apply style underline putStr Styled put attr change default all putStrLn Not styled release terminal put attr change outputs the control codes to the terminal device Handle This is duplicate of the stdout handle when the terminal handle was first acquired If stdout has since been changed then putStr putStrLn print etc will output to different Handle than put attr change Copyright Corey Connor",
          "hierarchy": "Graphics Vty Inline",
          "module": "Graphics.Vty.Inline",
          "name": "Inline",
          "package": "vty",
          "partial": "Inline",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Inline.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Vty.Inline",
          "name": "InlineM",
          "package": "vty",
          "source": "src/Graphics-Vty-Inline.html#InlineM",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics Vty Inline",
          "module": "Graphics.Vty.Inline",
          "name": "InlineM",
          "package": "vty",
          "partial": "Inline",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Inline.html#t:InlineM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempt to change the \u003ccode\u003e\u003ca\u003eStyle\u003c/a\u003e\u003c/code\u003e of the following text.\n\u003c/p\u003e\u003cp\u003eIf the terminal does not support the style change no error is produced. The style can still be\n removed.\n\u003c/p\u003e",
          "module": "Graphics.Vty.Inline",
          "name": "apply_style",
          "package": "vty",
          "signature": "Style -\u003e InlineM ()",
          "source": "src/Graphics-Vty-Inline.html#apply_style",
          "type": "function"
        },
        "index": {
          "description": "Attempt to change the Style of the following text If the terminal does not support the style change no error is produced The style can still be removed",
          "hierarchy": "Graphics Vty Inline",
          "module": "Graphics.Vty.Inline",
          "name": "apply_style",
          "normalized": "Style-\u003eInlineM()",
          "package": "vty",
          "signature": "Style-\u003eInlineM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Inline.html#v:apply_style"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the background color to the provided \u003ccode\u003e\u003ca\u003eColor\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Graphics.Vty.Inline",
          "name": "back_color",
          "package": "vty",
          "signature": "Color -\u003e InlineM ()",
          "source": "src/Graphics-Vty-Inline.html#back_color",
          "type": "function"
        },
        "index": {
          "description": "Set the background color to the provided Color",
          "hierarchy": "Graphics Vty Inline",
          "module": "Graphics.Vty.Inline",
          "name": "back_color",
          "normalized": "Color-\u003eInlineM()",
          "package": "vty",
          "signature": "Color-\u003eInlineM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Inline.html#v:back_color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReset the display attributes\n\u003c/p\u003e",
          "module": "Graphics.Vty.Inline",
          "name": "default_all",
          "package": "vty",
          "signature": "InlineM ()",
          "source": "src/Graphics-Vty-Inline.html#default_all",
          "type": "function"
        },
        "index": {
          "description": "Reset the display attributes",
          "hierarchy": "Graphics Vty Inline",
          "module": "Graphics.Vty.Inline",
          "name": "default_all",
          "normalized": "InlineM()",
          "package": "vty",
          "signature": "InlineM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Inline.html#v:default_all"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the foreground color to the provided \u003ccode\u003e\u003ca\u003eColor\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Graphics.Vty.Inline",
          "name": "fore_color",
          "package": "vty",
          "signature": "Color -\u003e InlineM ()",
          "source": "src/Graphics-Vty-Inline.html#fore_color",
          "type": "function"
        },
        "index": {
          "description": "Set the foreground color to the provided Color",
          "hierarchy": "Graphics Vty Inline",
          "module": "Graphics.Vty.Inline",
          "name": "fore_color",
          "normalized": "Color-\u003eInlineM()",
          "package": "vty",
          "signature": "Color-\u003eInlineM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Inline.html#v:fore_color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply the provided display attribute changes to the terminal.\n\u003c/p\u003e\u003cp\u003eThis also flushes the \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e handle.\n\u003c/p\u003e",
          "module": "Graphics.Vty.Inline",
          "name": "put_attr_change",
          "package": "vty",
          "signature": "TerminalHandle -\u003e InlineM () -\u003e m ()",
          "source": "src/Graphics-Vty-Inline.html#put_attr_change",
          "type": "function"
        },
        "index": {
          "description": "Apply the provided display attribute changes to the terminal This also flushes the stdout handle",
          "hierarchy": "Graphics Vty Inline",
          "module": "Graphics.Vty.Inline",
          "name": "put_attr_change",
          "normalized": "TerminalHandle-\u003eInlineM()-\u003ea()",
          "package": "vty",
          "signature": "TerminalHandle-\u003eInlineM()-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Inline.html#v:put_attr_change"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempt to remove the specified \u003ccode\u003e\u003ca\u003eStyle\u003c/a\u003e\u003c/code\u003e from the display of the following text.\n\u003c/p\u003e\u003cp\u003eThis will fail if apply_style for the given style has not been previously called. \n\u003c/p\u003e",
          "module": "Graphics.Vty.Inline",
          "name": "remove_style",
          "package": "vty",
          "signature": "Style -\u003e InlineM ()",
          "source": "src/Graphics-Vty-Inline.html#remove_style",
          "type": "function"
        },
        "index": {
          "description": "Attempt to remove the specified Style from the display of the following text This will fail if apply style for the given style has not been previously called",
          "hierarchy": "Graphics Vty Inline",
          "module": "Graphics.Vty.Inline",
          "name": "remove_style",
          "normalized": "Style-\u003eInlineM()",
          "package": "vty",
          "signature": "Style-\u003eInlineM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Inline.html#v:remove_style"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Vty.LLInput",
          "name": "LLInput",
          "package": "vty",
          "source": "src/Graphics-Vty-LLInput.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics Vty LLInput",
          "module": "Graphics.Vty.LLInput",
          "name": "LLInput",
          "package": "vty",
          "partial": "LLInput",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-LLInput.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMouse buttons.  Not yet used.\n\u003c/p\u003e",
          "module": "Graphics.Vty.LLInput",
          "name": "Button",
          "package": "vty",
          "source": "src/Graphics-Vty-LLInput.html#Button",
          "type": "data"
        },
        "index": {
          "description": "Mouse buttons Not yet used",
          "hierarchy": "Graphics Vty LLInput",
          "module": "Graphics.Vty.LLInput",
          "name": "Button",
          "package": "vty",
          "partial": "Button",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-LLInput.html#t:Button"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric events.\n\u003c/p\u003e",
          "module": "Graphics.Vty.LLInput",
          "name": "Event",
          "package": "vty",
          "source": "src/Graphics-Vty-LLInput.html#Event",
          "type": "data"
        },
        "index": {
          "description": "Generic events",
          "hierarchy": "Graphics Vty LLInput",
          "module": "Graphics.Vty.LLInput",
          "name": "Event",
          "package": "vty",
          "partial": "Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-LLInput.html#t:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentations of non-modifier keys.\n\u003c/p\u003e",
          "module": "Graphics.Vty.LLInput",
          "name": "Key",
          "package": "vty",
          "source": "src/Graphics-Vty-LLInput.html#Key",
          "type": "data"
        },
        "index": {
          "description": "Representations of non-modifier keys",
          "hierarchy": "Graphics Vty LLInput",
          "module": "Graphics.Vty.LLInput",
          "name": "Key",
          "package": "vty",
          "partial": "Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-LLInput.html#t:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModifier keys.  Key codes are interpreted such that users are more likely to\n have Meta than Alt; for instance on the PC Linux console, \u003ccode\u003e\u003ca\u003eMMeta\u003c/a\u003e\u003c/code\u003e will\n generally correspond to the physical Alt key.\n\u003c/p\u003e",
          "module": "Graphics.Vty.LLInput",
          "name": "Modifier",
          "package": "vty",
          "source": "src/Graphics-Vty-LLInput.html#Modifier",
          "type": "data"
        },
        "index": {
          "description": "Modifier keys Key codes are interpreted such that users are more likely to have Meta than Alt for instance on the PC Linux console MMeta will generally correspond to the physical Alt key",
          "hierarchy": "Graphics Vty LLInput",
          "module": "Graphics.Vty.LLInput",
          "name": "Modifier",
          "package": "vty",
          "partial": "Modifier",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-LLInput.html#t:Modifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Vty.LLInput\",\"Graphics.Vty\"]",
          "name": "BLeft",
          "package": "vty",
          "signature": "BLeft",
          "source": "src/Graphics-Vty-LLInput.html#Button",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty-LLInput.html#v:BLeft\",\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty.html#v:BLeft\"]"
        },
        "index": {
          "hierarchy": "Graphics Vty LLInput",
          "module": "Graphics.Vty.LLInput",
          "name": "BLeft",
          "package": "vty",
          "partial": "BLeft",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-LLInput.html#v:BLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Vty.LLInput\",\"Graphics.Vty\"]",
          "name": "BMiddle",
          "package": "vty",
          "signature": "BMiddle",
          "source": "src/Graphics-Vty-LLInput.html#Button",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty-LLInput.html#v:BMiddle\",\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty.html#v:BMiddle\"]"
        },
        "index": {
          "hierarchy": "Graphics Vty LLInput",
          "module": "Graphics.Vty.LLInput",
          "name": "BMiddle",
          "package": "vty",
          "partial": "BMiddle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-LLInput.html#v:BMiddle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Vty.LLInput\",\"Graphics.Vty\"]",
          "name": "BRight",
          "package": "vty",
          "signature": "BRight",
          "source": "src/Graphics-Vty-LLInput.html#Button",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty-LLInput.html#v:BRight\",\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty.html#v:BRight\"]"
        },
        "index": {
          "hierarchy": "Graphics Vty LLInput",
          "module": "Graphics.Vty.LLInput",
          "name": "BRight",
          "package": "vty",
          "partial": "BRight",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-LLInput.html#v:BRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Vty.LLInput\",\"Graphics.Vty\"]",
          "name": "EvKey",
          "package": "vty",
          "signature": "EvKey Key [Modifier]",
          "source": "src/Graphics-Vty-LLInput.html#Event",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty-LLInput.html#v:EvKey\",\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty.html#v:EvKey\"]"
        },
        "index": {
          "hierarchy": "Graphics Vty LLInput",
          "module": "Graphics.Vty.LLInput",
          "name": "EvKey",
          "normalized": "EvKey Key[Modifier]",
          "package": "vty",
          "partial": "Ev Key",
          "signature": "EvKey Key[Modifier]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-LLInput.html#v:EvKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Vty.LLInput\",\"Graphics.Vty\"]",
          "name": "EvMouse",
          "package": "vty",
          "signature": "EvMouse Int Int Button [Modifier]",
          "source": "src/Graphics-Vty-LLInput.html#Event",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty-LLInput.html#v:EvMouse\",\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty.html#v:EvMouse\"]"
        },
        "index": {
          "hierarchy": "Graphics Vty LLInput",
          "module": "Graphics.Vty.LLInput",
          "name": "EvMouse",
          "normalized": "EvMouse Int Int Button[Modifier]",
          "package": "vty",
          "partial": "Ev Mouse",
          "signature": "EvMouse Int Int Button[Modifier]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-LLInput.html#v:EvMouse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Vty.LLInput\",\"Graphics.Vty\"]",
          "name": "EvResize",
          "package": "vty",
          "signature": "EvResize Int Int",
          "source": "src/Graphics-Vty-LLInput.html#Event",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty-LLInput.html#v:EvResize\",\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty.html#v:EvResize\"]"
        },
        "index": {
          "hierarchy": "Graphics Vty LLInput",
          "module": "Graphics.Vty.LLInput",
          "name": "EvResize",
          "package": "vty",
          "partial": "Ev Resize",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-LLInput.html#v:EvResize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Vty.LLInput\",\"Graphics.Vty\"]",
          "name": "KASCII",
          "package": "vty",
          "signature": "KASCII Char",
          "source": "src/Graphics-Vty-LLInput.html#Key",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty-LLInput.html#v:KASCII\",\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty.html#v:KASCII\"]"
        },
        "index": {
          "hierarchy": "Graphics Vty LLInput",
          "module": "Graphics.Vty.LLInput",
          "name": "KASCII",
          "package": "vty",
          "partial": "KASCII",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-LLInput.html#v:KASCII"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Vty.LLInput\",\"Graphics.Vty\"]",
          "name": "KBS",
          "package": "vty",
          "signature": "KBS",
          "source": "src/Graphics-Vty-LLInput.html#Key",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty-LLInput.html#v:KBS\",\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty.html#v:KBS\"]"
        },
        "index": {
          "hierarchy": "Graphics Vty LLInput",
          "module": "Graphics.Vty.LLInput",
          "name": "KBS",
          "package": "vty",
          "partial": "KBS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-LLInput.html#v:KBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Vty.LLInput\",\"Graphics.Vty\"]",
          "name": "KBackTab",
          "package": "vty",
          "signature": "KBackTab",
          "source": "src/Graphics-Vty-LLInput.html#Key",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty-LLInput.html#v:KBackTab\",\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty.html#v:KBackTab\"]"
        },
        "index": {
          "hierarchy": "Graphics Vty LLInput",
          "module": "Graphics.Vty.LLInput",
          "name": "KBackTab",
          "package": "vty",
          "partial": "KBack Tab",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-LLInput.html#v:KBackTab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Vty.LLInput\",\"Graphics.Vty\"]",
          "name": "KBegin",
          "package": "vty",
          "signature": "KBegin",
          "source": "src/Graphics-Vty-LLInput.html#Key",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty-LLInput.html#v:KBegin\",\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty.html#v:KBegin\"]"
        },
        "index": {
          "hierarchy": "Graphics Vty LLInput",
          "module": "Graphics.Vty.LLInput",
          "name": "KBegin",
          "package": "vty",
          "partial": "KBegin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-LLInput.html#v:KBegin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Vty.LLInput\",\"Graphics.Vty\"]",
          "name": "KDel",
          "package": "vty",
          "signature": "KDel",
          "source": "src/Graphics-Vty-LLInput.html#Key",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty-LLInput.html#v:KDel\",\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty.html#v:KDel\"]"
        },
        "index": {
          "hierarchy": "Graphics Vty LLInput",
          "module": "Graphics.Vty.LLInput",
          "name": "KDel",
          "package": "vty",
          "partial": "KDel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-LLInput.html#v:KDel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Vty.LLInput\",\"Graphics.Vty\"]",
          "name": "KDown",
          "package": "vty",
          "signature": "KDown",
          "source": "src/Graphics-Vty-LLInput.html#Key",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty-LLInput.html#v:KDown\",\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty.html#v:KDown\"]"
        },
        "index": {
          "hierarchy": "Graphics Vty LLInput",
          "module": "Graphics.Vty.LLInput",
          "name": "KDown",
          "package": "vty",
          "partial": "KDown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-LLInput.html#v:KDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Vty.LLInput\",\"Graphics.Vty\"]",
          "name": "KEnd",
          "package": "vty",
          "signature": "KEnd",
          "source": "src/Graphics-Vty-LLInput.html#Key",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty-LLInput.html#v:KEnd\",\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty.html#v:KEnd\"]"
        },
        "index": {
          "hierarchy": "Graphics Vty LLInput",
          "module": "Graphics.Vty.LLInput",
          "name": "KEnd",
          "package": "vty",
          "partial": "KEnd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-LLInput.html#v:KEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Vty.LLInput\",\"Graphics.Vty\"]",
          "name": "KEnter",
          "package": "vty",
          "signature": "KEnter",
          "source": "src/Graphics-Vty-LLInput.html#Key",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty-LLInput.html#v:KEnter\",\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty.html#v:KEnter\"]"
        },
        "index": {
          "hierarchy": "Graphics Vty LLInput",
          "module": "Graphics.Vty.LLInput",
          "name": "KEnter",
          "package": "vty",
          "partial": "KEnter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-LLInput.html#v:KEnter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Vty.LLInput\",\"Graphics.Vty\"]",
          "name": "KEsc",
          "package": "vty",
          "signature": "KEsc",
          "source": "src/Graphics-Vty-LLInput.html#Key",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty-LLInput.html#v:KEsc\",\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty.html#v:KEsc\"]"
        },
        "index": {
          "hierarchy": "Graphics Vty LLInput",
          "module": "Graphics.Vty.LLInput",
          "name": "KEsc",
          "package": "vty",
          "partial": "KEsc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-LLInput.html#v:KEsc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Vty.LLInput\",\"Graphics.Vty\"]",
          "name": "KFun",
          "package": "vty",
          "signature": "KFun Int",
          "source": "src/Graphics-Vty-LLInput.html#Key",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty-LLInput.html#v:KFun\",\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty.html#v:KFun\"]"
        },
        "index": {
          "hierarchy": "Graphics Vty LLInput",
          "module": "Graphics.Vty.LLInput",
          "name": "KFun",
          "package": "vty",
          "partial": "KFun",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-LLInput.html#v:KFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Vty.LLInput\",\"Graphics.Vty\"]",
          "name": "KHome",
          "package": "vty",
          "signature": "KHome",
          "source": "src/Graphics-Vty-LLInput.html#Key",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty-LLInput.html#v:KHome\",\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty.html#v:KHome\"]"
        },
        "index": {
          "hierarchy": "Graphics Vty LLInput",
          "module": "Graphics.Vty.LLInput",
          "name": "KHome",
          "package": "vty",
          "partial": "KHome",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-LLInput.html#v:KHome"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Vty.LLInput\",\"Graphics.Vty\"]",
          "name": "KIns",
          "package": "vty",
          "signature": "KIns",
          "source": "src/Graphics-Vty-LLInput.html#Key",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty-LLInput.html#v:KIns\",\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty.html#v:KIns\"]"
        },
        "index": {
          "hierarchy": "Graphics Vty LLInput",
          "module": "Graphics.Vty.LLInput",
          "name": "KIns",
          "package": "vty",
          "partial": "KIns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-LLInput.html#v:KIns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Vty.LLInput\",\"Graphics.Vty\"]",
          "name": "KLeft",
          "package": "vty",
          "signature": "KLeft",
          "source": "src/Graphics-Vty-LLInput.html#Key",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty-LLInput.html#v:KLeft\",\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty.html#v:KLeft\"]"
        },
        "index": {
          "hierarchy": "Graphics Vty LLInput",
          "module": "Graphics.Vty.LLInput",
          "name": "KLeft",
          "package": "vty",
          "partial": "KLeft",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-LLInput.html#v:KLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Vty.LLInput\",\"Graphics.Vty\"]",
          "name": "KMenu",
          "package": "vty",
          "signature": "KMenu",
          "source": "src/Graphics-Vty-LLInput.html#Key",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty-LLInput.html#v:KMenu\",\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty.html#v:KMenu\"]"
        },
        "index": {
          "hierarchy": "Graphics Vty LLInput",
          "module": "Graphics.Vty.LLInput",
          "name": "KMenu",
          "package": "vty",
          "partial": "KMenu",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-LLInput.html#v:KMenu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Vty.LLInput\",\"Graphics.Vty\"]",
          "name": "KNP5",
          "package": "vty",
          "signature": "KNP5",
          "source": "src/Graphics-Vty-LLInput.html#Key",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty-LLInput.html#v:KNP5\",\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty.html#v:KNP5\"]"
        },
        "index": {
          "hierarchy": "Graphics Vty LLInput",
          "module": "Graphics.Vty.LLInput",
          "name": "KNP5",
          "package": "vty",
          "partial": "KNP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-LLInput.html#v:KNP5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Vty.LLInput\",\"Graphics.Vty\"]",
          "name": "KPageDown",
          "package": "vty",
          "signature": "KPageDown",
          "source": "src/Graphics-Vty-LLInput.html#Key",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty-LLInput.html#v:KPageDown\",\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty.html#v:KPageDown\"]"
        },
        "index": {
          "hierarchy": "Graphics Vty LLInput",
          "module": "Graphics.Vty.LLInput",
          "name": "KPageDown",
          "package": "vty",
          "partial": "KPage Down",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-LLInput.html#v:KPageDown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Vty.LLInput\",\"Graphics.Vty\"]",
          "name": "KPageUp",
          "package": "vty",
          "signature": "KPageUp",
          "source": "src/Graphics-Vty-LLInput.html#Key",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty-LLInput.html#v:KPageUp\",\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty.html#v:KPageUp\"]"
        },
        "index": {
          "hierarchy": "Graphics Vty LLInput",
          "module": "Graphics.Vty.LLInput",
          "name": "KPageUp",
          "package": "vty",
          "partial": "KPage Up",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-LLInput.html#v:KPageUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Vty.LLInput\",\"Graphics.Vty\"]",
          "name": "KPause",
          "package": "vty",
          "signature": "KPause",
          "source": "src/Graphics-Vty-LLInput.html#Key",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty-LLInput.html#v:KPause\",\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty.html#v:KPause\"]"
        },
        "index": {
          "hierarchy": "Graphics Vty LLInput",
          "module": "Graphics.Vty.LLInput",
          "name": "KPause",
          "package": "vty",
          "partial": "KPause",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-LLInput.html#v:KPause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Vty.LLInput\",\"Graphics.Vty\"]",
          "name": "KPrtScr",
          "package": "vty",
          "signature": "KPrtScr",
          "source": "src/Graphics-Vty-LLInput.html#Key",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty-LLInput.html#v:KPrtScr\",\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty.html#v:KPrtScr\"]"
        },
        "index": {
          "hierarchy": "Graphics Vty LLInput",
          "module": "Graphics.Vty.LLInput",
          "name": "KPrtScr",
          "package": "vty",
          "partial": "KPrt Scr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-LLInput.html#v:KPrtScr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Vty.LLInput\",\"Graphics.Vty\"]",
          "name": "KRight",
          "package": "vty",
          "signature": "KRight",
          "source": "src/Graphics-Vty-LLInput.html#Key",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty-LLInput.html#v:KRight\",\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty.html#v:KRight\"]"
        },
        "index": {
          "hierarchy": "Graphics Vty LLInput",
          "module": "Graphics.Vty.LLInput",
          "name": "KRight",
          "package": "vty",
          "partial": "KRight",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-LLInput.html#v:KRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Vty.LLInput\",\"Graphics.Vty\"]",
          "name": "KUp",
          "package": "vty",
          "signature": "KUp",
          "source": "src/Graphics-Vty-LLInput.html#Key",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty-LLInput.html#v:KUp\",\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty.html#v:KUp\"]"
        },
        "index": {
          "hierarchy": "Graphics Vty LLInput",
          "module": "Graphics.Vty.LLInput",
          "name": "KUp",
          "package": "vty",
          "partial": "KUp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-LLInput.html#v:KUp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Vty.LLInput\",\"Graphics.Vty\"]",
          "name": "MAlt",
          "package": "vty",
          "signature": "MAlt",
          "source": "src/Graphics-Vty-LLInput.html#Modifier",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty-LLInput.html#v:MAlt\",\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty.html#v:MAlt\"]"
        },
        "index": {
          "hierarchy": "Graphics Vty LLInput",
          "module": "Graphics.Vty.LLInput",
          "name": "MAlt",
          "package": "vty",
          "partial": "MAlt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-LLInput.html#v:MAlt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Vty.LLInput\",\"Graphics.Vty\"]",
          "name": "MCtrl",
          "package": "vty",
          "signature": "MCtrl",
          "source": "src/Graphics-Vty-LLInput.html#Modifier",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty-LLInput.html#v:MCtrl\",\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty.html#v:MCtrl\"]"
        },
        "index": {
          "hierarchy": "Graphics Vty LLInput",
          "module": "Graphics.Vty.LLInput",
          "name": "MCtrl",
          "package": "vty",
          "partial": "MCtrl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-LLInput.html#v:MCtrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Vty.LLInput\",\"Graphics.Vty\"]",
          "name": "MMeta",
          "package": "vty",
          "signature": "MMeta",
          "source": "src/Graphics-Vty-LLInput.html#Modifier",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty-LLInput.html#v:MMeta\",\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty.html#v:MMeta\"]"
        },
        "index": {
          "hierarchy": "Graphics Vty LLInput",
          "module": "Graphics.Vty.LLInput",
          "name": "MMeta",
          "package": "vty",
          "partial": "MMeta",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-LLInput.html#v:MMeta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.Vty.LLInput\",\"Graphics.Vty\"]",
          "name": "MShift",
          "package": "vty",
          "signature": "MShift",
          "source": "src/Graphics-Vty-LLInput.html#Modifier",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty-LLInput.html#v:MShift\",\"http://hackage.haskell.org/package/vty/docs/Graphics-Vty.html#v:MShift\"]"
        },
        "index": {
          "hierarchy": "Graphics Vty LLInput",
          "module": "Graphics.Vty.LLInput",
          "name": "MShift",
          "package": "vty",
          "partial": "MShift",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-LLInput.html#v:MShift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet up the terminal for input.  Returns a function which reads key\n events, and a function for shutting down the terminal access.\n\u003c/p\u003e",
          "module": "Graphics.Vty.LLInput",
          "name": "initTermInput",
          "package": "vty",
          "signature": "Int -\u003e Terminal -\u003e IO (IO Event, IO ())",
          "source": "src/Graphics-Vty-LLInput.html#initTermInput",
          "type": "function"
        },
        "index": {
          "description": "Set up the terminal for input Returns function which reads key events and function for shutting down the terminal access",
          "hierarchy": "Graphics Vty LLInput",
          "module": "Graphics.Vty.LLInput",
          "name": "initTermInput",
          "normalized": "Int-\u003eTerminal-\u003eIO(IO Event,IO())",
          "package": "vty",
          "partial": "Term Input",
          "signature": "Int-\u003eTerminal-\u003eIO(IO Event,IO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-LLInput.html#v:initTermInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Picture data structure is representative of the final terminal view.\n\u003c/p\u003e\u003cp\u003eThis module re-exports most of the Graphics.Vty.Image and Graphics.Vty.Attributes modules.\n\u003c/p\u003e\u003cp\u003eCopyright 2009-2010 Corey O'Connor\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.Vty.Picture",
          "name": "Picture",
          "package": "vty",
          "source": "src/Graphics-Vty-Picture.html",
          "type": "module"
        },
        "index": {
          "description": "The Picture data structure is representative of the final terminal view This module re-exports most of the Graphics.Vty.Image and Graphics.Vty.Attributes modules Copyright Corey Connor",
          "hierarchy": "Graphics Vty Picture",
          "module": "Graphics.Vty.Picture",
          "name": "Picture",
          "package": "vty",
          "partial": "Picture",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Picture.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnspecified regions are filled with the picture's background pattern.  The background pattern\n can specify a character and a display attribute. If the display attribute used previously should\n be used for a background fill then use \u003ccode\u003e\u003ca\u003ecurrent_attr\u003c/a\u003e\u003c/code\u003e for the background attribute. This is the\n default background display attribute.\n\u003c/p\u003e\u003cp\u003etodo The current attribute is always set to the default attributes at the start of updating the\n screen to a picture.\n\u003c/p\u003e\u003cp\u003etodo The background character *must* occupy a single column and no more.\n\u003c/p\u003e",
          "module": "Graphics.Vty.Picture",
          "name": "Background",
          "package": "vty",
          "source": "src/Graphics-Vty-Picture.html#Background",
          "type": "data"
        },
        "index": {
          "description": "Unspecified regions are filled with the picture background pattern The background pattern can specify character and display attribute If the display attribute used previously should be used for background fill then use current attr for the background attribute This is the default background display attribute todo The current attribute is always set to the default attributes at the start of updating the screen to picture todo The background character must occupy single column and no more",
          "hierarchy": "Graphics Vty Picture",
          "module": "Graphics.Vty.Picture",
          "name": "Background",
          "package": "vty",
          "partial": "Background",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Picture.html#t:Background"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA picture can be configured either to not show the cursor or show the cursor at the specified\n character position. \n\u003c/p\u003e\u003cp\u003eThere is not a 1 to 1 map from character positions to a row and column on the screen due to\n characters that take more than 1 column.\n\u003c/p\u003e\u003cp\u003etodo: The Cursor can be given a (character,row) offset outside of the visible bounds of the\n output region. In this case the cursor will not be shown.\n\u003c/p\u003e",
          "module": "Graphics.Vty.Picture",
          "name": "Cursor",
          "package": "vty",
          "source": "src/Graphics-Vty-Picture.html#Cursor",
          "type": "data"
        },
        "index": {
          "description": "picture can be configured either to not show the cursor or show the cursor at the specified character position There is not to map from character positions to row and column on the screen due to characters that take more than column todo The Cursor can be given character row offset outside of the visible bounds of the output region In this case the cursor will not be shown",
          "hierarchy": "Graphics Vty Picture",
          "module": "Graphics.Vty.Picture",
          "name": "Cursor",
          "package": "vty",
          "partial": "Cursor",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Picture.html#t:Cursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn image in VTY defines:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e properties required to display the image. These are properties that effect the output image\n    but are independent of position \n\u003c/li\u003e\u003cli\u003e A set of position-dependent text and attribute regions. The possible regions are:\n\u003c/li\u003e\u003cli\u003e a point. ( char )\n\u003c/li\u003e\u003cli\u003e a horizontal line of characters with a single attribute. (string, utf8_string,\n      utf8_bytestring )\n\u003c/li\u003e\u003cli\u003e a fill of a single character. (char_fill)\n\u003c/li\u003e\u003cli\u003e a fill of the picture's background. (background_fill)\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003etodo: increase the number of encoded bytestring formats supported.\n\u003c/p\u003e",
          "module": "Graphics.Vty.Picture",
          "name": "Image",
          "package": "vty",
          "source": "src/Graphics-Vty-Image.html#Image",
          "type": "data"
        },
        "index": {
          "description": "An image in VTY defines properties required to display the image These are properties that effect the output image but are independent of position set of position-dependent text and attribute regions The possible regions are point char horizontal line of characters with single attribute string utf8 string utf8 bytestring fill of single character char fill fill of the picture background background fill todo increase the number of encoded bytestring formats supported",
          "hierarchy": "Graphics Vty Picture",
          "module": "Graphics.Vty.Picture",
          "name": "Image",
          "package": "vty",
          "partial": "Image",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Picture.html#t:Image"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of images to be displayed using \u003ccode\u003eupdate\u003c/code\u003e.  \n Can be constructed directly or using \u003ccode\u003e\u003ca\u003epic_for_image\u003c/a\u003e\u003c/code\u003e. Which provides an initial instance with\n reasonable defaults for pic_cursor and pic_background.\n\u003c/p\u003e",
          "module": "Graphics.Vty.Picture",
          "name": "Picture",
          "package": "vty",
          "source": "src/Graphics-Vty-Picture.html#Picture",
          "type": "data"
        },
        "index": {
          "description": "The type of images to be displayed using update Can be constructed directly or using pic for image Which provides an initial instance with reasonable defaults for pic cursor and pic background",
          "hierarchy": "Graphics Vty Picture",
          "module": "Graphics.Vty.Picture",
          "name": "Picture",
          "package": "vty",
          "partial": "Picture",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Picture.html#t:Picture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Vty.Picture",
          "name": "Background",
          "package": "vty",
          "signature": "Background",
          "source": "src/Graphics-Vty-Picture.html#Background",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Vty Picture",
          "module": "Graphics.Vty.Picture",
          "name": "Background",
          "package": "vty",
          "partial": "Background",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Picture.html#v:Background"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Vty.Picture",
          "name": "Cursor",
          "package": "vty",
          "signature": "Cursor Word Word",
          "source": "src/Graphics-Vty-Picture.html#Cursor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Vty Picture",
          "module": "Graphics.Vty.Picture",
          "name": "Cursor",
          "package": "vty",
          "partial": "Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Picture.html#v:Cursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Vty.Picture",
          "name": "NoCursor",
          "package": "vty",
          "signature": "NoCursor",
          "source": "src/Graphics-Vty-Picture.html#Cursor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Vty Picture",
          "module": "Graphics.Vty.Picture",
          "name": "NoCursor",
          "package": "vty",
          "partial": "No Cursor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Picture.html#v:NoCursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Vty.Picture",
          "name": "Picture",
          "package": "vty",
          "signature": "Picture",
          "source": "src/Graphics-Vty-Picture.html#Picture",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Vty Picture",
          "module": "Graphics.Vty.Picture",
          "name": "Picture",
          "package": "vty",
          "partial": "Picture",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Picture.html#v:Picture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Vty.Picture",
          "name": "background_attr",
          "package": "vty",
          "signature": "Attr",
          "source": "src/Graphics-Vty-Picture.html#Background",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Vty Picture",
          "module": "Graphics.Vty.Picture",
          "name": "background_attr",
          "package": "vty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Picture.html#v:background_attr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Vty.Picture",
          "name": "background_char",
          "package": "vty",
          "signature": "Char",
          "source": "src/Graphics-Vty-Picture.html#Background",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Vty Picture",
          "module": "Graphics.Vty.Picture",
          "name": "background_char",
          "package": "vty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Picture.html#v:background_char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Vty.Picture",
          "name": "pic_background",
          "package": "vty",
          "signature": "Background",
          "source": "src/Graphics-Vty-Picture.html#Picture",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Vty Picture",
          "module": "Graphics.Vty.Picture",
          "name": "pic_background",
          "package": "vty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Picture.html#v:pic_background"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Vty.Picture",
          "name": "pic_cursor",
          "package": "vty",
          "signature": "Cursor",
          "source": "src/Graphics-Vty-Picture.html#Picture",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Vty Picture",
          "module": "Graphics.Vty.Picture",
          "name": "pic_cursor",
          "package": "vty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Picture.html#v:pic_cursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a picture for display for the given image. The picture will not have a displayed cursor\n and the background display attribute will be \u003ccode\u003e\u003ca\u003ecurrent_attr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Vty.Picture",
          "name": "pic_for_image",
          "package": "vty",
          "signature": "Image -\u003e Picture",
          "source": "src/Graphics-Vty-Picture.html#pic_for_image",
          "type": "function"
        },
        "index": {
          "description": "Create picture for display for the given image The picture will not have displayed cursor and the background display attribute will be current attr",
          "hierarchy": "Graphics Vty Picture",
          "module": "Graphics.Vty.Picture",
          "name": "pic_for_image",
          "normalized": "Image-\u003ePicture",
          "package": "vty",
          "signature": "Image-\u003ePicture",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Picture.html#v:pic_for_image"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Vty.Picture",
          "name": "pic_image",
          "package": "vty",
          "signature": "Image",
          "source": "src/Graphics-Vty-Picture.html#Picture",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Vty Picture",
          "module": "Graphics.Vty.Picture",
          "name": "pic_image",
          "package": "vty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Picture.html#v:pic_image"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Vty.Terminal",
          "name": "Terminal",
          "package": "vty",
          "source": "src/Graphics-Vty-Terminal.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics Vty Terminal",
          "module": "Graphics.Vty.Terminal",
          "name": "Terminal",
          "package": "vty",
          "partial": "Terminal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Terminal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Vty.Terminal",
          "name": "DisplayHandle",
          "package": "vty",
          "source": "src/Graphics-Vty-Terminal-Generic.html#DisplayHandle",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Vty Terminal",
          "module": "Graphics.Vty.Terminal",
          "name": "DisplayHandle",
          "package": "vty",
          "partial": "Display Handle",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Terminal.html#t:DisplayHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Vty.Terminal",
          "name": "Terminal",
          "package": "vty",
          "source": "src/Graphics-Vty-Terminal-Generic.html#Terminal",
          "type": "class"
        },
        "index": {
          "hierarchy": "Graphics Vty Terminal",
          "module": "Graphics.Vty.Terminal",
          "name": "Terminal",
          "package": "vty",
          "partial": "Terminal",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Terminal.html#t:Terminal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn handle to a terminal that hides the implementation.\n\u003c/p\u003e",
          "module": "Graphics.Vty.Terminal",
          "name": "TerminalHandle",
          "package": "vty",
          "source": "src/Graphics-Vty-Terminal-Generic.html#TerminalHandle",
          "type": "data"
        },
        "index": {
          "description": "An handle to terminal that hides the implementation",
          "hierarchy": "Graphics Vty Terminal",
          "module": "Graphics.Vty.Terminal",
          "name": "TerminalHandle",
          "package": "vty",
          "partial": "Terminal Handle",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Terminal.html#t:TerminalHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Vty.Terminal",
          "name": "DisplayHandle",
          "package": "vty",
          "signature": "d -\u003e TerminalHandle -\u003e DisplayState -\u003e DisplayHandle",
          "source": "src/Graphics-Vty-Terminal-Generic.html#DisplayHandle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Vty Terminal",
          "module": "Graphics.Vty.Terminal",
          "name": "DisplayHandle",
          "normalized": "a-\u003eTerminalHandle-\u003eDisplayState-\u003eDisplayHandle",
          "package": "vty",
          "partial": "Display Handle",
          "signature": "d-\u003eTerminalHandle-\u003eDisplayState-\u003eDisplayHandle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Terminal.html#v:DisplayHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Vty.Terminal",
          "name": "TerminalHandle",
          "package": "vty",
          "signature": "t -\u003e IORef TerminalState -\u003e TerminalHandle",
          "source": "src/Graphics-Vty-Terminal-Generic.html#TerminalHandle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Vty Terminal",
          "module": "Graphics.Vty.Terminal",
          "name": "TerminalHandle",
          "normalized": "a-\u003eIORef TerminalState-\u003eTerminalHandle",
          "package": "vty",
          "partial": "Terminal Handle",
          "signature": "t-\u003eIORef TerminalState-\u003eTerminalHandle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Terminal.html#v:TerminalHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the current display bounds.\n\u003c/p\u003e",
          "module": "Graphics.Vty.Terminal",
          "name": "display_bounds",
          "package": "vty",
          "signature": "t -\u003e m DisplayRegion",
          "source": "src/Graphics-Vty-Terminal-Generic.html#display_bounds",
          "type": "method"
        },
        "index": {
          "description": "Returns the current display bounds",
          "hierarchy": "Graphics Vty Terminal",
          "module": "Graphics.Vty.Terminal",
          "name": "display_bounds",
          "normalized": "a-\u003eb DisplayRegion",
          "package": "vty",
          "signature": "t-\u003em DisplayRegion",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Terminal.html#v:display_bounds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAcquire display access to the given region of the display.\n Currently all regions have the upper left corner of (0,0) and the lower right corner at \n (max display_width provided_width, max display_height provided_height)\n\u003c/p\u003e",
          "module": "Graphics.Vty.Terminal",
          "name": "display_context",
          "package": "vty",
          "signature": "TerminalHandle -\u003e DisplayRegion -\u003e m DisplayHandle",
          "source": "src/Graphics-Vty-Terminal-Generic.html#display_context",
          "type": "function"
        },
        "index": {
          "description": "Acquire display access to the given region of the display Currently all regions have the upper left corner of and the lower right corner at max display width provided width max display height provided height",
          "hierarchy": "Graphics Vty Terminal",
          "module": "Graphics.Vty.Terminal",
          "name": "display_context",
          "normalized": "TerminalHandle-\u003eDisplayRegion-\u003ea DisplayHandle",
          "package": "vty",
          "signature": "TerminalHandle-\u003eDisplayRegion-\u003em DisplayHandle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Terminal.html#v:display_context"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Vty.Terminal",
          "name": "display_terminal_instance",
          "package": "vty",
          "signature": "d -\u003e DisplayHandle) -\u003e m DisplayHandle",
          "source": "src/Graphics-Vty-Terminal-Generic.html#display_terminal_instance",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphics Vty Terminal",
          "module": "Graphics.Vty.Terminal",
          "name": "display_terminal_instance",
          "normalized": "a-\u003eDisplayHandle)-\u003eb DisplayHandle",
          "package": "vty",
          "signature": "d-\u003eDisplayHandle)-\u003em DisplayHandle",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Terminal.html#v:display_terminal_instance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHides the cursor\n\u003c/p\u003e",
          "module": "Graphics.Vty.Terminal",
          "name": "hide_cursor",
          "package": "vty",
          "signature": "TerminalHandle -\u003e m ()",
          "source": "src/Graphics-Vty-Terminal.html#hide_cursor",
          "type": "function"
        },
        "index": {
          "description": "Hides the cursor",
          "hierarchy": "Graphics Vty Terminal",
          "module": "Graphics.Vty.Terminal",
          "name": "hide_cursor",
          "normalized": "TerminalHandle-\u003ea()",
          "package": "vty",
          "signature": "TerminalHandle-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Terminal.html#v:hide_cursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput the byte buffer of the specified size to the terminal device.  The size is equal to\n end_ptr - start_ptr\n\u003c/p\u003e",
          "module": "Graphics.Vty.Terminal",
          "name": "output_byte_buffer",
          "package": "vty",
          "signature": "t -\u003e OutputBuffer -\u003e Word -\u003e IO ()",
          "source": "src/Graphics-Vty-Terminal-Generic.html#output_byte_buffer",
          "type": "method"
        },
        "index": {
          "description": "Output the byte buffer of the specified size to the terminal device The size is equal to end ptr start ptr",
          "hierarchy": "Graphics Vty Terminal",
          "module": "Graphics.Vty.Terminal",
          "name": "output_byte_buffer",
          "normalized": "a-\u003eOutputBuffer-\u003eWord-\u003eIO()",
          "package": "vty",
          "signature": "t-\u003eOutputBuffer-\u003eWord-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Terminal.html#v:output_byte_buffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandle of output device\n\u003c/p\u003e",
          "module": "Graphics.Vty.Terminal",
          "name": "output_handle",
          "package": "vty",
          "signature": "t -\u003e IO Handle",
          "source": "src/Graphics-Vty-Terminal-Generic.html#output_handle",
          "type": "method"
        },
        "index": {
          "description": "Handle of output device",
          "hierarchy": "Graphics Vty Terminal",
          "module": "Graphics.Vty.Terminal",
          "name": "output_handle",
          "normalized": "a-\u003eIO Handle",
          "package": "vty",
          "signature": "t-\u003eIO Handle",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Terminal.html#v:output_handle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisplays the given \u003ccode\u003e\u003ca\u003ePicture\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003col\u003e\u003cli\u003e The image is cropped to the display size. \n\u003c/li\u003e\u003cli\u003e Converted into a sequence of attribute changes and text spans.\n\u003c/li\u003e\u003cli\u003e The cursor is hidden.\n\u003c/li\u003e\u003cli\u003e Serialized to the display.\n\u003c/li\u003e\u003cli\u003e The cursor is then shown and positioned or kept hidden.\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003etodo: specify possible IO exceptions.\n abstract from IO monad to a MonadIO instance.\n\u003c/p\u003e",
          "module": "Graphics.Vty.Terminal",
          "name": "output_picture",
          "package": "vty",
          "signature": "DisplayHandle -\u003e Picture -\u003e m ()",
          "source": "src/Graphics-Vty-Terminal-Generic.html#output_picture",
          "type": "function"
        },
        "index": {
          "description": "Displays the given Picture The image is cropped to the display size Converted into sequence of attribute changes and text spans The cursor is hidden Serialized to the display The cursor is then shown and positioned or kept hidden todo specify possible IO exceptions abstract from IO monad to MonadIO instance",
          "hierarchy": "Graphics Vty Terminal",
          "module": "Graphics.Vty.Terminal",
          "name": "output_picture",
          "normalized": "DisplayHandle-\u003ePicture-\u003ea()",
          "package": "vty",
          "signature": "DisplayHandle-\u003ePicture-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Terminal.html#v:output_picture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the display to the state before reserve_display\n If no previous state then set the display state to the initial state.\n\u003c/p\u003e",
          "module": "Graphics.Vty.Terminal",
          "name": "release_display",
          "package": "vty",
          "signature": "t -\u003e m ()",
          "source": "src/Graphics-Vty-Terminal-Generic.html#release_display",
          "type": "method"
        },
        "index": {
          "description": "Return the display to the state before reserve display If no previous state then set the display state to the initial state",
          "hierarchy": "Graphics Vty Terminal",
          "module": "Graphics.Vty.Terminal",
          "name": "release_display",
          "normalized": "a-\u003eb()",
          "package": "vty",
          "signature": "t-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Terminal.html#v:release_display"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Vty.Terminal",
          "name": "release_terminal",
          "package": "vty",
          "signature": "t -\u003e m ()",
          "source": "src/Graphics-Vty-Terminal-Generic.html#release_terminal",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphics Vty Terminal",
          "module": "Graphics.Vty.Terminal",
          "name": "release_terminal",
          "normalized": "a-\u003eb()",
          "package": "vty",
          "signature": "t-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Terminal.html#v:release_terminal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClear the display and initialize the terminal to some initial display state. \n\u003c/p\u003e\u003cp\u003eThe expectation of a program is that the display starts in some initial state. \n The initial state would consist of fixed values:\n  - cursor at top left\n  - UTF-8 character encoding\n  - drawing characteristics are the default\n The abstract operation I think all these behaviors are instances of is reserving exclusive\n access to a display such that:\n  - The previous state cannot be determined\n  - When exclusive access to a display is release the display returns to the previous state.\n\u003c/p\u003e",
          "module": "Graphics.Vty.Terminal",
          "name": "reserve_display",
          "package": "vty",
          "signature": "t -\u003e m ()",
          "source": "src/Graphics-Vty-Terminal-Generic.html#reserve_display",
          "type": "method"
        },
        "index": {
          "description": "Clear the display and initialize the terminal to some initial display state The expectation of program is that the display starts in some initial state The initial state would consist of fixed values cursor at top left UTF-8 character encoding drawing characteristics are the default The abstract operation think all these behaviors are instances of is reserving exclusive access to display such that The previous state cannot be determined When exclusive access to display is release the display returns to the previous state",
          "hierarchy": "Graphics Vty Terminal",
          "module": "Graphics.Vty.Terminal",
          "name": "reserve_display",
          "normalized": "a-\u003eb()",
          "package": "vty",
          "signature": "t-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Terminal.html#v:reserve_display"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the cursor position to the given output column and row. \n\u003c/p\u003e\u003cp\u003eThis is not necessarially the same as the character position with the same coordinates.\n Characters can be a variable number of columns in width.\n\u003c/p\u003e\u003cp\u003eCurrently, the only way to set the cursor position to a given character coordinate is to specify\n the coordinate in the Picture instance provided to output_picture or refresh.\n\u003c/p\u003e",
          "module": "Graphics.Vty.Terminal",
          "name": "set_cursor_pos",
          "package": "vty",
          "signature": "TerminalHandle -\u003e Word -\u003e Word -\u003e m ()",
          "source": "src/Graphics-Vty-Terminal.html#set_cursor_pos",
          "type": "function"
        },
        "index": {
          "description": "Sets the cursor position to the given output column and row This is not necessarially the same as the character position with the same coordinates Characters can be variable number of columns in width Currently the only way to set the cursor position to given character coordinate is to specify the coordinate in the Picture instance provided to output picture or refresh",
          "hierarchy": "Graphics Vty Terminal",
          "module": "Graphics.Vty.Terminal",
          "name": "set_cursor_pos",
          "normalized": "TerminalHandle-\u003eWord-\u003eWord-\u003ea()",
          "package": "vty",
          "signature": "TerminalHandle-\u003eWord-\u003eWord-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Terminal.html#v:set_cursor_pos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShows the cursor\n\u003c/p\u003e",
          "module": "Graphics.Vty.Terminal",
          "name": "show_cursor",
          "package": "vty",
          "signature": "TerminalHandle -\u003e m ()",
          "source": "src/Graphics-Vty-Terminal.html#show_cursor",
          "type": "function"
        },
        "index": {
          "description": "Shows the cursor",
          "hierarchy": "Graphics Vty Terminal",
          "module": "Graphics.Vty.Terminal",
          "name": "show_cursor",
          "normalized": "TerminalHandle-\u003ea()",
          "package": "vty",
          "signature": "TerminalHandle-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Terminal.html#v:show_cursor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eText identifier for the terminal. Used for debugging.\n\u003c/p\u003e",
          "module": "Graphics.Vty.Terminal",
          "name": "terminal_ID",
          "package": "vty",
          "signature": "t -\u003e String",
          "source": "src/Graphics-Vty-Terminal-Generic.html#terminal_ID",
          "type": "method"
        },
        "index": {
          "description": "Text identifier for the terminal Used for debugging",
          "hierarchy": "Graphics Vty Terminal",
          "module": "Graphics.Vty.Terminal",
          "name": "terminal_ID",
          "normalized": "a-\u003eString",
          "package": "vty",
          "partial": "ID",
          "signature": "t-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Terminal.html#v:terminal_ID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a TerminalHandle (an abstract Terminal instance) for the current terminal.\n\u003c/p\u003e\u003cp\u003eThe specific Terminal implementation used is hidden from the API user. All terminal\n implementations are assumed to perform more, or less, the same. Currently all implementations use\n terminfo for at least some terminal specific information. This is why platforms without terminfo\n are not supported. However, as mentioned before, any specifics about it being based on terminfo\n are hidden from the API user.  If a terminal implementation is developed for a terminal for a\n platform without terminfo support then Vty should work as expected on that terminal.\n\u003c/p\u003e\u003cp\u003eSelection of a terminal is done as follows:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If TERM == xterm\n          then the terminal might be one of the Mac OS X .app terminals. Check if that might be\n          the case and use MacOSX if so.\n          otherwise use XTermColor.\n\u003c/li\u003e\u003cli\u003e for any other TERM value TerminfoBased is used.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe terminal has to be determined dynamically at runtime. To satisfy this requirement all\n terminals instances are lifted into an abstract terminal handle via existential qualification.\n This implies that the only equations that can used are those in the terminal class.\n\u003c/p\u003e\u003cp\u003eTo differentiate between Mac OS X terminals this uses the TERM_PROGRAM environment variable.\n However, an xterm started by Terminal or iTerm *also* has TERM_PROGRAM defined since the\n environment variable is not reset/cleared by xterm. However a Terminal.app or iTerm.app started\n from an xterm under X11 on mac os x will likely be done via open. Since this does not propogate\n environment variables (I think?) this assumes that XTERM_VERSION will never be set for a true\n Terminal.app or iTerm.app session.\n\u003c/p\u003e\u003cp\u003eThe file descriptor used for output will a duplicate of the current stdout file descriptor.\n\u003c/p\u003e\u003cp\u003etodo: add an implementation for windows that does not depend on terminfo. Should be installable\n with only what is provided in the haskell platform.\n\u003c/p\u003e\u003cp\u003etodo: The Terminal interface does not provide any input support.\n\u003c/p\u003e",
          "module": "Graphics.Vty.Terminal",
          "name": "terminal_handle",
          "package": "vty",
          "signature": "m TerminalHandle",
          "source": "src/Graphics-Vty-Terminal.html#terminal_handle",
          "type": "function"
        },
        "index": {
          "description": "Returns TerminalHandle an abstract Terminal instance for the current terminal The specific Terminal implementation used is hidden from the API user All terminal implementations are assumed to perform more or less the same Currently all implementations use terminfo for at least some terminal specific information This is why platforms without terminfo are not supported However as mentioned before any specifics about it being based on terminfo are hidden from the API user If terminal implementation is developed for terminal for platform without terminfo support then Vty should work as expected on that terminal Selection of terminal is done as follows If TERM xterm then the terminal might be one of the Mac OS app terminals Check if that might be the case and use MacOSX if so otherwise use XTermColor for any other TERM value TerminfoBased is used The terminal has to be determined dynamically at runtime To satisfy this requirement all terminals instances are lifted into an abstract terminal handle via existential qualification This implies that the only equations that can used are those in the terminal class To differentiate between Mac OS terminals this uses the TERM PROGRAM environment variable However an xterm started by Terminal or iTerm also has TERM PROGRAM defined since the environment variable is not reset cleared by xterm However Terminal.app or iTerm.app started from an xterm under X11 on mac os will likely be done via open Since this does not propogate environment variables think this assumes that XTERM VERSION will never be set for true Terminal.app or iTerm.app session The file descriptor used for output will duplicate of the current stdout file descriptor todo add an implementation for windows that does not depend on terminfo Should be installable with only what is provided in the haskell platform todo The Terminal interface does not provide any input support",
          "hierarchy": "Graphics Vty Terminal",
          "module": "Graphics.Vty.Terminal",
          "name": "terminal_handle",
          "package": "vty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty-Terminal.html#v:terminal_handle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Vty",
          "name": "Vty",
          "package": "vty",
          "source": "src/Graphics-Vty.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics Vty",
          "module": "Graphics.Vty",
          "name": "Vty",
          "package": "vty",
          "partial": "Vty",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMouse buttons.  Not yet used.\n\u003c/p\u003e",
          "module": "Graphics.Vty",
          "name": "Button",
          "package": "vty",
          "source": "src/Graphics-Vty-LLInput.html#Button",
          "type": "data"
        },
        "index": {
          "description": "Mouse buttons Not yet used",
          "hierarchy": "Graphics Vty",
          "module": "Graphics.Vty",
          "name": "Button",
          "package": "vty",
          "partial": "Button",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty.html#t:Button"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric events.\n\u003c/p\u003e",
          "module": "Graphics.Vty",
          "name": "Event",
          "package": "vty",
          "source": "src/Graphics-Vty-LLInput.html#Event",
          "type": "data"
        },
        "index": {
          "description": "Generic events",
          "hierarchy": "Graphics Vty",
          "module": "Graphics.Vty",
          "name": "Event",
          "package": "vty",
          "partial": "Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty.html#t:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentations of non-modifier keys.\n\u003c/p\u003e",
          "module": "Graphics.Vty",
          "name": "Key",
          "package": "vty",
          "source": "src/Graphics-Vty-LLInput.html#Key",
          "type": "data"
        },
        "index": {
          "description": "Representations of non-modifier keys",
          "hierarchy": "Graphics Vty",
          "module": "Graphics.Vty",
          "name": "Key",
          "package": "vty",
          "partial": "Key",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty.html#t:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModifier keys.  Key codes are interpreted such that users are more likely to\n have Meta than Alt; for instance on the PC Linux console, \u003ccode\u003e\u003ca\u003eMMeta\u003c/a\u003e\u003c/code\u003e will\n generally correspond to the physical Alt key.\n\u003c/p\u003e",
          "module": "Graphics.Vty",
          "name": "Modifier",
          "package": "vty",
          "source": "src/Graphics-Vty-LLInput.html#Modifier",
          "type": "data"
        },
        "index": {
          "description": "Modifier keys Key codes are interpreted such that users are more likely to have Meta than Alt for instance on the PC Linux console MMeta will generally correspond to the physical Alt key",
          "hierarchy": "Graphics Vty",
          "module": "Graphics.Vty",
          "name": "Modifier",
          "package": "vty",
          "partial": "Modifier",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty.html#t:Modifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe main object.  At most one should be created.\n An alternative is to use unsafePerformIO to automatically create a singleton Vty instance when\n required.\n\u003c/p\u003e\u003cp\u003eThis does not assure any thread safety. In theory, as long as an update action is not executed\n when another update action is already then it's safe to call this on multiple threads.\n\u003c/p\u003e\u003cp\u003etodo: Once the Terminal interface encompasses input this interface will be deprecated.\n Currently, just using the Terminal interface there is no support for input events.\n\u003c/p\u003e",
          "module": "Graphics.Vty",
          "name": "Vty",
          "package": "vty",
          "source": "src/Graphics-Vty.html#Vty",
          "type": "data"
        },
        "index": {
          "description": "The main object At most one should be created An alternative is to use unsafePerformIO to automatically create singleton Vty instance when required This does not assure any thread safety In theory as long as an update action is not executed when another update action is already then it safe to call this on multiple threads todo Once the Terminal interface encompasses input this interface will be deprecated Currently just using the Terminal interface there is no support for input events",
          "hierarchy": "Graphics Vty",
          "module": "Graphics.Vty",
          "name": "Vty",
          "package": "vty",
          "partial": "Vty",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty.html#t:Vty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Vty",
          "name": "Vty",
          "package": "vty",
          "signature": "Vty",
          "source": "src/Graphics-Vty.html#Vty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Vty",
          "module": "Graphics.Vty",
          "name": "Vty",
          "package": "vty",
          "partial": "Vty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty.html#v:Vty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet up the state object for using vty.  At most one state object should be\n created at a time.\n\u003c/p\u003e",
          "module": "Graphics.Vty",
          "name": "mkVty",
          "package": "vty",
          "signature": "IO Vty",
          "source": "src/Graphics-Vty.html#mkVty",
          "type": "function"
        },
        "index": {
          "description": "Set up the state object for using vty At most one state object should be created at time",
          "hierarchy": "Graphics Vty",
          "module": "Graphics.Vty",
          "name": "mkVty",
          "package": "vty",
          "partial": "Vty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty.html#v:mkVty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet up the state object for using vty.  At most one state object should be\n created at a time. The delay, in microseconds, specifies the period of time to wait for a key\n following reading ESC from the terminal before considering the ESC key press as a discrete event.\n\u003c/p\u003e",
          "module": "Graphics.Vty",
          "name": "mkVtyEscDelay",
          "package": "vty",
          "signature": "Int -\u003e IO Vty",
          "source": "src/Graphics-Vty.html#mkVtyEscDelay",
          "type": "function"
        },
        "index": {
          "description": "Set up the state object for using vty At most one state object should be created at time The delay in microseconds specifies the period of time to wait for key following reading ESC from the terminal before considering the ESC key press as discrete event",
          "hierarchy": "Graphics Vty",
          "module": "Graphics.Vty",
          "name": "mkVtyEscDelay",
          "normalized": "Int-\u003eIO Vty",
          "package": "vty",
          "partial": "Vty Esc Delay",
          "signature": "Int-\u003eIO Vty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty.html#v:mkVtyEscDelay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet one Event object, blocking if necessary.\n\u003c/p\u003e",
          "module": "Graphics.Vty",
          "name": "next_event",
          "package": "vty",
          "signature": "IO Event",
          "source": "src/Graphics-Vty.html#Vty",
          "type": "function"
        },
        "index": {
          "description": "Get one Event object blocking if necessary",
          "hierarchy": "Graphics Vty",
          "module": "Graphics.Vty",
          "name": "next_event",
          "package": "vty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty.html#v:next_event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRefresh the display. Normally the library takes care of refreshing.  Nonetheless, some\n other program might output to the terminal and mess the display.  In that case the user\n might want to force a refresh.\n\u003c/p\u003e",
          "module": "Graphics.Vty",
          "name": "refresh",
          "package": "vty",
          "signature": "IO ()",
          "source": "src/Graphics-Vty.html#Vty",
          "type": "function"
        },
        "index": {
          "description": "Refresh the display Normally the library takes care of refreshing Nonetheless some other program might output to the terminal and mess the display In that case the user might want to force refresh",
          "hierarchy": "Graphics Vty",
          "module": "Graphics.Vty",
          "name": "refresh",
          "normalized": "IO()",
          "package": "vty",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty.html#v:refresh"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClean up after vty.\n The above methods will throw an exception if executed after this is executed.\n\u003c/p\u003e",
          "module": "Graphics.Vty",
          "name": "shutdown",
          "package": "vty",
          "signature": "IO ()",
          "source": "src/Graphics-Vty.html#Vty",
          "type": "function"
        },
        "index": {
          "description": "Clean up after vty The above methods will throw an exception if executed after this is executed",
          "hierarchy": "Graphics Vty",
          "module": "Graphics.Vty",
          "name": "shutdown",
          "normalized": "IO()",
          "package": "vty",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty.html#v:shutdown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandle to the terminal interface. See \u003ccode\u003e\u003ca\u003eTerminal\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eThe use of Vty typically follows this process:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e initialize vty\n\u003c/li\u003e\u003cli\u003e use the update equation of Vty to display a picture\n\u003c/li\u003e\u003cli\u003e repeat\n\u003c/li\u003e\u003cli\u003e shutdown vty. \n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003etodo: provide a similar abstraction to Graphics.Vty.Terminal for input. Use haskeline's\n input backend for implementation.\n\u003c/p\u003e\u003cp\u003etodo: remove explicit \u003ccode\u003e\u003ca\u003eshutdown\u003c/a\u003e\u003c/code\u003e requirement. \n\u003c/p\u003e",
          "module": "Graphics.Vty",
          "name": "terminal",
          "package": "vty",
          "signature": "TerminalHandle",
          "source": "src/Graphics-Vty.html#Vty",
          "type": "function"
        },
        "index": {
          "description": "Handle to the terminal interface See Terminal The use of Vty typically follows this process initialize vty use the update equation of Vty to display picture repeat shutdown vty todo provide similar abstraction to Graphics.Vty.Terminal for input Use haskeline input backend for implementation todo remove explicit shutdown requirement",
          "hierarchy": "Graphics Vty",
          "module": "Graphics.Vty",
          "name": "terminal",
          "package": "vty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty.html#v:terminal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutputs the given Picture. Equivalent to output_picture applied to a display context\n implicitly managed by Vty.  \n\u003c/p\u003e",
          "module": "Graphics.Vty",
          "name": "update",
          "package": "vty",
          "signature": "Picture -\u003e IO ()",
          "source": "src/Graphics-Vty.html#Vty",
          "type": "function"
        },
        "index": {
          "description": "Outputs the given Picture Equivalent to output picture applied to display context implicitly managed by Vty",
          "hierarchy": "Graphics Vty",
          "module": "Graphics.Vty",
          "name": "update",
          "normalized": "Picture-\u003eIO()",
          "package": "vty",
          "signature": "Picture-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/vty/docs/Graphics-Vty.html#v:update"
      }
    }
  ]
]