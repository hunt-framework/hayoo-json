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
        "word": "FTGL"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cul\u003e\u003cli\u003e Author: Jefferson Heard (jefferson.r.heard at gmail.com)\n\u003c/li\u003e\u003cli\u003e Copyright 2008 Renaissance Computing Institute \u003ca\u003e http://www.renci.org \u003c/a\u003e \n\u003c/li\u003e\u003cli\u003e License: GNU LGPL \n\u003c/li\u003e\u003cli\u003e Compatibility GHC (I could change the data declarations to not be empty and that would make it more generally compatible, I believe)\n\u003c/li\u003e\u003cli\u003e Description: \n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eUse FreeType 2 Fonts in OpenGL.  Requires the FTGL library and FreeType libraries.\n  available at \u003ca\u003e http://ftgl.wiki.sourceforge.net/ \u003c/a\u003e . The most important functions for\n  everyday use are renderFont and the create*Font family of functions.  To render a \n  simple string inside OpenGL, assuming you have OpenGL initialized and a current \n  pen color, all you need is:\n\u003c/p\u003e\u003cpre\u003e do font \u003c- createTextureFont \"Font.ttf\"\n   setFontFaceSize font 24 72\n   renderFont font \"Hello world!\"\n\u003c/pre\u003e\u003cp\u003eFonts are rendered so that a single point is an OpenGL unit, and a point is 1:72 of\n an inch.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.Rendering.FTGL",
          "name": "FTGL",
          "package": "FTGL",
          "source": "src/Graphics-Rendering-FTGL.html",
          "type": "module"
        },
        "index": {
          "description": "Author Jefferson Heard jefferson.r.heard at gmail.com Copyright Renaissance Computing Institute http www.renci.org License GNU LGPL Compatibility GHC could change the data declarations to not be empty and that would make it more generally compatible believe Description Use FreeType Fonts in OpenGL Requires the FTGL library and FreeType libraries available at http ftgl.wiki.sourceforge.net The most important functions for everyday use are renderFont and the create Font family of functions To render simple string inside OpenGL assuming you have OpenGL initialized and current pen color all you need is do font createTextureFont Font.ttf setFontFaceSize font renderFont font Hello world Fonts are rendered so that single point is an OpenGL unit and point is of an inch",
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "FTGL",
          "package": "FTGL",
          "partial": "FTGL",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.FTGL",
          "name": "CharMap",
          "package": "FTGL",
          "source": "src/Graphics-Rendering-FTGL.html#CharMap",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "CharMap",
          "package": "FTGL",
          "partial": "Char Map",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#t:CharMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.FTGL",
          "name": "Font",
          "package": "FTGL",
          "source": "src/Graphics-Rendering-FTGL.html#Font",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "Font",
          "package": "FTGL",
          "partial": "Font",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#t:Font"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn opaque type encapsulating a font in C.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.FTGL",
          "name": "Font_Opaque",
          "package": "FTGL",
          "source": "src/Graphics-Rendering-FTGL.html#Font_Opaque",
          "type": "data"
        },
        "index": {
          "description": "An opaque type encapsulating font in",
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "Font_Opaque",
          "package": "FTGL",
          "partial": "Font Opaque",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#t:Font_Opaque"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.FTGL",
          "name": "Glyph",
          "package": "FTGL",
          "source": "src/Graphics-Rendering-FTGL.html#Glyph",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "Glyph",
          "package": "FTGL",
          "partial": "Glyph",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#t:Glyph"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn opaque type encapsulating a glyph in C.  Currently the glyph functions are unimplemented in Haskell.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.FTGL",
          "name": "Glyph_Opaque",
          "package": "FTGL",
          "source": "src/Graphics-Rendering-FTGL.html#Glyph_Opaque",
          "type": "data"
        },
        "index": {
          "description": "An opaque type encapsulating glyph in Currently the glyph functions are unimplemented in Haskell",
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "Glyph_Opaque",
          "package": "FTGL",
          "partial": "Glyph Opaque",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#t:Glyph_Opaque"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.FTGL",
          "name": "Layout",
          "package": "FTGL",
          "source": "src/Graphics-Rendering-FTGL.html#Layout",
          "type": "type"
        },
        "index": {
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "Layout",
          "package": "FTGL",
          "partial": "Layout",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#t:Layout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn opaque type encapsulating a layout in C\n\u003c/p\u003e",
          "module": "Graphics.Rendering.FTGL",
          "name": "Layout_Opaque",
          "package": "FTGL",
          "source": "src/Graphics-Rendering-FTGL.html#Layout_Opaque",
          "type": "data"
        },
        "index": {
          "description": "An opaque type encapsulating layout in",
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "Layout_Opaque",
          "package": "FTGL",
          "partial": "Layout Opaque",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#t:Layout_Opaque"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet any errors associated with a layout.\n\u003c/p\u003e\u003cp\u003eWhether or not in polygonal or extrusion mode, the font will render equally front and back\n\u003c/p\u003e",
          "module": "Graphics.Rendering.FTGL",
          "name": "RenderMode",
          "package": "FTGL",
          "source": "src/Graphics-Rendering-FTGL.html#RenderMode",
          "type": "data"
        },
        "index": {
          "description": "Get any errors associated with layout Whether or not in polygonal or extrusion mode the font will render equally front and back",
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "RenderMode",
          "package": "FTGL",
          "partial": "Render Mode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#t:RenderMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn a Layout directed render, the layout mode of the text\n\u003c/p\u003e",
          "module": "Graphics.Rendering.FTGL",
          "name": "TextAlignment",
          "package": "FTGL",
          "source": "src/Graphics-Rendering-FTGL.html#TextAlignment",
          "type": "data"
        },
        "index": {
          "description": "In Layout directed render the layout mode of the text",
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "TextAlignment",
          "package": "FTGL",
          "partial": "Text Alignment",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#t:TextAlignment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.FTGL",
          "name": "AlignCenter",
          "package": "FTGL",
          "signature": "AlignCenter",
          "source": "src/Graphics-Rendering-FTGL.html#TextAlignment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "AlignCenter",
          "package": "FTGL",
          "partial": "Align Center",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:AlignCenter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.FTGL",
          "name": "AlignLeft",
          "package": "FTGL",
          "signature": "AlignLeft",
          "source": "src/Graphics-Rendering-FTGL.html#TextAlignment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "AlignLeft",
          "package": "FTGL",
          "partial": "Align Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:AlignLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.FTGL",
          "name": "AlignRight",
          "package": "FTGL",
          "signature": "AlignRight",
          "source": "src/Graphics-Rendering-FTGL.html#TextAlignment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "AlignRight",
          "package": "FTGL",
          "partial": "Align Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:AlignRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.FTGL",
          "name": "All",
          "package": "FTGL",
          "signature": "All",
          "source": "src/Graphics-Rendering-FTGL.html#RenderMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "All",
          "package": "FTGL",
          "partial": "All",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:All"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.FTGL",
          "name": "Back",
          "package": "FTGL",
          "signature": "Back",
          "source": "src/Graphics-Rendering-FTGL.html#RenderMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "Back",
          "package": "FTGL",
          "partial": "Back",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:Back"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.FTGL",
          "name": "EncodingAdobeCustom",
          "package": "FTGL",
          "signature": "EncodingAdobeCustom",
          "source": "src/Graphics-Rendering-FTGL.html#CharMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "EncodingAdobeCustom",
          "package": "FTGL",
          "partial": "Encoding Adobe Custom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:EncodingAdobeCustom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.FTGL",
          "name": "EncodingAdobeExpert",
          "package": "FTGL",
          "signature": "EncodingAdobeExpert",
          "source": "src/Graphics-Rendering-FTGL.html#CharMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "EncodingAdobeExpert",
          "package": "FTGL",
          "partial": "Encoding Adobe Expert",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:EncodingAdobeExpert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.FTGL",
          "name": "EncodingAdobeLatin1",
          "package": "FTGL",
          "signature": "EncodingAdobeLatin1",
          "source": "src/Graphics-Rendering-FTGL.html#CharMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "EncodingAdobeLatin1",
          "package": "FTGL",
          "partial": "Encoding Adobe Latin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:EncodingAdobeLatin1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.FTGL",
          "name": "EncodingAdobeStandard",
          "package": "FTGL",
          "signature": "EncodingAdobeStandard",
          "source": "src/Graphics-Rendering-FTGL.html#CharMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "EncodingAdobeStandard",
          "package": "FTGL",
          "partial": "Encoding Adobe Standard",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:EncodingAdobeStandard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.FTGL",
          "name": "EncodingAppleRoman",
          "package": "FTGL",
          "signature": "EncodingAppleRoman",
          "source": "src/Graphics-Rendering-FTGL.html#CharMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "EncodingAppleRoman",
          "package": "FTGL",
          "partial": "Encoding Apple Roman",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:EncodingAppleRoman"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.FTGL",
          "name": "EncodingBig5",
          "package": "FTGL",
          "signature": "EncodingBig5",
          "source": "src/Graphics-Rendering-FTGL.html#CharMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "EncodingBig5",
          "package": "FTGL",
          "partial": "Encoding Big",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:EncodingBig5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.FTGL",
          "name": "EncodingGB2312",
          "package": "FTGL",
          "signature": "EncodingGB2312",
          "source": "src/Graphics-Rendering-FTGL.html#CharMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "EncodingGB2312",
          "package": "FTGL",
          "partial": "Encoding GB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:EncodingGB2312"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.FTGL",
          "name": "EncodingJohab",
          "package": "FTGL",
          "signature": "EncodingJohab",
          "source": "src/Graphics-Rendering-FTGL.html#CharMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "EncodingJohab",
          "package": "FTGL",
          "partial": "Encoding Johab",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:EncodingJohab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.FTGL",
          "name": "EncodingMSSymbol",
          "package": "FTGL",
          "signature": "EncodingMSSymbol",
          "source": "src/Graphics-Rendering-FTGL.html#CharMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "EncodingMSSymbol",
          "package": "FTGL",
          "partial": "Encoding MSSymbol",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:EncodingMSSymbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.FTGL",
          "name": "EncodingNone",
          "package": "FTGL",
          "signature": "EncodingNone",
          "source": "src/Graphics-Rendering-FTGL.html#CharMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "EncodingNone",
          "package": "FTGL",
          "partial": "Encoding None",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:EncodingNone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.FTGL",
          "name": "EncodingOldLatin2",
          "package": "FTGL",
          "signature": "EncodingOldLatin2",
          "source": "src/Graphics-Rendering-FTGL.html#CharMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "EncodingOldLatin2",
          "package": "FTGL",
          "partial": "Encoding Old Latin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:EncodingOldLatin2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.FTGL",
          "name": "EncodingSJIS",
          "package": "FTGL",
          "signature": "EncodingSJIS",
          "source": "src/Graphics-Rendering-FTGL.html#CharMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "EncodingSJIS",
          "package": "FTGL",
          "partial": "Encoding SJIS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:EncodingSJIS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.FTGL",
          "name": "EncodingUnicode",
          "package": "FTGL",
          "signature": "EncodingUnicode",
          "source": "src/Graphics-Rendering-FTGL.html#CharMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "EncodingUnicode",
          "package": "FTGL",
          "partial": "Encoding Unicode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:EncodingUnicode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.FTGL",
          "name": "EncodingWanSung",
          "package": "FTGL",
          "signature": "EncodingWanSung",
          "source": "src/Graphics-Rendering-FTGL.html#CharMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "EncodingWanSung",
          "package": "FTGL",
          "partial": "Encoding Wan Sung",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:EncodingWanSung"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.FTGL",
          "name": "Front",
          "package": "FTGL",
          "signature": "Front",
          "source": "src/Graphics-Rendering-FTGL.html#RenderMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "Front",
          "package": "FTGL",
          "partial": "Front",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:Front"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.FTGL",
          "name": "Justify",
          "package": "FTGL",
          "signature": "Justify",
          "source": "src/Graphics-Rendering-FTGL.html#TextAlignment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "Justify",
          "package": "FTGL",
          "partial": "Justify",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:Justify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.FTGL",
          "name": "Side",
          "package": "FTGL",
          "signature": "Side",
          "source": "src/Graphics-Rendering-FTGL.html#RenderMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "Side",
          "package": "FTGL",
          "partial": "Side",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:Side"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttach some external data (often kerning) to the font\n\u003c/p\u003e",
          "module": "Graphics.Rendering.FTGL",
          "name": "attachData",
          "package": "FTGL",
          "signature": "Font -\u003e Ptr () -\u003e IO ()",
          "source": "src/Graphics-Rendering-FTGL.html#attachData",
          "type": "function"
        },
        "index": {
          "description": "Attach some external data often kerning to the font",
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "attachData",
          "normalized": "Font-\u003ePtr()-\u003eIO()",
          "package": "FTGL",
          "partial": "Data",
          "signature": "Font-\u003ePtr()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:attachData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttach a metadata file to a font.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.FTGL",
          "name": "attachFile",
          "package": "FTGL",
          "signature": "Font -\u003e String -\u003e IO ()",
          "source": "src/Graphics-Rendering-FTGL.html#attachFile",
          "type": "function"
        },
        "index": {
          "description": "Attach metadata file to font",
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "attachFile",
          "normalized": "Font-\u003eString-\u003eIO()",
          "package": "FTGL",
          "partial": "File",
          "signature": "Font-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:attachFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a bitmapped version of a TrueType font.  Bitmapped versions will not\n | respond to matrix transformations, but rather must be transformed using the\n | raster positioning functions in OpenGL\n\u003c/p\u003e",
          "module": "Graphics.Rendering.FTGL",
          "name": "createBitmapFont",
          "package": "FTGL",
          "signature": "String -\u003e IO Font",
          "source": "src/Graphics-Rendering-FTGL.html#createBitmapFont",
          "type": "function"
        },
        "index": {
          "description": "Create bitmapped version of TrueType font Bitmapped versions will not respond to matrix transformations but rather must be transformed using the raster positioning functions in OpenGL",
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "createBitmapFont",
          "normalized": "String-\u003eIO Font",
          "package": "FTGL",
          "partial": "Bitmap Font",
          "signature": "String-\u003eIO Font",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:createBitmapFont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a buffered version of a TrueType font. This stores the entirety of\n | a string in a texture, \u003ca\u003ebuffering\u003c/a\u003e it before rendering.  Very fast if you\n | will be repeatedly rendering the same strings over and over.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.FTGL",
          "name": "createBufferFont",
          "package": "FTGL",
          "signature": "String -\u003e IO Font",
          "source": "src/Graphics-Rendering-FTGL.html#createBufferFont",
          "type": "function"
        },
        "index": {
          "description": "Create buffered version of TrueType font This stores the entirety of string in texture buffering it before rendering Very fast if you will be repeatedly rendering the same strings over and over",
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "createBufferFont",
          "normalized": "String-\u003eIO Font",
          "package": "FTGL",
          "partial": "Buffer Font",
          "signature": "String-\u003eIO Font",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:createBufferFont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a 3D extruded font.  This is the only way of creating 3D fonts \n | within FTGL.  Could be fun to use a geometry shader to get different\n | effects by warping the otherwise square nature of the font.  Polygonal.\n | Scales without losing quality.  Slower than all other fonts.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.FTGL",
          "name": "createExtrudeFont",
          "package": "FTGL",
          "signature": "String -\u003e IO Font",
          "source": "src/Graphics-Rendering-FTGL.html#createExtrudeFont",
          "type": "function"
        },
        "index": {
          "description": "Create extruded font This is the only way of creating fonts within FTGL Could be fun to use geometry shader to get different effects by warping the otherwise square nature of the font Polygonal Scales without losing quality Slower than all other fonts",
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "createExtrudeFont",
          "normalized": "String-\u003eIO Font",
          "package": "FTGL",
          "partial": "Extrude Font",
          "signature": "String-\u003eIO Font",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:createExtrudeFont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an outline version of a TrueType font. This uses actual geometry\n | and will scale independently without loss of quality.  Faster than polygons\n | but slower than texture or buffer fonts.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.FTGL",
          "name": "createOutlineFont",
          "package": "FTGL",
          "signature": "String -\u003e IO Font",
          "source": "src/Graphics-Rendering-FTGL.html#createOutlineFont",
          "type": "function"
        },
        "index": {
          "description": "Create an outline version of TrueType font This uses actual geometry and will scale independently without loss of quality Faster than polygons but slower than texture or buffer fonts",
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "createOutlineFont",
          "normalized": "String-\u003eIO Font",
          "package": "FTGL",
          "partial": "Outline Font",
          "signature": "String-\u003eIO Font",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:createOutlineFont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a pixmap version of a TrueType font.  Higher quality than the bitmap\n | font without losing any performance.  Use this if you don't mind using\n | set and get RasterPosition.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.FTGL",
          "name": "createPixmapFont",
          "package": "FTGL",
          "signature": "String -\u003e IO Font",
          "source": "src/Graphics-Rendering-FTGL.html#createPixmapFont",
          "type": "function"
        },
        "index": {
          "description": "Create pixmap version of TrueType font Higher quality than the bitmap font without losing any performance Use this if you don mind using set and get RasterPosition",
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "createPixmapFont",
          "normalized": "String-\u003eIO Font",
          "package": "FTGL",
          "partial": "Pixmap Font",
          "signature": "String-\u003eIO Font",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:createPixmapFont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate polygonal display list fonts.  These scale independently without\n | losing quality, unlike texture or buffer fonts, but can be impractical\n | for large amounts of text because of the high number of polygons needed.\n | Additionally, they do not, unlike the textured fonts, create artifacts\n | within the square formed at the edge of each character.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.FTGL",
          "name": "createPolygonFont",
          "package": "FTGL",
          "signature": "String -\u003e IO Font",
          "source": "src/Graphics-Rendering-FTGL.html#createPolygonFont",
          "type": "function"
        },
        "index": {
          "description": "Create polygonal display list fonts These scale independently without losing quality unlike texture or buffer fonts but can be impractical for large amounts of text because of the high number of polygons needed Additionally they do not unlike the textured fonts create artifacts within the square formed at the edge of each character",
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "createPolygonFont",
          "normalized": "String-\u003eIO Font",
          "package": "FTGL",
          "partial": "Polygon Font",
          "signature": "String-\u003eIO Font",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:createPolygonFont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a simple layout\n\u003c/p\u003e",
          "module": "Graphics.Rendering.FTGL",
          "name": "createSimpleLayout",
          "package": "FTGL",
          "signature": "IO Layout",
          "source": "src/Graphics-Rendering-FTGL.html#createSimpleLayout",
          "type": "function"
        },
        "index": {
          "description": "Create simple layout",
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "createSimpleLayout",
          "package": "FTGL",
          "partial": "Simple Layout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:createSimpleLayout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate textured display list fonts.  These can scale somewhat well, \n | but lose quality quickly.  They are much faster than polygonal fonts, \n | though, so are suitable for large quantities of text.  Especially suited\n | well to text that changes with most frames, because it doesn't incur the\n | (normally helpful) overhead of buffering.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.FTGL",
          "name": "createTextureFont",
          "package": "FTGL",
          "signature": "String -\u003e IO Font",
          "source": "src/Graphics-Rendering-FTGL.html#createTextureFont",
          "type": "function"
        },
        "index": {
          "description": "Create textured display list fonts These can scale somewhat well but lose quality quickly They are much faster than polygonal fonts though so are suitable for large quantities of text Especially suited well to text that changes with most frames because it doesn incur the normally helpful overhead of buffering",
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "createTextureFont",
          "normalized": "String-\u003eIO Font",
          "package": "FTGL",
          "partial": "Texture Font",
          "signature": "String-\u003eIO Font",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:createTextureFont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDestroy a font\n\u003c/p\u003e",
          "module": "Graphics.Rendering.FTGL",
          "name": "destroyFont",
          "package": "FTGL",
          "signature": "Font -\u003e IO ()",
          "source": "src/Graphics-Rendering-FTGL.html#destroyFont",
          "type": "function"
        },
        "index": {
          "description": "Destroy font",
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "destroyFont",
          "normalized": "Font-\u003eIO()",
          "package": "FTGL",
          "partial": "Font",
          "signature": "Font-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:destroyFont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.FTGL",
          "name": "destroyLayout",
          "package": "FTGL",
          "signature": "Layout -\u003e IO ()",
          "source": "src/Graphics-Rendering-FTGL.html#destroyLayout",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "destroyLayout",
          "normalized": "Layout-\u003eIO()",
          "package": "FTGL",
          "partial": "Layout",
          "signature": "Layout-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:destroyLayout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.FTGL",
          "name": "encodeTag",
          "package": "FTGL",
          "signature": "Char -\u003e Char -\u003e Char -\u003e Char -\u003e CInt",
          "source": "src/Graphics-Rendering-FTGL.html#encodeTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "encodeTag",
          "normalized": "Char-\u003eChar-\u003eChar-\u003eChar-\u003eCInt",
          "package": "FTGL",
          "partial": "Tag",
          "signature": "Char-\u003eChar-\u003eChar-\u003eChar-\u003eCInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:encodeTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.FTGL",
          "name": "fattachFile",
          "package": "FTGL",
          "signature": "Font -\u003e CString -\u003e IO ()",
          "source": "src/Graphics-Rendering-FTGL.html#fattachFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "fattachFile",
          "normalized": "Font-\u003eCString-\u003eIO()",
          "package": "FTGL",
          "partial": "File",
          "signature": "Font-\u003eCString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:fattachFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.FTGL",
          "name": "fcreateBitmapFont",
          "package": "FTGL",
          "signature": "CString -\u003e IO Font",
          "source": "src/Graphics-Rendering-FTGL.html#fcreateBitmapFont",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "fcreateBitmapFont",
          "normalized": "CString-\u003eIO Font",
          "package": "FTGL",
          "partial": "Bitmap Font",
          "signature": "CString-\u003eIO Font",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:fcreateBitmapFont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.FTGL",
          "name": "fcreateBufferFont",
          "package": "FTGL",
          "signature": "CString -\u003e IO Font",
          "source": "src/Graphics-Rendering-FTGL.html#fcreateBufferFont",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "fcreateBufferFont",
          "normalized": "CString-\u003eIO Font",
          "package": "FTGL",
          "partial": "Buffer Font",
          "signature": "CString-\u003eIO Font",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:fcreateBufferFont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.FTGL",
          "name": "fcreateExtrudeFont",
          "package": "FTGL",
          "signature": "CString -\u003e IO Font",
          "source": "src/Graphics-Rendering-FTGL.html#fcreateExtrudeFont",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "fcreateExtrudeFont",
          "normalized": "CString-\u003eIO Font",
          "package": "FTGL",
          "partial": "Extrude Font",
          "signature": "CString-\u003eIO Font",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:fcreateExtrudeFont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.FTGL",
          "name": "fcreateOutlineFont",
          "package": "FTGL",
          "signature": "CString -\u003e IO Font",
          "source": "src/Graphics-Rendering-FTGL.html#fcreateOutlineFont",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "fcreateOutlineFont",
          "normalized": "CString-\u003eIO Font",
          "package": "FTGL",
          "partial": "Outline Font",
          "signature": "CString-\u003eIO Font",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:fcreateOutlineFont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.FTGL",
          "name": "fcreatePixmapFont",
          "package": "FTGL",
          "signature": "CString -\u003e IO Font",
          "source": "src/Graphics-Rendering-FTGL.html#fcreatePixmapFont",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "fcreatePixmapFont",
          "normalized": "CString-\u003eIO Font",
          "package": "FTGL",
          "partial": "Pixmap Font",
          "signature": "CString-\u003eIO Font",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:fcreatePixmapFont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.FTGL",
          "name": "fcreatePolygonFont",
          "package": "FTGL",
          "signature": "CString -\u003e IO Font",
          "source": "src/Graphics-Rendering-FTGL.html#fcreatePolygonFont",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "fcreatePolygonFont",
          "normalized": "CString-\u003eIO Font",
          "package": "FTGL",
          "partial": "Polygon Font",
          "signature": "CString-\u003eIO Font",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:fcreatePolygonFont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.FTGL",
          "name": "fcreateTextureFont",
          "package": "FTGL",
          "signature": "CString -\u003e IO Font",
          "source": "src/Graphics-Rendering-FTGL.html#fcreateTextureFont",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "fcreateTextureFont",
          "normalized": "CString-\u003eIO Font",
          "package": "FTGL",
          "partial": "Texture Font",
          "signature": "CString-\u003eIO Font",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:fcreateTextureFont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.FTGL",
          "name": "fgetFontAdvance",
          "package": "FTGL",
          "signature": "Font -\u003e CString -\u003e IO CFloat",
          "source": "src/Graphics-Rendering-FTGL.html#fgetFontAdvance",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "fgetFontAdvance",
          "normalized": "Font-\u003eCString-\u003eIO CFloat",
          "package": "FTGL",
          "partial": "Font Advance",
          "signature": "Font-\u003eCString-\u003eIO CFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:fgetFontAdvance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.FTGL",
          "name": "fgetFontAscender",
          "package": "FTGL",
          "signature": "Font -\u003e CFloat",
          "source": "src/Graphics-Rendering-FTGL.html#fgetFontAscender",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "fgetFontAscender",
          "normalized": "Font-\u003eCFloat",
          "package": "FTGL",
          "partial": "Font Ascender",
          "signature": "Font-\u003eCFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:fgetFontAscender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.FTGL",
          "name": "fgetFontBBox",
          "package": "FTGL",
          "signature": "Font -\u003e CString -\u003e Int -\u003e Ptr CFloat -\u003e IO ()",
          "source": "src/Graphics-Rendering-FTGL.html#fgetFontBBox",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "fgetFontBBox",
          "normalized": "Font-\u003eCString-\u003eInt-\u003ePtr CFloat-\u003eIO()",
          "package": "FTGL",
          "partial": "Font BBox",
          "signature": "Font-\u003eCString-\u003eInt-\u003ePtr CFloat-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:fgetFontBBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.FTGL",
          "name": "fgetFontCharMapCount",
          "package": "FTGL",
          "signature": "Font -\u003e IO CInt",
          "source": "src/Graphics-Rendering-FTGL.html#fgetFontCharMapCount",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "fgetFontCharMapCount",
          "normalized": "Font-\u003eIO CInt",
          "package": "FTGL",
          "partial": "Font Char Map Count",
          "signature": "Font-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:fgetFontCharMapCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.FTGL",
          "name": "fgetFontCharMapList",
          "package": "FTGL",
          "signature": "Font -\u003e IO (Ptr CInt)",
          "source": "src/Graphics-Rendering-FTGL.html#fgetFontCharMapList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "fgetFontCharMapList",
          "normalized": "Font-\u003eIO(Ptr CInt)",
          "package": "FTGL",
          "partial": "Font Char Map List",
          "signature": "Font-\u003eIO(Ptr CInt)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:fgetFontCharMapList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.FTGL",
          "name": "fgetFontDescender",
          "package": "FTGL",
          "signature": "Font -\u003e CFloat",
          "source": "src/Graphics-Rendering-FTGL.html#fgetFontDescender",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "fgetFontDescender",
          "normalized": "Font-\u003eCFloat",
          "package": "FTGL",
          "partial": "Font Descender",
          "signature": "Font-\u003eCFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:fgetFontDescender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.FTGL",
          "name": "fgetFontError",
          "package": "FTGL",
          "signature": "Font -\u003e IO CInt",
          "source": "src/Graphics-Rendering-FTGL.html#fgetFontError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "fgetFontError",
          "normalized": "Font-\u003eIO CInt",
          "package": "FTGL",
          "partial": "Font Error",
          "signature": "Font-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:fgetFontError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.FTGL",
          "name": "fgetFontFaceSize",
          "package": "FTGL",
          "signature": "Font -\u003e IO CInt",
          "source": "src/Graphics-Rendering-FTGL.html#fgetFontFaceSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "fgetFontFaceSize",
          "normalized": "Font-\u003eIO CInt",
          "package": "FTGL",
          "partial": "Font Face Size",
          "signature": "Font-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:fgetFontFaceSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.FTGL",
          "name": "fgetFontLineHeight",
          "package": "FTGL",
          "signature": "Font -\u003e CFloat",
          "source": "src/Graphics-Rendering-FTGL.html#fgetFontLineHeight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "fgetFontLineHeight",
          "normalized": "Font-\u003eCFloat",
          "package": "FTGL",
          "partial": "Font Line Height",
          "signature": "Font-\u003eCFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:fgetFontLineHeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the layout alignment\n\u003c/p\u003e",
          "module": "Graphics.Rendering.FTGL",
          "name": "fgetLayoutAlignment",
          "package": "FTGL",
          "signature": "Layout -\u003e IO CInt",
          "source": "src/Graphics-Rendering-FTGL.html#fgetLayoutAlignment",
          "type": "function"
        },
        "index": {
          "description": "Set the layout alignment",
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "fgetLayoutAlignment",
          "normalized": "Layout-\u003eIO CInt",
          "package": "FTGL",
          "partial": "Layout Alignment",
          "signature": "Layout-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:fgetLayoutAlignment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender a string of text within a layout.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.FTGL",
          "name": "fgetLayoutError",
          "package": "FTGL",
          "signature": "Layout -\u003e IO CInt",
          "source": "src/Graphics-Rendering-FTGL.html#fgetLayoutError",
          "type": "function"
        },
        "index": {
          "description": "Render string of text within layout",
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "fgetLayoutError",
          "normalized": "Layout-\u003eIO CInt",
          "package": "FTGL",
          "partial": "Layout Error",
          "signature": "Layout-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:fgetLayoutError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.FTGL",
          "name": "fgetLayoutFont",
          "package": "FTGL",
          "signature": "Layout -\u003e IO Font",
          "source": "src/Graphics-Rendering-FTGL.html#fgetLayoutFont",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "fgetLayoutFont",
          "normalized": "Layout-\u003eIO Font",
          "package": "FTGL",
          "partial": "Layout Font",
          "signature": "Layout-\u003eIO Font",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:fgetLayoutFont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.FTGL",
          "name": "fgetLayoutLineLength",
          "package": "FTGL",
          "signature": "Layout -\u003e IO CFloat",
          "source": "src/Graphics-Rendering-FTGL.html#fgetLayoutLineLength",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "fgetLayoutLineLength",
          "normalized": "Layout-\u003eIO CFloat",
          "package": "FTGL",
          "partial": "Layout Line Length",
          "signature": "Layout-\u003eIO CFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:fgetLayoutLineLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.FTGL",
          "name": "frenderFont",
          "package": "FTGL",
          "signature": "Font -\u003e CString -\u003e CInt -\u003e IO ()",
          "source": "src/Graphics-Rendering-FTGL.html#frenderFont",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "frenderFont",
          "normalized": "Font-\u003eCString-\u003eCInt-\u003eIO()",
          "package": "FTGL",
          "partial": "Font",
          "signature": "Font-\u003eCString-\u003eCInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:frenderFont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.FTGL",
          "name": "frenderLayout",
          "package": "FTGL",
          "signature": "Layout -\u003e CString -\u003e IO ()",
          "source": "src/Graphics-Rendering-FTGL.html#frenderLayout",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "frenderLayout",
          "normalized": "Layout-\u003eCString-\u003eIO()",
          "package": "FTGL",
          "partial": "Layout",
          "signature": "Layout-\u003eCString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:frenderLayout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the font's character map\n\u003c/p\u003e",
          "module": "Graphics.Rendering.FTGL",
          "name": "fsetFontCharMap",
          "package": "FTGL",
          "signature": "Font -\u003e CInt -\u003e IO ()",
          "source": "src/Graphics-Rendering-FTGL.html#fsetFontCharMap",
          "type": "function"
        },
        "index": {
          "description": "Set the font character map",
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "fsetFontCharMap",
          "normalized": "Font-\u003eCInt-\u003eIO()",
          "package": "FTGL",
          "partial": "Font Char Map",
          "signature": "Font-\u003eCInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:fsetFontCharMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.FTGL",
          "name": "fsetFontDepth",
          "package": "FTGL",
          "signature": "Font -\u003e CFloat -\u003e IO ()",
          "source": "src/Graphics-Rendering-FTGL.html#fsetFontDepth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "fsetFontDepth",
          "normalized": "Font-\u003eCFloat-\u003eIO()",
          "package": "FTGL",
          "partial": "Font Depth",
          "signature": "Font-\u003eCFloat-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:fsetFontDepth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the different character mappings available in this font.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.FTGL",
          "name": "fsetFontFaceSize",
          "package": "FTGL",
          "signature": "Font -\u003e CInt -\u003e CInt -\u003e IO CInt",
          "source": "src/Graphics-Rendering-FTGL.html#fsetFontFaceSize",
          "type": "function"
        },
        "index": {
          "description": "Get the different character mappings available in this font",
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "fsetFontFaceSize",
          "normalized": "Font-\u003eCInt-\u003eCInt-\u003eIO CInt",
          "package": "FTGL",
          "partial": "Font Face Size",
          "signature": "Font-\u003eCInt-\u003eCInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:fsetFontFaceSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.FTGL",
          "name": "fsetFontOutset",
          "package": "FTGL",
          "signature": "Font -\u003e CFloat -\u003e CFloat -\u003e IO ()",
          "source": "src/Graphics-Rendering-FTGL.html#fsetFontOutset",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "fsetFontOutset",
          "normalized": "Font-\u003eCFloat-\u003eCFloat-\u003eIO()",
          "package": "FTGL",
          "partial": "Font Outset",
          "signature": "Font-\u003eCFloat-\u003eCFloat-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:fsetFontOutset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.FTGL",
          "name": "fsetLayoutAlignment",
          "package": "FTGL",
          "signature": "Layout -\u003e CInt -\u003e IO ()",
          "source": "src/Graphics-Rendering-FTGL.html#fsetLayoutAlignment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "fsetLayoutAlignment",
          "normalized": "Layout-\u003eCInt-\u003eIO()",
          "package": "FTGL",
          "partial": "Layout Alignment",
          "signature": "Layout-\u003eCInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:fsetLayoutAlignment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the alignment of text in this layout.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.FTGL",
          "name": "fsetLayoutLineSpacing",
          "package": "FTGL",
          "signature": "Layout -\u003e CFloat -\u003e IO ()",
          "source": "src/Graphics-Rendering-FTGL.html#fsetLayoutLineSpacing",
          "type": "function"
        },
        "index": {
          "description": "Get the alignment of text in this layout",
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "fsetLayoutLineSpacing",
          "normalized": "Layout-\u003eCFloat-\u003eIO()",
          "package": "FTGL",
          "partial": "Layout Line Spacing",
          "signature": "Layout-\u003eCFloat-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:fsetLayoutLineSpacing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the horizontal span of a string of text using the current font.  Input as the xcoord\n | in any translate operation\n\u003c/p\u003e",
          "module": "Graphics.Rendering.FTGL",
          "name": "getFontAdvance",
          "package": "FTGL",
          "signature": "Font -\u003e String -\u003e IO Float",
          "source": "src/Graphics-Rendering-FTGL.html#getFontAdvance",
          "type": "function"
        },
        "index": {
          "description": "Get the horizontal span of string of text using the current font Input as the xcoord in any translate operation",
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "getFontAdvance",
          "normalized": "Font-\u003eString-\u003eIO Float",
          "package": "FTGL",
          "partial": "Font Advance",
          "signature": "Font-\u003eString-\u003eIO Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:getFontAdvance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the global ascender height for the face. \n\u003c/p\u003e",
          "module": "Graphics.Rendering.FTGL",
          "name": "getFontAscender",
          "package": "FTGL",
          "signature": "Font -\u003e Float",
          "source": "src/Graphics-Rendering-FTGL.html#getFontAscender",
          "type": "function"
        },
        "index": {
          "description": "Get the global ascender height for the face",
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "getFontAscender",
          "normalized": "Font-\u003eFloat",
          "package": "FTGL",
          "partial": "Font Ascender",
          "signature": "Font-\u003eFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:getFontAscender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the text extents of a string as a list of (llx,lly,lly,urx,ury,urz)\n\u003c/p\u003e",
          "module": "Graphics.Rendering.FTGL",
          "name": "getFontBBox",
          "package": "FTGL",
          "signature": "Font -\u003e String -\u003e IO [Float]",
          "source": "src/Graphics-Rendering-FTGL.html#getFontBBox",
          "type": "function"
        },
        "index": {
          "description": "Get the text extents of string as list of llx lly lly urx ury urz",
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "getFontBBox",
          "normalized": "Font-\u003eString-\u003eIO[Float]",
          "package": "FTGL",
          "partial": "Font BBox",
          "signature": "Font-\u003eString-\u003eIO[Float]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:getFontBBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the number of characters loaded into the current charmap for the font.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.FTGL",
          "name": "getFontCharMapCount",
          "package": "FTGL",
          "signature": "Font -\u003e Int",
          "source": "src/Graphics-Rendering-FTGL.html#getFontCharMapCount",
          "type": "function"
        },
        "index": {
          "description": "Get the number of characters loaded into the current charmap for the font",
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "getFontCharMapCount",
          "normalized": "Font-\u003eInt",
          "package": "FTGL",
          "partial": "Font Char Map Count",
          "signature": "Font-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:getFontCharMapCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the global descender height for the face. \n\u003c/p\u003e",
          "module": "Graphics.Rendering.FTGL",
          "name": "getFontDescender",
          "package": "FTGL",
          "signature": "Font -\u003e Float",
          "source": "src/Graphics-Rendering-FTGL.html#getFontDescender",
          "type": "function"
        },
        "index": {
          "description": "Gets the global descender height for the face",
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "getFontDescender",
          "normalized": "Font-\u003eFloat",
          "package": "FTGL",
          "partial": "Font Descender",
          "signature": "Font-\u003eFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:getFontDescender"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet any errors associated with loading a font. FIXME return should be a type, not an Int.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.FTGL",
          "name": "getFontError",
          "package": "FTGL",
          "signature": "Font -\u003e IO Int",
          "source": "src/Graphics-Rendering-FTGL.html#getFontError",
          "type": "function"
        },
        "index": {
          "description": "Get any errors associated with loading font FIXME return should be type not an Int",
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "getFontError",
          "normalized": "Font-\u003eIO Int",
          "package": "FTGL",
          "partial": "Font Error",
          "signature": "Font-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:getFontError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the current font face size in points.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.FTGL",
          "name": "getFontFaceSize",
          "package": "FTGL",
          "signature": "Font -\u003e IO Int",
          "source": "src/Graphics-Rendering-FTGL.html#getFontFaceSize",
          "type": "function"
        },
        "index": {
          "description": "Get the current font face size in points",
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "getFontFaceSize",
          "normalized": "Font-\u003eIO Int",
          "package": "FTGL",
          "partial": "Font Face Size",
          "signature": "Font-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:getFontFaceSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the global line spacing for the face. \n\u003c/p\u003e",
          "module": "Graphics.Rendering.FTGL",
          "name": "getFontLineHeight",
          "package": "FTGL",
          "signature": "Font -\u003e Float",
          "source": "src/Graphics-Rendering-FTGL.html#getFontLineHeight",
          "type": "function"
        },
        "index": {
          "description": "Gets the global line spacing for the face",
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "getFontLineHeight",
          "normalized": "Font-\u003eFloat",
          "package": "FTGL",
          "partial": "Font Line Height",
          "signature": "Font-\u003eFloat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:getFontLineHeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the line length in points (1:72in) of lines in the layout\n\u003c/p\u003e",
          "module": "Graphics.Rendering.FTGL",
          "name": "getLayoutLineLength",
          "package": "FTGL",
          "signature": "Layout -\u003e IO Float",
          "source": "src/Graphics-Rendering-FTGL.html#getLayoutLineLength",
          "type": "function"
        },
        "index": {
          "description": "Get the line length in points in of lines in the layout",
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "getLayoutLineLength",
          "normalized": "Layout-\u003eIO Float",
          "package": "FTGL",
          "partial": "Layout Line Length",
          "signature": "Layout-\u003eIO Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:getLayoutLineLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.FTGL",
          "name": "marshalRenderMode",
          "package": "FTGL",
          "signature": "RenderMode -\u003e CInt",
          "source": "src/Graphics-Rendering-FTGL.html#marshalRenderMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "marshalRenderMode",
          "normalized": "RenderMode-\u003eCInt",
          "package": "FTGL",
          "partial": "Render Mode",
          "signature": "RenderMode-\u003eCInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:marshalRenderMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.FTGL",
          "name": "marshalTextAlignment",
          "package": "FTGL",
          "signature": "TextAlignment -\u003e CInt",
          "source": "src/Graphics-Rendering-FTGL.html#marshalTextAlignment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "marshalTextAlignment",
          "normalized": "TextAlignment-\u003eCInt",
          "package": "FTGL",
          "partial": "Text Alignment",
          "signature": "TextAlignment-\u003eCInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:marshalTextAlignment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.FTGL",
          "name": "readTextAlignment",
          "package": "FTGL",
          "signature": "CInt -\u003e TextAlignment",
          "source": "src/Graphics-Rendering-FTGL.html#readTextAlignment",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "readTextAlignment",
          "normalized": "CInt-\u003eTextAlignment",
          "package": "FTGL",
          "partial": "Text Alignment",
          "signature": "CInt-\u003eTextAlignment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:readTextAlignment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender a string of text in the current font.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.FTGL",
          "name": "renderFont",
          "package": "FTGL",
          "signature": "Font -\u003e String -\u003e RenderMode -\u003e IO ()",
          "source": "src/Graphics-Rendering-FTGL.html#renderFont",
          "type": "function"
        },
        "index": {
          "description": "Render string of text in the current font",
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "renderFont",
          "normalized": "Font-\u003eString-\u003eRenderMode-\u003eIO()",
          "package": "FTGL",
          "partial": "Font",
          "signature": "Font-\u003eString-\u003eRenderMode-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:renderFont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.FTGL",
          "name": "setCharMap",
          "package": "FTGL",
          "signature": "Font -\u003e CharMap -\u003e IO ()",
          "source": "src/Graphics-Rendering-FTGL.html#setCharMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "setCharMap",
          "normalized": "Font-\u003eCharMap-\u003eIO()",
          "package": "FTGL",
          "partial": "Char Map",
          "signature": "Font-\u003eCharMap-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:setCharMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.FTGL",
          "name": "setFontDepth",
          "package": "FTGL",
          "signature": "Font -\u003e Float -\u003e IO ()",
          "source": "src/Graphics-Rendering-FTGL.html#setFontDepth",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "setFontDepth",
          "normalized": "Font-\u003eFloat-\u003eIO()",
          "package": "FTGL",
          "partial": "Font Depth",
          "signature": "Font-\u003eFloat-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:setFontDepth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.FTGL",
          "name": "setFontFaceSize",
          "package": "FTGL",
          "signature": "Font -\u003e Int -\u003e Int -\u003e IO CInt",
          "source": "src/Graphics-Rendering-FTGL.html#setFontFaceSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "setFontFaceSize",
          "normalized": "Font-\u003eInt-\u003eInt-\u003eIO CInt",
          "package": "FTGL",
          "partial": "Font Face Size",
          "signature": "Font-\u003eInt-\u003eInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:setFontFaceSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Rendering.FTGL",
          "name": "setFontOutset",
          "package": "FTGL",
          "signature": "Font -\u003e Float -\u003e Float -\u003e IO ()",
          "source": "src/Graphics-Rendering-FTGL.html#setFontOutset",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "setFontOutset",
          "normalized": "Font-\u003eFloat-\u003eFloat-\u003eIO()",
          "package": "FTGL",
          "partial": "Font Outset",
          "signature": "Font-\u003eFloat-\u003eFloat-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:setFontOutset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the layout's font.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.FTGL",
          "name": "setLayoutFont",
          "package": "FTGL",
          "signature": "Layout -\u003e Font -\u003e IO ()",
          "source": "src/Graphics-Rendering-FTGL.html#setLayoutFont",
          "type": "function"
        },
        "index": {
          "description": "Set the layout font",
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "setLayoutFont",
          "normalized": "Layout-\u003eFont-\u003eIO()",
          "package": "FTGL",
          "partial": "Layout Font",
          "signature": "Layout-\u003eFont-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:setLayoutFont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the embedded font from the Layout\n\u003c/p\u003e\u003cp\u003eSet the line length, I believe in OpenGL units, although I'm not sure.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.FTGL",
          "name": "setLayoutLineLength",
          "package": "FTGL",
          "signature": "Layout -\u003e CFloat -\u003e IO ()",
          "source": "src/Graphics-Rendering-FTGL.html#setLayoutLineLength",
          "type": "function"
        },
        "index": {
          "description": "Get the embedded font from the Layout Set the line length believe in OpenGL units although not sure",
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "setLayoutLineLength",
          "normalized": "Layout-\u003eCFloat-\u003eIO()",
          "package": "FTGL",
          "partial": "Layout Line Length",
          "signature": "Layout-\u003eCFloat-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:setLayoutLineLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet layout line spacing in OpenGL units.\n\u003c/p\u003e",
          "module": "Graphics.Rendering.FTGL",
          "name": "setLayoutLineSpacing",
          "package": "FTGL",
          "signature": "Layout -\u003e Float -\u003e IO ()",
          "source": "src/Graphics-Rendering-FTGL.html#setLayoutLineSpacing",
          "type": "function"
        },
        "index": {
          "description": "Set layout line spacing in OpenGL units",
          "hierarchy": "Graphics Rendering FTGL",
          "module": "Graphics.Rendering.FTGL",
          "name": "setLayoutLineSpacing",
          "normalized": "Layout-\u003eFloat-\u003eIO()",
          "package": "FTGL",
          "partial": "Layout Line Spacing",
          "signature": "Layout-\u003eFloat-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:setLayoutLineSpacing"
      }
    }
  ]
]