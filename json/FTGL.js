[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cul\u003e\u003cli\u003e Author: Jefferson Heard (jefferson.r.heard at gmail.com)\n\u003c/li\u003e\u003cli\u003e Copyright 2008 Renaissance Computing Institute \u003ca\u003e http://www.renci.org \u003c/a\u003e \n\u003c/li\u003e\u003cli\u003e License: GNU LGPL \n\u003c/li\u003e\u003cli\u003e Compatibility GHC (I could change the data declarations to not be empty and that would make it more generally compatible, I believe)\n\u003c/li\u003e\u003cli\u003e Description: \n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eUse FreeType 2 Fonts in OpenGL.  Requires the FTGL library and FreeType libraries.\n  available at \u003ca\u003e http://ftgl.wiki.sourceforge.net/ \u003c/a\u003e . The most important functions for\n  everyday use are renderFont and the create*Font family of functions.  To render a \n  simple string inside OpenGL, assuming you have OpenGL initialized and a current \n  pen color, all you need is:\n\u003c/p\u003e\u003cpre\u003e do font \u003c- createTextureFont \"Font.ttf\"\n   setFontFaceSize font 24 72\n   renderFont font \"Hello world!\"\n\u003c/pre\u003e\u003cp\u003eFonts are rendered so that a single point is an OpenGL unit, and a point is 1:72 of\n an inch.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "module",
        "fct-source": "src/Graphics-Rendering-FTGL.html",
        "fct-type": "module",
        "title": "FTGL"
      },
      "index": {
        "description": "Author Jefferson Heard jefferson.r.heard at gmail.com Copyright Renaissance Computing Institute http www.renci.org License GNU LGPL Compatibility GHC could change the data declarations to not be empty and that would make it more generally compatible believe Description Use FreeType Fonts in OpenGL Requires the FTGL library and FreeType libraries available at http ftgl.wiki.sourceforge.net The most important functions for everyday use are renderFont and the create Font family of functions To render simple string inside OpenGL assuming you have OpenGL initialized and current pen color all you need is do font createTextureFont Font.ttf setFontFaceSize font renderFont font Hello world Fonts are rendered so that single point is an OpenGL unit and point is of an inch",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "FTGL",
        "normalized": "",
        "package": "FTGL",
        "partial": "FTGL",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#t:CharMap",
      "description": {
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Rendering-FTGL.html#CharMap",
        "fct-type": "data",
        "title": "CharMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "CharMap",
        "normalized": "",
        "package": "FTGL",
        "partial": "Char Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#t:Font",
      "description": {
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "type",
        "fct-source": "src/Graphics-Rendering-FTGL.html#Font",
        "fct-type": "type",
        "title": "Font"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "Font",
        "normalized": "",
        "package": "FTGL",
        "partial": "Font",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#t:Font_Opaque",
      "description": {
        "fct-descr": "\u003cp\u003eAn opaque type encapsulating a font in C.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Rendering-FTGL.html#Font_Opaque",
        "fct-type": "data",
        "title": "Font_Opaque"
      },
      "index": {
        "description": "An opaque type encapsulating font in",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "Font_Opaque",
        "normalized": "",
        "package": "FTGL",
        "partial": "Font Opaque",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#t:Glyph",
      "description": {
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "type",
        "fct-source": "src/Graphics-Rendering-FTGL.html#Glyph",
        "fct-type": "type",
        "title": "Glyph"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "Glyph",
        "normalized": "",
        "package": "FTGL",
        "partial": "Glyph",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#t:Glyph_Opaque",
      "description": {
        "fct-descr": "\u003cp\u003eAn opaque type encapsulating a glyph in C.  Currently the glyph functions are unimplemented in Haskell.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Rendering-FTGL.html#Glyph_Opaque",
        "fct-type": "data",
        "title": "Glyph_Opaque"
      },
      "index": {
        "description": "An opaque type encapsulating glyph in Currently the glyph functions are unimplemented in Haskell",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "Glyph_Opaque",
        "normalized": "",
        "package": "FTGL",
        "partial": "Glyph Opaque",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#t:Layout",
      "description": {
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "type",
        "fct-source": "src/Graphics-Rendering-FTGL.html#Layout",
        "fct-type": "type",
        "title": "Layout"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "Layout",
        "normalized": "",
        "package": "FTGL",
        "partial": "Layout",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#t:Layout_Opaque",
      "description": {
        "fct-descr": "\u003cp\u003eAn opaque type encapsulating a layout in C\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Rendering-FTGL.html#Layout_Opaque",
        "fct-type": "data",
        "title": "Layout_Opaque"
      },
      "index": {
        "description": "An opaque type encapsulating layout in",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "Layout_Opaque",
        "normalized": "",
        "package": "FTGL",
        "partial": "Layout Opaque",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#t:RenderMode",
      "description": {
        "fct-descr": "\u003cp\u003eGet any errors associated with a layout.\n\u003c/p\u003e\u003cp\u003eWhether or not in polygonal or extrusion mode, the font will render equally front and back\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Rendering-FTGL.html#RenderMode",
        "fct-type": "data",
        "title": "RenderMode"
      },
      "index": {
        "description": "Get any errors associated with layout Whether or not in polygonal or extrusion mode the font will render equally front and back",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "RenderMode",
        "normalized": "",
        "package": "FTGL",
        "partial": "Render Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#t:TextAlignment",
      "description": {
        "fct-descr": "\u003cp\u003eIn a Layout directed render, the layout mode of the text\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "data",
        "fct-source": "src/Graphics-Rendering-FTGL.html#TextAlignment",
        "fct-type": "data",
        "title": "TextAlignment"
      },
      "index": {
        "description": "In Layout directed render the layout mode of the text",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "TextAlignment",
        "normalized": "",
        "package": "FTGL",
        "partial": "Text Alignment",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:AlignCenter",
      "description": {
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "AlignCenter",
        "fct-source": "src/Graphics-Rendering-FTGL.html#TextAlignment",
        "fct-type": "function",
        "title": "AlignCenter"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "AlignCenter",
        "normalized": "",
        "package": "FTGL",
        "partial": "Align Center",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:AlignLeft",
      "description": {
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "AlignLeft",
        "fct-source": "src/Graphics-Rendering-FTGL.html#TextAlignment",
        "fct-type": "function",
        "title": "AlignLeft"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "AlignLeft",
        "normalized": "",
        "package": "FTGL",
        "partial": "Align Left",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:AlignRight",
      "description": {
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "AlignRight",
        "fct-source": "src/Graphics-Rendering-FTGL.html#TextAlignment",
        "fct-type": "function",
        "title": "AlignRight"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "AlignRight",
        "normalized": "",
        "package": "FTGL",
        "partial": "Align Right",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:All",
      "description": {
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "All",
        "fct-source": "src/Graphics-Rendering-FTGL.html#RenderMode",
        "fct-type": "function",
        "title": "All"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "All",
        "normalized": "",
        "package": "FTGL",
        "partial": "All",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:Back",
      "description": {
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "Back",
        "fct-source": "src/Graphics-Rendering-FTGL.html#RenderMode",
        "fct-type": "function",
        "title": "Back"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "Back",
        "normalized": "",
        "package": "FTGL",
        "partial": "Back",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:EncodingAdobeCustom",
      "description": {
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "EncodingAdobeCustom",
        "fct-source": "src/Graphics-Rendering-FTGL.html#CharMap",
        "fct-type": "function",
        "title": "EncodingAdobeCustom"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "EncodingAdobeCustom",
        "normalized": "",
        "package": "FTGL",
        "partial": "Encoding Adobe Custom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:EncodingAdobeExpert",
      "description": {
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "EncodingAdobeExpert",
        "fct-source": "src/Graphics-Rendering-FTGL.html#CharMap",
        "fct-type": "function",
        "title": "EncodingAdobeExpert"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "EncodingAdobeExpert",
        "normalized": "",
        "package": "FTGL",
        "partial": "Encoding Adobe Expert",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:EncodingAdobeLatin1",
      "description": {
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "EncodingAdobeLatin1",
        "fct-source": "src/Graphics-Rendering-FTGL.html#CharMap",
        "fct-type": "function",
        "title": "EncodingAdobeLatin1"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "EncodingAdobeLatin1",
        "normalized": "",
        "package": "FTGL",
        "partial": "Encoding Adobe Latin",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:EncodingAdobeStandard",
      "description": {
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "EncodingAdobeStandard",
        "fct-source": "src/Graphics-Rendering-FTGL.html#CharMap",
        "fct-type": "function",
        "title": "EncodingAdobeStandard"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "EncodingAdobeStandard",
        "normalized": "",
        "package": "FTGL",
        "partial": "Encoding Adobe Standard",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:EncodingAppleRoman",
      "description": {
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "EncodingAppleRoman",
        "fct-source": "src/Graphics-Rendering-FTGL.html#CharMap",
        "fct-type": "function",
        "title": "EncodingAppleRoman"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "EncodingAppleRoman",
        "normalized": "",
        "package": "FTGL",
        "partial": "Encoding Apple Roman",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:EncodingBig5",
      "description": {
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "EncodingBig5",
        "fct-source": "src/Graphics-Rendering-FTGL.html#CharMap",
        "fct-type": "function",
        "title": "EncodingBig5"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "EncodingBig5",
        "normalized": "",
        "package": "FTGL",
        "partial": "Encoding Big",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:EncodingGB2312",
      "description": {
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "EncodingGB2312",
        "fct-source": "src/Graphics-Rendering-FTGL.html#CharMap",
        "fct-type": "function",
        "title": "EncodingGB2312"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "EncodingGB2312",
        "normalized": "",
        "package": "FTGL",
        "partial": "Encoding GB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:EncodingJohab",
      "description": {
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "EncodingJohab",
        "fct-source": "src/Graphics-Rendering-FTGL.html#CharMap",
        "fct-type": "function",
        "title": "EncodingJohab"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "EncodingJohab",
        "normalized": "",
        "package": "FTGL",
        "partial": "Encoding Johab",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:EncodingMSSymbol",
      "description": {
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "EncodingMSSymbol",
        "fct-source": "src/Graphics-Rendering-FTGL.html#CharMap",
        "fct-type": "function",
        "title": "EncodingMSSymbol"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "EncodingMSSymbol",
        "normalized": "",
        "package": "FTGL",
        "partial": "Encoding MSSymbol",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:EncodingNone",
      "description": {
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "EncodingNone",
        "fct-source": "src/Graphics-Rendering-FTGL.html#CharMap",
        "fct-type": "function",
        "title": "EncodingNone"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "EncodingNone",
        "normalized": "",
        "package": "FTGL",
        "partial": "Encoding None",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:EncodingOldLatin2",
      "description": {
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "EncodingOldLatin2",
        "fct-source": "src/Graphics-Rendering-FTGL.html#CharMap",
        "fct-type": "function",
        "title": "EncodingOldLatin2"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "EncodingOldLatin2",
        "normalized": "",
        "package": "FTGL",
        "partial": "Encoding Old Latin",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:EncodingSJIS",
      "description": {
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "EncodingSJIS",
        "fct-source": "src/Graphics-Rendering-FTGL.html#CharMap",
        "fct-type": "function",
        "title": "EncodingSJIS"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "EncodingSJIS",
        "normalized": "",
        "package": "FTGL",
        "partial": "Encoding SJIS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:EncodingUnicode",
      "description": {
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "EncodingUnicode",
        "fct-source": "src/Graphics-Rendering-FTGL.html#CharMap",
        "fct-type": "function",
        "title": "EncodingUnicode"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "EncodingUnicode",
        "normalized": "",
        "package": "FTGL",
        "partial": "Encoding Unicode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:EncodingWanSung",
      "description": {
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "EncodingWanSung",
        "fct-source": "src/Graphics-Rendering-FTGL.html#CharMap",
        "fct-type": "function",
        "title": "EncodingWanSung"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "EncodingWanSung",
        "normalized": "",
        "package": "FTGL",
        "partial": "Encoding Wan Sung",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:Front",
      "description": {
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "Front",
        "fct-source": "src/Graphics-Rendering-FTGL.html#RenderMode",
        "fct-type": "function",
        "title": "Front"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "Front",
        "normalized": "",
        "package": "FTGL",
        "partial": "Front",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:Justify",
      "description": {
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "Justify",
        "fct-source": "src/Graphics-Rendering-FTGL.html#TextAlignment",
        "fct-type": "function",
        "title": "Justify"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "Justify",
        "normalized": "",
        "package": "FTGL",
        "partial": "Justify",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:Side",
      "description": {
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "Side",
        "fct-source": "src/Graphics-Rendering-FTGL.html#RenderMode",
        "fct-type": "function",
        "title": "Side"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "Side",
        "normalized": "",
        "package": "FTGL",
        "partial": "Side",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:attachData",
      "description": {
        "fct-descr": "\u003cp\u003eAttach some external data (often kerning) to the font\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "Font -\u003e Ptr () -\u003e IO ()",
        "fct-source": "src/Graphics-Rendering-FTGL.html#attachData",
        "fct-type": "function",
        "title": "attachData"
      },
      "index": {
        "description": "Attach some external data often kerning to the font",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "attachData",
        "normalized": "Font-\u003ePtr()-\u003eIO()",
        "package": "FTGL",
        "partial": "Data",
        "signature": "Font-\u003ePtr()-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:attachFile",
      "description": {
        "fct-descr": "\u003cp\u003eAttach a metadata file to a font.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "Font -\u003e String -\u003e IO ()",
        "fct-source": "src/Graphics-Rendering-FTGL.html#attachFile",
        "fct-type": "function",
        "title": "attachFile"
      },
      "index": {
        "description": "Attach metadata file to font",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "attachFile",
        "normalized": "Font-\u003eString-\u003eIO()",
        "package": "FTGL",
        "partial": "File",
        "signature": "Font-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:createBitmapFont",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a bitmapped version of a TrueType font.  Bitmapped versions will not\n | respond to matrix transformations, but rather must be transformed using the\n | raster positioning functions in OpenGL\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "String -\u003e IO Font",
        "fct-source": "src/Graphics-Rendering-FTGL.html#createBitmapFont",
        "fct-type": "function",
        "title": "createBitmapFont"
      },
      "index": {
        "description": "Create bitmapped version of TrueType font Bitmapped versions will not respond to matrix transformations but rather must be transformed using the raster positioning functions in OpenGL",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "createBitmapFont",
        "normalized": "String-\u003eIO Font",
        "package": "FTGL",
        "partial": "Bitmap Font",
        "signature": "String-\u003eIO Font"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:createBufferFont",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a buffered version of a TrueType font. This stores the entirety of\n | a string in a texture, \u003ca\u003ebuffering\u003c/a\u003e it before rendering.  Very fast if you\n | will be repeatedly rendering the same strings over and over.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "String -\u003e IO Font",
        "fct-source": "src/Graphics-Rendering-FTGL.html#createBufferFont",
        "fct-type": "function",
        "title": "createBufferFont"
      },
      "index": {
        "description": "Create buffered version of TrueType font This stores the entirety of string in texture buffering it before rendering Very fast if you will be repeatedly rendering the same strings over and over",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "createBufferFont",
        "normalized": "String-\u003eIO Font",
        "package": "FTGL",
        "partial": "Buffer Font",
        "signature": "String-\u003eIO Font"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:createExtrudeFont",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a 3D extruded font.  This is the only way of creating 3D fonts \n | within FTGL.  Could be fun to use a geometry shader to get different\n | effects by warping the otherwise square nature of the font.  Polygonal.\n | Scales without losing quality.  Slower than all other fonts.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "String -\u003e IO Font",
        "fct-source": "src/Graphics-Rendering-FTGL.html#createExtrudeFont",
        "fct-type": "function",
        "title": "createExtrudeFont"
      },
      "index": {
        "description": "Create extruded font This is the only way of creating fonts within FTGL Could be fun to use geometry shader to get different effects by warping the otherwise square nature of the font Polygonal Scales without losing quality Slower than all other fonts",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "createExtrudeFont",
        "normalized": "String-\u003eIO Font",
        "package": "FTGL",
        "partial": "Extrude Font",
        "signature": "String-\u003eIO Font"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:createOutlineFont",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an outline version of a TrueType font. This uses actual geometry\n | and will scale independently without loss of quality.  Faster than polygons\n | but slower than texture or buffer fonts.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "String -\u003e IO Font",
        "fct-source": "src/Graphics-Rendering-FTGL.html#createOutlineFont",
        "fct-type": "function",
        "title": "createOutlineFont"
      },
      "index": {
        "description": "Create an outline version of TrueType font This uses actual geometry and will scale independently without loss of quality Faster than polygons but slower than texture or buffer fonts",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "createOutlineFont",
        "normalized": "String-\u003eIO Font",
        "package": "FTGL",
        "partial": "Outline Font",
        "signature": "String-\u003eIO Font"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:createPixmapFont",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a pixmap version of a TrueType font.  Higher quality than the bitmap\n | font without losing any performance.  Use this if you don't mind using\n | set and get RasterPosition.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "String -\u003e IO Font",
        "fct-source": "src/Graphics-Rendering-FTGL.html#createPixmapFont",
        "fct-type": "function",
        "title": "createPixmapFont"
      },
      "index": {
        "description": "Create pixmap version of TrueType font Higher quality than the bitmap font without losing any performance Use this if you don mind using set and get RasterPosition",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "createPixmapFont",
        "normalized": "String-\u003eIO Font",
        "package": "FTGL",
        "partial": "Pixmap Font",
        "signature": "String-\u003eIO Font"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:createPolygonFont",
      "description": {
        "fct-descr": "\u003cp\u003eCreate polygonal display list fonts.  These scale independently without\n | losing quality, unlike texture or buffer fonts, but can be impractical\n | for large amounts of text because of the high number of polygons needed.\n | Additionally, they do not, unlike the textured fonts, create artifacts\n | within the square formed at the edge of each character.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "String -\u003e IO Font",
        "fct-source": "src/Graphics-Rendering-FTGL.html#createPolygonFont",
        "fct-type": "function",
        "title": "createPolygonFont"
      },
      "index": {
        "description": "Create polygonal display list fonts These scale independently without losing quality unlike texture or buffer fonts but can be impractical for large amounts of text because of the high number of polygons needed Additionally they do not unlike the textured fonts create artifacts within the square formed at the edge of each character",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "createPolygonFont",
        "normalized": "String-\u003eIO Font",
        "package": "FTGL",
        "partial": "Polygon Font",
        "signature": "String-\u003eIO Font"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:createSimpleLayout",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a simple layout\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "IO Layout",
        "fct-source": "src/Graphics-Rendering-FTGL.html#createSimpleLayout",
        "fct-type": "function",
        "title": "createSimpleLayout"
      },
      "index": {
        "description": "Create simple layout",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "createSimpleLayout",
        "normalized": "",
        "package": "FTGL",
        "partial": "Simple Layout",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:createTextureFont",
      "description": {
        "fct-descr": "\u003cp\u003eCreate textured display list fonts.  These can scale somewhat well, \n | but lose quality quickly.  They are much faster than polygonal fonts, \n | though, so are suitable for large quantities of text.  Especially suited\n | well to text that changes with most frames, because it doesn't incur the\n | (normally helpful) overhead of buffering.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "String -\u003e IO Font",
        "fct-source": "src/Graphics-Rendering-FTGL.html#createTextureFont",
        "fct-type": "function",
        "title": "createTextureFont"
      },
      "index": {
        "description": "Create textured display list fonts These can scale somewhat well but lose quality quickly They are much faster than polygonal fonts though so are suitable for large quantities of text Especially suited well to text that changes with most frames because it doesn incur the normally helpful overhead of buffering",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "createTextureFont",
        "normalized": "String-\u003eIO Font",
        "package": "FTGL",
        "partial": "Texture Font",
        "signature": "String-\u003eIO Font"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:destroyFont",
      "description": {
        "fct-descr": "\u003cp\u003eDestroy a font\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "Font -\u003e IO ()",
        "fct-source": "src/Graphics-Rendering-FTGL.html#destroyFont",
        "fct-type": "function",
        "title": "destroyFont"
      },
      "index": {
        "description": "Destroy font",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "destroyFont",
        "normalized": "Font-\u003eIO()",
        "package": "FTGL",
        "partial": "Font",
        "signature": "Font-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:destroyLayout",
      "description": {
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "Layout -\u003e IO ()",
        "fct-source": "src/Graphics-Rendering-FTGL.html#destroyLayout",
        "fct-type": "function",
        "title": "destroyLayout"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "destroyLayout",
        "normalized": "Layout-\u003eIO()",
        "package": "FTGL",
        "partial": "Layout",
        "signature": "Layout-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:encodeTag",
      "description": {
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "Char -\u003e Char -\u003e Char -\u003e Char -\u003e CInt",
        "fct-source": "src/Graphics-Rendering-FTGL.html#encodeTag",
        "fct-type": "function",
        "title": "encodeTag"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "encodeTag",
        "normalized": "Char-\u003eChar-\u003eChar-\u003eChar-\u003eCInt",
        "package": "FTGL",
        "partial": "Tag",
        "signature": "Char-\u003eChar-\u003eChar-\u003eChar-\u003eCInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:fattachFile",
      "description": {
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "Font -\u003e CString -\u003e IO ()",
        "fct-source": "src/Graphics-Rendering-FTGL.html#fattachFile",
        "fct-type": "function",
        "title": "fattachFile"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "fattachFile",
        "normalized": "Font-\u003eCString-\u003eIO()",
        "package": "FTGL",
        "partial": "File",
        "signature": "Font-\u003eCString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:fcreateBitmapFont",
      "description": {
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "CString -\u003e IO Font",
        "fct-source": "src/Graphics-Rendering-FTGL.html#fcreateBitmapFont",
        "fct-type": "function",
        "title": "fcreateBitmapFont"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "fcreateBitmapFont",
        "normalized": "CString-\u003eIO Font",
        "package": "FTGL",
        "partial": "Bitmap Font",
        "signature": "CString-\u003eIO Font"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:fcreateBufferFont",
      "description": {
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "CString -\u003e IO Font",
        "fct-source": "src/Graphics-Rendering-FTGL.html#fcreateBufferFont",
        "fct-type": "function",
        "title": "fcreateBufferFont"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "fcreateBufferFont",
        "normalized": "CString-\u003eIO Font",
        "package": "FTGL",
        "partial": "Buffer Font",
        "signature": "CString-\u003eIO Font"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:fcreateExtrudeFont",
      "description": {
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "CString -\u003e IO Font",
        "fct-source": "src/Graphics-Rendering-FTGL.html#fcreateExtrudeFont",
        "fct-type": "function",
        "title": "fcreateExtrudeFont"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "fcreateExtrudeFont",
        "normalized": "CString-\u003eIO Font",
        "package": "FTGL",
        "partial": "Extrude Font",
        "signature": "CString-\u003eIO Font"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:fcreateOutlineFont",
      "description": {
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "CString -\u003e IO Font",
        "fct-source": "src/Graphics-Rendering-FTGL.html#fcreateOutlineFont",
        "fct-type": "function",
        "title": "fcreateOutlineFont"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "fcreateOutlineFont",
        "normalized": "CString-\u003eIO Font",
        "package": "FTGL",
        "partial": "Outline Font",
        "signature": "CString-\u003eIO Font"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:fcreatePixmapFont",
      "description": {
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "CString -\u003e IO Font",
        "fct-source": "src/Graphics-Rendering-FTGL.html#fcreatePixmapFont",
        "fct-type": "function",
        "title": "fcreatePixmapFont"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "fcreatePixmapFont",
        "normalized": "CString-\u003eIO Font",
        "package": "FTGL",
        "partial": "Pixmap Font",
        "signature": "CString-\u003eIO Font"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:fcreatePolygonFont",
      "description": {
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "CString -\u003e IO Font",
        "fct-source": "src/Graphics-Rendering-FTGL.html#fcreatePolygonFont",
        "fct-type": "function",
        "title": "fcreatePolygonFont"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "fcreatePolygonFont",
        "normalized": "CString-\u003eIO Font",
        "package": "FTGL",
        "partial": "Polygon Font",
        "signature": "CString-\u003eIO Font"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:fcreateTextureFont",
      "description": {
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "CString -\u003e IO Font",
        "fct-source": "src/Graphics-Rendering-FTGL.html#fcreateTextureFont",
        "fct-type": "function",
        "title": "fcreateTextureFont"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "fcreateTextureFont",
        "normalized": "CString-\u003eIO Font",
        "package": "FTGL",
        "partial": "Texture Font",
        "signature": "CString-\u003eIO Font"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:fgetFontAdvance",
      "description": {
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "Font -\u003e CString -\u003e IO CFloat",
        "fct-source": "src/Graphics-Rendering-FTGL.html#fgetFontAdvance",
        "fct-type": "function",
        "title": "fgetFontAdvance"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "fgetFontAdvance",
        "normalized": "Font-\u003eCString-\u003eIO CFloat",
        "package": "FTGL",
        "partial": "Font Advance",
        "signature": "Font-\u003eCString-\u003eIO CFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:fgetFontAscender",
      "description": {
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "Font -\u003e CFloat",
        "fct-source": "src/Graphics-Rendering-FTGL.html#fgetFontAscender",
        "fct-type": "function",
        "title": "fgetFontAscender"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "fgetFontAscender",
        "normalized": "Font-\u003eCFloat",
        "package": "FTGL",
        "partial": "Font Ascender",
        "signature": "Font-\u003eCFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:fgetFontBBox",
      "description": {
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "Font -\u003e CString -\u003e Int -\u003e Ptr CFloat -\u003e IO ()",
        "fct-source": "src/Graphics-Rendering-FTGL.html#fgetFontBBox",
        "fct-type": "function",
        "title": "fgetFontBBox"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "fgetFontBBox",
        "normalized": "Font-\u003eCString-\u003eInt-\u003ePtr CFloat-\u003eIO()",
        "package": "FTGL",
        "partial": "Font BBox",
        "signature": "Font-\u003eCString-\u003eInt-\u003ePtr CFloat-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:fgetFontCharMapCount",
      "description": {
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "Font -\u003e IO CInt",
        "fct-source": "src/Graphics-Rendering-FTGL.html#fgetFontCharMapCount",
        "fct-type": "function",
        "title": "fgetFontCharMapCount"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "fgetFontCharMapCount",
        "normalized": "Font-\u003eIO CInt",
        "package": "FTGL",
        "partial": "Font Char Map Count",
        "signature": "Font-\u003eIO CInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:fgetFontCharMapList",
      "description": {
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "Font -\u003e IO (Ptr CInt)",
        "fct-source": "src/Graphics-Rendering-FTGL.html#fgetFontCharMapList",
        "fct-type": "function",
        "title": "fgetFontCharMapList"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "fgetFontCharMapList",
        "normalized": "Font-\u003eIO(Ptr CInt)",
        "package": "FTGL",
        "partial": "Font Char Map List",
        "signature": "Font-\u003eIO(Ptr CInt)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:fgetFontDescender",
      "description": {
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "Font -\u003e CFloat",
        "fct-source": "src/Graphics-Rendering-FTGL.html#fgetFontDescender",
        "fct-type": "function",
        "title": "fgetFontDescender"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "fgetFontDescender",
        "normalized": "Font-\u003eCFloat",
        "package": "FTGL",
        "partial": "Font Descender",
        "signature": "Font-\u003eCFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:fgetFontError",
      "description": {
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "Font -\u003e IO CInt",
        "fct-source": "src/Graphics-Rendering-FTGL.html#fgetFontError",
        "fct-type": "function",
        "title": "fgetFontError"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "fgetFontError",
        "normalized": "Font-\u003eIO CInt",
        "package": "FTGL",
        "partial": "Font Error",
        "signature": "Font-\u003eIO CInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:fgetFontFaceSize",
      "description": {
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "Font -\u003e IO CInt",
        "fct-source": "src/Graphics-Rendering-FTGL.html#fgetFontFaceSize",
        "fct-type": "function",
        "title": "fgetFontFaceSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "fgetFontFaceSize",
        "normalized": "Font-\u003eIO CInt",
        "package": "FTGL",
        "partial": "Font Face Size",
        "signature": "Font-\u003eIO CInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:fgetFontLineHeight",
      "description": {
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "Font -\u003e CFloat",
        "fct-source": "src/Graphics-Rendering-FTGL.html#fgetFontLineHeight",
        "fct-type": "function",
        "title": "fgetFontLineHeight"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "fgetFontLineHeight",
        "normalized": "Font-\u003eCFloat",
        "package": "FTGL",
        "partial": "Font Line Height",
        "signature": "Font-\u003eCFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:fgetLayoutAlignment",
      "description": {
        "fct-descr": "\u003cp\u003eSet the layout alignment\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "Layout -\u003e IO CInt",
        "fct-source": "src/Graphics-Rendering-FTGL.html#fgetLayoutAlignment",
        "fct-type": "function",
        "title": "fgetLayoutAlignment"
      },
      "index": {
        "description": "Set the layout alignment",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "fgetLayoutAlignment",
        "normalized": "Layout-\u003eIO CInt",
        "package": "FTGL",
        "partial": "Layout Alignment",
        "signature": "Layout-\u003eIO CInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:fgetLayoutError",
      "description": {
        "fct-descr": "\u003cp\u003eRender a string of text within a layout.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "Layout -\u003e IO CInt",
        "fct-source": "src/Graphics-Rendering-FTGL.html#fgetLayoutError",
        "fct-type": "function",
        "title": "fgetLayoutError"
      },
      "index": {
        "description": "Render string of text within layout",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "fgetLayoutError",
        "normalized": "Layout-\u003eIO CInt",
        "package": "FTGL",
        "partial": "Layout Error",
        "signature": "Layout-\u003eIO CInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:fgetLayoutFont",
      "description": {
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "Layout -\u003e IO Font",
        "fct-source": "src/Graphics-Rendering-FTGL.html#fgetLayoutFont",
        "fct-type": "function",
        "title": "fgetLayoutFont"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "fgetLayoutFont",
        "normalized": "Layout-\u003eIO Font",
        "package": "FTGL",
        "partial": "Layout Font",
        "signature": "Layout-\u003eIO Font"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:fgetLayoutLineLength",
      "description": {
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "Layout -\u003e IO CFloat",
        "fct-source": "src/Graphics-Rendering-FTGL.html#fgetLayoutLineLength",
        "fct-type": "function",
        "title": "fgetLayoutLineLength"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "fgetLayoutLineLength",
        "normalized": "Layout-\u003eIO CFloat",
        "package": "FTGL",
        "partial": "Layout Line Length",
        "signature": "Layout-\u003eIO CFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:frenderFont",
      "description": {
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "Font -\u003e CString -\u003e CInt -\u003e IO ()",
        "fct-source": "src/Graphics-Rendering-FTGL.html#frenderFont",
        "fct-type": "function",
        "title": "frenderFont"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "frenderFont",
        "normalized": "Font-\u003eCString-\u003eCInt-\u003eIO()",
        "package": "FTGL",
        "partial": "Font",
        "signature": "Font-\u003eCString-\u003eCInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:frenderLayout",
      "description": {
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "Layout -\u003e CString -\u003e IO ()",
        "fct-source": "src/Graphics-Rendering-FTGL.html#frenderLayout",
        "fct-type": "function",
        "title": "frenderLayout"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "frenderLayout",
        "normalized": "Layout-\u003eCString-\u003eIO()",
        "package": "FTGL",
        "partial": "Layout",
        "signature": "Layout-\u003eCString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:fsetFontCharMap",
      "description": {
        "fct-descr": "\u003cp\u003eSet the font's character map\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "Font -\u003e CInt -\u003e IO ()",
        "fct-source": "src/Graphics-Rendering-FTGL.html#fsetFontCharMap",
        "fct-type": "function",
        "title": "fsetFontCharMap"
      },
      "index": {
        "description": "Set the font character map",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "fsetFontCharMap",
        "normalized": "Font-\u003eCInt-\u003eIO()",
        "package": "FTGL",
        "partial": "Font Char Map",
        "signature": "Font-\u003eCInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:fsetFontDepth",
      "description": {
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "Font -\u003e CFloat -\u003e IO ()",
        "fct-source": "src/Graphics-Rendering-FTGL.html#fsetFontDepth",
        "fct-type": "function",
        "title": "fsetFontDepth"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "fsetFontDepth",
        "normalized": "Font-\u003eCFloat-\u003eIO()",
        "package": "FTGL",
        "partial": "Font Depth",
        "signature": "Font-\u003eCFloat-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:fsetFontFaceSize",
      "description": {
        "fct-descr": "\u003cp\u003eGet the different character mappings available in this font.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "Font -\u003e CInt -\u003e CInt -\u003e IO CInt",
        "fct-source": "src/Graphics-Rendering-FTGL.html#fsetFontFaceSize",
        "fct-type": "function",
        "title": "fsetFontFaceSize"
      },
      "index": {
        "description": "Get the different character mappings available in this font",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "fsetFontFaceSize",
        "normalized": "Font-\u003eCInt-\u003eCInt-\u003eIO CInt",
        "package": "FTGL",
        "partial": "Font Face Size",
        "signature": "Font-\u003eCInt-\u003eCInt-\u003eIO CInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:fsetFontOutset",
      "description": {
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "Font -\u003e CFloat -\u003e CFloat -\u003e IO ()",
        "fct-source": "src/Graphics-Rendering-FTGL.html#fsetFontOutset",
        "fct-type": "function",
        "title": "fsetFontOutset"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "fsetFontOutset",
        "normalized": "Font-\u003eCFloat-\u003eCFloat-\u003eIO()",
        "package": "FTGL",
        "partial": "Font Outset",
        "signature": "Font-\u003eCFloat-\u003eCFloat-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:fsetLayoutAlignment",
      "description": {
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "Layout -\u003e CInt -\u003e IO ()",
        "fct-source": "src/Graphics-Rendering-FTGL.html#fsetLayoutAlignment",
        "fct-type": "function",
        "title": "fsetLayoutAlignment"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "fsetLayoutAlignment",
        "normalized": "Layout-\u003eCInt-\u003eIO()",
        "package": "FTGL",
        "partial": "Layout Alignment",
        "signature": "Layout-\u003eCInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:fsetLayoutLineSpacing",
      "description": {
        "fct-descr": "\u003cp\u003eGet the alignment of text in this layout.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "Layout -\u003e CFloat -\u003e IO ()",
        "fct-source": "src/Graphics-Rendering-FTGL.html#fsetLayoutLineSpacing",
        "fct-type": "function",
        "title": "fsetLayoutLineSpacing"
      },
      "index": {
        "description": "Get the alignment of text in this layout",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "fsetLayoutLineSpacing",
        "normalized": "Layout-\u003eCFloat-\u003eIO()",
        "package": "FTGL",
        "partial": "Layout Line Spacing",
        "signature": "Layout-\u003eCFloat-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:getFontAdvance",
      "description": {
        "fct-descr": "\u003cp\u003eGet the horizontal span of a string of text using the current font.  Input as the xcoord\n | in any translate operation\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "Font -\u003e String -\u003e IO Float",
        "fct-source": "src/Graphics-Rendering-FTGL.html#getFontAdvance",
        "fct-type": "function",
        "title": "getFontAdvance"
      },
      "index": {
        "description": "Get the horizontal span of string of text using the current font Input as the xcoord in any translate operation",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "getFontAdvance",
        "normalized": "Font-\u003eString-\u003eIO Float",
        "package": "FTGL",
        "partial": "Font Advance",
        "signature": "Font-\u003eString-\u003eIO Float"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:getFontAscender",
      "description": {
        "fct-descr": "\u003cp\u003eGet the global ascender height for the face. \n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "Font -\u003e Float",
        "fct-source": "src/Graphics-Rendering-FTGL.html#getFontAscender",
        "fct-type": "function",
        "title": "getFontAscender"
      },
      "index": {
        "description": "Get the global ascender height for the face",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "getFontAscender",
        "normalized": "Font-\u003eFloat",
        "package": "FTGL",
        "partial": "Font Ascender",
        "signature": "Font-\u003eFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:getFontBBox",
      "description": {
        "fct-descr": "\u003cp\u003eGet the text extents of a string as a list of (llx,lly,lly,urx,ury,urz)\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "Font -\u003e String -\u003e IO [Float]",
        "fct-source": "src/Graphics-Rendering-FTGL.html#getFontBBox",
        "fct-type": "function",
        "title": "getFontBBox"
      },
      "index": {
        "description": "Get the text extents of string as list of llx lly lly urx ury urz",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "getFontBBox",
        "normalized": "Font-\u003eString-\u003eIO[Float]",
        "package": "FTGL",
        "partial": "Font BBox",
        "signature": "Font-\u003eString-\u003eIO[Float]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:getFontCharMapCount",
      "description": {
        "fct-descr": "\u003cp\u003eGet the number of characters loaded into the current charmap for the font.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "Font -\u003e Int",
        "fct-source": "src/Graphics-Rendering-FTGL.html#getFontCharMapCount",
        "fct-type": "function",
        "title": "getFontCharMapCount"
      },
      "index": {
        "description": "Get the number of characters loaded into the current charmap for the font",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "getFontCharMapCount",
        "normalized": "Font-\u003eInt",
        "package": "FTGL",
        "partial": "Font Char Map Count",
        "signature": "Font-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:getFontDescender",
      "description": {
        "fct-descr": "\u003cp\u003eGets the global descender height for the face. \n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "Font -\u003e Float",
        "fct-source": "src/Graphics-Rendering-FTGL.html#getFontDescender",
        "fct-type": "function",
        "title": "getFontDescender"
      },
      "index": {
        "description": "Gets the global descender height for the face",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "getFontDescender",
        "normalized": "Font-\u003eFloat",
        "package": "FTGL",
        "partial": "Font Descender",
        "signature": "Font-\u003eFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:getFontError",
      "description": {
        "fct-descr": "\u003cp\u003eGet any errors associated with loading a font. FIXME return should be a type, not an Int.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "Font -\u003e IO Int",
        "fct-source": "src/Graphics-Rendering-FTGL.html#getFontError",
        "fct-type": "function",
        "title": "getFontError"
      },
      "index": {
        "description": "Get any errors associated with loading font FIXME return should be type not an Int",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "getFontError",
        "normalized": "Font-\u003eIO Int",
        "package": "FTGL",
        "partial": "Font Error",
        "signature": "Font-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:getFontFaceSize",
      "description": {
        "fct-descr": "\u003cp\u003eGet the current font face size in points.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "Font -\u003e IO Int",
        "fct-source": "src/Graphics-Rendering-FTGL.html#getFontFaceSize",
        "fct-type": "function",
        "title": "getFontFaceSize"
      },
      "index": {
        "description": "Get the current font face size in points",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "getFontFaceSize",
        "normalized": "Font-\u003eIO Int",
        "package": "FTGL",
        "partial": "Font Face Size",
        "signature": "Font-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:getFontLineHeight",
      "description": {
        "fct-descr": "\u003cp\u003eGets the global line spacing for the face. \n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "Font -\u003e Float",
        "fct-source": "src/Graphics-Rendering-FTGL.html#getFontLineHeight",
        "fct-type": "function",
        "title": "getFontLineHeight"
      },
      "index": {
        "description": "Gets the global line spacing for the face",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "getFontLineHeight",
        "normalized": "Font-\u003eFloat",
        "package": "FTGL",
        "partial": "Font Line Height",
        "signature": "Font-\u003eFloat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:getLayoutLineLength",
      "description": {
        "fct-descr": "\u003cp\u003eGet the line length in points (1:72in) of lines in the layout\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "Layout -\u003e IO Float",
        "fct-source": "src/Graphics-Rendering-FTGL.html#getLayoutLineLength",
        "fct-type": "function",
        "title": "getLayoutLineLength"
      },
      "index": {
        "description": "Get the line length in points in of lines in the layout",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "getLayoutLineLength",
        "normalized": "Layout-\u003eIO Float",
        "package": "FTGL",
        "partial": "Layout Line Length",
        "signature": "Layout-\u003eIO Float"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:marshalRenderMode",
      "description": {
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "RenderMode -\u003e CInt",
        "fct-source": "src/Graphics-Rendering-FTGL.html#marshalRenderMode",
        "fct-type": "function",
        "title": "marshalRenderMode"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "marshalRenderMode",
        "normalized": "RenderMode-\u003eCInt",
        "package": "FTGL",
        "partial": "Render Mode",
        "signature": "RenderMode-\u003eCInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:marshalTextAlignment",
      "description": {
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "TextAlignment -\u003e CInt",
        "fct-source": "src/Graphics-Rendering-FTGL.html#marshalTextAlignment",
        "fct-type": "function",
        "title": "marshalTextAlignment"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "marshalTextAlignment",
        "normalized": "TextAlignment-\u003eCInt",
        "package": "FTGL",
        "partial": "Text Alignment",
        "signature": "TextAlignment-\u003eCInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:readTextAlignment",
      "description": {
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "CInt -\u003e TextAlignment",
        "fct-source": "src/Graphics-Rendering-FTGL.html#readTextAlignment",
        "fct-type": "function",
        "title": "readTextAlignment"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "readTextAlignment",
        "normalized": "CInt-\u003eTextAlignment",
        "package": "FTGL",
        "partial": "Text Alignment",
        "signature": "CInt-\u003eTextAlignment"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:renderFont",
      "description": {
        "fct-descr": "\u003cp\u003eRender a string of text in the current font.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "Font -\u003e String -\u003e RenderMode -\u003e IO ()",
        "fct-source": "src/Graphics-Rendering-FTGL.html#renderFont",
        "fct-type": "function",
        "title": "renderFont"
      },
      "index": {
        "description": "Render string of text in the current font",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "renderFont",
        "normalized": "Font-\u003eString-\u003eRenderMode-\u003eIO()",
        "package": "FTGL",
        "partial": "Font",
        "signature": "Font-\u003eString-\u003eRenderMode-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:setCharMap",
      "description": {
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "Font -\u003e CharMap -\u003e IO ()",
        "fct-source": "src/Graphics-Rendering-FTGL.html#setCharMap",
        "fct-type": "function",
        "title": "setCharMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "setCharMap",
        "normalized": "Font-\u003eCharMap-\u003eIO()",
        "package": "FTGL",
        "partial": "Char Map",
        "signature": "Font-\u003eCharMap-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:setFontDepth",
      "description": {
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "Font -\u003e Float -\u003e IO ()",
        "fct-source": "src/Graphics-Rendering-FTGL.html#setFontDepth",
        "fct-type": "function",
        "title": "setFontDepth"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "setFontDepth",
        "normalized": "Font-\u003eFloat-\u003eIO()",
        "package": "FTGL",
        "partial": "Font Depth",
        "signature": "Font-\u003eFloat-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:setFontFaceSize",
      "description": {
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "Font -\u003e Int -\u003e Int -\u003e IO CInt",
        "fct-source": "src/Graphics-Rendering-FTGL.html#setFontFaceSize",
        "fct-type": "function",
        "title": "setFontFaceSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "setFontFaceSize",
        "normalized": "Font-\u003eInt-\u003eInt-\u003eIO CInt",
        "package": "FTGL",
        "partial": "Font Face Size",
        "signature": "Font-\u003eInt-\u003eInt-\u003eIO CInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:setFontOutset",
      "description": {
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "Font -\u003e Float -\u003e Float -\u003e IO ()",
        "fct-source": "src/Graphics-Rendering-FTGL.html#setFontOutset",
        "fct-type": "function",
        "title": "setFontOutset"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "setFontOutset",
        "normalized": "Font-\u003eFloat-\u003eFloat-\u003eIO()",
        "package": "FTGL",
        "partial": "Font Outset",
        "signature": "Font-\u003eFloat-\u003eFloat-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:setLayoutFont",
      "description": {
        "fct-descr": "\u003cp\u003eSet the layout's font.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "Layout -\u003e Font -\u003e IO ()",
        "fct-source": "src/Graphics-Rendering-FTGL.html#setLayoutFont",
        "fct-type": "function",
        "title": "setLayoutFont"
      },
      "index": {
        "description": "Set the layout font",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "setLayoutFont",
        "normalized": "Layout-\u003eFont-\u003eIO()",
        "package": "FTGL",
        "partial": "Layout Font",
        "signature": "Layout-\u003eFont-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:setLayoutLineLength",
      "description": {
        "fct-descr": "\u003cp\u003eGet the embedded font from the Layout\n\u003c/p\u003e\u003cp\u003eSet the line length, I believe in OpenGL units, although I'm not sure.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "Layout -\u003e CFloat -\u003e IO ()",
        "fct-source": "src/Graphics-Rendering-FTGL.html#setLayoutLineLength",
        "fct-type": "function",
        "title": "setLayoutLineLength"
      },
      "index": {
        "description": "Get the embedded font from the Layout Set the line length believe in OpenGL units although not sure",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "setLayoutLineLength",
        "normalized": "Layout-\u003eCFloat-\u003eIO()",
        "package": "FTGL",
        "partial": "Layout Line Length",
        "signature": "Layout-\u003eCFloat-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/FTGL/docs/Graphics-Rendering-FTGL.html#v:setLayoutLineSpacing",
      "description": {
        "fct-descr": "\u003cp\u003eSet layout line spacing in OpenGL units.\n\u003c/p\u003e",
        "fct-module": "Graphics.Rendering.FTGL",
        "fct-package": "FTGL",
        "fct-signature": "Layout -\u003e Float -\u003e IO ()",
        "fct-source": "src/Graphics-Rendering-FTGL.html#setLayoutLineSpacing",
        "fct-type": "function",
        "title": "setLayoutLineSpacing"
      },
      "index": {
        "description": "Set layout line spacing in OpenGL units",
        "hierarchy": "Graphics Rendering FTGL",
        "module": "Graphics.Rendering.FTGL",
        "name": "setLayoutLineSpacing",
        "normalized": "Layout-\u003eFloat-\u003eIO()",
        "package": "FTGL",
        "partial": "Layout Line Spacing",
        "signature": "Layout-\u003eFloat-\u003eIO()"
      }
    }
  }
]