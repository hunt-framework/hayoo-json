[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Auxiliary.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides miscellaneous general-purpose auxiliary\n functions used by the \u003ca\u003eGraphics.EasyRender\u003c/a\u003e package.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Graphics.EasyRender.Auxiliary",
        "fct-package": "easyrender",
        "fct-signature": "module",
        "fct-source": "src/Graphics-EasyRender-Auxiliary.html",
        "fct-type": "module",
        "title": "Auxiliary"
      },
      "index": {
        "description": "This module provides miscellaneous general-purpose auxiliary functions used by the Graphics.EasyRender package",
        "hierarchy": "Graphics EasyRender Auxiliary",
        "module": "Graphics.EasyRender.Auxiliary",
        "name": "Auxiliary",
        "normalized": "",
        "package": "easyrender",
        "partial": "Auxiliary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Auxiliary.html#t:Curry",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eCurry\u003c/a\u003e\u003c/code\u003e type class is used to implement functions that have a\n variable number of arguments. It provides a family of type\n isomorphisms\n\u003c/p\u003e\u003cpre\u003efun  &#8773;  args -\u003e res,\u003c/pre\u003e\u003cp\u003ewhere\n\u003c/p\u003e\u003cpre\u003e fun = a1 -\u003e a2 -\u003e ... -\u003e an -\u003e res,\n args = (a1, (a2, (..., (an, ())))).\n\u003c/pre\u003e",
        "fct-module": "Graphics.EasyRender.Auxiliary",
        "fct-package": "easyrender",
        "fct-signature": "class",
        "fct-source": "src/Graphics-EasyRender-Auxiliary.html#Curry",
        "fct-type": "class",
        "title": "Curry"
      },
      "index": {
        "description": "The Curry type class is used to implement functions that have variable number of arguments It provides family of type isomorphisms fun args res where fun a1 a2 an res args a1 a2 an",
        "hierarchy": "Graphics EasyRender Auxiliary",
        "module": "Graphics.EasyRender.Auxiliary",
        "name": "Curry",
        "normalized": "",
        "package": "easyrender",
        "partial": "Curry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Auxiliary.html#v:int_ceiling",
      "description": {
        "fct-descr": "\u003cp\u003eA version of the \u003ccode\u003e\u003ca\u003eceiling\u003c/a\u003e\u003c/code\u003e function that returns an \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Auxiliary",
        "fct-package": "easyrender",
        "fct-signature": "a -\u003e Integer",
        "fct-source": "src/Graphics-EasyRender-Auxiliary.html#int_ceiling",
        "fct-type": "function",
        "title": "int_ceiling"
      },
      "index": {
        "description": "version of the ceiling function that returns an Integer",
        "hierarchy": "Graphics EasyRender Auxiliary",
        "module": "Graphics.EasyRender.Auxiliary",
        "name": "int_ceiling",
        "normalized": "a-\u003eInteger",
        "package": "easyrender",
        "partial": "",
        "signature": "a-\u003eInteger"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Auxiliary.html#v:mcurry",
      "description": {
        "fct-descr": "\u003cp\u003eMultiple curry: map a function \n (\u003cem\u003ea\u003c/em\u003e\u003csub\u003e1\u003c/sub\u003e, (\u003cem\u003ea\u003c/em\u003e\u003csub\u003e2\u003c/sub\u003e, (&#8230;, ())) &#8594; \u003cem\u003eb\u003c/em\u003e \n to its curried form \n \u003cem\u003ea\u003c/em\u003e\u003csub\u003e1\u003c/sub\u003e &#8594; \u003cem\u003ea\u003c/em\u003e\u003csub\u003e2\u003c/sub\u003e &#8594; &#8230; &#8594; \u003cem\u003eb\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Auxiliary",
        "fct-package": "easyrender",
        "fct-signature": "(args -\u003e res) -\u003e fun",
        "fct-source": "src/Graphics-EasyRender-Auxiliary.html#mcurry",
        "fct-type": "method",
        "title": "mcurry"
      },
      "index": {
        "description": "Multiple curry map function to its curried form",
        "hierarchy": "Graphics EasyRender Auxiliary",
        "module": "Graphics.EasyRender.Auxiliary",
        "name": "mcurry",
        "normalized": "(a-\u003eb)-\u003ec",
        "package": "easyrender",
        "partial": "",
        "signature": "(args-\u003eres)-\u003efun"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Auxiliary.html#v:muncurry",
      "description": {
        "fct-descr": "\u003cp\u003eMultiple uncurry: map a function\n \u003cem\u003ea\u003c/em\u003e\u003csub\u003e1\u003c/sub\u003e &#8594; \u003cem\u003ea\u003c/em\u003e\u003csub\u003e2\u003c/sub\u003e &#8594; &#8230; &#8594; \u003cem\u003eb\u003c/em\u003e\n to its uncurried form \n (\u003cem\u003ea\u003c/em\u003e\u003csub\u003e1\u003c/sub\u003e, (\u003cem\u003ea\u003c/em\u003e\u003csub\u003e2\u003c/sub\u003e, (&#8230;, ())) &#8594; \u003cem\u003eb\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Auxiliary",
        "fct-package": "easyrender",
        "fct-signature": "fun -\u003e args -\u003e res",
        "fct-source": "src/Graphics-EasyRender-Auxiliary.html#muncurry",
        "fct-type": "method",
        "title": "muncurry"
      },
      "index": {
        "description": "Multiple uncurry map function to its uncurried form",
        "hierarchy": "Graphics EasyRender Auxiliary",
        "module": "Graphics.EasyRender.Auxiliary",
        "name": "muncurry",
        "normalized": "a-\u003eb-\u003ec",
        "package": "easyrender",
        "partial": "",
        "signature": "fun-\u003eargs-\u003eres"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exposes the implementation details of\n \u003ca\u003eGraphics.EasyRender\u003c/a\u003e. Most user code should not need to import\n this; they should import \u003ca\u003eGraphics.EasyRender\u003c/a\u003e instead. \n\u003c/p\u003e\u003cp\u003eThis module provides efficient functions for rendering vector\n graphics to a number of formats, including EPS, PostScript, and\n PDF. It provides an abstraction for multi-page documents, as well\n as a set of graphics primitives for page descriptions. \n\u003c/p\u003e\u003cp\u003eThe graphics model is similar to that of the PostScript and PDF\n languages, but we only implement a subset of their functionality.\n Care has been taken that graphics rendering is done efficiently and\n as lazily as possible; documents are rendered \"on the fly\",\n without the need to store the whole document in memory.\n\u003c/p\u003e\u003cp\u003eThe provided document description model consists of two separate\n layers of abstraction:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003cem\u003edrawing\u003c/em\u003e is concerned with placing marks on a fixed surface, and\n takes place in the \u003ccode\u003e\u003ca\u003eDraw\u003c/a\u003e\u003c/code\u003e monad;\n\u003c/li\u003e\u003cli\u003e \u003cem\u003edocument structure\u003c/em\u003e is concerned with a sequence of pages, their\n bounding boxes, and other meta-data. It takes place in the\n \u003ccode\u003e\u003ca\u003eDocument\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "module",
        "fct-source": "src/Graphics-EasyRender-Internal.html",
        "fct-type": "module",
        "title": "Internal"
      },
      "index": {
        "description": "This module exposes the implementation details of Graphics.EasyRender Most user code should not need to import this they should import Graphics.EasyRender instead This module provides efficient functions for rendering vector graphics to number of formats including EPS PostScript and PDF It provides an abstraction for multi-page documents as well as set of graphics primitives for page descriptions The graphics model is similar to that of the PostScript and PDF languages but we only implement subset of their functionality Care has been taken that graphics rendering is done efficiently and as lazily as possible documents are rendered on the fly without the need to store the whole document in memory The provided document description model consists of two separate layers of abstraction drawing is concerned with placing marks on fixed surface and takes place in the Draw monad document structure is concerned with sequence of pages their bounding boxes and other meta-data It takes place in the Document monad",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "Internal",
        "normalized": "",
        "package": "easyrender",
        "partial": "Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#t:Alignment",
      "description": {
        "fct-descr": "\u003cp\u003eA real number representing text alignment.  0 = left aligned, 0.5\n = centered, 1 = right aligned. Intermediate values are also\n possible. For example, an alignment value of 0.25 means one quarter\n of the way between left aligned and right aligned.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "type",
        "fct-source": "src/Graphics-EasyRender-Internal.html#Alignment",
        "fct-type": "type",
        "title": "Alignment"
      },
      "index": {
        "description": "real number representing text alignment left aligned centered right aligned Intermediate values are also possible For example an alignment value of means one quarter of the way between left aligned and right aligned",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "Alignment",
        "normalized": "",
        "package": "easyrender",
        "partial": "Alignment",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#t:Basefont",
      "description": {
        "fct-descr": "\u003cp\u003eA enumeration type for base fonts. For the time being, we only\n offer TimesRoman and Helvetica.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "data",
        "fct-source": "src/Graphics-EasyRender-Internal.html#Basefont",
        "fct-type": "data",
        "title": "Basefont"
      },
      "index": {
        "description": "enumeration type for base fonts For the time being we only offer TimesRoman and Helvetica",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "Basefont",
        "normalized": "",
        "package": "easyrender",
        "partial": "Basefont",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#t:Boxed",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an identical \"boxed\" copy of a type constructor. This is\n used for technical reasons, to allow the \u003ccode\u003e\u003ca\u003ewprintf\u003c/a\u003e\u003c/code\u003e operation to be\n typed.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "newtype",
        "fct-source": "src/Graphics-EasyRender-Internal.html#Boxed",
        "fct-type": "newtype",
        "title": "Boxed"
      },
      "index": {
        "description": "Create an identical boxed copy of type constructor This is used for technical reasons to allow the wprintf operation to be typed",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "Boxed",
        "normalized": "",
        "package": "easyrender",
        "partial": "Boxed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#t:Boxed_Curry",
      "description": {
        "fct-descr": "\u003cp\u003eA class to curry/uncurry functions in any boxed monad. This\n establishes an isomorphism\n\u003c/p\u003e\u003cpre\u003e @fun  &#8773;  args -\u003e Boxed m res,@\n\u003c/pre\u003e\u003cp\u003ewhere\n\u003c/p\u003e\u003cpre\u003e fun = a1 -\u003e a2 -\u003e ... -\u003e an -\u003e Boxed m res,\n args = (a1, (a2, (..., (an, ())))).\n\u003c/pre\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "class",
        "fct-source": "src/Graphics-EasyRender-Internal.html#Boxed_Curry",
        "fct-type": "class",
        "title": "Boxed_Curry"
      },
      "index": {
        "description": "class to curry uncurry functions in any boxed monad This establishes an isomorphism fun args Boxed res where fun a1 a2 an Boxed res args a1 a2 an",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "Boxed_Curry",
        "normalized": "",
        "package": "easyrender",
        "partial": "Boxed Curry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#t:Color",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of colors.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "data",
        "fct-source": "src/Graphics-EasyRender-Internal.html#Color",
        "fct-type": "data",
        "title": "Color"
      },
      "index": {
        "description": "The type of colors",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "Color",
        "normalized": "",
        "package": "easyrender",
        "partial": "Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#t:Custom",
      "description": {
        "fct-descr": "\u003cp\u003eA data structure that holds application-specific meta-data and\n customization information.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "data",
        "fct-source": "src/Graphics-EasyRender-Internal.html#Custom",
        "fct-type": "data",
        "title": "Custom"
      },
      "index": {
        "description": "data structure that holds application-specific meta-data and customization information",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "Custom",
        "normalized": "",
        "package": "easyrender",
        "partial": "Custom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#t:CustomDef",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of custom definitions, to be used with the\n \u003ccode\u003e\u003ca\u003edraw_subroutine\u003c/a\u003e\u003c/code\u003e command.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "data",
        "fct-source": "src/Graphics-EasyRender-Internal.html#CustomDef",
        "fct-type": "data",
        "title": "CustomDef"
      },
      "index": {
        "description": "The type of custom definitions to be used with the draw subroutine command",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "CustomDef",
        "normalized": "",
        "package": "easyrender",
        "partial": "Custom Def",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#t:Document",
      "description": {
        "fct-descr": "\u003cp\u003eThe Document monad.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "data",
        "fct-source": "src/Graphics-EasyRender-Internal.html#Document",
        "fct-type": "data",
        "title": "Document"
      },
      "index": {
        "description": "The Document monad",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "Document",
        "normalized": "",
        "package": "easyrender",
        "partial": "Document",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#t:Draw",
      "description": {
        "fct-descr": "\u003cp\u003eThe Draw monad.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "data",
        "fct-source": "src/Graphics-EasyRender-Internal.html#Draw",
        "fct-type": "data",
        "title": "Draw"
      },
      "index": {
        "description": "The Draw monad",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "Draw",
        "normalized": "",
        "package": "easyrender",
        "partial": "Draw",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#t:DrawCommand",
      "description": {
        "fct-descr": "\u003cp\u003eAn abstract data type describing individual drawing commands.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "data",
        "fct-source": "src/Graphics-EasyRender-Internal.html#DrawCommand",
        "fct-type": "data",
        "title": "DrawCommand"
      },
      "index": {
        "description": "An abstract data type describing individual drawing commands",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "DrawCommand",
        "normalized": "",
        "package": "easyrender",
        "partial": "Draw Command",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#t:Filepos",
      "description": {
        "fct-descr": "\u003cp\u003eA position in a file. The first byte is 0.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "type",
        "fct-source": "src/Graphics-EasyRender-Internal.html#Filepos",
        "fct-type": "type",
        "title": "Filepos"
      },
      "index": {
        "description": "position in file The first byte is",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "Filepos",
        "normalized": "",
        "package": "easyrender",
        "partial": "Filepos",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#t:Font",
      "description": {
        "fct-descr": "\u003cp\u003eA data type describing a scaled font. This consists of a base\n font and a point size.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "data",
        "fct-source": "src/Graphics-EasyRender-Internal.html#Font",
        "fct-type": "data",
        "title": "Font"
      },
      "index": {
        "description": "data type describing scaled font This consists of base font and point size",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "Font",
        "normalized": "",
        "package": "easyrender",
        "partial": "Font",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#t:Fontmetric",
      "description": {
        "fct-descr": "\u003cp\u003eA type representing font metrics for a given base font. The first\n component is the default width of characters; the second component\n is a map from characters to widths.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "type",
        "fct-source": "src/Graphics-EasyRender-Internal.html#Fontmetric",
        "fct-type": "type",
        "title": "Fontmetric"
      },
      "index": {
        "description": "type representing font metrics for given base font The first component is the default width of characters the second component is map from characters to widths",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "Fontmetric",
        "normalized": "",
        "package": "easyrender",
        "partial": "Fontmetric",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#t:Language",
      "description": {
        "fct-descr": "\u003cp\u003eAn enumeration of backend languages, for the purpose of defining\n custom drawing commands. Note that several backends (e.g. EPS and\n PostScript) may share the same language, and therefore they are\n only represented once in this enumeration.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "data",
        "fct-source": "src/Graphics-EasyRender-Internal.html#Language",
        "fct-type": "data",
        "title": "Language"
      },
      "index": {
        "description": "An enumeration of backend languages for the purpose of defining custom drawing commands Note that several backends e.g EPS and PostScript may share the same language and therefore they are only represented once in this enumeration",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "Language",
        "normalized": "",
        "package": "easyrender",
        "partial": "Language",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#t:Object",
      "description": {
        "fct-descr": "\u003cp\u003eA PDF object reference.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "type",
        "fct-source": "src/Graphics-EasyRender-Internal.html#Object",
        "fct-type": "type",
        "title": "Object"
      },
      "index": {
        "description": "PDF object reference",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "Object",
        "normalized": "",
        "package": "easyrender",
        "partial": "Object",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#t:PDFWriter",
      "description": {
        "fct-descr": "\u003cp\u003eBoxed version of the \u003ccode\u003e\u003ca\u003eRawPDFWriter\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "type",
        "fct-source": "src/Graphics-EasyRender-Internal.html#PDFWriter",
        "fct-type": "type",
        "title": "PDFWriter"
      },
      "index": {
        "description": "Boxed version of the RawPDFWriter monad",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "PDFWriter",
        "normalized": "",
        "package": "easyrender",
        "partial": "PDFWriter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#t:PDF_State",
      "description": {
        "fct-descr": "\u003cp\u003eA state to keep track of PDF document structure: current\n character count, current TOC, current page, etc.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "data",
        "fct-source": "src/Graphics-EasyRender-Internal.html#PDF_State",
        "fct-type": "data",
        "title": "PDF_State"
      },
      "index": {
        "description": "state to keep track of PDF document structure current character count current TOC current page etc",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "PDF_State",
        "normalized": "",
        "package": "easyrender",
        "partial": "PDF State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#t:PSWriter",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ePSWriter\u003c/a\u003e\u003c/code\u003e monad. This is just a \u003ccode\u003e\u003ca\u003ePS_State\u003c/a\u003e\u003c/code\u003e wrapped around\n the \u003ccode\u003e\u003ca\u003eWriter\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "type",
        "fct-source": "src/Graphics-EasyRender-Internal.html#PSWriter",
        "fct-type": "type",
        "title": "PSWriter"
      },
      "index": {
        "description": "The PSWriter monad This is just PS State wrapped around the Writer monad",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "PSWriter",
        "normalized": "",
        "package": "easyrender",
        "partial": "PSWriter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#t:PS_State",
      "description": {
        "fct-descr": "\u003cp\u003eA state to keep track of a current bounding box and page number.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "data",
        "fct-source": "src/Graphics-EasyRender-Internal.html#PS_State",
        "fct-type": "data",
        "title": "PS_State"
      },
      "index": {
        "description": "state to keep track of current bounding box and page number",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "PS_State",
        "normalized": "",
        "package": "easyrender",
        "partial": "PS State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#t:Page",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of page numbers.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "type",
        "fct-source": "src/Graphics-EasyRender-Internal.html#Page",
        "fct-type": "type",
        "title": "Page"
      },
      "index": {
        "description": "The type of page numbers",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "Page",
        "normalized": "",
        "package": "easyrender",
        "partial": "Page",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#t:RawPDFWriter",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eRawPDFWriter\u003c/a\u003e\u003c/code\u003e monad is just a \u003ccode\u003e\u003ca\u003ePDF_State\u003c/a\u003e\u003c/code\u003e wrapped around\n the \u003ccode\u003e\u003ca\u003eWriter\u003c/a\u003e\u003c/code\u003e monad. Its \u003ccode\u003e\u003ca\u003ewPutChar\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ewPutStr\u003c/a\u003e\u003c/code\u003e methods\n automatically keep track of the file position.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "type",
        "fct-source": "src/Graphics-EasyRender-Internal.html#RawPDFWriter",
        "fct-type": "type",
        "title": "RawPDFWriter"
      },
      "index": {
        "description": "The RawPDFWriter monad is just PDF State wrapped around the Writer monad Its wPutChar and wPutStr methods automatically keep track of the file position",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "RawPDFWriter",
        "normalized": "",
        "package": "easyrender",
        "partial": "Raw PDFWriter",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#t:RenderFormat",
      "description": {
        "fct-descr": "\u003cp\u003eAvailable graphics formats for rendering.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "data",
        "fct-source": "src/Graphics-EasyRender-Internal.html#RenderFormat",
        "fct-type": "data",
        "title": "RenderFormat"
      },
      "index": {
        "description": "Available graphics formats for rendering",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "RenderFormat",
        "normalized": "",
        "package": "easyrender",
        "partial": "Render Format",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#t:Writer",
      "description": {
        "fct-descr": "\u003cp\u003eA generic \u003ccode\u003e\u003ca\u003eWriterMonad\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "data",
        "fct-source": "src/Graphics-EasyRender-Internal.html#Writer",
        "fct-type": "data",
        "title": "Writer"
      },
      "index": {
        "description": "generic WriterMonad",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "Writer",
        "normalized": "",
        "package": "easyrender",
        "partial": "Writer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#t:WriterMonad",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eWriterMonad\u003c/a\u003e\u003c/code\u003e is any monad that one can output strings to.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003ewPutChar\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ewPutStr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "class",
        "fct-source": "src/Graphics-EasyRender-Internal.html#WriterMonad",
        "fct-type": "class",
        "title": "WriterMonad"
      },
      "index": {
        "description": "WriterMonad is any monad that one can output strings to Minimal complete definition wPutChar or wPutStr",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "WriterMonad",
        "normalized": "",
        "package": "easyrender",
        "partial": "Writer Monad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#t:X",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of \u003cem\u003ex\u003c/em\u003e-coordinates.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "type",
        "fct-source": "src/Graphics-EasyRender-Internal.html#X",
        "fct-type": "type",
        "title": "X"
      },
      "index": {
        "description": "The type of coordinates",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "X",
        "normalized": "",
        "package": "easyrender",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#t:Y",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of \u003cem\u003ey\u003c/em\u003e-coordinates.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "type",
        "fct-source": "src/Graphics-EasyRender-Internal.html#Y",
        "fct-type": "type",
        "title": "Y"
      },
      "index": {
        "description": "The type of coordinates",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "Y",
        "normalized": "",
        "package": "easyrender",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Boxed",
      "description": {
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Boxed (m a)",
        "fct-source": "src/Graphics-EasyRender-Internal.html#Boxed",
        "fct-type": "function",
        "title": "Boxed"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "Boxed",
        "normalized": "",
        "package": "easyrender",
        "partial": "Boxed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Closepath",
      "description": {
        "fct-descr": "\u003cp\u003eClose the current subpath.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Closepath",
        "fct-source": "src/Graphics-EasyRender-Internal.html#DrawCommand",
        "fct-type": "function",
        "title": "Closepath"
      },
      "index": {
        "description": "Close the current subpath",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "Closepath",
        "normalized": "",
        "package": "easyrender",
        "partial": "Closepath",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Color_Gray",
      "description": {
        "fct-descr": "\u003cp\u003eGray value, in the range from\n 0.0 (black) to 1.0 (white).\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Color_Gray Double",
        "fct-source": "src/Graphics-EasyRender-Internal.html#Color",
        "fct-type": "function",
        "title": "Color_Gray"
      },
      "index": {
        "description": "Gray value in the range from black to white",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "Color_Gray",
        "normalized": "",
        "package": "easyrender",
        "partial": "Color Gray",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Color_RGB",
      "description": {
        "fct-descr": "\u003cp\u003eRed, green and blue components,\n in the range from 0.0 (dark) to\n 1.0 (bright).\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Color_RGB Double Double Double",
        "fct-source": "src/Graphics-EasyRender-Internal.html#Color",
        "fct-type": "function",
        "title": "Color_RGB"
      },
      "index": {
        "description": "Red green and blue components in the range from dark to bright",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "Color_RGB",
        "normalized": "",
        "package": "easyrender",
        "partial": "Color RGB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Comment",
      "description": {
        "fct-descr": "\u003cp\u003eA human-readable comment, not rendered\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Comment String",
        "fct-source": "src/Graphics-EasyRender-Internal.html#DrawCommand",
        "fct-type": "function",
        "title": "Comment"
      },
      "index": {
        "description": "human-readable comment not rendered",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "Comment",
        "normalized": "",
        "package": "easyrender",
        "partial": "Comment",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Curveto",
      "description": {
        "fct-descr": "\u003cp\u003eAppend a Bezier curve segment.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Curveto X Y X Y X Y",
        "fct-source": "src/Graphics-EasyRender-Internal.html#DrawCommand",
        "fct-type": "function",
        "title": "Curveto"
      },
      "index": {
        "description": "Append Bezier curve segment",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "Curveto",
        "normalized": "",
        "package": "easyrender",
        "partial": "Curveto",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Custom",
      "description": {
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Custom",
        "fct-source": "src/Graphics-EasyRender-Internal.html#Custom",
        "fct-type": "function",
        "title": "Custom"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "Custom",
        "normalized": "",
        "package": "easyrender",
        "partial": "Custom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:CustomDef",
      "description": {
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "CustomDef Language String",
        "fct-source": "src/Graphics-EasyRender-Internal.html#CustomDef",
        "fct-type": "function",
        "title": "CustomDef"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "CustomDef",
        "normalized": "",
        "package": "easyrender",
        "partial": "Custom Def",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Document_Page",
      "description": {
        "fct-descr": "\u003cp\u003ePage with bounding box\n known at the beginning.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Document_Page X Y (Draw (Document a))",
        "fct-source": "src/Graphics-EasyRender-Internal.html#Document",
        "fct-type": "function",
        "title": "Document_Page"
      },
      "index": {
        "description": "Page with bounding box known at the beginning",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "Document_Page",
        "normalized": "",
        "package": "easyrender",
        "partial": "Document Page",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Document_Page_defer",
      "description": {
        "fct-descr": "\u003cp\u003ePage with bounding box\n known at the end.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Document_Page_defer (Draw (X, Y, Document a))",
        "fct-source": "src/Graphics-EasyRender-Internal.html#Document",
        "fct-type": "function",
        "title": "Document_Page_defer"
      },
      "index": {
        "description": "Page with bounding box known at the end",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "Document_Page_defer",
        "normalized": "Document_Page_defer(Draw(X,Y,Document a))",
        "package": "easyrender",
        "partial": "Document Page",
        "signature": "Document_Page_defer(Draw(X,Y,Document a))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Document_Return",
      "description": {
        "fct-descr": "\u003cp\u003eTerminate with a result.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Document_Return a",
        "fct-source": "src/Graphics-EasyRender-Internal.html#Document",
        "fct-type": "function",
        "title": "Document_Return"
      },
      "index": {
        "description": "Terminate with result",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "Document_Return",
        "normalized": "",
        "package": "easyrender",
        "partial": "Document Return",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Draw_Block",
      "description": {
        "fct-descr": "\u003cp\u003eBlock structure. Perform the\n commands of the outer \u003ccode\u003e\u003ca\u003eDraw\u003c/a\u003e\u003c/code\u003e in\n a temporary copy of the\n graphics state, then continue\n with the inner \u003ccode\u003e\u003ca\u003eDraw\u003c/a\u003e\u003c/code\u003e in the\n original graphics state.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Draw_Block (Draw (Draw a))",
        "fct-source": "src/Graphics-EasyRender-Internal.html#Draw",
        "fct-type": "function",
        "title": "Draw_Block"
      },
      "index": {
        "description": "Block structure Perform the commands of the outer Draw in temporary copy of the graphics state then continue with the inner Draw in the original graphics state",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "Draw_Block",
        "normalized": "",
        "package": "easyrender",
        "partial": "Draw Block",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Draw_Return",
      "description": {
        "fct-descr": "\u003cp\u003eTerminate with a result.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Draw_Return a",
        "fct-source": "src/Graphics-EasyRender-Internal.html#Draw",
        "fct-type": "function",
        "title": "Draw_Return"
      },
      "index": {
        "description": "Terminate with result",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "Draw_Return",
        "normalized": "",
        "package": "easyrender",
        "partial": "Draw Return",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Draw_Write",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a command and continue.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Draw_Write DrawCommand (Draw a)",
        "fct-source": "src/Graphics-EasyRender-Internal.html#Draw",
        "fct-type": "function",
        "title": "Draw_Write"
      },
      "index": {
        "description": "Write command and continue",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "Draw_Write",
        "normalized": "",
        "package": "easyrender",
        "partial": "Draw Write",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Fill",
      "description": {
        "fct-descr": "\u003cp\u003eFill and clear the current path.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Fill Color",
        "fct-source": "src/Graphics-EasyRender-Internal.html#DrawCommand",
        "fct-type": "function",
        "title": "Fill"
      },
      "index": {
        "description": "Fill and clear the current path",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "Fill",
        "normalized": "",
        "package": "easyrender",
        "partial": "Fill",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:FillStroke",
      "description": {
        "fct-descr": "\u003cp\u003eFill and stroke and clear the current path.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "FillStroke Color",
        "fct-source": "src/Graphics-EasyRender-Internal.html#DrawCommand",
        "fct-type": "function",
        "title": "FillStroke"
      },
      "index": {
        "description": "Fill and stroke and clear the current path",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "FillStroke",
        "normalized": "",
        "package": "easyrender",
        "partial": "Fill Stroke",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Font",
      "description": {
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Font Basefont Double",
        "fct-source": "src/Graphics-EasyRender-Internal.html#Font",
        "fct-type": "function",
        "title": "Font"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "Font",
        "normalized": "",
        "package": "easyrender",
        "partial": "Font",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Format_Debug",
      "description": {
        "fct-descr": "\u003cp\u003eAn ASCII-based debugging format.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Format_Debug",
        "fct-source": "src/Graphics-EasyRender-Internal.html#RenderFormat",
        "fct-type": "function",
        "title": "Format_Debug"
      },
      "index": {
        "description": "An ASCII-based debugging format",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "Format_Debug",
        "normalized": "",
        "package": "easyrender",
        "partial": "Format Debug",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Format_EPS",
      "description": {
        "fct-descr": "\u003cp\u003eEncapsulated PostScript. The integer\n argument specifies which single page to\n extract from the document.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Format_EPS Integer",
        "fct-source": "src/Graphics-EasyRender-Internal.html#RenderFormat",
        "fct-type": "function",
        "title": "Format_EPS"
      },
      "index": {
        "description": "Encapsulated PostScript The integer argument specifies which single page to extract from the document",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "Format_EPS",
        "normalized": "",
        "package": "easyrender",
        "partial": "Format EPS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Format_PDF",
      "description": {
        "fct-descr": "\u003cp\u003ePortable Document Format.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Format_PDF",
        "fct-source": "src/Graphics-EasyRender-Internal.html#RenderFormat",
        "fct-type": "function",
        "title": "Format_PDF"
      },
      "index": {
        "description": "Portable Document Format",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "Format_PDF",
        "normalized": "",
        "package": "easyrender",
        "partial": "Format PDF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Format_PS",
      "description": {
        "fct-descr": "\u003cp\u003ePostScript.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Format_PS",
        "fct-source": "src/Graphics-EasyRender-Internal.html#RenderFormat",
        "fct-type": "function",
        "title": "Format_PS"
      },
      "index": {
        "description": "PostScript",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "Format_PS",
        "normalized": "",
        "package": "easyrender",
        "partial": "Format PS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Helvetica",
      "description": {
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Helvetica",
        "fct-source": "src/Graphics-EasyRender-Internal.html#Basefont",
        "fct-type": "function",
        "title": "Helvetica"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "Helvetica",
        "normalized": "",
        "package": "easyrender",
        "partial": "Helvetica",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Language_ASCII",
      "description": {
        "fct-descr": "\u003cp\u003eASCII (for debugging)\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Language_ASCII",
        "fct-source": "src/Graphics-EasyRender-Internal.html#Language",
        "fct-type": "function",
        "title": "Language_ASCII"
      },
      "index": {
        "description": "ASCII for debugging",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "Language_ASCII",
        "normalized": "",
        "package": "easyrender",
        "partial": "Language ASCII",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Language_PDF",
      "description": {
        "fct-descr": "\u003cp\u003ePDF\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Language_PDF",
        "fct-source": "src/Graphics-EasyRender-Internal.html#Language",
        "fct-type": "function",
        "title": "Language_PDF"
      },
      "index": {
        "description": "PDF",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "Language_PDF",
        "normalized": "",
        "package": "easyrender",
        "partial": "Language PDF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Language_PS",
      "description": {
        "fct-descr": "\u003cp\u003ePostScript (including EPS)\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Language_PS",
        "fct-source": "src/Graphics-EasyRender-Internal.html#Language",
        "fct-type": "function",
        "title": "Language_PS"
      },
      "index": {
        "description": "PostScript including EPS",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "Language_PS",
        "normalized": "",
        "package": "easyrender",
        "partial": "Language PS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Lineto",
      "description": {
        "fct-descr": "\u003cp\u003eAppend a straight line to the current subpath.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Lineto X Y",
        "fct-source": "src/Graphics-EasyRender-Internal.html#DrawCommand",
        "fct-type": "function",
        "title": "Lineto"
      },
      "index": {
        "description": "Append straight line to the current subpath",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "Lineto",
        "normalized": "",
        "package": "easyrender",
        "partial": "Lineto",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Moveto",
      "description": {
        "fct-descr": "\u003cp\u003eStart a new subpath at the given coordinates.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Moveto X Y",
        "fct-source": "src/Graphics-EasyRender-Internal.html#DrawCommand",
        "fct-type": "function",
        "title": "Moveto"
      },
      "index": {
        "description": "Start new subpath at the given coordinates",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "Moveto",
        "normalized": "",
        "package": "easyrender",
        "partial": "Moveto",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Newpath",
      "description": {
        "fct-descr": "\u003cp\u003eSet the current path to empty.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Newpath",
        "fct-source": "src/Graphics-EasyRender-Internal.html#DrawCommand",
        "fct-type": "function",
        "title": "Newpath"
      },
      "index": {
        "description": "Set the current path to empty",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "Newpath",
        "normalized": "",
        "package": "easyrender",
        "partial": "Newpath",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:PDF_State",
      "description": {
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "PDF_State",
        "fct-source": "src/Graphics-EasyRender-Internal.html#PDF_State",
        "fct-type": "function",
        "title": "PDF_State"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "PDF_State",
        "normalized": "",
        "package": "easyrender",
        "partial": "PDF State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:PS_State",
      "description": {
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "PS_State !X !Y !Page",
        "fct-source": "src/Graphics-EasyRender-Internal.html#PS_State",
        "fct-type": "function",
        "title": "PS_State"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "PS_State",
        "normalized": "",
        "package": "easyrender",
        "partial": "PS State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Rotate",
      "description": {
        "fct-descr": "\u003cp\u003eRotate the current coordinate system.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Rotate Double",
        "fct-source": "src/Graphics-EasyRender-Internal.html#DrawCommand",
        "fct-type": "function",
        "title": "Rotate"
      },
      "index": {
        "description": "Rotate the current coordinate system",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "Rotate",
        "normalized": "",
        "package": "easyrender",
        "partial": "Rotate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Scale",
      "description": {
        "fct-descr": "\u003cp\u003eScale the current coordinate system.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Scale X Y",
        "fct-source": "src/Graphics-EasyRender-Internal.html#DrawCommand",
        "fct-type": "function",
        "title": "Scale"
      },
      "index": {
        "description": "Scale the current coordinate system",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "Scale",
        "normalized": "",
        "package": "easyrender",
        "partial": "Scale",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:SetColor",
      "description": {
        "fct-descr": "\u003cp\u003eSet current color.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "SetColor Color",
        "fct-source": "src/Graphics-EasyRender-Internal.html#DrawCommand",
        "fct-type": "function",
        "title": "SetColor"
      },
      "index": {
        "description": "Set current color",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "SetColor",
        "normalized": "",
        "package": "easyrender",
        "partial": "Set Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:SetLineWidth",
      "description": {
        "fct-descr": "\u003cp\u003eSet current line width.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "SetLineWidth Double",
        "fct-source": "src/Graphics-EasyRender-Internal.html#DrawCommand",
        "fct-type": "function",
        "title": "SetLineWidth"
      },
      "index": {
        "description": "Set current line width",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "SetLineWidth",
        "normalized": "",
        "package": "easyrender",
        "partial": "Set Line Width",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Stroke",
      "description": {
        "fct-descr": "\u003cp\u003eStroke and clear the current path.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Stroke",
        "fct-source": "src/Graphics-EasyRender-Internal.html#DrawCommand",
        "fct-type": "function",
        "title": "Stroke"
      },
      "index": {
        "description": "Stroke and clear the current path",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "Stroke",
        "normalized": "",
        "package": "easyrender",
        "partial": "Stroke",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Subroutine",
      "description": {
        "fct-descr": "\u003cp\u003eA subroutine is a composite drawing command. In\n addition to a default definition that works for\n any backend, it can also have optional specialized\n definitions for particular backends.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Subroutine (Draw ()) [CustomDef]",
        "fct-source": "src/Graphics-EasyRender-Internal.html#DrawCommand",
        "fct-type": "function",
        "title": "Subroutine"
      },
      "index": {
        "description": "subroutine is composite drawing command In addition to default definition that works for any backend it can also have optional specialized definitions for particular backends",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "Subroutine",
        "normalized": "Subroutine(Draw())[CustomDef]",
        "package": "easyrender",
        "partial": "Subroutine",
        "signature": "Subroutine(Draw())[CustomDef]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:TextBox",
      "description": {
        "fct-descr": "\u003cp\u003eText.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "TextBox Alignment Font Color X Y X Y Double String",
        "fct-source": "src/Graphics-EasyRender-Internal.html#DrawCommand",
        "fct-type": "function",
        "title": "TextBox"
      },
      "index": {
        "description": "Text",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "TextBox",
        "normalized": "",
        "package": "easyrender",
        "partial": "Text Box",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:TimesRoman",
      "description": {
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "TimesRoman",
        "fct-source": "src/Graphics-EasyRender-Internal.html#Basefont",
        "fct-type": "function",
        "title": "TimesRoman"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "TimesRoman",
        "normalized": "",
        "package": "easyrender",
        "partial": "Times Roman",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Translate",
      "description": {
        "fct-descr": "\u003cp\u003eTranslate current coordinate system.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Translate X Y",
        "fct-source": "src/Graphics-EasyRender-Internal.html#DrawCommand",
        "fct-type": "function",
        "title": "Translate"
      },
      "index": {
        "description": "Translate current coordinate system",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "Translate",
        "normalized": "",
        "package": "easyrender",
        "partial": "Translate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Writer_PutChar",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a character.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Writer_PutChar Char (Writer a)",
        "fct-source": "src/Graphics-EasyRender-Internal.html#Writer",
        "fct-type": "function",
        "title": "Writer_PutChar"
      },
      "index": {
        "description": "Write character",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "Writer_PutChar",
        "normalized": "",
        "package": "easyrender",
        "partial": "Writer Put Char",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Writer_PutStr",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a string.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Writer_PutStr String (Writer a)",
        "fct-source": "src/Graphics-EasyRender-Internal.html#Writer",
        "fct-type": "function",
        "title": "Writer_PutStr"
      },
      "index": {
        "description": "Write string",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "Writer_PutStr",
        "normalized": "",
        "package": "easyrender",
        "partial": "Writer Put Str",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Writer_Return",
      "description": {
        "fct-descr": "\u003cp\u003eTerminate with a result.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Writer_Return a",
        "fct-source": "src/Graphics-EasyRender-Internal.html#Writer",
        "fct-type": "function",
        "title": "Writer_Return"
      },
      "index": {
        "description": "Terminate with result",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "Writer_Return",
        "normalized": "",
        "package": "easyrender",
        "partial": "Writer Return",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:align_center",
      "description": {
        "fct-descr": "\u003cp\u003eCentered alignment.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Alignment",
        "fct-source": "src/Graphics-EasyRender-Internal.html#align_center",
        "fct-type": "function",
        "title": "align_center"
      },
      "index": {
        "description": "Centered alignment",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "align_center",
        "normalized": "",
        "package": "easyrender",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:align_left",
      "description": {
        "fct-descr": "\u003cp\u003eLeft alignment.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Alignment",
        "fct-source": "src/Graphics-EasyRender-Internal.html#align_left",
        "fct-type": "function",
        "title": "align_left"
      },
      "index": {
        "description": "Left alignment",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "align_left",
        "normalized": "",
        "package": "easyrender",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:align_right",
      "description": {
        "fct-descr": "\u003cp\u003eRight alignment.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Alignment",
        "fct-source": "src/Graphics-EasyRender-Internal.html#align_right",
        "fct-type": "function",
        "title": "align_right"
      },
      "index": {
        "description": "Right alignment",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "align_right",
        "normalized": "",
        "package": "easyrender",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:arc",
      "description": {
        "fct-descr": "\u003cp\u003eStart a new subpath consisting of a circular arc segment. The\n arc segment is centered at (\u003cem\u003ex\u003c/em\u003e,\u003cem\u003ey\u003c/em\u003e), has radius \u003cem\u003er\u003c/em\u003e, and extends\n from angle \u003cem\u003ea1\u003c/em\u003e to angle \u003cem\u003ea2\u003c/em\u003e, measured in degrees,\n counterclockwise from the \u003cem\u003ex\u003c/em\u003e-axis. The arc is drawn clockwise if\n \u003cem\u003ea2\u003c/em\u003e &#8805; \u003cem\u003ea1\u003c/em\u003e, and counterclockwise otherwise. The final point\n becomes the new current point.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "X -\u003e Y -\u003e Double -\u003e Double -\u003e Double -\u003e Draw ()",
        "fct-source": "src/Graphics-EasyRender-Internal.html#arc",
        "fct-type": "function",
        "title": "arc"
      },
      "index": {
        "description": "Start new subpath consisting of circular arc segment The arc segment is centered at has radius and extends from angle a1 to angle a2 measured in degrees counterclockwise from the axis The arc is drawn clockwise if a2 a1 and counterclockwise otherwise The final point becomes the new current point",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "arc",
        "normalized": "X-\u003eY-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDraw()",
        "package": "easyrender",
        "partial": "",
        "signature": "X-\u003eY-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDraw()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:arc_append",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003earc\u003c/a\u003e\u003c/code\u003e, except append to the current subpath. If necessary,\n add a straight line segment from the current point to the starting\n point of the arc.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "X -\u003e Y -\u003e Double -\u003e Double -\u003e Double -\u003e Draw ()",
        "fct-source": "src/Graphics-EasyRender-Internal.html#arc_append",
        "fct-type": "function",
        "title": "arc_append"
      },
      "index": {
        "description": "Like arc except append to the current subpath If necessary add straight line segment from the current point to the starting point of the arc",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "arc_append",
        "normalized": "X-\u003eY-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDraw()",
        "package": "easyrender",
        "partial": "",
        "signature": "X-\u003eY-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDraw()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:arc_internal",
      "description": {
        "fct-descr": "\u003cp\u003eThe common implementation of \u003ccode\u003e\u003ca\u003earc\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003earc_append\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eoval\u003c/a\u003e\u003c/code\u003e. The\n first parameter is a boolean flag indicating whether to append to\n an existing subpath or start a new subpath. The fourth and fifth\n parameter are the horizontal and vertical radius.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Bool -\u003e X -\u003e Y -\u003e Double -\u003e Double -\u003e Double -\u003e Double -\u003e Draw ()",
        "fct-source": "src/Graphics-EasyRender-Internal.html#arc_internal",
        "fct-type": "function",
        "title": "arc_internal"
      },
      "index": {
        "description": "The common implementation of arc arc append and oval The first parameter is boolean flag indicating whether to append to an existing subpath or start new subpath The fourth and fifth parameter are the horizontal and vertical radius",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "arc_internal",
        "normalized": "Bool-\u003eX-\u003eY-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDraw()",
        "package": "easyrender",
        "partial": "",
        "signature": "Bool-\u003eX-\u003eY-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDraw()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:block",
      "description": {
        "fct-descr": "\u003cp\u003ePerform a block of commands in a local copy of the graphics\n state. This is intended to be used like this:\n\u003c/p\u003e\u003cpre\u003e     block $ do\n       \u003c\u003cdrawing commands\u003e\u003e\n\u003c/pre\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Draw a -\u003e Draw a",
        "fct-source": "src/Graphics-EasyRender-Internal.html#block",
        "fct-type": "function",
        "title": "block"
      },
      "index": {
        "description": "Perform block of commands in local copy of the graphics state This is intended to be used like this block do drawing commands",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "block",
        "normalized": "Draw a-\u003eDraw a",
        "package": "easyrender",
        "partial": "",
        "signature": "Draw a-\u003eDraw a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:boxed_curry",
      "description": {
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "(args -\u003e Boxed m res) -\u003e fun",
        "fct-source": "src/Graphics-EasyRender-Internal.html#boxed_curry",
        "fct-type": "method",
        "title": "boxed_curry"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "boxed_curry",
        "normalized": "(a-\u003eBoxed b c)-\u003ed",
        "package": "easyrender",
        "partial": "",
        "signature": "(args-\u003eBoxed m res)-\u003efun"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:boxed_uncurry",
      "description": {
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "fun -\u003e args -\u003e Boxed m res",
        "fct-source": "src/Graphics-EasyRender-Internal.html#boxed_uncurry",
        "fct-type": "method",
        "title": "boxed_uncurry"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "boxed_uncurry",
        "normalized": "a-\u003eb-\u003eBoxed c d",
        "package": "easyrender",
        "partial": "",
        "signature": "fun-\u003eargs-\u003eBoxed m res"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:char_metric",
      "description": {
        "fct-descr": "\u003cp\u003eLook up the width of a character in the given metric.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Fontmetric -\u003e Char -\u003e Double",
        "fct-source": "src/Graphics-EasyRender-Internal.html#char_metric",
        "fct-type": "function",
        "title": "char_metric"
      },
      "index": {
        "description": "Look up the width of character in the given metric",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "char_metric",
        "normalized": "Fontmetric-\u003eChar-\u003eDouble",
        "package": "easyrender",
        "partial": "",
        "signature": "Fontmetric-\u003eChar-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:closepath",
      "description": {
        "fct-descr": "\u003cp\u003eClose the current subpath. If necessary, connect the subpath's\n final and initial points by a straight line segment. Note that a\n closed path is rendered differently than a non-closed path whose\n initial and final points coincide, because in the latter case, the\n endpoints are capped rather than mitered.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Draw ()",
        "fct-source": "src/Graphics-EasyRender-Internal.html#closepath",
        "fct-type": "function",
        "title": "closepath"
      },
      "index": {
        "description": "Close the current subpath If necessary connect the subpath final and initial points by straight line segment Note that closed path is rendered differently than non-closed path whose initial and final points coincide because in the latter case the endpoints are capped rather than mitered",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "closepath",
        "normalized": "Draw()",
        "package": "easyrender",
        "partial": "",
        "signature": "Draw()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:color_to_ps",
      "description": {
        "fct-descr": "\u003cp\u003eSet the color.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Color -\u003e PSWriter ()",
        "fct-source": "src/Graphics-EasyRender-Internal.html#color_to_ps",
        "fct-type": "function",
        "title": "color_to_ps"
      },
      "index": {
        "description": "Set the color",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "color_to_ps",
        "normalized": "Color-\u003ePSWriter()",
        "package": "easyrender",
        "partial": "",
        "signature": "Color-\u003ePSWriter()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:command_to_ascii",
      "description": {
        "fct-descr": "\u003cp\u003eRender drawing commands as ASCII.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "DrawCommand -\u003e Writer ()",
        "fct-source": "src/Graphics-EasyRender-Internal.html#command_to_ascii",
        "fct-type": "function",
        "title": "command_to_ascii"
      },
      "index": {
        "description": "Render drawing commands as ASCII",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "command_to_ascii",
        "normalized": "DrawCommand-\u003eWriter()",
        "package": "easyrender",
        "partial": "",
        "signature": "DrawCommand-\u003eWriter()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:command_to_pdf",
      "description": {
        "fct-descr": "\u003cp\u003eRender a drawing command to PDF.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "DrawCommand -\u003e PDFWriter ()",
        "fct-source": "src/Graphics-EasyRender-Internal.html#command_to_pdf",
        "fct-type": "function",
        "title": "command_to_pdf"
      },
      "index": {
        "description": "Render drawing command to PDF",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "command_to_pdf",
        "normalized": "DrawCommand-\u003ePDFWriter()",
        "package": "easyrender",
        "partial": "",
        "signature": "DrawCommand-\u003ePDFWriter()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:command_to_ps",
      "description": {
        "fct-descr": "\u003cp\u003eDraw a single drawing command to PostScript.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "DrawCommand -\u003e PSWriter ()",
        "fct-source": "src/Graphics-EasyRender-Internal.html#command_to_ps",
        "fct-type": "function",
        "title": "command_to_ps"
      },
      "index": {
        "description": "Draw single drawing command to PostScript",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "command_to_ps",
        "normalized": "DrawCommand-\u003ePSWriter()",
        "package": "easyrender",
        "partial": "",
        "signature": "DrawCommand-\u003ePSWriter()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:comment",
      "description": {
        "fct-descr": "\u003cp\u003eInsert a human-readable comment in the content stream. This is\n for information only, and is not rendered in the graphical output.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "String -\u003e Draw ()",
        "fct-source": "src/Graphics-EasyRender-Internal.html#comment",
        "fct-type": "function",
        "title": "comment"
      },
      "index": {
        "description": "Insert human-readable comment in the content stream This is for information only and is not rendered in the graphical output",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "comment",
        "normalized": "String-\u003eDraw()",
        "package": "easyrender",
        "partial": "",
        "signature": "String-\u003eDraw()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:creator",
      "description": {
        "fct-descr": "\u003cp\u003eName of the software that created the file.\n Example: \"MyApp 1.0\". Note: this is intended\n to hold the name of the software, not the\n human user, that created the document.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "String",
        "fct-source": "src/Graphics-EasyRender-Internal.html#Custom",
        "fct-type": "function",
        "title": "creator"
      },
      "index": {
        "description": "Name of the software that created the file Example MyApp Note this is intended to hold the name of the software not the human user that created the document",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "creator",
        "normalized": "",
        "package": "easyrender",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:curveto",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ecurveto\u003c/a\u003e\u003c/code\u003e \u003cem\u003ex1\u003c/em\u003e \u003cem\u003ey1\u003c/em\u003e \u003cem\u003ex2\u003c/em\u003e \u003cem\u003ey2\u003c/em\u003e \u003cem\u003ex\u003c/em\u003e \u003cem\u003ey\u003c/em\u003e\u003c/code\u003e: Extend the current\n subpath by a Bezier curve segment from the current point to\n (\u003cem\u003ex\u003c/em\u003e,\u003cem\u003ey\u003c/em\u003e), with control points (\u003cem\u003ex1\u003c/em\u003e,\u003cem\u003ey1\u003c/em\u003e) and (\u003cem\u003ex2\u003c/em\u003e,\u003cem\u003ey2\u003c/em\u003e). The\n point (\u003cem\u003ex\u003c/em\u003e,\u003cem\u003ey\u003c/em\u003e) becomes the current point.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "X -\u003e Y -\u003e X -\u003e Y -\u003e X -\u003e Y -\u003e Draw ()",
        "fct-source": "src/Graphics-EasyRender-Internal.html#curveto",
        "fct-type": "function",
        "title": "curveto"
      },
      "index": {
        "description": "curveto x1 y1 x2 y2 Extend the current subpath by Bezier curve segment from the current point to with control points x1 y1 and x2 y2 The point becomes the current point",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "curveto",
        "normalized": "X-\u003eY-\u003eX-\u003eY-\u003eX-\u003eY-\u003eDraw()",
        "package": "easyrender",
        "partial": "",
        "signature": "X-\u003eY-\u003eX-\u003eY-\u003eX-\u003eY-\u003eDraw()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:custom",
      "description": {
        "fct-descr": "\u003cp\u003eAn empty customization structure. Customizations should be\n specified by modifying \u003ccode\u003e\u003ca\u003ecustom\u003c/a\u003e\u003c/code\u003e, for example:\n\u003c/p\u003e\u003cpre\u003e custom { creator = \"MyApp 1.0\" }\n\u003c/pre\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Custom",
        "fct-source": "src/Graphics-EasyRender-Internal.html#custom",
        "fct-type": "function",
        "title": "custom"
      },
      "index": {
        "description": "An empty customization structure Customizations should be specified by modifying custom for example custom creator MyApp",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "custom",
        "normalized": "",
        "package": "easyrender",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:custom_ascii",
      "description": {
        "fct-descr": "\u003cp\u003eDefine a custom ASCII definition.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "String -\u003e CustomDef",
        "fct-source": "src/Graphics-EasyRender-Internal.html#custom_ascii",
        "fct-type": "function",
        "title": "custom_ascii"
      },
      "index": {
        "description": "Define custom ASCII definition",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "custom_ascii",
        "normalized": "String-\u003eCustomDef",
        "package": "easyrender",
        "partial": "",
        "signature": "String-\u003eCustomDef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:custom_lookup",
      "description": {
        "fct-descr": "\u003cp\u003eLook up an element in a list of \u003ccode\u003e\u003ca\u003eCustomDef\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Language -\u003e [CustomDef] -\u003e Maybe String",
        "fct-source": "src/Graphics-EasyRender-Internal.html#custom_lookup",
        "fct-type": "function",
        "title": "custom_lookup"
      },
      "index": {
        "description": "Look up an element in list of CustomDef",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "custom_lookup",
        "normalized": "Language-\u003e[CustomDef]-\u003eMaybe String",
        "package": "easyrender",
        "partial": "",
        "signature": "Language-\u003e[CustomDef]-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:custom_pdf",
      "description": {
        "fct-descr": "\u003cp\u003eDefine a custom PDF definition.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "String -\u003e CustomDef",
        "fct-source": "src/Graphics-EasyRender-Internal.html#custom_pdf",
        "fct-type": "function",
        "title": "custom_pdf"
      },
      "index": {
        "description": "Define custom PDF definition",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "custom_pdf",
        "normalized": "String-\u003eCustomDef",
        "package": "easyrender",
        "partial": "",
        "signature": "String-\u003eCustomDef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:custom_ps",
      "description": {
        "fct-descr": "\u003cp\u003eDefine a custom PostScript definition.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "String -\u003e CustomDef",
        "fct-source": "src/Graphics-EasyRender-Internal.html#custom_ps",
        "fct-type": "function",
        "title": "custom_ps"
      },
      "index": {
        "description": "Define custom PostScript definition",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "custom_ps",
        "normalized": "String-\u003eCustomDef",
        "package": "easyrender",
        "partial": "",
        "signature": "String-\u003eCustomDef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:document_skip",
      "description": {
        "fct-descr": "\u003cp\u003eSkip document without rendering.        \n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Document a -\u003e a",
        "fct-source": "src/Graphics-EasyRender-Internal.html#document_skip",
        "fct-type": "function",
        "title": "document_skip"
      },
      "index": {
        "description": "Skip document without rendering",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "document_skip",
        "normalized": "Document a-\u003ea",
        "package": "easyrender",
        "partial": "",
        "signature": "Document a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:document_to_ascii",
      "description": {
        "fct-descr": "\u003cp\u003eRender a document as ASCII.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Document a -\u003e Writer a",
        "fct-source": "src/Graphics-EasyRender-Internal.html#document_to_ascii",
        "fct-type": "function",
        "title": "document_to_ascii"
      },
      "index": {
        "description": "Render document as ASCII",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "document_to_ascii",
        "normalized": "Document a-\u003eWriter a",
        "package": "easyrender",
        "partial": "",
        "signature": "Document a-\u003eWriter a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:document_to_eps",
      "description": {
        "fct-descr": "\u003cp\u003eRender a document as EPS. Since EPS only permits a single page of\n output, the \u003ccode\u003e\u003ca\u003ePage\u003c/a\u003e\u003c/code\u003e parameter is used to specify which page (of a\n potential multi-page document) should be printed. An error will be\n thrown if the page number was out of range.\n\u003c/p\u003e\u003cp\u003eNote: if the return value is not used, the remaining pages are\n lazily skipped.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Custom -\u003e Page -\u003e Document a -\u003e PSWriter a",
        "fct-source": "src/Graphics-EasyRender-Internal.html#document_to_eps",
        "fct-type": "function",
        "title": "document_to_eps"
      },
      "index": {
        "description": "Render document as EPS Since EPS only permits single page of output the Page parameter is used to specify which page of potential multi-page document should be printed An error will be thrown if the page number was out of range Note if the return value is not used the remaining pages are lazily skipped",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "document_to_eps",
        "normalized": "Custom-\u003ePage-\u003eDocument a-\u003ePSWriter a",
        "package": "easyrender",
        "partial": "",
        "signature": "Custom-\u003ePage-\u003eDocument a-\u003ePSWriter a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:document_to_pdf",
      "description": {
        "fct-descr": "\u003cp\u003eRender a document as PDF.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Custom -\u003e Document a -\u003e PDFWriter a",
        "fct-source": "src/Graphics-EasyRender-Internal.html#document_to_pdf",
        "fct-type": "function",
        "title": "document_to_pdf"
      },
      "index": {
        "description": "Render document as PDF",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "document_to_pdf",
        "normalized": "Custom-\u003eDocument a-\u003ePDFWriter a",
        "package": "easyrender",
        "partial": "",
        "signature": "Custom-\u003eDocument a-\u003ePDFWriter a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:document_to_ps",
      "description": {
        "fct-descr": "\u003cp\u003eRender a document as PostScript.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Custom -\u003e Document a -\u003e PSWriter a",
        "fct-source": "src/Graphics-EasyRender-Internal.html#document_to_ps",
        "fct-type": "function",
        "title": "document_to_ps"
      },
      "index": {
        "description": "Render document as PostScript",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "document_to_ps",
        "normalized": "Custom-\u003eDocument a-\u003ePSWriter a",
        "package": "easyrender",
        "partial": "",
        "signature": "Custom-\u003eDocument a-\u003ePSWriter a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:draw_block",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a block to the \u003ccode\u003e\u003ca\u003eDraw\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Draw a -\u003e Draw a",
        "fct-source": "src/Graphics-EasyRender-Internal.html#draw_block",
        "fct-type": "function",
        "title": "draw_block"
      },
      "index": {
        "description": "Write block to the Draw monad",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "draw_block",
        "normalized": "Draw a-\u003eDraw a",
        "package": "easyrender",
        "partial": "",
        "signature": "Draw a-\u003eDraw a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:draw_skip",
      "description": {
        "fct-descr": "\u003cp\u003eSkip draw actions without rendering.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Draw a -\u003e a",
        "fct-source": "src/Graphics-EasyRender-Internal.html#draw_skip",
        "fct-type": "function",
        "title": "draw_skip"
      },
      "index": {
        "description": "Skip draw actions without rendering",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "draw_skip",
        "normalized": "Draw a-\u003ea",
        "package": "easyrender",
        "partial": "",
        "signature": "Draw a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:draw_subroutine",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new subroutine.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "[CustomDef] -\u003e Draw () -\u003e Draw ()",
        "fct-source": "src/Graphics-EasyRender-Internal.html#draw_subroutine",
        "fct-type": "function",
        "title": "draw_subroutine"
      },
      "index": {
        "description": "Create new subroutine",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "draw_subroutine",
        "normalized": "[CustomDef]-\u003eDraw()-\u003eDraw()",
        "package": "easyrender",
        "partial": "",
        "signature": "[CustomDef]-\u003eDraw()-\u003eDraw()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:draw_to_ascii",
      "description": {
        "fct-descr": "\u003cp\u003eRender draw actions as ASCII.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Draw a -\u003e Writer a",
        "fct-source": "src/Graphics-EasyRender-Internal.html#draw_to_ascii",
        "fct-type": "function",
        "title": "draw_to_ascii"
      },
      "index": {
        "description": "Render draw actions as ASCII",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "draw_to_ascii",
        "normalized": "Draw a-\u003eWriter a",
        "package": "easyrender",
        "partial": "",
        "signature": "Draw a-\u003eWriter a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:draw_to_pdf",
      "description": {
        "fct-descr": "\u003cp\u003eRender a draw action to PDF.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Draw a -\u003e PDFWriter a",
        "fct-source": "src/Graphics-EasyRender-Internal.html#draw_to_pdf",
        "fct-type": "function",
        "title": "draw_to_pdf"
      },
      "index": {
        "description": "Render draw action to PDF",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "draw_to_pdf",
        "normalized": "Draw a-\u003ePDFWriter a",
        "package": "easyrender",
        "partial": "",
        "signature": "Draw a-\u003ePDFWriter a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:draw_to_ps",
      "description": {
        "fct-descr": "\u003cp\u003eRender draw actions as PostScript.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Draw a -\u003e PSWriter a",
        "fct-source": "src/Graphics-EasyRender-Internal.html#draw_to_ps",
        "fct-type": "function",
        "title": "draw_to_ps"
      },
      "index": {
        "description": "Render draw actions as PostScript",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "draw_to_ps",
        "normalized": "Draw a-\u003ePSWriter a",
        "package": "easyrender",
        "partial": "",
        "signature": "Draw a-\u003ePSWriter a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:draw_write",
      "description": {
        "fct-descr": "\u003cp\u003eWrite the given command to the \u003ccode\u003e\u003ca\u003eDraw\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "DrawCommand -\u003e Draw ()",
        "fct-source": "src/Graphics-EasyRender-Internal.html#draw_write",
        "fct-type": "function",
        "title": "draw_write"
      },
      "index": {
        "description": "Write the given command to the Draw monad",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "draw_write",
        "normalized": "DrawCommand-\u003eDraw()",
        "package": "easyrender",
        "partial": "",
        "signature": "DrawCommand-\u003eDraw()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:endpage",
      "description": {
        "fct-descr": "\u003cp\u003eEnd the page with the given bounding box.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "X -\u003e Y -\u003e Draw (X, Y, ())",
        "fct-source": "src/Graphics-EasyRender-Internal.html#endpage",
        "fct-type": "function",
        "title": "endpage"
      },
      "index": {
        "description": "End the page with the given bounding box",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "endpage",
        "normalized": "X-\u003eY-\u003eDraw(X,Y,())",
        "package": "easyrender",
        "partial": "",
        "signature": "X-\u003eY-\u003eDraw(X,Y,())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:ensure_nl",
      "description": {
        "fct-descr": "\u003cp\u003eEnsure that the last line of the string ends in a newline\n character, adding one if necessary. An empty string is considered to contain zero lines, so no newline character needs to be added. \n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Graphics-EasyRender-Internal.html#ensure_nl",
        "fct-type": "function",
        "title": "ensure_nl"
      },
      "index": {
        "description": "Ensure that the last line of the string ends in newline character adding one if necessary An empty string is considered to contain zero lines so no newline character needs to be added",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "ensure_nl",
        "normalized": "String-\u003eString",
        "package": "easyrender",
        "partial": "",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:fill",
      "description": {
        "fct-descr": "\u003cp\u003eFill the current path, using the given color. This operation\n implicitly resets the current path to empty. \n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Color -\u003e Draw ()",
        "fct-source": "src/Graphics-EasyRender-Internal.html#fill",
        "fct-type": "function",
        "title": "fill"
      },
      "index": {
        "description": "Fill the current path using the given color This operation implicitly resets the current path to empty",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "fill",
        "normalized": "Color-\u003eDraw()",
        "package": "easyrender",
        "partial": "",
        "signature": "Color-\u003eDraw()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:fillcolor_to_pdf",
      "description": {
        "fct-descr": "\u003cp\u003eSet the fill color.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Color -\u003e PDFWriter ()",
        "fct-source": "src/Graphics-EasyRender-Internal.html#fillcolor_to_pdf",
        "fct-type": "function",
        "title": "fillcolor_to_pdf"
      },
      "index": {
        "description": "Set the fill color",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "fillcolor_to_pdf",
        "normalized": "Color-\u003ePDFWriter()",
        "package": "easyrender",
        "partial": "",
        "signature": "Color-\u003ePDFWriter()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:fillstroke",
      "description": {
        "fct-descr": "\u003cp\u003eFill the current path, using the given color; also stroke the\n path using the current line color. This operation implicitly resets\n the current path to empty.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Color -\u003e Draw ()",
        "fct-source": "src/Graphics-EasyRender-Internal.html#fillstroke",
        "fct-type": "function",
        "title": "fillstroke"
      },
      "index": {
        "description": "Fill the current path using the given color also stroke the path using the current line color This operation implicitly resets the current path to empty",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "fillstroke",
        "normalized": "Color-\u003eDraw()",
        "package": "easyrender",
        "partial": "",
        "signature": "Color-\u003eDraw()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:flate_filter",
      "description": {
        "fct-descr": "\u003cp\u003eA filter for performing \"flate\" (also known as \"zlib\")\n compression. \n\u003c/p\u003e\u003cp\u003eNote: both the input and output strings are regarded as sequences\n of bytes, not characters. Any characters outside the byte range are\n truncated to 8 bits.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Graphics-EasyRender-Internal.html#flate_filter",
        "fct-type": "function",
        "title": "flate_filter"
      },
      "index": {
        "description": "filter for performing flate also known as zlib compression Note both the input and output strings are regarded as sequences of bytes not characters Any characters outside the byte range are truncated to bits",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "flate_filter",
        "normalized": "String-\u003eString",
        "package": "easyrender",
        "partial": "",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:font_to_pdf",
      "description": {
        "fct-descr": "\u003cp\u003eSet the font.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Font -\u003e PDFWriter ()",
        "fct-source": "src/Graphics-EasyRender-Internal.html#font_to_pdf",
        "fct-type": "function",
        "title": "font_to_pdf"
      },
      "index": {
        "description": "Set the font",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "font_to_pdf",
        "normalized": "Font-\u003ePDFWriter()",
        "package": "easyrender",
        "partial": "",
        "signature": "Font-\u003ePDFWriter()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:font_to_ps",
      "description": {
        "fct-descr": "\u003cp\u003eSet the font.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Font -\u003e PSWriter ()",
        "fct-source": "src/Graphics-EasyRender-Internal.html#font_to_ps",
        "fct-type": "function",
        "title": "font_to_ps"
      },
      "index": {
        "description": "Set the font",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "font_to_ps",
        "normalized": "Font-\u003ePSWriter()",
        "package": "easyrender",
        "partial": "",
        "signature": "Font-\u003ePSWriter()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:global_ps_defs",
      "description": {
        "fct-descr": "\u003cp\u003eGlobal PostScript definitions used by the rendering engine.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "String",
        "fct-source": "src/Graphics-EasyRender-Internal.html#global_ps_defs",
        "fct-type": "function",
        "title": "global_ps_defs"
      },
      "index": {
        "description": "Global PostScript definitions used by the rendering engine",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "global_ps_defs",
        "normalized": "",
        "package": "easyrender",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:is_binary_format",
      "description": {
        "fct-descr": "\u003cp\u003eDoes the format require raw binary output?\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "RenderFormat -\u003e Bool",
        "fct-source": "src/Graphics-EasyRender-Internal.html#is_binary_format",
        "fct-type": "function",
        "title": "is_binary_format"
      },
      "index": {
        "description": "Does the format require raw binary output",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "is_binary_format",
        "normalized": "RenderFormat-\u003eBool",
        "package": "easyrender",
        "partial": "",
        "signature": "RenderFormat-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:lineto",
      "description": {
        "fct-descr": "\u003cp\u003eExtend the current subpath by a straight line segment from the\n current point to (\u003cem\u003ex\u003c/em\u003e,\u003cem\u003ey\u003c/em\u003e). The point (\u003cem\u003ex\u003c/em\u003e,\u003cem\u003ey\u003c/em\u003e) becomes the current\n point.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "X -\u003e Y -\u003e Draw ()",
        "fct-source": "src/Graphics-EasyRender-Internal.html#lineto",
        "fct-type": "function",
        "title": "lineto"
      },
      "index": {
        "description": "Extend the current subpath by straight line segment from the current point to The point becomes the current point",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "lineto",
        "normalized": "X-\u003eY-\u003eDraw()",
        "package": "easyrender",
        "partial": "",
        "signature": "X-\u003eY-\u003eDraw()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:metric",
      "description": {
        "fct-descr": "\u003cp\u003eDefine a font metric for each base font.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Basefont -\u003e Fontmetric",
        "fct-source": "src/Graphics-EasyRender-Internal.html#metric",
        "fct-type": "function",
        "title": "metric"
      },
      "index": {
        "description": "Define font metric for each base font",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "metric",
        "normalized": "Basefont-\u003eFontmetric",
        "package": "easyrender",
        "partial": "",
        "signature": "Basefont-\u003eFontmetric"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:metric_helvetica",
      "description": {
        "fct-descr": "\u003cp\u003eFont metrics for Helvetica.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Fontmetric",
        "fct-source": "src/Graphics-EasyRender-Internal.html#metric_helvetica",
        "fct-type": "function",
        "title": "metric_helvetica"
      },
      "index": {
        "description": "Font metrics for Helvetica",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "metric_helvetica",
        "normalized": "",
        "package": "easyrender",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:metric_timesroman",
      "description": {
        "fct-descr": "\u003cp\u003eFont metrics for TimesRoman.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Fontmetric",
        "fct-source": "src/Graphics-EasyRender-Internal.html#metric_timesroman",
        "fct-type": "function",
        "title": "metric_timesroman"
      },
      "index": {
        "description": "Font metrics for TimesRoman",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "metric_timesroman",
        "normalized": "",
        "package": "easyrender",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:moveto",
      "description": {
        "fct-descr": "\u003cp\u003eStart a new subpath at (\u003cem\u003ex\u003c/em\u003e,\u003cem\u003ey\u003c/em\u003e). The point (\u003cem\u003ex\u003c/em\u003e,\u003cem\u003ey\u003c/em\u003e) becomes the\n current point.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "X -\u003e Y -\u003e Draw ()",
        "fct-source": "src/Graphics-EasyRender-Internal.html#moveto",
        "fct-type": "function",
        "title": "moveto"
      },
      "index": {
        "description": "Start new subpath at The point becomes the current point",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "moveto",
        "normalized": "X-\u003eY-\u003eDraw()",
        "package": "easyrender",
        "partial": "",
        "signature": "X-\u003eY-\u003eDraw()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:newpage",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a page of the given bounding box, containing the given\n drawing.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "X -\u003e Y -\u003e Draw a -\u003e Document a",
        "fct-source": "src/Graphics-EasyRender-Internal.html#newpage",
        "fct-type": "function",
        "title": "newpage"
      },
      "index": {
        "description": "Create page of the given bounding box containing the given drawing",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "newpage",
        "normalized": "X-\u003eY-\u003eDraw a-\u003eDocument a",
        "package": "easyrender",
        "partial": "",
        "signature": "X-\u003eY-\u003eDraw a-\u003eDocument a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:newpage_defer",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a page containing the given drawing, with the bounding box\n computed at the end of the drawing routines.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Draw (X, Y, a) -\u003e Document a",
        "fct-source": "src/Graphics-EasyRender-Internal.html#newpage_defer",
        "fct-type": "function",
        "title": "newpage_defer"
      },
      "index": {
        "description": "Create page containing the given drawing with the bounding box computed at the end of the drawing routines",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "newpage_defer",
        "normalized": "Draw(X,Y,a)-\u003eDocument a",
        "package": "easyrender",
        "partial": "",
        "signature": "Draw(X,Y,a)-\u003eDocument a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:newpath",
      "description": {
        "fct-descr": "\u003cp\u003eSet the current path to empty.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Draw ()",
        "fct-source": "src/Graphics-EasyRender-Internal.html#newpath",
        "fct-type": "function",
        "title": "newpath"
      },
      "index": {
        "description": "Set the current path to empty",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "newpath",
        "normalized": "Draw()",
        "package": "easyrender",
        "partial": "",
        "signature": "Draw()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:nominalsize",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the nominal point size of a font.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Font -\u003e Double",
        "fct-source": "src/Graphics-EasyRender-Internal.html#nominalsize",
        "fct-type": "function",
        "title": "nominalsize"
      },
      "index": {
        "description": "Return the nominal point size of font",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "nominalsize",
        "normalized": "Font-\u003eDouble",
        "package": "easyrender",
        "partial": "",
        "signature": "Font-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:objref",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a direct object from a reference to an indirect object.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Object -\u003e String",
        "fct-source": "src/Graphics-EasyRender-Internal.html#objref",
        "fct-type": "function",
        "title": "objref"
      },
      "index": {
        "description": "Create direct object from reference to an indirect object",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "objref",
        "normalized": "Object-\u003eString",
        "package": "easyrender",
        "partial": "",
        "signature": "Object-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:oval",
      "description": {
        "fct-descr": "\u003cp\u003eAppend a new closed subpath consisting of an oval centered at\n (\u003cem\u003ex\u003c/em\u003e,\u003cem\u003ey\u003c/em\u003e), with horizontal and vertical radii \u003cem\u003erx\u003c/em\u003e and \u003cem\u003ery\u003c/em\u003e,\n respectively.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "X -\u003e Y -\u003e X -\u003e Y -\u003e Draw ()",
        "fct-source": "src/Graphics-EasyRender-Internal.html#oval",
        "fct-type": "function",
        "title": "oval"
      },
      "index": {
        "description": "Append new closed subpath consisting of an oval centered at with horizontal and vertical radii rx and ry respectively",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "oval",
        "normalized": "X-\u003eY-\u003eX-\u003eY-\u003eDraw()",
        "package": "easyrender",
        "partial": "",
        "signature": "X-\u003eY-\u003eX-\u003eY-\u003eDraw()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:pages_to_pdf",
      "description": {
        "fct-descr": "\u003cp\u003eRender pages as PDF. The first argument is a reference to the\n document's page tree node. \n\u003c/p\u003e\u003cp\u003eNote: Acrobat reader cannot handle pages whose bounding box width\n or height exceed 200 inches (14400 points). Therefore, we\n automatically scale pages to be no greater than 199 inches.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Object -\u003e Document a -\u003e PDFWriter a",
        "fct-source": "src/Graphics-EasyRender-Internal.html#pages_to_pdf",
        "fct-type": "function",
        "title": "pages_to_pdf"
      },
      "index": {
        "description": "Render pages as PDF The first argument is reference to the document page tree node Note Acrobat reader cannot handle pages whose bounding box width or height exceed inches points Therefore we automatically scale pages to be no greater than inches",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "pages_to_pdf",
        "normalized": "Object-\u003eDocument a-\u003ePDFWriter a",
        "package": "easyrender",
        "partial": "",
        "signature": "Object-\u003eDocument a-\u003ePDFWriter a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:pages_to_ps",
      "description": {
        "fct-descr": "\u003cp\u003eRender pages as PostScript.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Document a -\u003e PSWriter a",
        "fct-source": "src/Graphics-EasyRender-Internal.html#pages_to_ps",
        "fct-type": "function",
        "title": "pages_to_ps"
      },
      "index": {
        "description": "Render pages as PostScript",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "pages_to_ps",
        "normalized": "Document a-\u003ePSWriter a",
        "package": "easyrender",
        "partial": "",
        "signature": "Document a-\u003ePSWriter a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:pair_to_writer",
      "description": {
        "fct-descr": "\u003cp\u003eThe inverse of \u003ccode\u003e\u003ca\u003ewriter_to_pair\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "(String, a) -\u003e Writer a",
        "fct-source": "src/Graphics-EasyRender-Internal.html#pair_to_writer",
        "fct-type": "function",
        "title": "pair_to_writer"
      },
      "index": {
        "description": "The inverse of writer to pair",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "pair_to_writer",
        "normalized": "(String,a)-\u003eWriter a",
        "package": "easyrender",
        "partial": "",
        "signature": "(String,a)-\u003eWriter a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:pdf_add_pagetable",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a page to the page table.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Page -\u003e Object -\u003e PDFWriter ()",
        "fct-source": "src/Graphics-EasyRender-Internal.html#pdf_add_pagetable",
        "fct-type": "function",
        "title": "pdf_add_pagetable"
      },
      "index": {
        "description": "Add page to the page table",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "pdf_add_pagetable",
        "normalized": "Page-\u003eObject-\u003ePDFWriter()",
        "package": "easyrender",
        "partial": "",
        "signature": "Page-\u003eObject-\u003ePDFWriter()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:pdf_add_xref",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a cross reference to the cross reference table.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Object -\u003e Filepos -\u003e PDFWriter ()",
        "fct-source": "src/Graphics-EasyRender-Internal.html#pdf_add_xref",
        "fct-type": "function",
        "title": "pdf_add_xref"
      },
      "index": {
        "description": "Add cross reference to the cross reference table",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "pdf_add_xref",
        "normalized": "Object-\u003eFilepos-\u003ePDFWriter()",
        "package": "easyrender",
        "partial": "",
        "signature": "Object-\u003eFilepos-\u003ePDFWriter()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:pdf_clear_fonttable",
      "description": {
        "fct-descr": "\u003cp\u003eClear the font table.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "PDFWriter ()",
        "fct-source": "src/Graphics-EasyRender-Internal.html#pdf_clear_fonttable",
        "fct-type": "function",
        "title": "pdf_clear_fonttable"
      },
      "index": {
        "description": "Clear the font table",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "pdf_clear_fonttable",
        "normalized": "PDFWriter()",
        "package": "easyrender",
        "partial": "",
        "signature": "PDFWriter()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:pdf_deferred_flate_stream",
      "description": {
        "fct-descr": "\u003cp\u003eDefine a compressed PDF stream object with the given object id,\n which must have previously been uniquely obtained with\n \u003ccode\u003e\u003ca\u003epdf_next_object\u003c/a\u003e\u003c/code\u003e. It should be used like this:\n\u003c/p\u003e\u003cpre\u003e obj \u003c- pdf_next_object\n ...\n pdf_deferred_flate_stream obj $ do\n   \u003c\u003cstream contents\u003e\u003e\n\u003c/pre\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Object -\u003e PDFWriter a -\u003e PDFWriter a",
        "fct-source": "src/Graphics-EasyRender-Internal.html#pdf_deferred_flate_stream",
        "fct-type": "function",
        "title": "pdf_deferred_flate_stream"
      },
      "index": {
        "description": "Define compressed PDF stream object with the given object id which must have previously been uniquely obtained with pdf next object It should be used like this obj pdf next object pdf deferred flate stream obj do stream contents",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "pdf_deferred_flate_stream",
        "normalized": "Object-\u003ePDFWriter a-\u003ePDFWriter a",
        "package": "easyrender",
        "partial": "",
        "signature": "Object-\u003ePDFWriter a-\u003ePDFWriter a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:pdf_deferred_object",
      "description": {
        "fct-descr": "\u003cp\u003eDefine an indirect PDF object with the given object id, which\n must have previously been uniquely obtained with \u003ccode\u003e\u003ca\u003epdf_next_object\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis can be used to define objects with forward references: first\n obtain an object id, then create references to the object, and\n finally define the object.\n\u003c/p\u003e\u003cp\u003eIt should be used like this:\n\u003c/p\u003e\u003cpre\u003e obj \u003c- pdf_next_object\n ...\n pdf_deferred_object obj $ do\n   \u003c\u003cobject definition\u003e\u003e\n\u003c/pre\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Object -\u003e PDFWriter a -\u003e PDFWriter a",
        "fct-source": "src/Graphics-EasyRender-Internal.html#pdf_deferred_object",
        "fct-type": "function",
        "title": "pdf_deferred_object"
      },
      "index": {
        "description": "Define an indirect PDF object with the given object id which must have previously been uniquely obtained with pdf next object This can be used to define objects with forward references first obtain an object id then create references to the object and finally define the object It should be used like this obj pdf next object pdf deferred object obj do object definition",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "pdf_deferred_object",
        "normalized": "Object-\u003ePDFWriter a-\u003ePDFWriter a",
        "package": "easyrender",
        "partial": "",
        "signature": "Object-\u003ePDFWriter a-\u003ePDFWriter a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:pdf_deferred_stream",
      "description": {
        "fct-descr": "\u003cp\u003eDefine a PDF stream object with the given object id, which must\n have previously been uniquely obtained with \u003ccode\u003e\u003ca\u003epdf_next_object\u003c/a\u003e\u003c/code\u003e. It\n should be used like this:\n\u003c/p\u003e\u003cpre\u003e obj \u003c- pdf_next_object\n ...\n pdf_deferred_stream obj $ do\n   \u003c\u003cstream contents\u003e\u003e\n\u003c/pre\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Object -\u003e PDFWriter a -\u003e PDFWriter a",
        "fct-source": "src/Graphics-EasyRender-Internal.html#pdf_deferred_stream",
        "fct-type": "function",
        "title": "pdf_deferred_stream"
      },
      "index": {
        "description": "Define PDF stream object with the given object id which must have previously been uniquely obtained with pdf next object It should be used like this obj pdf next object pdf deferred stream obj do stream contents",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "pdf_deferred_stream",
        "normalized": "Object-\u003ePDFWriter a-\u003ePDFWriter a",
        "package": "easyrender",
        "partial": "",
        "signature": "Object-\u003ePDFWriter a-\u003ePDFWriter a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:pdf_define_object",
      "description": {
        "fct-descr": "\u003cp\u003eDefine an indirect PDF object with a newly generated object id.\n Return the object id. This essentially combines \u003ccode\u003e\u003ca\u003epdf_next_object\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003e\u003ca\u003epdf_deferred_object\u003c/a\u003e\u003c/code\u003e into a single function, and should be\n used like this:\n\u003c/p\u003e\u003cpre\u003e obj \u003c- pdf_define_object $ do\n   \u003c\u003cobject definition\u003e\u003e\n\u003c/pre\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "PDFWriter a -\u003e PDFWriter Object",
        "fct-source": "src/Graphics-EasyRender-Internal.html#pdf_define_object",
        "fct-type": "function",
        "title": "pdf_define_object"
      },
      "index": {
        "description": "Define an indirect PDF object with newly generated object id Return the object id This essentially combines pdf next object and pdf deferred object into single function and should be used like this obj pdf define object do object definition",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "pdf_define_object",
        "normalized": "PDFWriter a-\u003ePDFWriter Object",
        "package": "easyrender",
        "partial": "",
        "signature": "PDFWriter a-\u003ePDFWriter Object"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:pdf_define_stream",
      "description": {
        "fct-descr": "\u003cp\u003eDefine a PDF stream object with a newly generated object\n id. Return the object id. This should be used like this:\n\u003c/p\u003e\u003cpre\u003e obj \u003c- pdf_define_stream $ do\n   \u003c\u003cstream contents\u003e\u003e\n\u003c/pre\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "PDFWriter a -\u003e PDFWriter Object",
        "fct-source": "src/Graphics-EasyRender-Internal.html#pdf_define_stream",
        "fct-type": "function",
        "title": "pdf_define_stream"
      },
      "index": {
        "description": "Define PDF stream object with newly generated object id Return the object id This should be used like this obj pdf define stream do stream contents",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "pdf_define_stream",
        "normalized": "PDFWriter a-\u003ePDFWriter Object",
        "package": "easyrender",
        "partial": "",
        "signature": "PDFWriter a-\u003ePDFWriter Object"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:pdf_escape",
      "description": {
        "fct-descr": "\u003cp\u003eEscape special characters in a string literal.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Graphics-EasyRender-Internal.html#pdf_escape",
        "fct-type": "function",
        "title": "pdf_escape"
      },
      "index": {
        "description": "Escape special characters in string literal",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "pdf_escape",
        "normalized": "String-\u003eString",
        "package": "easyrender",
        "partial": "",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:pdf_filepos",
      "description": {
        "fct-descr": "\u003cp\u003eCurrent position in file.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "!Filepos",
        "fct-source": "src/Graphics-EasyRender-Internal.html#PDF_State",
        "fct-type": "function",
        "title": "pdf_filepos"
      },
      "index": {
        "description": "Current position in file",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "pdf_filepos",
        "normalized": "",
        "package": "easyrender",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:pdf_find_font",
      "description": {
        "fct-descr": "\u003cp\u003eLook up the local font identifier for a font.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "String -\u003e PDFWriter String",
        "fct-source": "src/Graphics-EasyRender-Internal.html#pdf_find_font",
        "fct-type": "function",
        "title": "pdf_find_font"
      },
      "index": {
        "description": "Look up the local font identifier for font",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "pdf_find_font",
        "normalized": "String-\u003ePDFWriter String",
        "package": "easyrender",
        "partial": "",
        "signature": "String-\u003ePDFWriter String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:pdf_font",
      "description": {
        "fct-descr": "\u003cp\u003eNext available font number.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "!Integer",
        "fct-source": "src/Graphics-EasyRender-Internal.html#PDF_State",
        "fct-type": "function",
        "title": "pdf_font"
      },
      "index": {
        "description": "Next available font number",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "pdf_font",
        "normalized": "",
        "package": "easyrender",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:pdf_fonttable",
      "description": {
        "fct-descr": "\u003cp\u003eFont table mapping each font's PostScript name to a local name.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "!(Map String String)",
        "fct-source": "src/Graphics-EasyRender-Internal.html#PDF_State",
        "fct-type": "function",
        "title": "pdf_fonttable"
      },
      "index": {
        "description": "Font table mapping each font PostScript name to local name",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "pdf_fonttable",
        "normalized": "",
        "package": "easyrender",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:pdf_get_filepos",
      "description": {
        "fct-descr": "\u003cp\u003eGet the file position.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "PDFWriter Filepos",
        "fct-source": "src/Graphics-EasyRender-Internal.html#pdf_get_filepos",
        "fct-type": "function",
        "title": "pdf_get_filepos"
      },
      "index": {
        "description": "Get the file position",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "pdf_get_filepos",
        "normalized": "",
        "package": "easyrender",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:pdf_get_fonttable",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the font table.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "PDFWriter (Map String String)",
        "fct-source": "src/Graphics-EasyRender-Internal.html#pdf_get_fonttable",
        "fct-type": "function",
        "title": "pdf_get_fonttable"
      },
      "index": {
        "description": "Retrieve the font table",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "pdf_get_fonttable",
        "normalized": "",
        "package": "easyrender",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:pdf_get_objcount",
      "description": {
        "fct-descr": "\u003cp\u003eGet the number of allocated objects. Note that objects are\n allocated as 1, 2, ..., \u003cem\u003en\u003c/em\u003e; this function returns \u003cem\u003en\u003c/em\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "PDFWriter Object",
        "fct-source": "src/Graphics-EasyRender-Internal.html#pdf_get_objcount",
        "fct-type": "function",
        "title": "pdf_get_objcount"
      },
      "index": {
        "description": "Get the number of allocated objects Note that objects are allocated as this function returns",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "pdf_get_objcount",
        "normalized": "",
        "package": "easyrender",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:pdf_get_pagecount",
      "description": {
        "fct-descr": "\u003cp\u003eGet the page count.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "PDFWriter Page",
        "fct-source": "src/Graphics-EasyRender-Internal.html#pdf_get_pagecount",
        "fct-type": "function",
        "title": "pdf_get_pagecount"
      },
      "index": {
        "description": "Get the page count",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "pdf_get_pagecount",
        "normalized": "",
        "package": "easyrender",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:pdf_get_pagetable",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the page table.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "PDFWriter (Map Page Object)",
        "fct-source": "src/Graphics-EasyRender-Internal.html#pdf_get_pagetable",
        "fct-type": "function",
        "title": "pdf_get_pagetable"
      },
      "index": {
        "description": "Retrieve the page table",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "pdf_get_pagetable",
        "normalized": "",
        "package": "easyrender",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:pdf_get_xref",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the cross reference table.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "PDFWriter (Map Object Filepos)",
        "fct-source": "src/Graphics-EasyRender-Internal.html#pdf_get_xref",
        "fct-type": "function",
        "title": "pdf_get_xref"
      },
      "index": {
        "description": "Retrieve the cross reference table",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "pdf_get_xref",
        "normalized": "",
        "package": "easyrender",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:pdf_inc_filepos",
      "description": {
        "fct-descr": "\u003cp\u003eAdd to the file position.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Integer -\u003e RawPDFWriter ()",
        "fct-source": "src/Graphics-EasyRender-Internal.html#pdf_inc_filepos",
        "fct-type": "function",
        "title": "pdf_inc_filepos"
      },
      "index": {
        "description": "Add to the file position",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "pdf_inc_filepos",
        "normalized": "Integer-\u003eRawPDFWriter()",
        "package": "easyrender",
        "partial": "",
        "signature": "Integer-\u003eRawPDFWriter()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:pdf_next_object",
      "description": {
        "fct-descr": "\u003cp\u003eAllocate an unused object identifier.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "PDFWriter Object",
        "fct-source": "src/Graphics-EasyRender-Internal.html#pdf_next_object",
        "fct-type": "function",
        "title": "pdf_next_object"
      },
      "index": {
        "description": "Allocate an unused object identifier",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "pdf_next_object",
        "normalized": "",
        "package": "easyrender",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:pdf_next_page",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the next page number.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "PDFWriter Page",
        "fct-source": "src/Graphics-EasyRender-Internal.html#pdf_next_page",
        "fct-type": "function",
        "title": "pdf_next_page"
      },
      "index": {
        "description": "Return the next page number",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "pdf_next_page",
        "normalized": "",
        "package": "easyrender",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:pdf_obj",
      "description": {
        "fct-descr": "\u003cp\u003eObject count.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "!Object",
        "fct-source": "src/Graphics-EasyRender-Internal.html#PDF_State",
        "fct-type": "function",
        "title": "pdf_obj"
      },
      "index": {
        "description": "Object count",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "pdf_obj",
        "normalized": "",
        "package": "easyrender",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:pdf_page",
      "description": {
        "fct-descr": "\u003cp\u003eNext available page number.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "!Page",
        "fct-source": "src/Graphics-EasyRender-Internal.html#PDF_State",
        "fct-type": "function",
        "title": "pdf_page"
      },
      "index": {
        "description": "Next available page number",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "pdf_page",
        "normalized": "",
        "package": "easyrender",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:pdf_pagetable",
      "description": {
        "fct-descr": "\u003cp\u003ePage table.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "!(Map Page Object)",
        "fct-source": "src/Graphics-EasyRender-Internal.html#PDF_State",
        "fct-type": "function",
        "title": "pdf_pagetable"
      },
      "index": {
        "description": "Page table",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "pdf_pagetable",
        "normalized": "",
        "package": "easyrender",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:pdf_state_empty",
      "description": {
        "fct-descr": "\u003cp\u003eThe initial \u003ccode\u003e\u003ca\u003ePDF_State\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "PDF_State",
        "fct-source": "src/Graphics-EasyRender-Internal.html#pdf_state_empty",
        "fct-type": "function",
        "title": "pdf_state_empty"
      },
      "index": {
        "description": "The initial PDF State",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "pdf_state_empty",
        "normalized": "",
        "package": "easyrender",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:pdf_xref",
      "description": {
        "fct-descr": "\u003cp\u003eCross-reference table.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "!(Map Object Filepos)",
        "fct-source": "src/Graphics-EasyRender-Internal.html#PDF_State",
        "fct-type": "function",
        "title": "pdf_xref"
      },
      "index": {
        "description": "Cross-reference table",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "pdf_xref",
        "normalized": "",
        "package": "easyrender",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:pdfwriter_run",
      "description": {
        "fct-descr": "\u003cp\u003eRun function for the \u003ccode\u003e\u003ca\u003ePDFWriter\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "PDFWriter a -\u003e Writer a",
        "fct-source": "src/Graphics-EasyRender-Internal.html#pdfwriter_run",
        "fct-type": "function",
        "title": "pdfwriter_run"
      },
      "index": {
        "description": "Run function for the PDFWriter monad",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "pdfwriter_run",
        "normalized": "PDFWriter a-\u003eWriter a",
        "package": "easyrender",
        "partial": "",
        "signature": "PDFWriter a-\u003eWriter a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:ps_add_bbox",
      "description": {
        "fct-descr": "\u003cp\u003eAdd to the bounding box.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "X -\u003e Y -\u003e PSWriter ()",
        "fct-source": "src/Graphics-EasyRender-Internal.html#ps_add_bbox",
        "fct-type": "function",
        "title": "ps_add_bbox"
      },
      "index": {
        "description": "Add to the bounding box",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "ps_add_bbox",
        "normalized": "X-\u003eY-\u003ePSWriter()",
        "package": "easyrender",
        "partial": "",
        "signature": "X-\u003eY-\u003ePSWriter()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:ps_defs",
      "description": {
        "fct-descr": "\u003cp\u003eDefinitions to go in the PostScript\n preamble.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "String",
        "fct-source": "src/Graphics-EasyRender-Internal.html#Custom",
        "fct-type": "function",
        "title": "ps_defs"
      },
      "index": {
        "description": "Definitions to go in the PostScript preamble",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "ps_defs",
        "normalized": "",
        "package": "easyrender",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:ps_escape",
      "description": {
        "fct-descr": "\u003cp\u003eEscape special characters in a string literal.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Graphics-EasyRender-Internal.html#ps_escape",
        "fct-type": "function",
        "title": "ps_escape"
      },
      "index": {
        "description": "Escape special characters in string literal",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "ps_escape",
        "normalized": "String-\u003eString",
        "package": "easyrender",
        "partial": "",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:ps_get_bbox",
      "description": {
        "fct-descr": "\u003cp\u003eGet the bounding box.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "PSWriter (X, Y)",
        "fct-source": "src/Graphics-EasyRender-Internal.html#ps_get_bbox",
        "fct-type": "function",
        "title": "ps_get_bbox"
      },
      "index": {
        "description": "Get the bounding box",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "ps_get_bbox",
        "normalized": "PSWriter(X,Y)",
        "package": "easyrender",
        "partial": "",
        "signature": "PSWriter(X,Y)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:ps_get_pagecount",
      "description": {
        "fct-descr": "\u003cp\u003eGet the page count.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "PSWriter Page",
        "fct-source": "src/Graphics-EasyRender-Internal.html#ps_get_pagecount",
        "fct-type": "function",
        "title": "ps_get_pagecount"
      },
      "index": {
        "description": "Get the page count",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "ps_get_pagecount",
        "normalized": "",
        "package": "easyrender",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:ps_next_page",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the next page number.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "PSWriter Page",
        "fct-source": "src/Graphics-EasyRender-Internal.html#ps_next_page",
        "fct-type": "function",
        "title": "ps_next_page"
      },
      "index": {
        "description": "Return the next page number",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "ps_next_page",
        "normalized": "",
        "package": "easyrender",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:ps_state_empty",
      "description": {
        "fct-descr": "\u003cp\u003eThe initial \u003ccode\u003e\u003ca\u003ePS_State\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "PS_State",
        "fct-source": "src/Graphics-EasyRender-Internal.html#ps_state_empty",
        "fct-type": "function",
        "title": "ps_state_empty"
      },
      "index": {
        "description": "The initial PS State",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "ps_state_empty",
        "normalized": "",
        "package": "easyrender",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:pswriter_run",
      "description": {
        "fct-descr": "\u003cp\u003eRun function for the \u003ccode\u003e\u003ca\u003ePSWriter\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "PSWriter a -\u003e Writer a",
        "fct-source": "src/Graphics-EasyRender-Internal.html#pswriter_run",
        "fct-type": "function",
        "title": "pswriter_run"
      },
      "index": {
        "description": "Run function for the PSWriter monad",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "pswriter_run",
        "normalized": "PSWriter a-\u003eWriter a",
        "package": "easyrender",
        "partial": "",
        "signature": "PSWriter a-\u003eWriter a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:rectangle",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003erectangle\u003c/a\u003e\u003c/code\u003e \u003cem\u003ex\u003c/em\u003e \u003cem\u003ey\u003c/em\u003e \u003cem\u003ew\u003c/em\u003e \u003cem\u003eh\u003c/em\u003e\u003c/code\u003e: Draw a rectangle of width \u003cem\u003ew\u003c/em\u003e and\n height \u003cem\u003eh\u003c/em\u003e, starting from (\u003cem\u003ex\u003c/em\u003e,\u003cem\u003ey\u003c/em\u003e). If \u003cem\u003ew\u003c/em\u003e and \u003cem\u003eh\u003c/em\u003e are positive,\n then (\u003cem\u003ex\u003c/em\u003e,\u003cem\u003ey\u003c/em\u003e) is the lower left corner.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "X -\u003e Y -\u003e X -\u003e Y -\u003e Draw ()",
        "fct-source": "src/Graphics-EasyRender-Internal.html#rectangle",
        "fct-type": "function",
        "title": "rectangle"
      },
      "index": {
        "description": "rectangle Draw rectangle of width and height starting from If and are positive then is the lower left corner",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "rectangle",
        "normalized": "X-\u003eY-\u003eX-\u003eY-\u003eDraw()",
        "package": "easyrender",
        "partial": "",
        "signature": "X-\u003eY-\u003eX-\u003eY-\u003eDraw()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:remove_nl",
      "description": {
        "fct-descr": "\u003cp\u003eRemove newline characters in a string.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Graphics-EasyRender-Internal.html#remove_nl",
        "fct-type": "function",
        "title": "remove_nl"
      },
      "index": {
        "description": "Remove newline characters in string",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "remove_nl",
        "normalized": "String-\u003eString",
        "package": "easyrender",
        "partial": "",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:render",
      "description": {
        "fct-descr": "\u003cp\u003eRender a document to the \u003ccode\u003e\u003ca\u003eWriter\u003c/a\u003e\u003c/code\u003e monad, using the given output format.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "RenderFormat -\u003e Document a -\u003e Writer a",
        "fct-source": "src/Graphics-EasyRender-Internal.html#render",
        "fct-type": "function",
        "title": "render"
      },
      "index": {
        "description": "Render document to the Writer monad using the given output format",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "render",
        "normalized": "RenderFormat-\u003eDocument a-\u003eWriter a",
        "package": "easyrender",
        "partial": "",
        "signature": "RenderFormat-\u003eDocument a-\u003eWriter a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:render_ascii",
      "description": {
        "fct-descr": "\u003cp\u003eRender a document as ASCII. This is for debugging purposes only.\n The output is a sequence of drawing commands, rather than a\n graphical representation.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Document a -\u003e Writer a",
        "fct-source": "src/Graphics-EasyRender-Internal.html#render_ascii",
        "fct-type": "function",
        "title": "render_ascii"
      },
      "index": {
        "description": "Render document as ASCII This is for debugging purposes only The output is sequence of drawing commands rather than graphical representation",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "render_ascii",
        "normalized": "Document a-\u003eWriter a",
        "package": "easyrender",
        "partial": "",
        "signature": "Document a-\u003eWriter a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:render_custom",
      "description": {
        "fct-descr": "\u003cp\u003eRender a document to the \u003ccode\u003e\u003ca\u003eWriter\u003c/a\u003e\u003c/code\u003e monad, using the given output\n format and customization data structure.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "RenderFormat -\u003e Custom -\u003e Document a -\u003e Writer a",
        "fct-source": "src/Graphics-EasyRender-Internal.html#render_custom",
        "fct-type": "function",
        "title": "render_custom"
      },
      "index": {
        "description": "Render document to the Writer monad using the given output format and customization data structure",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "render_custom",
        "normalized": "RenderFormat-\u003eCustom-\u003eDocument a-\u003eWriter a",
        "package": "easyrender",
        "partial": "",
        "signature": "RenderFormat-\u003eCustom-\u003eDocument a-\u003eWriter a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:render_custom_file",
      "description": {
        "fct-descr": "\u003cp\u003eRender a document to a file, using the given output format and\n customization data structure.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Handle -\u003e RenderFormat -\u003e Custom -\u003e Document a -\u003e IO a",
        "fct-source": "src/Graphics-EasyRender-Internal.html#render_custom_file",
        "fct-type": "function",
        "title": "render_custom_file"
      },
      "index": {
        "description": "Render document to file using the given output format and customization data structure",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "render_custom_file",
        "normalized": "Handle-\u003eRenderFormat-\u003eCustom-\u003eDocument a-\u003eIO a",
        "package": "easyrender",
        "partial": "",
        "signature": "Handle-\u003eRenderFormat-\u003eCustom-\u003eDocument a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:render_custom_stdout",
      "description": {
        "fct-descr": "\u003cp\u003eRender a document to standard output, using the given output\n format and customization data structure.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "RenderFormat -\u003e Custom -\u003e Document a -\u003e IO a",
        "fct-source": "src/Graphics-EasyRender-Internal.html#render_custom_stdout",
        "fct-type": "function",
        "title": "render_custom_stdout"
      },
      "index": {
        "description": "Render document to standard output using the given output format and customization data structure",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "render_custom_stdout",
        "normalized": "RenderFormat-\u003eCustom-\u003eDocument a-\u003eIO a",
        "package": "easyrender",
        "partial": "",
        "signature": "RenderFormat-\u003eCustom-\u003eDocument a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:render_custom_string",
      "description": {
        "fct-descr": "\u003cp\u003eRender a document to a string, using the given output format and\n customization data structure.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "RenderFormat -\u003e Custom -\u003e Document a -\u003e String",
        "fct-source": "src/Graphics-EasyRender-Internal.html#render_custom_string",
        "fct-type": "function",
        "title": "render_custom_string"
      },
      "index": {
        "description": "Render document to string using the given output format and customization data structure",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "render_custom_string",
        "normalized": "RenderFormat-\u003eCustom-\u003eDocument a-\u003eString",
        "package": "easyrender",
        "partial": "",
        "signature": "RenderFormat-\u003eCustom-\u003eDocument a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:render_eps_custom",
      "description": {
        "fct-descr": "\u003cp\u003eRender document as EPS. The first argument is a customization\n data structure, and the second argument is the number of the page\n to extract from the document.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Custom -\u003e Page -\u003e Document a -\u003e Writer a",
        "fct-source": "src/Graphics-EasyRender-Internal.html#render_eps_custom",
        "fct-type": "function",
        "title": "render_eps_custom"
      },
      "index": {
        "description": "Render document as EPS The first argument is customization data structure and the second argument is the number of the page to extract from the document",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "render_eps_custom",
        "normalized": "Custom-\u003ePage-\u003eDocument a-\u003eWriter a",
        "package": "easyrender",
        "partial": "",
        "signature": "Custom-\u003ePage-\u003eDocument a-\u003eWriter a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:render_file",
      "description": {
        "fct-descr": "\u003cp\u003eRender a document to a file, using the given output format.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Handle -\u003e RenderFormat -\u003e Document a -\u003e IO a",
        "fct-source": "src/Graphics-EasyRender-Internal.html#render_file",
        "fct-type": "function",
        "title": "render_file"
      },
      "index": {
        "description": "Render document to file using the given output format",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "render_file",
        "normalized": "Handle-\u003eRenderFormat-\u003eDocument a-\u003eIO a",
        "package": "easyrender",
        "partial": "",
        "signature": "Handle-\u003eRenderFormat-\u003eDocument a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:render_pdf_custom",
      "description": {
        "fct-descr": "\u003cp\u003eRender document as PDF. The first argument is a\n customization data structure.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Custom -\u003e Document a -\u003e Writer a",
        "fct-source": "src/Graphics-EasyRender-Internal.html#render_pdf_custom",
        "fct-type": "function",
        "title": "render_pdf_custom"
      },
      "index": {
        "description": "Render document as PDF The first argument is customization data structure",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "render_pdf_custom",
        "normalized": "Custom-\u003eDocument a-\u003eWriter a",
        "package": "easyrender",
        "partial": "",
        "signature": "Custom-\u003eDocument a-\u003eWriter a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:render_ps_custom",
      "description": {
        "fct-descr": "\u003cp\u003eRender document as PostScript. The first argument is a\n customization data structure.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Custom -\u003e Document a -\u003e Writer a",
        "fct-source": "src/Graphics-EasyRender-Internal.html#render_ps_custom",
        "fct-type": "function",
        "title": "render_ps_custom"
      },
      "index": {
        "description": "Render document as PostScript The first argument is customization data structure",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "render_ps_custom",
        "normalized": "Custom-\u003eDocument a-\u003eWriter a",
        "package": "easyrender",
        "partial": "",
        "signature": "Custom-\u003eDocument a-\u003eWriter a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:render_stdout",
      "description": {
        "fct-descr": "\u003cp\u003eRender a document to standard output, using the given output format.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "RenderFormat -\u003e Document a -\u003e IO a",
        "fct-source": "src/Graphics-EasyRender-Internal.html#render_stdout",
        "fct-type": "function",
        "title": "render_stdout"
      },
      "index": {
        "description": "Render document to standard output using the given output format",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "render_stdout",
        "normalized": "RenderFormat-\u003eDocument a-\u003eIO a",
        "package": "easyrender",
        "partial": "",
        "signature": "RenderFormat-\u003eDocument a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:render_string",
      "description": {
        "fct-descr": "\u003cp\u003eRender a document to a string, using the given output format.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "RenderFormat -\u003e Document a -\u003e String",
        "fct-source": "src/Graphics-EasyRender-Internal.html#render_string",
        "fct-type": "function",
        "title": "render_string"
      },
      "index": {
        "description": "Render document to string using the given output format",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "render_string",
        "normalized": "RenderFormat-\u003eDocument a-\u003eString",
        "package": "easyrender",
        "partial": "",
        "signature": "RenderFormat-\u003eDocument a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:rotate",
      "description": {
        "fct-descr": "\u003cp\u003eRotate the current coordinate system by \u003cem\u003eangle\u003c/em\u003e, measured\n counterclockwise in degrees.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Double -\u003e Draw ()",
        "fct-source": "src/Graphics-EasyRender-Internal.html#rotate",
        "fct-type": "function",
        "title": "rotate"
      },
      "index": {
        "description": "Rotate the current coordinate system by angle measured counterclockwise in degrees",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "rotate",
        "normalized": "Double-\u003eDraw()",
        "package": "easyrender",
        "partial": "",
        "signature": "Double-\u003eDraw()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:run_writer",
      "description": {
        "fct-descr": "\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003eWriter\u003c/a\u003e\u003c/code\u003e computation in any \u003ccode\u003e\u003ca\u003eWriterMonad\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Writer a -\u003e m a",
        "fct-source": "src/Graphics-EasyRender-Internal.html#run_writer",
        "fct-type": "function",
        "title": "run_writer"
      },
      "index": {
        "description": "Run Writer computation in any WriterMonad",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "run_writer",
        "normalized": "Writer a-\u003eb a",
        "package": "easyrender",
        "partial": "",
        "signature": "Writer a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:scale",
      "description": {
        "fct-descr": "\u003cp\u003eScale the current coordinate system by (\u003cem\u003es\u003c/em\u003e,\u003cem\u003et\u003c/em\u003e). Here, \u003cem\u003es\u003c/em\u003e is\n the scaling factor in the \u003cem\u003ex\u003c/em\u003e-direction, and \u003cem\u003et\u003c/em\u003e is the scaling\n factor in the \u003cem\u003ey\u003c/em\u003e-direction.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "X -\u003e Y -\u003e Draw ()",
        "fct-source": "src/Graphics-EasyRender-Internal.html#scale",
        "fct-type": "function",
        "title": "scale"
      },
      "index": {
        "description": "Scale the current coordinate system by Here is the scaling factor in the direction and is the scaling factor in the direction",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "scale",
        "normalized": "X-\u003eY-\u003eDraw()",
        "package": "easyrender",
        "partial": "",
        "signature": "X-\u003eY-\u003eDraw()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:setcolor",
      "description": {
        "fct-descr": "\u003cp\u003eSet the current color for stroking. The initial stroke color is\n black.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Color -\u003e Draw ()",
        "fct-source": "src/Graphics-EasyRender-Internal.html#setcolor",
        "fct-type": "function",
        "title": "setcolor"
      },
      "index": {
        "description": "Set the current color for stroking The initial stroke color is black",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "setcolor",
        "normalized": "Color-\u003eDraw()",
        "package": "easyrender",
        "partial": "",
        "signature": "Color-\u003eDraw()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:setlinewidth",
      "description": {
        "fct-descr": "\u003cp\u003eSet the line width. The initial line width is 1.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Double -\u003e Draw ()",
        "fct-source": "src/Graphics-EasyRender-Internal.html#setlinewidth",
        "fct-type": "function",
        "title": "setlinewidth"
      },
      "index": {
        "description": "Set the line width The initial line width is",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "setlinewidth",
        "normalized": "Double-\u003eDraw()",
        "package": "easyrender",
        "partial": "",
        "signature": "Double-\u003eDraw()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:string_metric",
      "description": {
        "fct-descr": "\u003cp\u003eLook up with width of a string in the given metric.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Fontmetric -\u003e String -\u003e Double",
        "fct-source": "src/Graphics-EasyRender-Internal.html#string_metric",
        "fct-type": "function",
        "title": "string_metric"
      },
      "index": {
        "description": "Look up with width of string in the given metric",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "string_metric",
        "normalized": "Fontmetric-\u003eString-\u003eDouble",
        "package": "easyrender",
        "partial": "",
        "signature": "Fontmetric-\u003eString-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:stroke",
      "description": {
        "fct-descr": "\u003cp\u003eStroke the current path, using the current line color, line\n width, and other graphics parameters. This operation implicitly\n resets the current path to empty.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Draw ()",
        "fct-source": "src/Graphics-EasyRender-Internal.html#stroke",
        "fct-type": "function",
        "title": "stroke"
      },
      "index": {
        "description": "Stroke the current path using the current line color line width and other graphics parameters This operation implicitly resets the current path to empty",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "stroke",
        "normalized": "Draw()",
        "package": "easyrender",
        "partial": "",
        "signature": "Draw()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:strokecolor_to_pdf",
      "description": {
        "fct-descr": "\u003cp\u003eSet the stroke color.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Color -\u003e PDFWriter ()",
        "fct-source": "src/Graphics-EasyRender-Internal.html#strokecolor_to_pdf",
        "fct-type": "function",
        "title": "strokecolor_to_pdf"
      },
      "index": {
        "description": "Set the stroke color",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "strokecolor_to_pdf",
        "normalized": "Color-\u003ePDFWriter()",
        "package": "easyrender",
        "partial": "",
        "signature": "Color-\u003ePDFWriter()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:text_width",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the width of the given string in the given font.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Font -\u003e String -\u003e Double",
        "fct-source": "src/Graphics-EasyRender-Internal.html#text_width",
        "fct-type": "function",
        "title": "text_width"
      },
      "index": {
        "description": "Return the width of the given string in the given font",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "text_width",
        "normalized": "Font-\u003eString-\u003eDouble",
        "package": "easyrender",
        "partial": "",
        "signature": "Font-\u003eString-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:textbox",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003etextbox\u003c/a\u003e\u003c/code\u003e \u003cem\u003ea\u003c/em\u003e \u003cem\u003ef\u003c/em\u003e \u003cem\u003ec\u003c/em\u003e \u003cem\u003ex0\u003c/em\u003e \u003cem\u003ey0\u003c/em\u003e \u003cem\u003ex1\u003c/em\u003e \u003cem\u003ey1\u003c/em\u003e \u003cem\u003eb\u003c/em\u003e \u003cem\u003es\u003c/em\u003e\u003c/code\u003e: Write the\n given string on an imaginary line from point (\u003cem\u003ex0\u003c/em\u003e,\u003cem\u003ey0\u003c/em\u003e) to\n (\u003cem\u003ex1\u003c/em\u003e,\u003cem\u003ey1\u003c/em\u003e), using font \u003cem\u003ef\u003c/em\u003e and color \u003cem\u003ec\u003c/em\u003e. If the text is too wide\n to fit on the line, it is scaled down. Otherwise, it is aligned\n according to the alignment parameter \u003cem\u003ea\u003c/em\u003e. The parameter \u003cem\u003eb\u003c/em\u003e\n specifies an additional offset by which to lower the text, with\n respect to the text's nominal size. For example, if \u003cem\u003eb\u003c/em\u003e=0, then the\n above-mentioned imaginary line from (\u003cem\u003ex0\u003c/em\u003e,\u003cem\u003ey0\u003c/em\u003e) to (\u003cem\u003ex1\u003c/em\u003e,\u003cem\u003ey1\u003c/em\u003e)\n coincides with the text's usual baseline. If \u003cem\u003eb\u003c/em\u003e=0.5, then this\n line approximately goes through the center of each character.\n\u003c/p\u003e\u003cp\u003e\u003cimg src=\"textbox.png\"/\u003e\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Alignment -\u003e Font -\u003e Color -\u003e X -\u003e Y -\u003e X -\u003e Y -\u003e Double -\u003e String -\u003e Draw ()",
        "fct-source": "src/Graphics-EasyRender-Internal.html#textbox",
        "fct-type": "function",
        "title": "textbox"
      },
      "index": {
        "description": "textbox x0 y0 x1 y1 Write the given string on an imaginary line from point x0 y0 to x1 y1 using font and color If the text is too wide to fit on the line it is scaled down Otherwise it is aligned according to the alignment parameter The parameter specifies an additional offset by which to lower the text with respect to the text nominal size For example if then the above-mentioned imaginary line from x0 y0 to x1 y1 coincides with the text usual baseline If then this line approximately goes through the center of each character",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "textbox",
        "normalized": "Alignment-\u003eFont-\u003eColor-\u003eX-\u003eY-\u003eX-\u003eY-\u003eDouble-\u003eString-\u003eDraw()",
        "package": "easyrender",
        "partial": "",
        "signature": "Alignment-\u003eFont-\u003eColor-\u003eX-\u003eY-\u003eX-\u003eY-\u003eDouble-\u003eString-\u003eDraw()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:translate",
      "description": {
        "fct-descr": "\u003cp\u003eTranslate the current coordinate system by (\u003cem\u003ex\u003c/em\u003e,\u003cem\u003ey\u003c/em\u003e).\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "X -\u003e Y -\u003e Draw ()",
        "fct-source": "src/Graphics-EasyRender-Internal.html#translate",
        "fct-type": "function",
        "title": "translate"
      },
      "index": {
        "description": "Translate the current coordinate system by",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "translate",
        "normalized": "X-\u003eY-\u003eDraw()",
        "package": "easyrender",
        "partial": "",
        "signature": "X-\u003eY-\u003eDraw()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:unbox",
      "description": {
        "fct-descr": "\u003cp\u003eUnbox a boxed item.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Boxed m a -\u003e m a",
        "fct-source": "src/Graphics-EasyRender-Internal.html#unbox",
        "fct-type": "function",
        "title": "unbox"
      },
      "index": {
        "description": "Unbox boxed item",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "unbox",
        "normalized": "Boxed a b-\u003ea b",
        "package": "easyrender",
        "partial": "",
        "signature": "Boxed m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:wPutChar",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a character.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Char -\u003e m ()",
        "fct-source": "src/Graphics-EasyRender-Internal.html#wPutChar",
        "fct-type": "method",
        "title": "wPutChar"
      },
      "index": {
        "description": "Write character",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "wPutChar",
        "normalized": "Char-\u003ea()",
        "package": "easyrender",
        "partial": "Put Char",
        "signature": "Char-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:wPutStr",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a string.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "String -\u003e m ()",
        "fct-source": "src/Graphics-EasyRender-Internal.html#wPutStr",
        "fct-type": "method",
        "title": "wPutStr"
      },
      "index": {
        "description": "Write string",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "wPutStr",
        "normalized": "String-\u003ea()",
        "package": "easyrender",
        "partial": "Put Str",
        "signature": "String-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:wPutStrLn",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ewPutStr\u003c/a\u003e\u003c/code\u003e, but adds a newline character.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "String -\u003e m ()",
        "fct-source": "src/Graphics-EasyRender-Internal.html#wPutStrLn",
        "fct-type": "function",
        "title": "wPutStrLn"
      },
      "index": {
        "description": "Like wPutStr but adds newline character",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "wPutStrLn",
        "normalized": "String-\u003ea()",
        "package": "easyrender",
        "partial": "Put Str Ln",
        "signature": "String-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:with_filter",
      "description": {
        "fct-descr": "\u003cp\u003eWrap a filter around a \u003ccode\u003e\u003ca\u003eWriter\u003c/a\u003e\u003c/code\u003e computation. This introduces a\n local block within the \u003ccode\u003e\u003ca\u003eWriter\u003c/a\u003e\u003c/code\u003e monad; all text written within the\n block is encoded through the given filter. Filters can be composed\n and nested.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "(String -\u003e String) -\u003e Writer a -\u003e m a",
        "fct-source": "src/Graphics-EasyRender-Internal.html#with_filter",
        "fct-type": "function",
        "title": "with_filter"
      },
      "index": {
        "description": "Wrap filter around Writer computation This introduces local block within the Writer monad all text written within the block is encoded through the given filter Filters can be composed and nested",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "with_filter",
        "normalized": "(String-\u003eString)-\u003eWriter a-\u003eb a",
        "package": "easyrender",
        "partial": "",
        "signature": "(String-\u003eString)-\u003eWriter a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:with_filter_pdf",
      "description": {
        "fct-descr": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003ewith_filter\u003c/a\u003e\u003c/code\u003e tailored to the \u003ccode\u003e\u003ca\u003ePDFWriter\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003cp\u003eThis allows certain global state updates within the local block.\n Specifically, updates to everything except the file position are\n propagated from the inner to the outer block. The outer block's\n file position is updated to reflect the encoded content's\n length. From the inner block's point of view, the file position\n starts from 0.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "(String -\u003e String) -\u003e PDFWriter a -\u003e PDFWriter a",
        "fct-source": "src/Graphics-EasyRender-Internal.html#with_filter_pdf",
        "fct-type": "function",
        "title": "with_filter_pdf"
      },
      "index": {
        "description": "version of with filter tailored to the PDFWriter monad This allows certain global state updates within the local block Specifically updates to everything except the file position are propagated from the inner to the outer block The outer block file position is updated to reflect the encoded content length From the inner block point of view the file position starts from",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "with_filter_pdf",
        "normalized": "(String-\u003eString)-\u003ePDFWriter a-\u003ePDFWriter a",
        "package": "easyrender",
        "partial": "",
        "signature": "(String-\u003eString)-\u003ePDFWriter a-\u003ePDFWriter a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:with_printf",
      "description": {
        "fct-descr": "\u003cp\u003eIn any \u003ccode\u003e\u003ca\u003eWriterMonad\u003c/a\u003e\u003c/code\u003e, introduce a block in which \u003ccode\u003e\u003ca\u003ewprintf\u003c/a\u003e\u003c/code\u003e can be\n used. This has no computational overhead, i.e., is compiled to the\n identity operation; it exists only to please the type system,\n due to the fancy typing of \u003ccode\u003e\u003ca\u003ewprintf\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Boxed m a -\u003e m a",
        "fct-source": "src/Graphics-EasyRender-Internal.html#with_printf",
        "fct-type": "function",
        "title": "with_printf"
      },
      "index": {
        "description": "In any WriterMonad introduce block in which wprintf can be used This has no computational overhead i.e is compiled to the identity operation it exists only to please the type system due to the fancy typing of wprintf",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "with_printf",
        "normalized": "Boxed a b-\u003ea b",
        "package": "easyrender",
        "partial": "",
        "signature": "Boxed m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:wprint",
      "description": {
        "fct-descr": "\u003cp\u003eWrite a value of any printable type, and add a newline.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "a -\u003e m ()",
        "fct-source": "src/Graphics-EasyRender-Internal.html#wprint",
        "fct-type": "function",
        "title": "wprint"
      },
      "index": {
        "description": "Write value of any printable type and add newline",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "wprint",
        "normalized": "a-\u003eb()",
        "package": "easyrender",
        "partial": "",
        "signature": "a-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:wprintf",
      "description": {
        "fct-descr": "\u003cp\u003ePrint a formatted value in the context of a boxed WriterMonad. Usage:\n\u003c/p\u003e\u003cp\u003ewprintf \u003ca\u003e%f %f\u003c/a\u003e x y :: Boxed Writer\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "String -\u003e fun",
        "fct-source": "src/Graphics-EasyRender-Internal.html#wprintf",
        "fct-type": "function",
        "title": "wprintf"
      },
      "index": {
        "description": "Print formatted value in the context of boxed WriterMonad Usage wprintf Boxed Writer",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "wprintf",
        "normalized": "String-\u003ea",
        "package": "easyrender",
        "partial": "",
        "signature": "String-\u003efun"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:wprintf_xref",
      "description": {
        "fct-descr": "\u003cp\u003eFormat the cross reference table. Return the file position of the\n cross reference table.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "PDFWriter Filepos",
        "fct-source": "src/Graphics-EasyRender-Internal.html#wprintf_xref",
        "fct-type": "function",
        "title": "wprintf_xref"
      },
      "index": {
        "description": "Format the cross reference table Return the file position of the cross reference table",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "wprintf_xref",
        "normalized": "",
        "package": "easyrender",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:wprintf_xref_entry",
      "description": {
        "fct-descr": "\u003cp\u003eWrite one line in the cross reference table. This must be exactly\n 20 characters long, including the terminating newline.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Filepos -\u003e Integer -\u003e Char -\u003e PDFWriter ()",
        "fct-source": "src/Graphics-EasyRender-Internal.html#wprintf_xref_entry",
        "fct-type": "function",
        "title": "wprintf_xref_entry"
      },
      "index": {
        "description": "Write one line in the cross reference table This must be exactly characters long including the terminating newline",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "wprintf_xref_entry",
        "normalized": "Filepos-\u003eInteger-\u003eChar-\u003ePDFWriter()",
        "package": "easyrender",
        "partial": "",
        "signature": "Filepos-\u003eInteger-\u003eChar-\u003ePDFWriter()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:writer_to_file",
      "description": {
        "fct-descr": "\u003cp\u003eRun a writer in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad by printing to a file.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Handle -\u003e Writer a -\u003e IO a",
        "fct-source": "src/Graphics-EasyRender-Internal.html#writer_to_file",
        "fct-type": "function",
        "title": "writer_to_file"
      },
      "index": {
        "description": "Run writer in the IO monad by printing to file",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "writer_to_file",
        "normalized": "Handle-\u003eWriter a-\u003eIO a",
        "package": "easyrender",
        "partial": "",
        "signature": "Handle-\u003eWriter a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:writer_to_pair",
      "description": {
        "fct-descr": "\u003cp\u003eIsomorphically map a \u003ccode\u003e\u003ca\u003eWriter\u003c/a\u003e\u003c/code\u003e computation to a pair of a string\n and a value.\n\u003c/p\u003e\u003cp\u003eImportant usage note: the \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e in the output is produced\n lazily, and before \u003cem\u003ea\u003c/em\u003e is produced. To preserve laziness, do not\n evaluate \u003cem\u003ea\u003c/em\u003e before the end of \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e has been reached.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Writer a -\u003e (String, a)",
        "fct-source": "src/Graphics-EasyRender-Internal.html#writer_to_pair",
        "fct-type": "function",
        "title": "writer_to_pair"
      },
      "index": {
        "description": "Isomorphically map Writer computation to pair of string and value Important usage note the String in the output is produced lazily and before is produced To preserve laziness do not evaluate before the end of String has been reached",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "writer_to_pair",
        "normalized": "Writer a-\u003e(String,a)",
        "package": "easyrender",
        "partial": "",
        "signature": "Writer a-\u003e(String,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:writer_to_string",
      "description": {
        "fct-descr": "\u003cp\u003eRun a writer by printing to a string.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender.Internal",
        "fct-package": "easyrender",
        "fct-signature": "Writer a -\u003e String",
        "fct-source": "src/Graphics-EasyRender-Internal.html#writer_to_string",
        "fct-type": "function",
        "title": "writer_to_string"
      },
      "index": {
        "description": "Run writer by printing to string",
        "hierarchy": "Graphics EasyRender Internal",
        "module": "Graphics.EasyRender.Internal",
        "name": "writer_to_string",
        "normalized": "Writer a-\u003eString",
        "package": "easyrender",
        "partial": "",
        "signature": "Writer a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides efficient functions for rendering vector\n graphics to a number of formats, including EPS, PostScript, and\n PDF. It provides an abstraction for multi-page documents, as well\n as a set of graphics primitives for page descriptions. \n\u003c/p\u003e\u003cp\u003eThe graphics model is similar to that of the PostScript and PDF\n languages, but we only implement a subset of their functionality.\n Care has been taken that graphics rendering is done efficiently and\n as lazily as possible; documents are rendered \"on the fly\",\n without the need to store the whole document in memory.\n\u003c/p\u003e\u003cp\u003eThe provided document description model consists of two separate\n layers of abstraction:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003cem\u003edrawing\u003c/em\u003e is concerned with placing marks on a fixed surface, and\n takes place in the \u003ccode\u003e\u003ca\u003eDraw\u003c/a\u003e\u003c/code\u003e monad;\n\u003c/li\u003e\u003cli\u003e \u003cem\u003edocument structure\u003c/em\u003e is concerned with a sequence of pages, their\n bounding boxes, and other meta-data. It takes place in the\n \u003ccode\u003e\u003ca\u003eDocument\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Graphics.EasyRender",
        "fct-package": "easyrender",
        "fct-signature": "module",
        "fct-source": "src/Graphics-EasyRender.html",
        "fct-type": "module",
        "title": "EasyRender"
      },
      "index": {
        "description": "This module provides efficient functions for rendering vector graphics to number of formats including EPS PostScript and PDF It provides an abstraction for multi-page documents as well as set of graphics primitives for page descriptions The graphics model is similar to that of the PostScript and PDF languages but we only implement subset of their functionality Care has been taken that graphics rendering is done efficiently and as lazily as possible documents are rendered on the fly without the need to store the whole document in memory The provided document description model consists of two separate layers of abstraction drawing is concerned with placing marks on fixed surface and takes place in the Draw monad document structure is concerned with sequence of pages their bounding boxes and other meta-data It takes place in the Document monad",
        "hierarchy": "Graphics EasyRender",
        "module": "Graphics.EasyRender",
        "name": "EasyRender",
        "normalized": "",
        "package": "easyrender",
        "partial": "Easy Render",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#t:Alignment",
      "description": {
        "fct-descr": "\u003cp\u003eA real number representing text alignment.  0 = left aligned, 0.5\n = centered, 1 = right aligned. Intermediate values are also\n possible. For example, an alignment value of 0.25 means one quarter\n of the way between left aligned and right aligned.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender",
        "fct-package": "easyrender",
        "fct-signature": "type",
        "fct-source": "src/Graphics-EasyRender-Internal.html#Alignment",
        "fct-type": "type",
        "title": "Alignment"
      },
      "index": {
        "description": "real number representing text alignment left aligned centered right aligned Intermediate values are also possible For example an alignment value of means one quarter of the way between left aligned and right aligned",
        "hierarchy": "Graphics EasyRender",
        "module": "Graphics.EasyRender",
        "name": "Alignment",
        "normalized": "",
        "package": "easyrender",
        "partial": "Alignment",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#t:Basefont",
      "description": {
        "fct-descr": "\u003cp\u003eA enumeration type for base fonts. For the time being, we only\n offer TimesRoman and Helvetica.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender",
        "fct-package": "easyrender",
        "fct-signature": "data",
        "fct-source": "src/Graphics-EasyRender-Internal.html#Basefont",
        "fct-type": "data",
        "title": "Basefont"
      },
      "index": {
        "description": "enumeration type for base fonts For the time being we only offer TimesRoman and Helvetica",
        "hierarchy": "Graphics EasyRender",
        "module": "Graphics.EasyRender",
        "name": "Basefont",
        "normalized": "",
        "package": "easyrender",
        "partial": "Basefont",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#t:Color",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of colors.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender",
        "fct-package": "easyrender",
        "fct-signature": "data",
        "fct-source": "src/Graphics-EasyRender-Internal.html#Color",
        "fct-type": "data",
        "title": "Color"
      },
      "index": {
        "description": "The type of colors",
        "hierarchy": "Graphics EasyRender",
        "module": "Graphics.EasyRender",
        "name": "Color",
        "normalized": "",
        "package": "easyrender",
        "partial": "Color",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#t:Custom",
      "description": {
        "fct-descr": "\u003cp\u003eA data structure that holds application-specific meta-data and\n customization information.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender",
        "fct-package": "easyrender",
        "fct-signature": "data",
        "fct-source": "src/Graphics-EasyRender-Internal.html#Custom",
        "fct-type": "data",
        "title": "Custom"
      },
      "index": {
        "description": "data structure that holds application-specific meta-data and customization information",
        "hierarchy": "Graphics EasyRender",
        "module": "Graphics.EasyRender",
        "name": "Custom",
        "normalized": "",
        "package": "easyrender",
        "partial": "Custom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#t:Document",
      "description": {
        "fct-descr": "\u003cp\u003eThe Document monad.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender",
        "fct-package": "easyrender",
        "fct-signature": "data",
        "fct-source": "src/Graphics-EasyRender-Internal.html#Document",
        "fct-type": "data",
        "title": "Document"
      },
      "index": {
        "description": "The Document monad",
        "hierarchy": "Graphics EasyRender",
        "module": "Graphics.EasyRender",
        "name": "Document",
        "normalized": "",
        "package": "easyrender",
        "partial": "Document",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#t:Draw",
      "description": {
        "fct-descr": "\u003cp\u003eThe Draw monad.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender",
        "fct-package": "easyrender",
        "fct-signature": "data",
        "fct-source": "src/Graphics-EasyRender-Internal.html#Draw",
        "fct-type": "data",
        "title": "Draw"
      },
      "index": {
        "description": "The Draw monad",
        "hierarchy": "Graphics EasyRender",
        "module": "Graphics.EasyRender",
        "name": "Draw",
        "normalized": "",
        "package": "easyrender",
        "partial": "Draw",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#t:Font",
      "description": {
        "fct-descr": "\u003cp\u003eA data type describing a scaled font. This consists of a base\n font and a point size.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender",
        "fct-package": "easyrender",
        "fct-signature": "data",
        "fct-source": "src/Graphics-EasyRender-Internal.html#Font",
        "fct-type": "data",
        "title": "Font"
      },
      "index": {
        "description": "data type describing scaled font This consists of base font and point size",
        "hierarchy": "Graphics EasyRender",
        "module": "Graphics.EasyRender",
        "name": "Font",
        "normalized": "",
        "package": "easyrender",
        "partial": "Font",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#t:RenderFormat",
      "description": {
        "fct-descr": "\u003cp\u003eAvailable graphics formats for rendering.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender",
        "fct-package": "easyrender",
        "fct-signature": "data",
        "fct-source": "src/Graphics-EasyRender-Internal.html#RenderFormat",
        "fct-type": "data",
        "title": "RenderFormat"
      },
      "index": {
        "description": "Available graphics formats for rendering",
        "hierarchy": "Graphics EasyRender",
        "module": "Graphics.EasyRender",
        "name": "RenderFormat",
        "normalized": "",
        "package": "easyrender",
        "partial": "Render Format",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#t:X",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of \u003cem\u003ex\u003c/em\u003e-coordinates.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender",
        "fct-package": "easyrender",
        "fct-signature": "type",
        "fct-source": "src/Graphics-EasyRender-Internal.html#X",
        "fct-type": "type",
        "title": "X"
      },
      "index": {
        "description": "The type of coordinates",
        "hierarchy": "Graphics EasyRender",
        "module": "Graphics.EasyRender",
        "name": "X",
        "normalized": "",
        "package": "easyrender",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#t:Y",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of \u003cem\u003ey\u003c/em\u003e-coordinates.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender",
        "fct-package": "easyrender",
        "fct-signature": "type",
        "fct-source": "src/Graphics-EasyRender-Internal.html#Y",
        "fct-type": "type",
        "title": "Y"
      },
      "index": {
        "description": "The type of coordinates",
        "hierarchy": "Graphics EasyRender",
        "module": "Graphics.EasyRender",
        "name": "Y",
        "normalized": "",
        "package": "easyrender",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:Color_Gray",
      "description": {
        "fct-descr": "\u003cp\u003eGray value, in the range from\n 0.0 (black) to 1.0 (white).\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender",
        "fct-package": "easyrender",
        "fct-signature": "Color_Gray Double",
        "fct-source": "src/Graphics-EasyRender-Internal.html#Color",
        "fct-type": "function",
        "title": "Color_Gray"
      },
      "index": {
        "description": "Gray value in the range from black to white",
        "hierarchy": "Graphics EasyRender",
        "module": "Graphics.EasyRender",
        "name": "Color_Gray",
        "normalized": "",
        "package": "easyrender",
        "partial": "Color Gray",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:Color_RGB",
      "description": {
        "fct-descr": "\u003cp\u003eRed, green and blue components,\n in the range from 0.0 (dark) to\n 1.0 (bright).\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender",
        "fct-package": "easyrender",
        "fct-signature": "Color_RGB Double Double Double",
        "fct-source": "src/Graphics-EasyRender-Internal.html#Color",
        "fct-type": "function",
        "title": "Color_RGB"
      },
      "index": {
        "description": "Red green and blue components in the range from dark to bright",
        "hierarchy": "Graphics EasyRender",
        "module": "Graphics.EasyRender",
        "name": "Color_RGB",
        "normalized": "",
        "package": "easyrender",
        "partial": "Color RGB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:Custom",
      "description": {
        "fct-module": "Graphics.EasyRender",
        "fct-package": "easyrender",
        "fct-signature": "Custom",
        "fct-source": "src/Graphics-EasyRender-Internal.html#Custom",
        "fct-type": "function",
        "title": "Custom"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics EasyRender",
        "module": "Graphics.EasyRender",
        "name": "Custom",
        "normalized": "",
        "package": "easyrender",
        "partial": "Custom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:Font",
      "description": {
        "fct-module": "Graphics.EasyRender",
        "fct-package": "easyrender",
        "fct-signature": "Font Basefont Double",
        "fct-source": "src/Graphics-EasyRender-Internal.html#Font",
        "fct-type": "function",
        "title": "Font"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics EasyRender",
        "module": "Graphics.EasyRender",
        "name": "Font",
        "normalized": "",
        "package": "easyrender",
        "partial": "Font",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:Format_Debug",
      "description": {
        "fct-descr": "\u003cp\u003eAn ASCII-based debugging format.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender",
        "fct-package": "easyrender",
        "fct-signature": "Format_Debug",
        "fct-source": "src/Graphics-EasyRender-Internal.html#RenderFormat",
        "fct-type": "function",
        "title": "Format_Debug"
      },
      "index": {
        "description": "An ASCII-based debugging format",
        "hierarchy": "Graphics EasyRender",
        "module": "Graphics.EasyRender",
        "name": "Format_Debug",
        "normalized": "",
        "package": "easyrender",
        "partial": "Format Debug",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:Format_EPS",
      "description": {
        "fct-descr": "\u003cp\u003eEncapsulated PostScript. The integer\n argument specifies which single page to\n extract from the document.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender",
        "fct-package": "easyrender",
        "fct-signature": "Format_EPS Integer",
        "fct-source": "src/Graphics-EasyRender-Internal.html#RenderFormat",
        "fct-type": "function",
        "title": "Format_EPS"
      },
      "index": {
        "description": "Encapsulated PostScript The integer argument specifies which single page to extract from the document",
        "hierarchy": "Graphics EasyRender",
        "module": "Graphics.EasyRender",
        "name": "Format_EPS",
        "normalized": "",
        "package": "easyrender",
        "partial": "Format EPS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:Format_PDF",
      "description": {
        "fct-descr": "\u003cp\u003ePortable Document Format.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender",
        "fct-package": "easyrender",
        "fct-signature": "Format_PDF",
        "fct-source": "src/Graphics-EasyRender-Internal.html#RenderFormat",
        "fct-type": "function",
        "title": "Format_PDF"
      },
      "index": {
        "description": "Portable Document Format",
        "hierarchy": "Graphics EasyRender",
        "module": "Graphics.EasyRender",
        "name": "Format_PDF",
        "normalized": "",
        "package": "easyrender",
        "partial": "Format PDF",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:Format_PS",
      "description": {
        "fct-descr": "\u003cp\u003ePostScript.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender",
        "fct-package": "easyrender",
        "fct-signature": "Format_PS",
        "fct-source": "src/Graphics-EasyRender-Internal.html#RenderFormat",
        "fct-type": "function",
        "title": "Format_PS"
      },
      "index": {
        "description": "PostScript",
        "hierarchy": "Graphics EasyRender",
        "module": "Graphics.EasyRender",
        "name": "Format_PS",
        "normalized": "",
        "package": "easyrender",
        "partial": "Format PS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:Helvetica",
      "description": {
        "fct-module": "Graphics.EasyRender",
        "fct-package": "easyrender",
        "fct-signature": "Helvetica",
        "fct-source": "src/Graphics-EasyRender-Internal.html#Basefont",
        "fct-type": "function",
        "title": "Helvetica"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics EasyRender",
        "module": "Graphics.EasyRender",
        "name": "Helvetica",
        "normalized": "",
        "package": "easyrender",
        "partial": "Helvetica",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:TimesRoman",
      "description": {
        "fct-module": "Graphics.EasyRender",
        "fct-package": "easyrender",
        "fct-signature": "TimesRoman",
        "fct-source": "src/Graphics-EasyRender-Internal.html#Basefont",
        "fct-type": "function",
        "title": "TimesRoman"
      },
      "index": {
        "description": "",
        "hierarchy": "Graphics EasyRender",
        "module": "Graphics.EasyRender",
        "name": "TimesRoman",
        "normalized": "",
        "package": "easyrender",
        "partial": "Times Roman",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:align_center",
      "description": {
        "fct-descr": "\u003cp\u003eCentered alignment.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender",
        "fct-package": "easyrender",
        "fct-signature": "Alignment",
        "fct-source": "src/Graphics-EasyRender-Internal.html#align_center",
        "fct-type": "function",
        "title": "align_center"
      },
      "index": {
        "description": "Centered alignment",
        "hierarchy": "Graphics EasyRender",
        "module": "Graphics.EasyRender",
        "name": "align_center",
        "normalized": "",
        "package": "easyrender",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:align_left",
      "description": {
        "fct-descr": "\u003cp\u003eLeft alignment.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender",
        "fct-package": "easyrender",
        "fct-signature": "Alignment",
        "fct-source": "src/Graphics-EasyRender-Internal.html#align_left",
        "fct-type": "function",
        "title": "align_left"
      },
      "index": {
        "description": "Left alignment",
        "hierarchy": "Graphics EasyRender",
        "module": "Graphics.EasyRender",
        "name": "align_left",
        "normalized": "",
        "package": "easyrender",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:align_right",
      "description": {
        "fct-descr": "\u003cp\u003eRight alignment.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender",
        "fct-package": "easyrender",
        "fct-signature": "Alignment",
        "fct-source": "src/Graphics-EasyRender-Internal.html#align_right",
        "fct-type": "function",
        "title": "align_right"
      },
      "index": {
        "description": "Right alignment",
        "hierarchy": "Graphics EasyRender",
        "module": "Graphics.EasyRender",
        "name": "align_right",
        "normalized": "",
        "package": "easyrender",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:arc",
      "description": {
        "fct-descr": "\u003cp\u003eStart a new subpath consisting of a circular arc segment. The\n arc segment is centered at (\u003cem\u003ex\u003c/em\u003e,\u003cem\u003ey\u003c/em\u003e), has radius \u003cem\u003er\u003c/em\u003e, and extends\n from angle \u003cem\u003ea1\u003c/em\u003e to angle \u003cem\u003ea2\u003c/em\u003e, measured in degrees,\n counterclockwise from the \u003cem\u003ex\u003c/em\u003e-axis. The arc is drawn clockwise if\n \u003cem\u003ea2\u003c/em\u003e &#8805; \u003cem\u003ea1\u003c/em\u003e, and counterclockwise otherwise. The final point\n becomes the new current point.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender",
        "fct-package": "easyrender",
        "fct-signature": "X -\u003e Y -\u003e Double -\u003e Double -\u003e Double -\u003e Draw ()",
        "fct-source": "src/Graphics-EasyRender-Internal.html#arc",
        "fct-type": "function",
        "title": "arc"
      },
      "index": {
        "description": "Start new subpath consisting of circular arc segment The arc segment is centered at has radius and extends from angle a1 to angle a2 measured in degrees counterclockwise from the axis The arc is drawn clockwise if a2 a1 and counterclockwise otherwise The final point becomes the new current point",
        "hierarchy": "Graphics EasyRender",
        "module": "Graphics.EasyRender",
        "name": "arc",
        "normalized": "X-\u003eY-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDraw()",
        "package": "easyrender",
        "partial": "",
        "signature": "X-\u003eY-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDraw()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:arc_append",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003earc\u003c/a\u003e\u003c/code\u003e, except append to the current subpath. If necessary,\n add a straight line segment from the current point to the starting\n point of the arc.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender",
        "fct-package": "easyrender",
        "fct-signature": "X -\u003e Y -\u003e Double -\u003e Double -\u003e Double -\u003e Draw ()",
        "fct-source": "src/Graphics-EasyRender-Internal.html#arc_append",
        "fct-type": "function",
        "title": "arc_append"
      },
      "index": {
        "description": "Like arc except append to the current subpath If necessary add straight line segment from the current point to the starting point of the arc",
        "hierarchy": "Graphics EasyRender",
        "module": "Graphics.EasyRender",
        "name": "arc_append",
        "normalized": "X-\u003eY-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDraw()",
        "package": "easyrender",
        "partial": "",
        "signature": "X-\u003eY-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDraw()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:block",
      "description": {
        "fct-descr": "\u003cp\u003ePerform a block of commands in a local copy of the graphics\n state. This is intended to be used like this:\n\u003c/p\u003e\u003cpre\u003e     block $ do\n       \u003c\u003cdrawing commands\u003e\u003e\n\u003c/pre\u003e",
        "fct-module": "Graphics.EasyRender",
        "fct-package": "easyrender",
        "fct-signature": "Draw a -\u003e Draw a",
        "fct-source": "src/Graphics-EasyRender-Internal.html#block",
        "fct-type": "function",
        "title": "block"
      },
      "index": {
        "description": "Perform block of commands in local copy of the graphics state This is intended to be used like this block do drawing commands",
        "hierarchy": "Graphics EasyRender",
        "module": "Graphics.EasyRender",
        "name": "block",
        "normalized": "Draw a-\u003eDraw a",
        "package": "easyrender",
        "partial": "",
        "signature": "Draw a-\u003eDraw a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:closepath",
      "description": {
        "fct-descr": "\u003cp\u003eClose the current subpath. If necessary, connect the subpath's\n final and initial points by a straight line segment. Note that a\n closed path is rendered differently than a non-closed path whose\n initial and final points coincide, because in the latter case, the\n endpoints are capped rather than mitered.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender",
        "fct-package": "easyrender",
        "fct-signature": "Draw ()",
        "fct-source": "src/Graphics-EasyRender-Internal.html#closepath",
        "fct-type": "function",
        "title": "closepath"
      },
      "index": {
        "description": "Close the current subpath If necessary connect the subpath final and initial points by straight line segment Note that closed path is rendered differently than non-closed path whose initial and final points coincide because in the latter case the endpoints are capped rather than mitered",
        "hierarchy": "Graphics EasyRender",
        "module": "Graphics.EasyRender",
        "name": "closepath",
        "normalized": "Draw()",
        "package": "easyrender",
        "partial": "",
        "signature": "Draw()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:comment",
      "description": {
        "fct-descr": "\u003cp\u003eInsert a human-readable comment in the content stream. This is\n for information only, and is not rendered in the graphical output.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender",
        "fct-package": "easyrender",
        "fct-signature": "String -\u003e Draw ()",
        "fct-source": "src/Graphics-EasyRender-Internal.html#comment",
        "fct-type": "function",
        "title": "comment"
      },
      "index": {
        "description": "Insert human-readable comment in the content stream This is for information only and is not rendered in the graphical output",
        "hierarchy": "Graphics EasyRender",
        "module": "Graphics.EasyRender",
        "name": "comment",
        "normalized": "String-\u003eDraw()",
        "package": "easyrender",
        "partial": "",
        "signature": "String-\u003eDraw()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:creator",
      "description": {
        "fct-descr": "\u003cp\u003eName of the software that created the file.\n Example: \"MyApp 1.0\". Note: this is intended\n to hold the name of the software, not the\n human user, that created the document.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender",
        "fct-package": "easyrender",
        "fct-signature": "String",
        "fct-source": "src/Graphics-EasyRender-Internal.html#Custom",
        "fct-type": "function",
        "title": "creator"
      },
      "index": {
        "description": "Name of the software that created the file Example MyApp Note this is intended to hold the name of the software not the human user that created the document",
        "hierarchy": "Graphics EasyRender",
        "module": "Graphics.EasyRender",
        "name": "creator",
        "normalized": "",
        "package": "easyrender",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:curveto",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ecurveto\u003c/a\u003e\u003c/code\u003e \u003cem\u003ex1\u003c/em\u003e \u003cem\u003ey1\u003c/em\u003e \u003cem\u003ex2\u003c/em\u003e \u003cem\u003ey2\u003c/em\u003e \u003cem\u003ex\u003c/em\u003e \u003cem\u003ey\u003c/em\u003e\u003c/code\u003e: Extend the current\n subpath by a Bezier curve segment from the current point to\n (\u003cem\u003ex\u003c/em\u003e,\u003cem\u003ey\u003c/em\u003e), with control points (\u003cem\u003ex1\u003c/em\u003e,\u003cem\u003ey1\u003c/em\u003e) and (\u003cem\u003ex2\u003c/em\u003e,\u003cem\u003ey2\u003c/em\u003e). The\n point (\u003cem\u003ex\u003c/em\u003e,\u003cem\u003ey\u003c/em\u003e) becomes the current point.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender",
        "fct-package": "easyrender",
        "fct-signature": "X -\u003e Y -\u003e X -\u003e Y -\u003e X -\u003e Y -\u003e Draw ()",
        "fct-source": "src/Graphics-EasyRender-Internal.html#curveto",
        "fct-type": "function",
        "title": "curveto"
      },
      "index": {
        "description": "curveto x1 y1 x2 y2 Extend the current subpath by Bezier curve segment from the current point to with control points x1 y1 and x2 y2 The point becomes the current point",
        "hierarchy": "Graphics EasyRender",
        "module": "Graphics.EasyRender",
        "name": "curveto",
        "normalized": "X-\u003eY-\u003eX-\u003eY-\u003eX-\u003eY-\u003eDraw()",
        "package": "easyrender",
        "partial": "",
        "signature": "X-\u003eY-\u003eX-\u003eY-\u003eX-\u003eY-\u003eDraw()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:custom",
      "description": {
        "fct-descr": "\u003cp\u003eAn empty customization structure. Customizations should be\n specified by modifying \u003ccode\u003e\u003ca\u003ecustom\u003c/a\u003e\u003c/code\u003e, for example:\n\u003c/p\u003e\u003cpre\u003e custom { creator = \"MyApp 1.0\" }\n\u003c/pre\u003e",
        "fct-module": "Graphics.EasyRender",
        "fct-package": "easyrender",
        "fct-signature": "Custom",
        "fct-source": "src/Graphics-EasyRender-Internal.html#custom",
        "fct-type": "function",
        "title": "custom"
      },
      "index": {
        "description": "An empty customization structure Customizations should be specified by modifying custom for example custom creator MyApp",
        "hierarchy": "Graphics EasyRender",
        "module": "Graphics.EasyRender",
        "name": "custom",
        "normalized": "",
        "package": "easyrender",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:custom_ascii",
      "description": {
        "fct-descr": "\u003cp\u003eDefine a custom ASCII definition.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender",
        "fct-package": "easyrender",
        "fct-signature": "String -\u003e CustomDef",
        "fct-source": "src/Graphics-EasyRender-Internal.html#custom_ascii",
        "fct-type": "function",
        "title": "custom_ascii"
      },
      "index": {
        "description": "Define custom ASCII definition",
        "hierarchy": "Graphics EasyRender",
        "module": "Graphics.EasyRender",
        "name": "custom_ascii",
        "normalized": "String-\u003eCustomDef",
        "package": "easyrender",
        "partial": "",
        "signature": "String-\u003eCustomDef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:custom_pdf",
      "description": {
        "fct-descr": "\u003cp\u003eDefine a custom PDF definition.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender",
        "fct-package": "easyrender",
        "fct-signature": "String -\u003e CustomDef",
        "fct-source": "src/Graphics-EasyRender-Internal.html#custom_pdf",
        "fct-type": "function",
        "title": "custom_pdf"
      },
      "index": {
        "description": "Define custom PDF definition",
        "hierarchy": "Graphics EasyRender",
        "module": "Graphics.EasyRender",
        "name": "custom_pdf",
        "normalized": "String-\u003eCustomDef",
        "package": "easyrender",
        "partial": "",
        "signature": "String-\u003eCustomDef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:custom_ps",
      "description": {
        "fct-descr": "\u003cp\u003eDefine a custom PostScript definition.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender",
        "fct-package": "easyrender",
        "fct-signature": "String -\u003e CustomDef",
        "fct-source": "src/Graphics-EasyRender-Internal.html#custom_ps",
        "fct-type": "function",
        "title": "custom_ps"
      },
      "index": {
        "description": "Define custom PostScript definition",
        "hierarchy": "Graphics EasyRender",
        "module": "Graphics.EasyRender",
        "name": "custom_ps",
        "normalized": "String-\u003eCustomDef",
        "package": "easyrender",
        "partial": "",
        "signature": "String-\u003eCustomDef"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:draw_subroutine",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new subroutine.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender",
        "fct-package": "easyrender",
        "fct-signature": "[CustomDef] -\u003e Draw () -\u003e Draw ()",
        "fct-source": "src/Graphics-EasyRender-Internal.html#draw_subroutine",
        "fct-type": "function",
        "title": "draw_subroutine"
      },
      "index": {
        "description": "Create new subroutine",
        "hierarchy": "Graphics EasyRender",
        "module": "Graphics.EasyRender",
        "name": "draw_subroutine",
        "normalized": "[CustomDef]-\u003eDraw()-\u003eDraw()",
        "package": "easyrender",
        "partial": "",
        "signature": "[CustomDef]-\u003eDraw()-\u003eDraw()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:endpage",
      "description": {
        "fct-descr": "\u003cp\u003eEnd the page with the given bounding box.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender",
        "fct-package": "easyrender",
        "fct-signature": "X -\u003e Y -\u003e Draw (X, Y, ())",
        "fct-source": "src/Graphics-EasyRender-Internal.html#endpage",
        "fct-type": "function",
        "title": "endpage"
      },
      "index": {
        "description": "End the page with the given bounding box",
        "hierarchy": "Graphics EasyRender",
        "module": "Graphics.EasyRender",
        "name": "endpage",
        "normalized": "X-\u003eY-\u003eDraw(X,Y,())",
        "package": "easyrender",
        "partial": "",
        "signature": "X-\u003eY-\u003eDraw(X,Y,())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:fill",
      "description": {
        "fct-descr": "\u003cp\u003eFill the current path, using the given color. This operation\n implicitly resets the current path to empty. \n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender",
        "fct-package": "easyrender",
        "fct-signature": "Color -\u003e Draw ()",
        "fct-source": "src/Graphics-EasyRender-Internal.html#fill",
        "fct-type": "function",
        "title": "fill"
      },
      "index": {
        "description": "Fill the current path using the given color This operation implicitly resets the current path to empty",
        "hierarchy": "Graphics EasyRender",
        "module": "Graphics.EasyRender",
        "name": "fill",
        "normalized": "Color-\u003eDraw()",
        "package": "easyrender",
        "partial": "",
        "signature": "Color-\u003eDraw()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:fillstroke",
      "description": {
        "fct-descr": "\u003cp\u003eFill the current path, using the given color; also stroke the\n path using the current line color. This operation implicitly resets\n the current path to empty.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender",
        "fct-package": "easyrender",
        "fct-signature": "Color -\u003e Draw ()",
        "fct-source": "src/Graphics-EasyRender-Internal.html#fillstroke",
        "fct-type": "function",
        "title": "fillstroke"
      },
      "index": {
        "description": "Fill the current path using the given color also stroke the path using the current line color This operation implicitly resets the current path to empty",
        "hierarchy": "Graphics EasyRender",
        "module": "Graphics.EasyRender",
        "name": "fillstroke",
        "normalized": "Color-\u003eDraw()",
        "package": "easyrender",
        "partial": "",
        "signature": "Color-\u003eDraw()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:lineto",
      "description": {
        "fct-descr": "\u003cp\u003eExtend the current subpath by a straight line segment from the\n current point to (\u003cem\u003ex\u003c/em\u003e,\u003cem\u003ey\u003c/em\u003e). The point (\u003cem\u003ex\u003c/em\u003e,\u003cem\u003ey\u003c/em\u003e) becomes the current\n point.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender",
        "fct-package": "easyrender",
        "fct-signature": "X -\u003e Y -\u003e Draw ()",
        "fct-source": "src/Graphics-EasyRender-Internal.html#lineto",
        "fct-type": "function",
        "title": "lineto"
      },
      "index": {
        "description": "Extend the current subpath by straight line segment from the current point to The point becomes the current point",
        "hierarchy": "Graphics EasyRender",
        "module": "Graphics.EasyRender",
        "name": "lineto",
        "normalized": "X-\u003eY-\u003eDraw()",
        "package": "easyrender",
        "partial": "",
        "signature": "X-\u003eY-\u003eDraw()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:moveto",
      "description": {
        "fct-descr": "\u003cp\u003eStart a new subpath at (\u003cem\u003ex\u003c/em\u003e,\u003cem\u003ey\u003c/em\u003e). The point (\u003cem\u003ex\u003c/em\u003e,\u003cem\u003ey\u003c/em\u003e) becomes the\n current point.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender",
        "fct-package": "easyrender",
        "fct-signature": "X -\u003e Y -\u003e Draw ()",
        "fct-source": "src/Graphics-EasyRender-Internal.html#moveto",
        "fct-type": "function",
        "title": "moveto"
      },
      "index": {
        "description": "Start new subpath at The point becomes the current point",
        "hierarchy": "Graphics EasyRender",
        "module": "Graphics.EasyRender",
        "name": "moveto",
        "normalized": "X-\u003eY-\u003eDraw()",
        "package": "easyrender",
        "partial": "",
        "signature": "X-\u003eY-\u003eDraw()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:newpage",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a page of the given bounding box, containing the given\n drawing.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender",
        "fct-package": "easyrender",
        "fct-signature": "X -\u003e Y -\u003e Draw a -\u003e Document a",
        "fct-source": "src/Graphics-EasyRender-Internal.html#newpage",
        "fct-type": "function",
        "title": "newpage"
      },
      "index": {
        "description": "Create page of the given bounding box containing the given drawing",
        "hierarchy": "Graphics EasyRender",
        "module": "Graphics.EasyRender",
        "name": "newpage",
        "normalized": "X-\u003eY-\u003eDraw a-\u003eDocument a",
        "package": "easyrender",
        "partial": "",
        "signature": "X-\u003eY-\u003eDraw a-\u003eDocument a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:newpage_defer",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a page containing the given drawing, with the bounding box\n computed at the end of the drawing routines.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender",
        "fct-package": "easyrender",
        "fct-signature": "Draw (X, Y, a) -\u003e Document a",
        "fct-source": "src/Graphics-EasyRender-Internal.html#newpage_defer",
        "fct-type": "function",
        "title": "newpage_defer"
      },
      "index": {
        "description": "Create page containing the given drawing with the bounding box computed at the end of the drawing routines",
        "hierarchy": "Graphics EasyRender",
        "module": "Graphics.EasyRender",
        "name": "newpage_defer",
        "normalized": "Draw(X,Y,a)-\u003eDocument a",
        "package": "easyrender",
        "partial": "",
        "signature": "Draw(X,Y,a)-\u003eDocument a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:newpath",
      "description": {
        "fct-descr": "\u003cp\u003eSet the current path to empty.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender",
        "fct-package": "easyrender",
        "fct-signature": "Draw ()",
        "fct-source": "src/Graphics-EasyRender-Internal.html#newpath",
        "fct-type": "function",
        "title": "newpath"
      },
      "index": {
        "description": "Set the current path to empty",
        "hierarchy": "Graphics EasyRender",
        "module": "Graphics.EasyRender",
        "name": "newpath",
        "normalized": "Draw()",
        "package": "easyrender",
        "partial": "",
        "signature": "Draw()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:nominalsize",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the nominal point size of a font.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender",
        "fct-package": "easyrender",
        "fct-signature": "Font -\u003e Double",
        "fct-source": "src/Graphics-EasyRender-Internal.html#nominalsize",
        "fct-type": "function",
        "title": "nominalsize"
      },
      "index": {
        "description": "Return the nominal point size of font",
        "hierarchy": "Graphics EasyRender",
        "module": "Graphics.EasyRender",
        "name": "nominalsize",
        "normalized": "Font-\u003eDouble",
        "package": "easyrender",
        "partial": "",
        "signature": "Font-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:oval",
      "description": {
        "fct-descr": "\u003cp\u003eAppend a new closed subpath consisting of an oval centered at\n (\u003cem\u003ex\u003c/em\u003e,\u003cem\u003ey\u003c/em\u003e), with horizontal and vertical radii \u003cem\u003erx\u003c/em\u003e and \u003cem\u003ery\u003c/em\u003e,\n respectively.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender",
        "fct-package": "easyrender",
        "fct-signature": "X -\u003e Y -\u003e X -\u003e Y -\u003e Draw ()",
        "fct-source": "src/Graphics-EasyRender-Internal.html#oval",
        "fct-type": "function",
        "title": "oval"
      },
      "index": {
        "description": "Append new closed subpath consisting of an oval centered at with horizontal and vertical radii rx and ry respectively",
        "hierarchy": "Graphics EasyRender",
        "module": "Graphics.EasyRender",
        "name": "oval",
        "normalized": "X-\u003eY-\u003eX-\u003eY-\u003eDraw()",
        "package": "easyrender",
        "partial": "",
        "signature": "X-\u003eY-\u003eX-\u003eY-\u003eDraw()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:ps_defs",
      "description": {
        "fct-descr": "\u003cp\u003eDefinitions to go in the PostScript\n preamble.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender",
        "fct-package": "easyrender",
        "fct-signature": "String",
        "fct-source": "src/Graphics-EasyRender-Internal.html#Custom",
        "fct-type": "function",
        "title": "ps_defs"
      },
      "index": {
        "description": "Definitions to go in the PostScript preamble",
        "hierarchy": "Graphics EasyRender",
        "module": "Graphics.EasyRender",
        "name": "ps_defs",
        "normalized": "",
        "package": "easyrender",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:rectangle",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003erectangle\u003c/a\u003e\u003c/code\u003e \u003cem\u003ex\u003c/em\u003e \u003cem\u003ey\u003c/em\u003e \u003cem\u003ew\u003c/em\u003e \u003cem\u003eh\u003c/em\u003e\u003c/code\u003e: Draw a rectangle of width \u003cem\u003ew\u003c/em\u003e and\n height \u003cem\u003eh\u003c/em\u003e, starting from (\u003cem\u003ex\u003c/em\u003e,\u003cem\u003ey\u003c/em\u003e). If \u003cem\u003ew\u003c/em\u003e and \u003cem\u003eh\u003c/em\u003e are positive,\n then (\u003cem\u003ex\u003c/em\u003e,\u003cem\u003ey\u003c/em\u003e) is the lower left corner.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender",
        "fct-package": "easyrender",
        "fct-signature": "X -\u003e Y -\u003e X -\u003e Y -\u003e Draw ()",
        "fct-source": "src/Graphics-EasyRender-Internal.html#rectangle",
        "fct-type": "function",
        "title": "rectangle"
      },
      "index": {
        "description": "rectangle Draw rectangle of width and height starting from If and are positive then is the lower left corner",
        "hierarchy": "Graphics EasyRender",
        "module": "Graphics.EasyRender",
        "name": "rectangle",
        "normalized": "X-\u003eY-\u003eX-\u003eY-\u003eDraw()",
        "package": "easyrender",
        "partial": "",
        "signature": "X-\u003eY-\u003eX-\u003eY-\u003eDraw()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:render_custom_file",
      "description": {
        "fct-descr": "\u003cp\u003eRender a document to a file, using the given output format and\n customization data structure.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender",
        "fct-package": "easyrender",
        "fct-signature": "Handle -\u003e RenderFormat -\u003e Custom -\u003e Document a -\u003e IO a",
        "fct-source": "src/Graphics-EasyRender-Internal.html#render_custom_file",
        "fct-type": "function",
        "title": "render_custom_file"
      },
      "index": {
        "description": "Render document to file using the given output format and customization data structure",
        "hierarchy": "Graphics EasyRender",
        "module": "Graphics.EasyRender",
        "name": "render_custom_file",
        "normalized": "Handle-\u003eRenderFormat-\u003eCustom-\u003eDocument a-\u003eIO a",
        "package": "easyrender",
        "partial": "",
        "signature": "Handle-\u003eRenderFormat-\u003eCustom-\u003eDocument a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:render_custom_stdout",
      "description": {
        "fct-descr": "\u003cp\u003eRender a document to standard output, using the given output\n format and customization data structure.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender",
        "fct-package": "easyrender",
        "fct-signature": "RenderFormat -\u003e Custom -\u003e Document a -\u003e IO a",
        "fct-source": "src/Graphics-EasyRender-Internal.html#render_custom_stdout",
        "fct-type": "function",
        "title": "render_custom_stdout"
      },
      "index": {
        "description": "Render document to standard output using the given output format and customization data structure",
        "hierarchy": "Graphics EasyRender",
        "module": "Graphics.EasyRender",
        "name": "render_custom_stdout",
        "normalized": "RenderFormat-\u003eCustom-\u003eDocument a-\u003eIO a",
        "package": "easyrender",
        "partial": "",
        "signature": "RenderFormat-\u003eCustom-\u003eDocument a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:render_custom_string",
      "description": {
        "fct-descr": "\u003cp\u003eRender a document to a string, using the given output format and\n customization data structure.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender",
        "fct-package": "easyrender",
        "fct-signature": "RenderFormat -\u003e Custom -\u003e Document a -\u003e String",
        "fct-source": "src/Graphics-EasyRender-Internal.html#render_custom_string",
        "fct-type": "function",
        "title": "render_custom_string"
      },
      "index": {
        "description": "Render document to string using the given output format and customization data structure",
        "hierarchy": "Graphics EasyRender",
        "module": "Graphics.EasyRender",
        "name": "render_custom_string",
        "normalized": "RenderFormat-\u003eCustom-\u003eDocument a-\u003eString",
        "package": "easyrender",
        "partial": "",
        "signature": "RenderFormat-\u003eCustom-\u003eDocument a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:render_file",
      "description": {
        "fct-descr": "\u003cp\u003eRender a document to a file, using the given output format.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender",
        "fct-package": "easyrender",
        "fct-signature": "Handle -\u003e RenderFormat -\u003e Document a -\u003e IO a",
        "fct-source": "src/Graphics-EasyRender-Internal.html#render_file",
        "fct-type": "function",
        "title": "render_file"
      },
      "index": {
        "description": "Render document to file using the given output format",
        "hierarchy": "Graphics EasyRender",
        "module": "Graphics.EasyRender",
        "name": "render_file",
        "normalized": "Handle-\u003eRenderFormat-\u003eDocument a-\u003eIO a",
        "package": "easyrender",
        "partial": "",
        "signature": "Handle-\u003eRenderFormat-\u003eDocument a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:render_stdout",
      "description": {
        "fct-descr": "\u003cp\u003eRender a document to standard output, using the given output format.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender",
        "fct-package": "easyrender",
        "fct-signature": "RenderFormat -\u003e Document a -\u003e IO a",
        "fct-source": "src/Graphics-EasyRender-Internal.html#render_stdout",
        "fct-type": "function",
        "title": "render_stdout"
      },
      "index": {
        "description": "Render document to standard output using the given output format",
        "hierarchy": "Graphics EasyRender",
        "module": "Graphics.EasyRender",
        "name": "render_stdout",
        "normalized": "RenderFormat-\u003eDocument a-\u003eIO a",
        "package": "easyrender",
        "partial": "",
        "signature": "RenderFormat-\u003eDocument a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:render_string",
      "description": {
        "fct-descr": "\u003cp\u003eRender a document to a string, using the given output format.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender",
        "fct-package": "easyrender",
        "fct-signature": "RenderFormat -\u003e Document a -\u003e String",
        "fct-source": "src/Graphics-EasyRender-Internal.html#render_string",
        "fct-type": "function",
        "title": "render_string"
      },
      "index": {
        "description": "Render document to string using the given output format",
        "hierarchy": "Graphics EasyRender",
        "module": "Graphics.EasyRender",
        "name": "render_string",
        "normalized": "RenderFormat-\u003eDocument a-\u003eString",
        "package": "easyrender",
        "partial": "",
        "signature": "RenderFormat-\u003eDocument a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:scale",
      "description": {
        "fct-descr": "\u003cp\u003eScale the current coordinate system by (\u003cem\u003es\u003c/em\u003e,\u003cem\u003et\u003c/em\u003e). Here, \u003cem\u003es\u003c/em\u003e is\n the scaling factor in the \u003cem\u003ex\u003c/em\u003e-direction, and \u003cem\u003et\u003c/em\u003e is the scaling\n factor in the \u003cem\u003ey\u003c/em\u003e-direction.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender",
        "fct-package": "easyrender",
        "fct-signature": "X -\u003e Y -\u003e Draw ()",
        "fct-source": "src/Graphics-EasyRender-Internal.html#scale",
        "fct-type": "function",
        "title": "scale"
      },
      "index": {
        "description": "Scale the current coordinate system by Here is the scaling factor in the direction and is the scaling factor in the direction",
        "hierarchy": "Graphics EasyRender",
        "module": "Graphics.EasyRender",
        "name": "scale",
        "normalized": "X-\u003eY-\u003eDraw()",
        "package": "easyrender",
        "partial": "",
        "signature": "X-\u003eY-\u003eDraw()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:setcolor",
      "description": {
        "fct-descr": "\u003cp\u003eSet the current color for stroking. The initial stroke color is\n black.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender",
        "fct-package": "easyrender",
        "fct-signature": "Color -\u003e Draw ()",
        "fct-source": "src/Graphics-EasyRender-Internal.html#setcolor",
        "fct-type": "function",
        "title": "setcolor"
      },
      "index": {
        "description": "Set the current color for stroking The initial stroke color is black",
        "hierarchy": "Graphics EasyRender",
        "module": "Graphics.EasyRender",
        "name": "setcolor",
        "normalized": "Color-\u003eDraw()",
        "package": "easyrender",
        "partial": "",
        "signature": "Color-\u003eDraw()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:setlinewidth",
      "description": {
        "fct-descr": "\u003cp\u003eSet the line width. The initial line width is 1.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender",
        "fct-package": "easyrender",
        "fct-signature": "Double -\u003e Draw ()",
        "fct-source": "src/Graphics-EasyRender-Internal.html#setlinewidth",
        "fct-type": "function",
        "title": "setlinewidth"
      },
      "index": {
        "description": "Set the line width The initial line width is",
        "hierarchy": "Graphics EasyRender",
        "module": "Graphics.EasyRender",
        "name": "setlinewidth",
        "normalized": "Double-\u003eDraw()",
        "package": "easyrender",
        "partial": "",
        "signature": "Double-\u003eDraw()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:stroke",
      "description": {
        "fct-descr": "\u003cp\u003eStroke the current path, using the current line color, line\n width, and other graphics parameters. This operation implicitly\n resets the current path to empty.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender",
        "fct-package": "easyrender",
        "fct-signature": "Draw ()",
        "fct-source": "src/Graphics-EasyRender-Internal.html#stroke",
        "fct-type": "function",
        "title": "stroke"
      },
      "index": {
        "description": "Stroke the current path using the current line color line width and other graphics parameters This operation implicitly resets the current path to empty",
        "hierarchy": "Graphics EasyRender",
        "module": "Graphics.EasyRender",
        "name": "stroke",
        "normalized": "Draw()",
        "package": "easyrender",
        "partial": "",
        "signature": "Draw()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:text_width",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the width of the given string in the given font.\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender",
        "fct-package": "easyrender",
        "fct-signature": "Font -\u003e String -\u003e Double",
        "fct-source": "src/Graphics-EasyRender-Internal.html#text_width",
        "fct-type": "function",
        "title": "text_width"
      },
      "index": {
        "description": "Return the width of the given string in the given font",
        "hierarchy": "Graphics EasyRender",
        "module": "Graphics.EasyRender",
        "name": "text_width",
        "normalized": "Font-\u003eString-\u003eDouble",
        "package": "easyrender",
        "partial": "",
        "signature": "Font-\u003eString-\u003eDouble"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:textbox",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003etextbox\u003c/a\u003e\u003c/code\u003e \u003cem\u003ea\u003c/em\u003e \u003cem\u003ef\u003c/em\u003e \u003cem\u003ec\u003c/em\u003e \u003cem\u003ex0\u003c/em\u003e \u003cem\u003ey0\u003c/em\u003e \u003cem\u003ex1\u003c/em\u003e \u003cem\u003ey1\u003c/em\u003e \u003cem\u003eb\u003c/em\u003e \u003cem\u003es\u003c/em\u003e\u003c/code\u003e: Write the\n given string on an imaginary line from point (\u003cem\u003ex0\u003c/em\u003e,\u003cem\u003ey0\u003c/em\u003e) to\n (\u003cem\u003ex1\u003c/em\u003e,\u003cem\u003ey1\u003c/em\u003e), using font \u003cem\u003ef\u003c/em\u003e and color \u003cem\u003ec\u003c/em\u003e. If the text is too wide\n to fit on the line, it is scaled down. Otherwise, it is aligned\n according to the alignment parameter \u003cem\u003ea\u003c/em\u003e. The parameter \u003cem\u003eb\u003c/em\u003e\n specifies an additional offset by which to lower the text, with\n respect to the text's nominal size. For example, if \u003cem\u003eb\u003c/em\u003e=0, then the\n above-mentioned imaginary line from (\u003cem\u003ex0\u003c/em\u003e,\u003cem\u003ey0\u003c/em\u003e) to (\u003cem\u003ex1\u003c/em\u003e,\u003cem\u003ey1\u003c/em\u003e)\n coincides with the text's usual baseline. If \u003cem\u003eb\u003c/em\u003e=0.5, then this\n line approximately goes through the center of each character.\n\u003c/p\u003e\u003cp\u003e\u003cimg src=\"textbox.png\"/\u003e\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender",
        "fct-package": "easyrender",
        "fct-signature": "Alignment -\u003e Font -\u003e Color -\u003e X -\u003e Y -\u003e X -\u003e Y -\u003e Double -\u003e String -\u003e Draw ()",
        "fct-source": "src/Graphics-EasyRender-Internal.html#textbox",
        "fct-type": "function",
        "title": "textbox"
      },
      "index": {
        "description": "textbox x0 y0 x1 y1 Write the given string on an imaginary line from point x0 y0 to x1 y1 using font and color If the text is too wide to fit on the line it is scaled down Otherwise it is aligned according to the alignment parameter The parameter specifies an additional offset by which to lower the text with respect to the text nominal size For example if then the above-mentioned imaginary line from x0 y0 to x1 y1 coincides with the text usual baseline If then this line approximately goes through the center of each character",
        "hierarchy": "Graphics EasyRender",
        "module": "Graphics.EasyRender",
        "name": "textbox",
        "normalized": "Alignment-\u003eFont-\u003eColor-\u003eX-\u003eY-\u003eX-\u003eY-\u003eDouble-\u003eString-\u003eDraw()",
        "package": "easyrender",
        "partial": "",
        "signature": "Alignment-\u003eFont-\u003eColor-\u003eX-\u003eY-\u003eX-\u003eY-\u003eDouble-\u003eString-\u003eDraw()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:translate",
      "description": {
        "fct-descr": "\u003cp\u003eTranslate the current coordinate system by (\u003cem\u003ex\u003c/em\u003e,\u003cem\u003ey\u003c/em\u003e).\n\u003c/p\u003e",
        "fct-module": "Graphics.EasyRender",
        "fct-package": "easyrender",
        "fct-signature": "X -\u003e Y -\u003e Draw ()",
        "fct-source": "src/Graphics-EasyRender-Internal.html#translate",
        "fct-type": "function",
        "title": "translate"
      },
      "index": {
        "description": "Translate the current coordinate system by",
        "hierarchy": "Graphics EasyRender",
        "module": "Graphics.EasyRender",
        "name": "translate",
        "normalized": "X-\u003eY-\u003eDraw()",
        "package": "easyrender",
        "partial": "",
        "signature": "X-\u003eY-\u003eDraw()"
      }
    }
  }
]