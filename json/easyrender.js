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
        "word": "easyrender"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides miscellaneous general-purpose auxiliary\n functions used by the \u003ca\u003eGraphics.EasyRender\u003c/a\u003e package.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.EasyRender.Auxiliary",
          "name": "Auxiliary",
          "package": "easyrender",
          "source": "src/Graphics-EasyRender-Auxiliary.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides miscellaneous general-purpose auxiliary functions used by the Graphics.EasyRender package",
          "hierarchy": "Graphics EasyRender Auxiliary",
          "module": "Graphics.EasyRender.Auxiliary",
          "name": "Auxiliary",
          "package": "easyrender",
          "partial": "Auxiliary",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Auxiliary.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eCurry\u003c/a\u003e\u003c/code\u003e type class is used to implement functions that have a\n variable number of arguments. It provides a family of type\n isomorphisms\n\u003c/p\u003e\u003cpre\u003efun  &#8773;  args -\u003e res,\u003c/pre\u003e\u003cp\u003ewhere\n\u003c/p\u003e\u003cpre\u003e fun = a1 -\u003e a2 -\u003e ... -\u003e an -\u003e res,\n args = (a1, (a2, (..., (an, ())))).\n\u003c/pre\u003e",
          "module": "Graphics.EasyRender.Auxiliary",
          "name": "Curry",
          "package": "easyrender",
          "source": "src/Graphics-EasyRender-Auxiliary.html#Curry",
          "type": "class"
        },
        "index": {
          "description": "The Curry type class is used to implement functions that have variable number of arguments It provides family of type isomorphisms fun args res where fun a1 a2 an res args a1 a2 an",
          "hierarchy": "Graphics EasyRender Auxiliary",
          "module": "Graphics.EasyRender.Auxiliary",
          "name": "Curry",
          "package": "easyrender",
          "partial": "Curry",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Auxiliary.html#t:Curry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of the \u003ccode\u003e\u003ca\u003eceiling\u003c/a\u003e\u003c/code\u003e function that returns an \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Auxiliary",
          "name": "int_ceiling",
          "package": "easyrender",
          "signature": "a -\u003e Integer",
          "source": "src/Graphics-EasyRender-Auxiliary.html#int_ceiling",
          "type": "function"
        },
        "index": {
          "description": "version of the ceiling function that returns an Integer",
          "hierarchy": "Graphics EasyRender Auxiliary",
          "module": "Graphics.EasyRender.Auxiliary",
          "name": "int_ceiling",
          "normalized": "a-\u003eInteger",
          "package": "easyrender",
          "signature": "a-\u003eInteger",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Auxiliary.html#v:int_ceiling"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiple curry: map a function \n (\u003cem\u003ea\u003c/em\u003e\u003csub\u003e1\u003c/sub\u003e, (\u003cem\u003ea\u003c/em\u003e\u003csub\u003e2\u003c/sub\u003e, (&#8230;, ())) &#8594; \u003cem\u003eb\u003c/em\u003e \n to its curried form \n \u003cem\u003ea\u003c/em\u003e\u003csub\u003e1\u003c/sub\u003e &#8594; \u003cem\u003ea\u003c/em\u003e\u003csub\u003e2\u003c/sub\u003e &#8594; &#8230; &#8594; \u003cem\u003eb\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Auxiliary",
          "name": "mcurry",
          "package": "easyrender",
          "signature": "(args -\u003e res) -\u003e fun",
          "source": "src/Graphics-EasyRender-Auxiliary.html#mcurry",
          "type": "method"
        },
        "index": {
          "description": "Multiple curry map function to its curried form",
          "hierarchy": "Graphics EasyRender Auxiliary",
          "module": "Graphics.EasyRender.Auxiliary",
          "name": "mcurry",
          "normalized": "(a-\u003eb)-\u003ec",
          "package": "easyrender",
          "signature": "(args-\u003eres)-\u003efun",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Auxiliary.html#v:mcurry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiple uncurry: map a function\n \u003cem\u003ea\u003c/em\u003e\u003csub\u003e1\u003c/sub\u003e &#8594; \u003cem\u003ea\u003c/em\u003e\u003csub\u003e2\u003c/sub\u003e &#8594; &#8230; &#8594; \u003cem\u003eb\u003c/em\u003e\n to its uncurried form \n (\u003cem\u003ea\u003c/em\u003e\u003csub\u003e1\u003c/sub\u003e, (\u003cem\u003ea\u003c/em\u003e\u003csub\u003e2\u003c/sub\u003e, (&#8230;, ())) &#8594; \u003cem\u003eb\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Auxiliary",
          "name": "muncurry",
          "package": "easyrender",
          "signature": "fun -\u003e args -\u003e res",
          "source": "src/Graphics-EasyRender-Auxiliary.html#muncurry",
          "type": "method"
        },
        "index": {
          "description": "Multiple uncurry map function to its uncurried form",
          "hierarchy": "Graphics EasyRender Auxiliary",
          "module": "Graphics.EasyRender.Auxiliary",
          "name": "muncurry",
          "normalized": "a-\u003eb-\u003ec",
          "package": "easyrender",
          "signature": "fun-\u003eargs-\u003eres",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Auxiliary.html#v:muncurry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module exposes the implementation details of\n \u003ca\u003eGraphics.EasyRender\u003c/a\u003e. Most user code should not need to import\n this; they should import \u003ca\u003eGraphics.EasyRender\u003c/a\u003e instead. \n\u003c/p\u003e\u003cp\u003eThis module provides efficient functions for rendering vector\n graphics to a number of formats, including EPS, PostScript, and\n PDF. It provides an abstraction for multi-page documents, as well\n as a set of graphics primitives for page descriptions. \n\u003c/p\u003e\u003cp\u003eThe graphics model is similar to that of the PostScript and PDF\n languages, but we only implement a subset of their functionality.\n Care has been taken that graphics rendering is done efficiently and\n as lazily as possible; documents are rendered \"on the fly\",\n without the need to store the whole document in memory.\n\u003c/p\u003e\u003cp\u003eThe provided document description model consists of two separate\n layers of abstraction:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003cem\u003edrawing\u003c/em\u003e is concerned with placing marks on a fixed surface, and\n takes place in the \u003ccode\u003e\u003ca\u003eDraw\u003c/a\u003e\u003c/code\u003e monad;\n\u003c/li\u003e\u003cli\u003e \u003cem\u003edocument structure\u003c/em\u003e is concerned with a sequence of pages, their\n bounding boxes, and other meta-data. It takes place in the\n \u003ccode\u003e\u003ca\u003eDocument\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "Internal",
          "package": "easyrender",
          "source": "src/Graphics-EasyRender-Internal.html",
          "type": "module"
        },
        "index": {
          "description": "This module exposes the implementation details of Graphics.EasyRender Most user code should not need to import this they should import Graphics.EasyRender instead This module provides efficient functions for rendering vector graphics to number of formats including EPS PostScript and PDF It provides an abstraction for multi-page documents as well as set of graphics primitives for page descriptions The graphics model is similar to that of the PostScript and PDF languages but we only implement subset of their functionality Care has been taken that graphics rendering is done efficiently and as lazily as possible documents are rendered on the fly without the need to store the whole document in memory The provided document description model consists of two separate layers of abstraction drawing is concerned with placing marks on fixed surface and takes place in the Draw monad document structure is concerned with sequence of pages their bounding boxes and other meta-data It takes place in the Document monad",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "Internal",
          "package": "easyrender",
          "partial": "Internal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA real number representing text alignment.  0 = left aligned, 0.5\n = centered, 1 = right aligned. Intermediate values are also\n possible. For example, an alignment value of 0.25 means one quarter\n of the way between left aligned and right aligned.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "Alignment",
          "package": "easyrender",
          "source": "src/Graphics-EasyRender-Internal.html#Alignment",
          "type": "type"
        },
        "index": {
          "description": "real number representing text alignment left aligned centered right aligned Intermediate values are also possible For example an alignment value of means one quarter of the way between left aligned and right aligned",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "Alignment",
          "package": "easyrender",
          "partial": "Alignment",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#t:Alignment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA enumeration type for base fonts. For the time being, we only\n offer TimesRoman and Helvetica.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "Basefont",
          "package": "easyrender",
          "source": "src/Graphics-EasyRender-Internal.html#Basefont",
          "type": "data"
        },
        "index": {
          "description": "enumeration type for base fonts For the time being we only offer TimesRoman and Helvetica",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "Basefont",
          "package": "easyrender",
          "partial": "Basefont",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#t:Basefont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an identical \"boxed\" copy of a type constructor. This is\n used for technical reasons, to allow the \u003ccode\u003e\u003ca\u003ewprintf\u003c/a\u003e\u003c/code\u003e operation to be\n typed.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "Boxed",
          "package": "easyrender",
          "source": "src/Graphics-EasyRender-Internal.html#Boxed",
          "type": "newtype"
        },
        "index": {
          "description": "Create an identical boxed copy of type constructor This is used for technical reasons to allow the wprintf operation to be typed",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "Boxed",
          "package": "easyrender",
          "partial": "Boxed",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#t:Boxed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class to curry/uncurry functions in any boxed monad. This\n establishes an isomorphism\n\u003c/p\u003e\u003cpre\u003e @fun  &#8773;  args -\u003e Boxed m res,@\n\u003c/pre\u003e\u003cp\u003ewhere\n\u003c/p\u003e\u003cpre\u003e fun = a1 -\u003e a2 -\u003e ... -\u003e an -\u003e Boxed m res,\n args = (a1, (a2, (..., (an, ())))).\n\u003c/pre\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "Boxed_Curry",
          "package": "easyrender",
          "source": "src/Graphics-EasyRender-Internal.html#Boxed_Curry",
          "type": "class"
        },
        "index": {
          "description": "class to curry uncurry functions in any boxed monad This establishes an isomorphism fun args Boxed res where fun a1 a2 an Boxed res args a1 a2 an",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "Boxed_Curry",
          "package": "easyrender",
          "partial": "Boxed Curry",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#t:Boxed_Curry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of colors.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "Color",
          "package": "easyrender",
          "source": "src/Graphics-EasyRender-Internal.html#Color",
          "type": "data"
        },
        "index": {
          "description": "The type of colors",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "Color",
          "package": "easyrender",
          "partial": "Color",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#t:Color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA data structure that holds application-specific meta-data and\n customization information.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "Custom",
          "package": "easyrender",
          "source": "src/Graphics-EasyRender-Internal.html#Custom",
          "type": "data"
        },
        "index": {
          "description": "data structure that holds application-specific meta-data and customization information",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "Custom",
          "package": "easyrender",
          "partial": "Custom",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#t:Custom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of custom definitions, to be used with the\n \u003ccode\u003e\u003ca\u003edraw_subroutine\u003c/a\u003e\u003c/code\u003e command.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "CustomDef",
          "package": "easyrender",
          "source": "src/Graphics-EasyRender-Internal.html#CustomDef",
          "type": "data"
        },
        "index": {
          "description": "The type of custom definitions to be used with the draw subroutine command",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "CustomDef",
          "package": "easyrender",
          "partial": "Custom Def",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#t:CustomDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Document monad.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "Document",
          "package": "easyrender",
          "source": "src/Graphics-EasyRender-Internal.html#Document",
          "type": "data"
        },
        "index": {
          "description": "The Document monad",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "Document",
          "package": "easyrender",
          "partial": "Document",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#t:Document"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Draw monad.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "Draw",
          "package": "easyrender",
          "source": "src/Graphics-EasyRender-Internal.html#Draw",
          "type": "data"
        },
        "index": {
          "description": "The Draw monad",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "Draw",
          "package": "easyrender",
          "partial": "Draw",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#t:Draw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn abstract data type describing individual drawing commands.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "DrawCommand",
          "package": "easyrender",
          "source": "src/Graphics-EasyRender-Internal.html#DrawCommand",
          "type": "data"
        },
        "index": {
          "description": "An abstract data type describing individual drawing commands",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "DrawCommand",
          "package": "easyrender",
          "partial": "Draw Command",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#t:DrawCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA position in a file. The first byte is 0.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "Filepos",
          "package": "easyrender",
          "source": "src/Graphics-EasyRender-Internal.html#Filepos",
          "type": "type"
        },
        "index": {
          "description": "position in file The first byte is",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "Filepos",
          "package": "easyrender",
          "partial": "Filepos",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#t:Filepos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA data type describing a scaled font. This consists of a base\n font and a point size.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "Font",
          "package": "easyrender",
          "source": "src/Graphics-EasyRender-Internal.html#Font",
          "type": "data"
        },
        "index": {
          "description": "data type describing scaled font This consists of base font and point size",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "Font",
          "package": "easyrender",
          "partial": "Font",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#t:Font"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type representing font metrics for a given base font. The first\n component is the default width of characters; the second component\n is a map from characters to widths.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "Fontmetric",
          "package": "easyrender",
          "source": "src/Graphics-EasyRender-Internal.html#Fontmetric",
          "type": "type"
        },
        "index": {
          "description": "type representing font metrics for given base font The first component is the default width of characters the second component is map from characters to widths",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "Fontmetric",
          "package": "easyrender",
          "partial": "Fontmetric",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#t:Fontmetric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn enumeration of backend languages, for the purpose of defining\n custom drawing commands. Note that several backends (e.g. EPS and\n PostScript) may share the same language, and therefore they are\n only represented once in this enumeration.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "Language",
          "package": "easyrender",
          "source": "src/Graphics-EasyRender-Internal.html#Language",
          "type": "data"
        },
        "index": {
          "description": "An enumeration of backend languages for the purpose of defining custom drawing commands Note that several backends e.g EPS and PostScript may share the same language and therefore they are only represented once in this enumeration",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "Language",
          "package": "easyrender",
          "partial": "Language",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#t:Language"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA PDF object reference.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "Object",
          "package": "easyrender",
          "source": "src/Graphics-EasyRender-Internal.html#Object",
          "type": "type"
        },
        "index": {
          "description": "PDF object reference",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "Object",
          "package": "easyrender",
          "partial": "Object",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#t:Object"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBoxed version of the \u003ccode\u003e\u003ca\u003eRawPDFWriter\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "PDFWriter",
          "package": "easyrender",
          "source": "src/Graphics-EasyRender-Internal.html#PDFWriter",
          "type": "type"
        },
        "index": {
          "description": "Boxed version of the RawPDFWriter monad",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "PDFWriter",
          "package": "easyrender",
          "partial": "PDFWriter",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#t:PDFWriter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA state to keep track of PDF document structure: current\n character count, current TOC, current page, etc.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "PDF_State",
          "package": "easyrender",
          "source": "src/Graphics-EasyRender-Internal.html#PDF_State",
          "type": "data"
        },
        "index": {
          "description": "state to keep track of PDF document structure current character count current TOC current page etc",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "PDF_State",
          "package": "easyrender",
          "partial": "PDF State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#t:PDF_State"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ePSWriter\u003c/a\u003e\u003c/code\u003e monad. This is just a \u003ccode\u003e\u003ca\u003ePS_State\u003c/a\u003e\u003c/code\u003e wrapped around\n the \u003ccode\u003e\u003ca\u003eWriter\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "PSWriter",
          "package": "easyrender",
          "source": "src/Graphics-EasyRender-Internal.html#PSWriter",
          "type": "type"
        },
        "index": {
          "description": "The PSWriter monad This is just PS State wrapped around the Writer monad",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "PSWriter",
          "package": "easyrender",
          "partial": "PSWriter",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#t:PSWriter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA state to keep track of a current bounding box and page number.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "PS_State",
          "package": "easyrender",
          "source": "src/Graphics-EasyRender-Internal.html#PS_State",
          "type": "data"
        },
        "index": {
          "description": "state to keep track of current bounding box and page number",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "PS_State",
          "package": "easyrender",
          "partial": "PS State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#t:PS_State"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of page numbers.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "Page",
          "package": "easyrender",
          "source": "src/Graphics-EasyRender-Internal.html#Page",
          "type": "type"
        },
        "index": {
          "description": "The type of page numbers",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "Page",
          "package": "easyrender",
          "partial": "Page",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#t:Page"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eRawPDFWriter\u003c/a\u003e\u003c/code\u003e monad is just a \u003ccode\u003e\u003ca\u003ePDF_State\u003c/a\u003e\u003c/code\u003e wrapped around\n the \u003ccode\u003e\u003ca\u003eWriter\u003c/a\u003e\u003c/code\u003e monad. Its \u003ccode\u003e\u003ca\u003ewPutChar\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ewPutStr\u003c/a\u003e\u003c/code\u003e methods\n automatically keep track of the file position.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "RawPDFWriter",
          "package": "easyrender",
          "source": "src/Graphics-EasyRender-Internal.html#RawPDFWriter",
          "type": "type"
        },
        "index": {
          "description": "The RawPDFWriter monad is just PDF State wrapped around the Writer monad Its wPutChar and wPutStr methods automatically keep track of the file position",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "RawPDFWriter",
          "package": "easyrender",
          "partial": "Raw PDFWriter",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#t:RawPDFWriter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAvailable graphics formats for rendering.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "RenderFormat",
          "package": "easyrender",
          "source": "src/Graphics-EasyRender-Internal.html#RenderFormat",
          "type": "data"
        },
        "index": {
          "description": "Available graphics formats for rendering",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "RenderFormat",
          "package": "easyrender",
          "partial": "Render Format",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#t:RenderFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA generic \u003ccode\u003e\u003ca\u003eWriterMonad\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "Writer",
          "package": "easyrender",
          "source": "src/Graphics-EasyRender-Internal.html#Writer",
          "type": "data"
        },
        "index": {
          "description": "generic WriterMonad",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "Writer",
          "package": "easyrender",
          "partial": "Writer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#t:Writer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eWriterMonad\u003c/a\u003e\u003c/code\u003e is any monad that one can output strings to.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003ewPutChar\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ewPutStr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "WriterMonad",
          "package": "easyrender",
          "source": "src/Graphics-EasyRender-Internal.html#WriterMonad",
          "type": "class"
        },
        "index": {
          "description": "WriterMonad is any monad that one can output strings to Minimal complete definition wPutChar or wPutStr",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "WriterMonad",
          "package": "easyrender",
          "partial": "Writer Monad",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#t:WriterMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of \u003cem\u003ex\u003c/em\u003e-coordinates.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "X",
          "package": "easyrender",
          "source": "src/Graphics-EasyRender-Internal.html#X",
          "type": "type"
        },
        "index": {
          "description": "The type of coordinates",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "X",
          "package": "easyrender",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#t:X"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of \u003cem\u003ey\u003c/em\u003e-coordinates.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "Y",
          "package": "easyrender",
          "source": "src/Graphics-EasyRender-Internal.html#Y",
          "type": "type"
        },
        "index": {
          "description": "The type of coordinates",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "Y",
          "package": "easyrender",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#t:Y"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.EasyRender.Internal",
          "name": "Boxed",
          "package": "easyrender",
          "signature": "Boxed (m a)",
          "source": "src/Graphics-EasyRender-Internal.html#Boxed",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "Boxed",
          "package": "easyrender",
          "partial": "Boxed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Boxed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClose the current subpath.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "Closepath",
          "package": "easyrender",
          "signature": "Closepath",
          "source": "src/Graphics-EasyRender-Internal.html#DrawCommand",
          "type": "function"
        },
        "index": {
          "description": "Close the current subpath",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "Closepath",
          "package": "easyrender",
          "partial": "Closepath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Closepath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGray value, in the range from\n 0.0 (black) to 1.0 (white).\n\u003c/p\u003e",
          "module": "[\"Graphics.EasyRender.Internal\",\"Graphics.EasyRender\"]",
          "name": "Color_Gray",
          "package": "easyrender",
          "signature": "Color_Gray Double",
          "source": "src/Graphics-EasyRender-Internal.html#Color",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Color_Gray\",\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:Color_Gray\"]"
        },
        "index": {
          "description": "Gray value in the range from black to white",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "Color_Gray",
          "package": "easyrender",
          "partial": "Color Gray",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Color_Gray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRed, green and blue components,\n in the range from 0.0 (dark) to\n 1.0 (bright).\n\u003c/p\u003e",
          "module": "[\"Graphics.EasyRender.Internal\",\"Graphics.EasyRender\"]",
          "name": "Color_RGB",
          "package": "easyrender",
          "signature": "Color_RGB Double Double Double",
          "source": "src/Graphics-EasyRender-Internal.html#Color",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Color_RGB\",\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:Color_RGB\"]"
        },
        "index": {
          "description": "Red green and blue components in the range from dark to bright",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "Color_RGB",
          "package": "easyrender",
          "partial": "Color RGB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Color_RGB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA human-readable comment, not rendered\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "Comment",
          "package": "easyrender",
          "signature": "Comment String",
          "source": "src/Graphics-EasyRender-Internal.html#DrawCommand",
          "type": "function"
        },
        "index": {
          "description": "human-readable comment not rendered",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "Comment",
          "package": "easyrender",
          "partial": "Comment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Comment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend a Bezier curve segment.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "Curveto",
          "package": "easyrender",
          "signature": "Curveto X Y X Y X Y",
          "source": "src/Graphics-EasyRender-Internal.html#DrawCommand",
          "type": "function"
        },
        "index": {
          "description": "Append Bezier curve segment",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "Curveto",
          "package": "easyrender",
          "partial": "Curveto",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Curveto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.EasyRender.Internal\",\"Graphics.EasyRender\"]",
          "name": "Custom",
          "package": "easyrender",
          "signature": "Custom",
          "source": "src/Graphics-EasyRender-Internal.html#Custom",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Custom\",\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:Custom\"]"
        },
        "index": {
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "Custom",
          "package": "easyrender",
          "partial": "Custom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Custom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.EasyRender.Internal",
          "name": "CustomDef",
          "package": "easyrender",
          "signature": "CustomDef Language String",
          "source": "src/Graphics-EasyRender-Internal.html#CustomDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "CustomDef",
          "package": "easyrender",
          "partial": "Custom Def",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:CustomDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePage with bounding box\n known at the beginning.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "Document_Page",
          "package": "easyrender",
          "signature": "Document_Page X Y (Draw (Document a))",
          "source": "src/Graphics-EasyRender-Internal.html#Document",
          "type": "function"
        },
        "index": {
          "description": "Page with bounding box known at the beginning",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "Document_Page",
          "package": "easyrender",
          "partial": "Document Page",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Document_Page"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePage with bounding box\n known at the end.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "Document_Page_defer",
          "package": "easyrender",
          "signature": "Document_Page_defer (Draw (X, Y, Document a))",
          "source": "src/Graphics-EasyRender-Internal.html#Document",
          "type": "function"
        },
        "index": {
          "description": "Page with bounding box known at the end",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "Document_Page_defer",
          "normalized": "Document_Page_defer(Draw(X,Y,Document a))",
          "package": "easyrender",
          "partial": "Document Page",
          "signature": "Document_Page_defer(Draw(X,Y,Document a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Document_Page_defer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTerminate with a result.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "Document_Return",
          "package": "easyrender",
          "signature": "Document_Return a",
          "source": "src/Graphics-EasyRender-Internal.html#Document",
          "type": "function"
        },
        "index": {
          "description": "Terminate with result",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "Document_Return",
          "package": "easyrender",
          "partial": "Document Return",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Document_Return"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBlock structure. Perform the\n commands of the outer \u003ccode\u003e\u003ca\u003eDraw\u003c/a\u003e\u003c/code\u003e in\n a temporary copy of the\n graphics state, then continue\n with the inner \u003ccode\u003e\u003ca\u003eDraw\u003c/a\u003e\u003c/code\u003e in the\n original graphics state.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "Draw_Block",
          "package": "easyrender",
          "signature": "Draw_Block (Draw (Draw a))",
          "source": "src/Graphics-EasyRender-Internal.html#Draw",
          "type": "function"
        },
        "index": {
          "description": "Block structure Perform the commands of the outer Draw in temporary copy of the graphics state then continue with the inner Draw in the original graphics state",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "Draw_Block",
          "package": "easyrender",
          "partial": "Draw Block",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Draw_Block"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTerminate with a result.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "Draw_Return",
          "package": "easyrender",
          "signature": "Draw_Return a",
          "source": "src/Graphics-EasyRender-Internal.html#Draw",
          "type": "function"
        },
        "index": {
          "description": "Terminate with result",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "Draw_Return",
          "package": "easyrender",
          "partial": "Draw Return",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Draw_Return"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a command and continue.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "Draw_Write",
          "package": "easyrender",
          "signature": "Draw_Write DrawCommand (Draw a)",
          "source": "src/Graphics-EasyRender-Internal.html#Draw",
          "type": "function"
        },
        "index": {
          "description": "Write command and continue",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "Draw_Write",
          "package": "easyrender",
          "partial": "Draw Write",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Draw_Write"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFill and clear the current path.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "Fill",
          "package": "easyrender",
          "signature": "Fill Color",
          "source": "src/Graphics-EasyRender-Internal.html#DrawCommand",
          "type": "function"
        },
        "index": {
          "description": "Fill and clear the current path",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "Fill",
          "package": "easyrender",
          "partial": "Fill",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Fill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFill and stroke and clear the current path.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "FillStroke",
          "package": "easyrender",
          "signature": "FillStroke Color",
          "source": "src/Graphics-EasyRender-Internal.html#DrawCommand",
          "type": "function"
        },
        "index": {
          "description": "Fill and stroke and clear the current path",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "FillStroke",
          "package": "easyrender",
          "partial": "Fill Stroke",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:FillStroke"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.EasyRender.Internal\",\"Graphics.EasyRender\"]",
          "name": "Font",
          "package": "easyrender",
          "signature": "Font Basefont Double",
          "source": "src/Graphics-EasyRender-Internal.html#Font",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Font\",\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:Font\"]"
        },
        "index": {
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "Font",
          "package": "easyrender",
          "partial": "Font",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Font"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn ASCII-based debugging format.\n\u003c/p\u003e",
          "module": "[\"Graphics.EasyRender.Internal\",\"Graphics.EasyRender\"]",
          "name": "Format_Debug",
          "package": "easyrender",
          "signature": "Format_Debug",
          "source": "src/Graphics-EasyRender-Internal.html#RenderFormat",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Format_Debug\",\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:Format_Debug\"]"
        },
        "index": {
          "description": "An ASCII-based debugging format",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "Format_Debug",
          "package": "easyrender",
          "partial": "Format Debug",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Format_Debug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncapsulated PostScript. The integer\n argument specifies which single page to\n extract from the document.\n\u003c/p\u003e",
          "module": "[\"Graphics.EasyRender.Internal\",\"Graphics.EasyRender\"]",
          "name": "Format_EPS",
          "package": "easyrender",
          "signature": "Format_EPS Integer",
          "source": "src/Graphics-EasyRender-Internal.html#RenderFormat",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Format_EPS\",\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:Format_EPS\"]"
        },
        "index": {
          "description": "Encapsulated PostScript The integer argument specifies which single page to extract from the document",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "Format_EPS",
          "package": "easyrender",
          "partial": "Format EPS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Format_EPS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePortable Document Format.\n\u003c/p\u003e",
          "module": "[\"Graphics.EasyRender.Internal\",\"Graphics.EasyRender\"]",
          "name": "Format_PDF",
          "package": "easyrender",
          "signature": "Format_PDF",
          "source": "src/Graphics-EasyRender-Internal.html#RenderFormat",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Format_PDF\",\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:Format_PDF\"]"
        },
        "index": {
          "description": "Portable Document Format",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "Format_PDF",
          "package": "easyrender",
          "partial": "Format PDF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Format_PDF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePostScript.\n\u003c/p\u003e",
          "module": "[\"Graphics.EasyRender.Internal\",\"Graphics.EasyRender\"]",
          "name": "Format_PS",
          "package": "easyrender",
          "signature": "Format_PS",
          "source": "src/Graphics-EasyRender-Internal.html#RenderFormat",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Format_PS\",\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:Format_PS\"]"
        },
        "index": {
          "description": "PostScript",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "Format_PS",
          "package": "easyrender",
          "partial": "Format PS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Format_PS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.EasyRender.Internal\",\"Graphics.EasyRender\"]",
          "name": "Helvetica",
          "package": "easyrender",
          "signature": "Helvetica",
          "source": "src/Graphics-EasyRender-Internal.html#Basefont",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Helvetica\",\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:Helvetica\"]"
        },
        "index": {
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "Helvetica",
          "package": "easyrender",
          "partial": "Helvetica",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Helvetica"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eASCII (for debugging)\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "Language_ASCII",
          "package": "easyrender",
          "signature": "Language_ASCII",
          "source": "src/Graphics-EasyRender-Internal.html#Language",
          "type": "function"
        },
        "index": {
          "description": "ASCII for debugging",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "Language_ASCII",
          "package": "easyrender",
          "partial": "Language ASCII",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Language_ASCII"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePDF\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "Language_PDF",
          "package": "easyrender",
          "signature": "Language_PDF",
          "source": "src/Graphics-EasyRender-Internal.html#Language",
          "type": "function"
        },
        "index": {
          "description": "PDF",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "Language_PDF",
          "package": "easyrender",
          "partial": "Language PDF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Language_PDF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePostScript (including EPS)\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "Language_PS",
          "package": "easyrender",
          "signature": "Language_PS",
          "source": "src/Graphics-EasyRender-Internal.html#Language",
          "type": "function"
        },
        "index": {
          "description": "PostScript including EPS",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "Language_PS",
          "package": "easyrender",
          "partial": "Language PS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Language_PS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend a straight line to the current subpath.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "Lineto",
          "package": "easyrender",
          "signature": "Lineto X Y",
          "source": "src/Graphics-EasyRender-Internal.html#DrawCommand",
          "type": "function"
        },
        "index": {
          "description": "Append straight line to the current subpath",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "Lineto",
          "package": "easyrender",
          "partial": "Lineto",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Lineto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStart a new subpath at the given coordinates.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "Moveto",
          "package": "easyrender",
          "signature": "Moveto X Y",
          "source": "src/Graphics-EasyRender-Internal.html#DrawCommand",
          "type": "function"
        },
        "index": {
          "description": "Start new subpath at the given coordinates",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "Moveto",
          "package": "easyrender",
          "partial": "Moveto",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Moveto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the current path to empty.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "Newpath",
          "package": "easyrender",
          "signature": "Newpath",
          "source": "src/Graphics-EasyRender-Internal.html#DrawCommand",
          "type": "function"
        },
        "index": {
          "description": "Set the current path to empty",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "Newpath",
          "package": "easyrender",
          "partial": "Newpath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Newpath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.EasyRender.Internal",
          "name": "PDF_State",
          "package": "easyrender",
          "signature": "PDF_State",
          "source": "src/Graphics-EasyRender-Internal.html#PDF_State",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "PDF_State",
          "package": "easyrender",
          "partial": "PDF State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:PDF_State"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.EasyRender.Internal",
          "name": "PS_State",
          "package": "easyrender",
          "signature": "PS_State !X !Y !Page",
          "source": "src/Graphics-EasyRender-Internal.html#PS_State",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "PS_State",
          "package": "easyrender",
          "partial": "PS State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:PS_State"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRotate the current coordinate system.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "Rotate",
          "package": "easyrender",
          "signature": "Rotate Double",
          "source": "src/Graphics-EasyRender-Internal.html#DrawCommand",
          "type": "function"
        },
        "index": {
          "description": "Rotate the current coordinate system",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "Rotate",
          "package": "easyrender",
          "partial": "Rotate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Rotate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScale the current coordinate system.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "Scale",
          "package": "easyrender",
          "signature": "Scale X Y",
          "source": "src/Graphics-EasyRender-Internal.html#DrawCommand",
          "type": "function"
        },
        "index": {
          "description": "Scale the current coordinate system",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "Scale",
          "package": "easyrender",
          "partial": "Scale",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Scale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet current color.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "SetColor",
          "package": "easyrender",
          "signature": "SetColor Color",
          "source": "src/Graphics-EasyRender-Internal.html#DrawCommand",
          "type": "function"
        },
        "index": {
          "description": "Set current color",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "SetColor",
          "package": "easyrender",
          "partial": "Set Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:SetColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet current line width.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "SetLineWidth",
          "package": "easyrender",
          "signature": "SetLineWidth Double",
          "source": "src/Graphics-EasyRender-Internal.html#DrawCommand",
          "type": "function"
        },
        "index": {
          "description": "Set current line width",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "SetLineWidth",
          "package": "easyrender",
          "partial": "Set Line Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:SetLineWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStroke and clear the current path.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "Stroke",
          "package": "easyrender",
          "signature": "Stroke",
          "source": "src/Graphics-EasyRender-Internal.html#DrawCommand",
          "type": "function"
        },
        "index": {
          "description": "Stroke and clear the current path",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "Stroke",
          "package": "easyrender",
          "partial": "Stroke",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Stroke"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA subroutine is a composite drawing command. In\n addition to a default definition that works for\n any backend, it can also have optional specialized\n definitions for particular backends.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "Subroutine",
          "package": "easyrender",
          "signature": "Subroutine (Draw ()) [CustomDef]",
          "source": "src/Graphics-EasyRender-Internal.html#DrawCommand",
          "type": "function"
        },
        "index": {
          "description": "subroutine is composite drawing command In addition to default definition that works for any backend it can also have optional specialized definitions for particular backends",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "Subroutine",
          "normalized": "Subroutine(Draw())[CustomDef]",
          "package": "easyrender",
          "partial": "Subroutine",
          "signature": "Subroutine(Draw())[CustomDef]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Subroutine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eText.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "TextBox",
          "package": "easyrender",
          "signature": "TextBox Alignment Font Color X Y X Y Double String",
          "source": "src/Graphics-EasyRender-Internal.html#DrawCommand",
          "type": "function"
        },
        "index": {
          "description": "Text",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "TextBox",
          "package": "easyrender",
          "partial": "Text Box",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:TextBox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Graphics.EasyRender.Internal\",\"Graphics.EasyRender\"]",
          "name": "TimesRoman",
          "package": "easyrender",
          "signature": "TimesRoman",
          "source": "src/Graphics-EasyRender-Internal.html#Basefont",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:TimesRoman\",\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:TimesRoman\"]"
        },
        "index": {
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "TimesRoman",
          "package": "easyrender",
          "partial": "Times Roman",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:TimesRoman"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranslate current coordinate system.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "Translate",
          "package": "easyrender",
          "signature": "Translate X Y",
          "source": "src/Graphics-EasyRender-Internal.html#DrawCommand",
          "type": "function"
        },
        "index": {
          "description": "Translate current coordinate system",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "Translate",
          "package": "easyrender",
          "partial": "Translate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Translate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a character.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "Writer_PutChar",
          "package": "easyrender",
          "signature": "Writer_PutChar Char (Writer a)",
          "source": "src/Graphics-EasyRender-Internal.html#Writer",
          "type": "function"
        },
        "index": {
          "description": "Write character",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "Writer_PutChar",
          "package": "easyrender",
          "partial": "Writer Put Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Writer_PutChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a string.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "Writer_PutStr",
          "package": "easyrender",
          "signature": "Writer_PutStr String (Writer a)",
          "source": "src/Graphics-EasyRender-Internal.html#Writer",
          "type": "function"
        },
        "index": {
          "description": "Write string",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "Writer_PutStr",
          "package": "easyrender",
          "partial": "Writer Put Str",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Writer_PutStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTerminate with a result.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "Writer_Return",
          "package": "easyrender",
          "signature": "Writer_Return a",
          "source": "src/Graphics-EasyRender-Internal.html#Writer",
          "type": "function"
        },
        "index": {
          "description": "Terminate with result",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "Writer_Return",
          "package": "easyrender",
          "partial": "Writer Return",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:Writer_Return"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCentered alignment.\n\u003c/p\u003e",
          "module": "[\"Graphics.EasyRender.Internal\",\"Graphics.EasyRender\"]",
          "name": "align_center",
          "package": "easyrender",
          "signature": "Alignment",
          "source": "src/Graphics-EasyRender-Internal.html#align_center",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:align_center\",\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:align_center\"]"
        },
        "index": {
          "description": "Centered alignment",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "align_center",
          "package": "easyrender",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:align_center"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeft alignment.\n\u003c/p\u003e",
          "module": "[\"Graphics.EasyRender.Internal\",\"Graphics.EasyRender\"]",
          "name": "align_left",
          "package": "easyrender",
          "signature": "Alignment",
          "source": "src/Graphics-EasyRender-Internal.html#align_left",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:align_left\",\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:align_left\"]"
        },
        "index": {
          "description": "Left alignment",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "align_left",
          "package": "easyrender",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:align_left"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRight alignment.\n\u003c/p\u003e",
          "module": "[\"Graphics.EasyRender.Internal\",\"Graphics.EasyRender\"]",
          "name": "align_right",
          "package": "easyrender",
          "signature": "Alignment",
          "source": "src/Graphics-EasyRender-Internal.html#align_right",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:align_right\",\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:align_right\"]"
        },
        "index": {
          "description": "Right alignment",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "align_right",
          "package": "easyrender",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:align_right"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStart a new subpath consisting of a circular arc segment. The\n arc segment is centered at (\u003cem\u003ex\u003c/em\u003e,\u003cem\u003ey\u003c/em\u003e), has radius \u003cem\u003er\u003c/em\u003e, and extends\n from angle \u003cem\u003ea1\u003c/em\u003e to angle \u003cem\u003ea2\u003c/em\u003e, measured in degrees,\n counterclockwise from the \u003cem\u003ex\u003c/em\u003e-axis. The arc is drawn clockwise if\n \u003cem\u003ea2\u003c/em\u003e &#8805; \u003cem\u003ea1\u003c/em\u003e, and counterclockwise otherwise. The final point\n becomes the new current point.\n\u003c/p\u003e",
          "module": "[\"Graphics.EasyRender.Internal\",\"Graphics.EasyRender\"]",
          "name": "arc",
          "package": "easyrender",
          "signature": "X -\u003e Y -\u003e Double -\u003e Double -\u003e Double -\u003e Draw ()",
          "source": "src/Graphics-EasyRender-Internal.html#arc",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:arc\",\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:arc\"]"
        },
        "index": {
          "description": "Start new subpath consisting of circular arc segment The arc segment is centered at has radius and extends from angle a1 to angle a2 measured in degrees counterclockwise from the axis The arc is drawn clockwise if a2 a1 and counterclockwise otherwise The final point becomes the new current point",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "arc",
          "normalized": "X-\u003eY-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDraw()",
          "package": "easyrender",
          "signature": "X-\u003eY-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDraw()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:arc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003earc\u003c/a\u003e\u003c/code\u003e, except append to the current subpath. If necessary,\n add a straight line segment from the current point to the starting\n point of the arc.\n\u003c/p\u003e",
          "module": "[\"Graphics.EasyRender.Internal\",\"Graphics.EasyRender\"]",
          "name": "arc_append",
          "package": "easyrender",
          "signature": "X -\u003e Y -\u003e Double -\u003e Double -\u003e Double -\u003e Draw ()",
          "source": "src/Graphics-EasyRender-Internal.html#arc_append",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:arc_append\",\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:arc_append\"]"
        },
        "index": {
          "description": "Like arc except append to the current subpath If necessary add straight line segment from the current point to the starting point of the arc",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "arc_append",
          "normalized": "X-\u003eY-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDraw()",
          "package": "easyrender",
          "signature": "X-\u003eY-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDraw()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:arc_append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe common implementation of \u003ccode\u003e\u003ca\u003earc\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003earc_append\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eoval\u003c/a\u003e\u003c/code\u003e. The\n first parameter is a boolean flag indicating whether to append to\n an existing subpath or start a new subpath. The fourth and fifth\n parameter are the horizontal and vertical radius.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "arc_internal",
          "package": "easyrender",
          "signature": "Bool -\u003e X -\u003e Y -\u003e Double -\u003e Double -\u003e Double -\u003e Double -\u003e Draw ()",
          "source": "src/Graphics-EasyRender-Internal.html#arc_internal",
          "type": "function"
        },
        "index": {
          "description": "The common implementation of arc arc append and oval The first parameter is boolean flag indicating whether to append to an existing subpath or start new subpath The fourth and fifth parameter are the horizontal and vertical radius",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "arc_internal",
          "normalized": "Bool-\u003eX-\u003eY-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDraw()",
          "package": "easyrender",
          "signature": "Bool-\u003eX-\u003eY-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDouble-\u003eDraw()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:arc_internal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform a block of commands in a local copy of the graphics\n state. This is intended to be used like this:\n\u003c/p\u003e\u003cpre\u003e     block $ do\n       \u003c\u003cdrawing commands\u003e\u003e\n\u003c/pre\u003e",
          "module": "[\"Graphics.EasyRender.Internal\",\"Graphics.EasyRender\"]",
          "name": "block",
          "package": "easyrender",
          "signature": "Draw a -\u003e Draw a",
          "source": "src/Graphics-EasyRender-Internal.html#block",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:block\",\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:block\"]"
        },
        "index": {
          "description": "Perform block of commands in local copy of the graphics state This is intended to be used like this block do drawing commands",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "block",
          "normalized": "Draw a-\u003eDraw a",
          "package": "easyrender",
          "signature": "Draw a-\u003eDraw a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:block"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.EasyRender.Internal",
          "name": "boxed_curry",
          "package": "easyrender",
          "signature": "(args -\u003e Boxed m res) -\u003e fun",
          "source": "src/Graphics-EasyRender-Internal.html#boxed_curry",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "boxed_curry",
          "normalized": "(a-\u003eBoxed b c)-\u003ed",
          "package": "easyrender",
          "signature": "(args-\u003eBoxed m res)-\u003efun",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:boxed_curry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.EasyRender.Internal",
          "name": "boxed_uncurry",
          "package": "easyrender",
          "signature": "fun -\u003e args -\u003e Boxed m res",
          "source": "src/Graphics-EasyRender-Internal.html#boxed_uncurry",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "boxed_uncurry",
          "normalized": "a-\u003eb-\u003eBoxed c d",
          "package": "easyrender",
          "signature": "fun-\u003eargs-\u003eBoxed m res",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:boxed_uncurry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLook up the width of a character in the given metric.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "char_metric",
          "package": "easyrender",
          "signature": "Fontmetric -\u003e Char -\u003e Double",
          "source": "src/Graphics-EasyRender-Internal.html#char_metric",
          "type": "function"
        },
        "index": {
          "description": "Look up the width of character in the given metric",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "char_metric",
          "normalized": "Fontmetric-\u003eChar-\u003eDouble",
          "package": "easyrender",
          "signature": "Fontmetric-\u003eChar-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:char_metric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClose the current subpath. If necessary, connect the subpath's\n final and initial points by a straight line segment. Note that a\n closed path is rendered differently than a non-closed path whose\n initial and final points coincide, because in the latter case, the\n endpoints are capped rather than mitered.\n\u003c/p\u003e",
          "module": "[\"Graphics.EasyRender.Internal\",\"Graphics.EasyRender\"]",
          "name": "closepath",
          "package": "easyrender",
          "signature": "Draw ()",
          "source": "src/Graphics-EasyRender-Internal.html#closepath",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:closepath\",\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:closepath\"]"
        },
        "index": {
          "description": "Close the current subpath If necessary connect the subpath final and initial points by straight line segment Note that closed path is rendered differently than non-closed path whose initial and final points coincide because in the latter case the endpoints are capped rather than mitered",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "closepath",
          "normalized": "Draw()",
          "package": "easyrender",
          "signature": "Draw()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:closepath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the color.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "color_to_ps",
          "package": "easyrender",
          "signature": "Color -\u003e PSWriter ()",
          "source": "src/Graphics-EasyRender-Internal.html#color_to_ps",
          "type": "function"
        },
        "index": {
          "description": "Set the color",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "color_to_ps",
          "normalized": "Color-\u003ePSWriter()",
          "package": "easyrender",
          "signature": "Color-\u003ePSWriter()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:color_to_ps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender drawing commands as ASCII.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "command_to_ascii",
          "package": "easyrender",
          "signature": "DrawCommand -\u003e Writer ()",
          "source": "src/Graphics-EasyRender-Internal.html#command_to_ascii",
          "type": "function"
        },
        "index": {
          "description": "Render drawing commands as ASCII",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "command_to_ascii",
          "normalized": "DrawCommand-\u003eWriter()",
          "package": "easyrender",
          "signature": "DrawCommand-\u003eWriter()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:command_to_ascii"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender a drawing command to PDF.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "command_to_pdf",
          "package": "easyrender",
          "signature": "DrawCommand -\u003e PDFWriter ()",
          "source": "src/Graphics-EasyRender-Internal.html#command_to_pdf",
          "type": "function"
        },
        "index": {
          "description": "Render drawing command to PDF",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "command_to_pdf",
          "normalized": "DrawCommand-\u003ePDFWriter()",
          "package": "easyrender",
          "signature": "DrawCommand-\u003ePDFWriter()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:command_to_pdf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDraw a single drawing command to PostScript.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "command_to_ps",
          "package": "easyrender",
          "signature": "DrawCommand -\u003e PSWriter ()",
          "source": "src/Graphics-EasyRender-Internal.html#command_to_ps",
          "type": "function"
        },
        "index": {
          "description": "Draw single drawing command to PostScript",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "command_to_ps",
          "normalized": "DrawCommand-\u003ePSWriter()",
          "package": "easyrender",
          "signature": "DrawCommand-\u003ePSWriter()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:command_to_ps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert a human-readable comment in the content stream. This is\n for information only, and is not rendered in the graphical output.\n\u003c/p\u003e",
          "module": "[\"Graphics.EasyRender.Internal\",\"Graphics.EasyRender\"]",
          "name": "comment",
          "package": "easyrender",
          "signature": "String -\u003e Draw ()",
          "source": "src/Graphics-EasyRender-Internal.html#comment",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:comment\",\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:comment\"]"
        },
        "index": {
          "description": "Insert human-readable comment in the content stream This is for information only and is not rendered in the graphical output",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "comment",
          "normalized": "String-\u003eDraw()",
          "package": "easyrender",
          "signature": "String-\u003eDraw()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:comment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName of the software that created the file.\n Example: \"MyApp 1.0\". Note: this is intended\n to hold the name of the software, not the\n human user, that created the document.\n\u003c/p\u003e",
          "module": "[\"Graphics.EasyRender.Internal\",\"Graphics.EasyRender\"]",
          "name": "creator",
          "package": "easyrender",
          "signature": "String",
          "source": "src/Graphics-EasyRender-Internal.html#Custom",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:creator\",\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:creator\"]"
        },
        "index": {
          "description": "Name of the software that created the file Example MyApp Note this is intended to hold the name of the software not the human user that created the document",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "creator",
          "package": "easyrender",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:creator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ecurveto\u003c/a\u003e\u003c/code\u003e \u003cem\u003ex1\u003c/em\u003e \u003cem\u003ey1\u003c/em\u003e \u003cem\u003ex2\u003c/em\u003e \u003cem\u003ey2\u003c/em\u003e \u003cem\u003ex\u003c/em\u003e \u003cem\u003ey\u003c/em\u003e\u003c/code\u003e: Extend the current\n subpath by a Bezier curve segment from the current point to\n (\u003cem\u003ex\u003c/em\u003e,\u003cem\u003ey\u003c/em\u003e), with control points (\u003cem\u003ex1\u003c/em\u003e,\u003cem\u003ey1\u003c/em\u003e) and (\u003cem\u003ex2\u003c/em\u003e,\u003cem\u003ey2\u003c/em\u003e). The\n point (\u003cem\u003ex\u003c/em\u003e,\u003cem\u003ey\u003c/em\u003e) becomes the current point.\n\u003c/p\u003e",
          "module": "[\"Graphics.EasyRender.Internal\",\"Graphics.EasyRender\"]",
          "name": "curveto",
          "package": "easyrender",
          "signature": "X -\u003e Y -\u003e X -\u003e Y -\u003e X -\u003e Y -\u003e Draw ()",
          "source": "src/Graphics-EasyRender-Internal.html#curveto",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:curveto\",\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:curveto\"]"
        },
        "index": {
          "description": "curveto x1 y1 x2 y2 Extend the current subpath by Bezier curve segment from the current point to with control points x1 y1 and x2 y2 The point becomes the current point",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "curveto",
          "normalized": "X-\u003eY-\u003eX-\u003eY-\u003eX-\u003eY-\u003eDraw()",
          "package": "easyrender",
          "signature": "X-\u003eY-\u003eX-\u003eY-\u003eX-\u003eY-\u003eDraw()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:curveto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn empty customization structure. Customizations should be\n specified by modifying \u003ccode\u003e\u003ca\u003ecustom\u003c/a\u003e\u003c/code\u003e, for example:\n\u003c/p\u003e\u003cpre\u003e custom { creator = \"MyApp 1.0\" }\n\u003c/pre\u003e",
          "module": "[\"Graphics.EasyRender.Internal\",\"Graphics.EasyRender\"]",
          "name": "custom",
          "package": "easyrender",
          "signature": "Custom",
          "source": "src/Graphics-EasyRender-Internal.html#custom",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:custom\",\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:custom\"]"
        },
        "index": {
          "description": "An empty customization structure Customizations should be specified by modifying custom for example custom creator MyApp",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "custom",
          "package": "easyrender",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:custom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine a custom ASCII definition.\n\u003c/p\u003e",
          "module": "[\"Graphics.EasyRender.Internal\",\"Graphics.EasyRender\"]",
          "name": "custom_ascii",
          "package": "easyrender",
          "signature": "String -\u003e CustomDef",
          "source": "src/Graphics-EasyRender-Internal.html#custom_ascii",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:custom_ascii\",\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:custom_ascii\"]"
        },
        "index": {
          "description": "Define custom ASCII definition",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "custom_ascii",
          "normalized": "String-\u003eCustomDef",
          "package": "easyrender",
          "signature": "String-\u003eCustomDef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:custom_ascii"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLook up an element in a list of \u003ccode\u003e\u003ca\u003eCustomDef\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "custom_lookup",
          "package": "easyrender",
          "signature": "Language -\u003e [CustomDef] -\u003e Maybe String",
          "source": "src/Graphics-EasyRender-Internal.html#custom_lookup",
          "type": "function"
        },
        "index": {
          "description": "Look up an element in list of CustomDef",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "custom_lookup",
          "normalized": "Language-\u003e[CustomDef]-\u003eMaybe String",
          "package": "easyrender",
          "signature": "Language-\u003e[CustomDef]-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:custom_lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine a custom PDF definition.\n\u003c/p\u003e",
          "module": "[\"Graphics.EasyRender.Internal\",\"Graphics.EasyRender\"]",
          "name": "custom_pdf",
          "package": "easyrender",
          "signature": "String -\u003e CustomDef",
          "source": "src/Graphics-EasyRender-Internal.html#custom_pdf",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:custom_pdf\",\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:custom_pdf\"]"
        },
        "index": {
          "description": "Define custom PDF definition",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "custom_pdf",
          "normalized": "String-\u003eCustomDef",
          "package": "easyrender",
          "signature": "String-\u003eCustomDef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:custom_pdf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine a custom PostScript definition.\n\u003c/p\u003e",
          "module": "[\"Graphics.EasyRender.Internal\",\"Graphics.EasyRender\"]",
          "name": "custom_ps",
          "package": "easyrender",
          "signature": "String -\u003e CustomDef",
          "source": "src/Graphics-EasyRender-Internal.html#custom_ps",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:custom_ps\",\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:custom_ps\"]"
        },
        "index": {
          "description": "Define custom PostScript definition",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "custom_ps",
          "normalized": "String-\u003eCustomDef",
          "package": "easyrender",
          "signature": "String-\u003eCustomDef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:custom_ps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkip document without rendering.        \n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "document_skip",
          "package": "easyrender",
          "signature": "Document a -\u003e a",
          "source": "src/Graphics-EasyRender-Internal.html#document_skip",
          "type": "function"
        },
        "index": {
          "description": "Skip document without rendering",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "document_skip",
          "normalized": "Document a-\u003ea",
          "package": "easyrender",
          "signature": "Document a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:document_skip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender a document as ASCII.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "document_to_ascii",
          "package": "easyrender",
          "signature": "Document a -\u003e Writer a",
          "source": "src/Graphics-EasyRender-Internal.html#document_to_ascii",
          "type": "function"
        },
        "index": {
          "description": "Render document as ASCII",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "document_to_ascii",
          "normalized": "Document a-\u003eWriter a",
          "package": "easyrender",
          "signature": "Document a-\u003eWriter a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:document_to_ascii"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender a document as EPS. Since EPS only permits a single page of\n output, the \u003ccode\u003e\u003ca\u003ePage\u003c/a\u003e\u003c/code\u003e parameter is used to specify which page (of a\n potential multi-page document) should be printed. An error will be\n thrown if the page number was out of range.\n\u003c/p\u003e\u003cp\u003eNote: if the return value is not used, the remaining pages are\n lazily skipped.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "document_to_eps",
          "package": "easyrender",
          "signature": "Custom -\u003e Page -\u003e Document a -\u003e PSWriter a",
          "source": "src/Graphics-EasyRender-Internal.html#document_to_eps",
          "type": "function"
        },
        "index": {
          "description": "Render document as EPS Since EPS only permits single page of output the Page parameter is used to specify which page of potential multi-page document should be printed An error will be thrown if the page number was out of range Note if the return value is not used the remaining pages are lazily skipped",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "document_to_eps",
          "normalized": "Custom-\u003ePage-\u003eDocument a-\u003ePSWriter a",
          "package": "easyrender",
          "signature": "Custom-\u003ePage-\u003eDocument a-\u003ePSWriter a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:document_to_eps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender a document as PDF.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "document_to_pdf",
          "package": "easyrender",
          "signature": "Custom -\u003e Document a -\u003e PDFWriter a",
          "source": "src/Graphics-EasyRender-Internal.html#document_to_pdf",
          "type": "function"
        },
        "index": {
          "description": "Render document as PDF",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "document_to_pdf",
          "normalized": "Custom-\u003eDocument a-\u003ePDFWriter a",
          "package": "easyrender",
          "signature": "Custom-\u003eDocument a-\u003ePDFWriter a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:document_to_pdf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender a document as PostScript.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "document_to_ps",
          "package": "easyrender",
          "signature": "Custom -\u003e Document a -\u003e PSWriter a",
          "source": "src/Graphics-EasyRender-Internal.html#document_to_ps",
          "type": "function"
        },
        "index": {
          "description": "Render document as PostScript",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "document_to_ps",
          "normalized": "Custom-\u003eDocument a-\u003ePSWriter a",
          "package": "easyrender",
          "signature": "Custom-\u003eDocument a-\u003ePSWriter a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:document_to_ps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a block to the \u003ccode\u003e\u003ca\u003eDraw\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "draw_block",
          "package": "easyrender",
          "signature": "Draw a -\u003e Draw a",
          "source": "src/Graphics-EasyRender-Internal.html#draw_block",
          "type": "function"
        },
        "index": {
          "description": "Write block to the Draw monad",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "draw_block",
          "normalized": "Draw a-\u003eDraw a",
          "package": "easyrender",
          "signature": "Draw a-\u003eDraw a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:draw_block"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkip draw actions without rendering.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "draw_skip",
          "package": "easyrender",
          "signature": "Draw a -\u003e a",
          "source": "src/Graphics-EasyRender-Internal.html#draw_skip",
          "type": "function"
        },
        "index": {
          "description": "Skip draw actions without rendering",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "draw_skip",
          "normalized": "Draw a-\u003ea",
          "package": "easyrender",
          "signature": "Draw a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:draw_skip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new subroutine.\n\u003c/p\u003e",
          "module": "[\"Graphics.EasyRender.Internal\",\"Graphics.EasyRender\"]",
          "name": "draw_subroutine",
          "package": "easyrender",
          "signature": "[CustomDef] -\u003e Draw () -\u003e Draw ()",
          "source": "src/Graphics-EasyRender-Internal.html#draw_subroutine",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:draw_subroutine\",\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:draw_subroutine\"]"
        },
        "index": {
          "description": "Create new subroutine",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "draw_subroutine",
          "normalized": "[CustomDef]-\u003eDraw()-\u003eDraw()",
          "package": "easyrender",
          "signature": "[CustomDef]-\u003eDraw()-\u003eDraw()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:draw_subroutine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender draw actions as ASCII.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "draw_to_ascii",
          "package": "easyrender",
          "signature": "Draw a -\u003e Writer a",
          "source": "src/Graphics-EasyRender-Internal.html#draw_to_ascii",
          "type": "function"
        },
        "index": {
          "description": "Render draw actions as ASCII",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "draw_to_ascii",
          "normalized": "Draw a-\u003eWriter a",
          "package": "easyrender",
          "signature": "Draw a-\u003eWriter a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:draw_to_ascii"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender a draw action to PDF.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "draw_to_pdf",
          "package": "easyrender",
          "signature": "Draw a -\u003e PDFWriter a",
          "source": "src/Graphics-EasyRender-Internal.html#draw_to_pdf",
          "type": "function"
        },
        "index": {
          "description": "Render draw action to PDF",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "draw_to_pdf",
          "normalized": "Draw a-\u003ePDFWriter a",
          "package": "easyrender",
          "signature": "Draw a-\u003ePDFWriter a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:draw_to_pdf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender draw actions as PostScript.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "draw_to_ps",
          "package": "easyrender",
          "signature": "Draw a -\u003e PSWriter a",
          "source": "src/Graphics-EasyRender-Internal.html#draw_to_ps",
          "type": "function"
        },
        "index": {
          "description": "Render draw actions as PostScript",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "draw_to_ps",
          "normalized": "Draw a-\u003ePSWriter a",
          "package": "easyrender",
          "signature": "Draw a-\u003ePSWriter a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:draw_to_ps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite the given command to the \u003ccode\u003e\u003ca\u003eDraw\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "draw_write",
          "package": "easyrender",
          "signature": "DrawCommand -\u003e Draw ()",
          "source": "src/Graphics-EasyRender-Internal.html#draw_write",
          "type": "function"
        },
        "index": {
          "description": "Write the given command to the Draw monad",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "draw_write",
          "normalized": "DrawCommand-\u003eDraw()",
          "package": "easyrender",
          "signature": "DrawCommand-\u003eDraw()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:draw_write"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnd the page with the given bounding box.\n\u003c/p\u003e",
          "module": "[\"Graphics.EasyRender.Internal\",\"Graphics.EasyRender\"]",
          "name": "endpage",
          "package": "easyrender",
          "signature": "X -\u003e Y -\u003e Draw (X, Y, ())",
          "source": "src/Graphics-EasyRender-Internal.html#endpage",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:endpage\",\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:endpage\"]"
        },
        "index": {
          "description": "End the page with the given bounding box",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "endpage",
          "normalized": "X-\u003eY-\u003eDraw(X,Y,())",
          "package": "easyrender",
          "signature": "X-\u003eY-\u003eDraw(X,Y,())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:endpage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnsure that the last line of the string ends in a newline\n character, adding one if necessary. An empty string is considered to contain zero lines, so no newline character needs to be added. \n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "ensure_nl",
          "package": "easyrender",
          "signature": "String -\u003e String",
          "source": "src/Graphics-EasyRender-Internal.html#ensure_nl",
          "type": "function"
        },
        "index": {
          "description": "Ensure that the last line of the string ends in newline character adding one if necessary An empty string is considered to contain zero lines so no newline character needs to be added",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "ensure_nl",
          "normalized": "String-\u003eString",
          "package": "easyrender",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:ensure_nl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFill the current path, using the given color. This operation\n implicitly resets the current path to empty. \n\u003c/p\u003e",
          "module": "[\"Graphics.EasyRender.Internal\",\"Graphics.EasyRender\"]",
          "name": "fill",
          "package": "easyrender",
          "signature": "Color -\u003e Draw ()",
          "source": "src/Graphics-EasyRender-Internal.html#fill",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:fill\",\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:fill\"]"
        },
        "index": {
          "description": "Fill the current path using the given color This operation implicitly resets the current path to empty",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "fill",
          "normalized": "Color-\u003eDraw()",
          "package": "easyrender",
          "signature": "Color-\u003eDraw()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:fill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the fill color.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "fillcolor_to_pdf",
          "package": "easyrender",
          "signature": "Color -\u003e PDFWriter ()",
          "source": "src/Graphics-EasyRender-Internal.html#fillcolor_to_pdf",
          "type": "function"
        },
        "index": {
          "description": "Set the fill color",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "fillcolor_to_pdf",
          "normalized": "Color-\u003ePDFWriter()",
          "package": "easyrender",
          "signature": "Color-\u003ePDFWriter()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:fillcolor_to_pdf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFill the current path, using the given color; also stroke the\n path using the current line color. This operation implicitly resets\n the current path to empty.\n\u003c/p\u003e",
          "module": "[\"Graphics.EasyRender.Internal\",\"Graphics.EasyRender\"]",
          "name": "fillstroke",
          "package": "easyrender",
          "signature": "Color -\u003e Draw ()",
          "source": "src/Graphics-EasyRender-Internal.html#fillstroke",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:fillstroke\",\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:fillstroke\"]"
        },
        "index": {
          "description": "Fill the current path using the given color also stroke the path using the current line color This operation implicitly resets the current path to empty",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "fillstroke",
          "normalized": "Color-\u003eDraw()",
          "package": "easyrender",
          "signature": "Color-\u003eDraw()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:fillstroke"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA filter for performing \"flate\" (also known as \"zlib\")\n compression. \n\u003c/p\u003e\u003cp\u003eNote: both the input and output strings are regarded as sequences\n of bytes, not characters. Any characters outside the byte range are\n truncated to 8 bits.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "flate_filter",
          "package": "easyrender",
          "signature": "String -\u003e String",
          "source": "src/Graphics-EasyRender-Internal.html#flate_filter",
          "type": "function"
        },
        "index": {
          "description": "filter for performing flate also known as zlib compression Note both the input and output strings are regarded as sequences of bytes not characters Any characters outside the byte range are truncated to bits",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "flate_filter",
          "normalized": "String-\u003eString",
          "package": "easyrender",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:flate_filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the font.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "font_to_pdf",
          "package": "easyrender",
          "signature": "Font -\u003e PDFWriter ()",
          "source": "src/Graphics-EasyRender-Internal.html#font_to_pdf",
          "type": "function"
        },
        "index": {
          "description": "Set the font",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "font_to_pdf",
          "normalized": "Font-\u003ePDFWriter()",
          "package": "easyrender",
          "signature": "Font-\u003ePDFWriter()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:font_to_pdf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the font.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "font_to_ps",
          "package": "easyrender",
          "signature": "Font -\u003e PSWriter ()",
          "source": "src/Graphics-EasyRender-Internal.html#font_to_ps",
          "type": "function"
        },
        "index": {
          "description": "Set the font",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "font_to_ps",
          "normalized": "Font-\u003ePSWriter()",
          "package": "easyrender",
          "signature": "Font-\u003ePSWriter()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:font_to_ps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGlobal PostScript definitions used by the rendering engine.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "global_ps_defs",
          "package": "easyrender",
          "signature": "String",
          "source": "src/Graphics-EasyRender-Internal.html#global_ps_defs",
          "type": "function"
        },
        "index": {
          "description": "Global PostScript definitions used by the rendering engine",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "global_ps_defs",
          "package": "easyrender",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:global_ps_defs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoes the format require raw binary output?\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "is_binary_format",
          "package": "easyrender",
          "signature": "RenderFormat -\u003e Bool",
          "source": "src/Graphics-EasyRender-Internal.html#is_binary_format",
          "type": "function"
        },
        "index": {
          "description": "Does the format require raw binary output",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "is_binary_format",
          "normalized": "RenderFormat-\u003eBool",
          "package": "easyrender",
          "signature": "RenderFormat-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:is_binary_format"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtend the current subpath by a straight line segment from the\n current point to (\u003cem\u003ex\u003c/em\u003e,\u003cem\u003ey\u003c/em\u003e). The point (\u003cem\u003ex\u003c/em\u003e,\u003cem\u003ey\u003c/em\u003e) becomes the current\n point.\n\u003c/p\u003e",
          "module": "[\"Graphics.EasyRender.Internal\",\"Graphics.EasyRender\"]",
          "name": "lineto",
          "package": "easyrender",
          "signature": "X -\u003e Y -\u003e Draw ()",
          "source": "src/Graphics-EasyRender-Internal.html#lineto",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:lineto\",\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:lineto\"]"
        },
        "index": {
          "description": "Extend the current subpath by straight line segment from the current point to The point becomes the current point",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "lineto",
          "normalized": "X-\u003eY-\u003eDraw()",
          "package": "easyrender",
          "signature": "X-\u003eY-\u003eDraw()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:lineto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine a font metric for each base font.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "metric",
          "package": "easyrender",
          "signature": "Basefont -\u003e Fontmetric",
          "source": "src/Graphics-EasyRender-Internal.html#metric",
          "type": "function"
        },
        "index": {
          "description": "Define font metric for each base font",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "metric",
          "normalized": "Basefont-\u003eFontmetric",
          "package": "easyrender",
          "signature": "Basefont-\u003eFontmetric",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:metric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFont metrics for Helvetica.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "metric_helvetica",
          "package": "easyrender",
          "signature": "Fontmetric",
          "source": "src/Graphics-EasyRender-Internal.html#metric_helvetica",
          "type": "function"
        },
        "index": {
          "description": "Font metrics for Helvetica",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "metric_helvetica",
          "package": "easyrender",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:metric_helvetica"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFont metrics for TimesRoman.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "metric_timesroman",
          "package": "easyrender",
          "signature": "Fontmetric",
          "source": "src/Graphics-EasyRender-Internal.html#metric_timesroman",
          "type": "function"
        },
        "index": {
          "description": "Font metrics for TimesRoman",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "metric_timesroman",
          "package": "easyrender",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:metric_timesroman"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStart a new subpath at (\u003cem\u003ex\u003c/em\u003e,\u003cem\u003ey\u003c/em\u003e). The point (\u003cem\u003ex\u003c/em\u003e,\u003cem\u003ey\u003c/em\u003e) becomes the\n current point.\n\u003c/p\u003e",
          "module": "[\"Graphics.EasyRender.Internal\",\"Graphics.EasyRender\"]",
          "name": "moveto",
          "package": "easyrender",
          "signature": "X -\u003e Y -\u003e Draw ()",
          "source": "src/Graphics-EasyRender-Internal.html#moveto",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:moveto\",\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:moveto\"]"
        },
        "index": {
          "description": "Start new subpath at The point becomes the current point",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "moveto",
          "normalized": "X-\u003eY-\u003eDraw()",
          "package": "easyrender",
          "signature": "X-\u003eY-\u003eDraw()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:moveto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a page of the given bounding box, containing the given\n drawing.\n\u003c/p\u003e",
          "module": "[\"Graphics.EasyRender.Internal\",\"Graphics.EasyRender\"]",
          "name": "newpage",
          "package": "easyrender",
          "signature": "X -\u003e Y -\u003e Draw a -\u003e Document a",
          "source": "src/Graphics-EasyRender-Internal.html#newpage",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:newpage\",\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:newpage\"]"
        },
        "index": {
          "description": "Create page of the given bounding box containing the given drawing",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "newpage",
          "normalized": "X-\u003eY-\u003eDraw a-\u003eDocument a",
          "package": "easyrender",
          "signature": "X-\u003eY-\u003eDraw a-\u003eDocument a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:newpage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a page containing the given drawing, with the bounding box\n computed at the end of the drawing routines.\n\u003c/p\u003e",
          "module": "[\"Graphics.EasyRender.Internal\",\"Graphics.EasyRender\"]",
          "name": "newpage_defer",
          "package": "easyrender",
          "signature": "Draw (X, Y, a) -\u003e Document a",
          "source": "src/Graphics-EasyRender-Internal.html#newpage_defer",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:newpage_defer\",\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:newpage_defer\"]"
        },
        "index": {
          "description": "Create page containing the given drawing with the bounding box computed at the end of the drawing routines",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "newpage_defer",
          "normalized": "Draw(X,Y,a)-\u003eDocument a",
          "package": "easyrender",
          "signature": "Draw(X,Y,a)-\u003eDocument a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:newpage_defer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the current path to empty.\n\u003c/p\u003e",
          "module": "[\"Graphics.EasyRender.Internal\",\"Graphics.EasyRender\"]",
          "name": "newpath",
          "package": "easyrender",
          "signature": "Draw ()",
          "source": "src/Graphics-EasyRender-Internal.html#newpath",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:newpath\",\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:newpath\"]"
        },
        "index": {
          "description": "Set the current path to empty",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "newpath",
          "normalized": "Draw()",
          "package": "easyrender",
          "signature": "Draw()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:newpath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the nominal point size of a font.\n\u003c/p\u003e",
          "module": "[\"Graphics.EasyRender.Internal\",\"Graphics.EasyRender\"]",
          "name": "nominalsize",
          "package": "easyrender",
          "signature": "Font -\u003e Double",
          "source": "src/Graphics-EasyRender-Internal.html#nominalsize",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:nominalsize\",\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:nominalsize\"]"
        },
        "index": {
          "description": "Return the nominal point size of font",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "nominalsize",
          "normalized": "Font-\u003eDouble",
          "package": "easyrender",
          "signature": "Font-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:nominalsize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a direct object from a reference to an indirect object.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "objref",
          "package": "easyrender",
          "signature": "Object -\u003e String",
          "source": "src/Graphics-EasyRender-Internal.html#objref",
          "type": "function"
        },
        "index": {
          "description": "Create direct object from reference to an indirect object",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "objref",
          "normalized": "Object-\u003eString",
          "package": "easyrender",
          "signature": "Object-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:objref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend a new closed subpath consisting of an oval centered at\n (\u003cem\u003ex\u003c/em\u003e,\u003cem\u003ey\u003c/em\u003e), with horizontal and vertical radii \u003cem\u003erx\u003c/em\u003e and \u003cem\u003ery\u003c/em\u003e,\n respectively.\n\u003c/p\u003e",
          "module": "[\"Graphics.EasyRender.Internal\",\"Graphics.EasyRender\"]",
          "name": "oval",
          "package": "easyrender",
          "signature": "X -\u003e Y -\u003e X -\u003e Y -\u003e Draw ()",
          "source": "src/Graphics-EasyRender-Internal.html#oval",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:oval\",\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:oval\"]"
        },
        "index": {
          "description": "Append new closed subpath consisting of an oval centered at with horizontal and vertical radii rx and ry respectively",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "oval",
          "normalized": "X-\u003eY-\u003eX-\u003eY-\u003eDraw()",
          "package": "easyrender",
          "signature": "X-\u003eY-\u003eX-\u003eY-\u003eDraw()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:oval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender pages as PDF. The first argument is a reference to the\n document's page tree node. \n\u003c/p\u003e\u003cp\u003eNote: Acrobat reader cannot handle pages whose bounding box width\n or height exceed 200 inches (14400 points). Therefore, we\n automatically scale pages to be no greater than 199 inches.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "pages_to_pdf",
          "package": "easyrender",
          "signature": "Object -\u003e Document a -\u003e PDFWriter a",
          "source": "src/Graphics-EasyRender-Internal.html#pages_to_pdf",
          "type": "function"
        },
        "index": {
          "description": "Render pages as PDF The first argument is reference to the document page tree node Note Acrobat reader cannot handle pages whose bounding box width or height exceed inches points Therefore we automatically scale pages to be no greater than inches",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "pages_to_pdf",
          "normalized": "Object-\u003eDocument a-\u003ePDFWriter a",
          "package": "easyrender",
          "signature": "Object-\u003eDocument a-\u003ePDFWriter a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:pages_to_pdf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender pages as PostScript.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "pages_to_ps",
          "package": "easyrender",
          "signature": "Document a -\u003e PSWriter a",
          "source": "src/Graphics-EasyRender-Internal.html#pages_to_ps",
          "type": "function"
        },
        "index": {
          "description": "Render pages as PostScript",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "pages_to_ps",
          "normalized": "Document a-\u003ePSWriter a",
          "package": "easyrender",
          "signature": "Document a-\u003ePSWriter a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:pages_to_ps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe inverse of \u003ccode\u003e\u003ca\u003ewriter_to_pair\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "pair_to_writer",
          "package": "easyrender",
          "signature": "(String, a) -\u003e Writer a",
          "source": "src/Graphics-EasyRender-Internal.html#pair_to_writer",
          "type": "function"
        },
        "index": {
          "description": "The inverse of writer to pair",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "pair_to_writer",
          "normalized": "(String,a)-\u003eWriter a",
          "package": "easyrender",
          "signature": "(String,a)-\u003eWriter a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:pair_to_writer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a page to the page table.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "pdf_add_pagetable",
          "package": "easyrender",
          "signature": "Page -\u003e Object -\u003e PDFWriter ()",
          "source": "src/Graphics-EasyRender-Internal.html#pdf_add_pagetable",
          "type": "function"
        },
        "index": {
          "description": "Add page to the page table",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "pdf_add_pagetable",
          "normalized": "Page-\u003eObject-\u003ePDFWriter()",
          "package": "easyrender",
          "signature": "Page-\u003eObject-\u003ePDFWriter()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:pdf_add_pagetable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a cross reference to the cross reference table.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "pdf_add_xref",
          "package": "easyrender",
          "signature": "Object -\u003e Filepos -\u003e PDFWriter ()",
          "source": "src/Graphics-EasyRender-Internal.html#pdf_add_xref",
          "type": "function"
        },
        "index": {
          "description": "Add cross reference to the cross reference table",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "pdf_add_xref",
          "normalized": "Object-\u003eFilepos-\u003ePDFWriter()",
          "package": "easyrender",
          "signature": "Object-\u003eFilepos-\u003ePDFWriter()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:pdf_add_xref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClear the font table.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "pdf_clear_fonttable",
          "package": "easyrender",
          "signature": "PDFWriter ()",
          "source": "src/Graphics-EasyRender-Internal.html#pdf_clear_fonttable",
          "type": "function"
        },
        "index": {
          "description": "Clear the font table",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "pdf_clear_fonttable",
          "normalized": "PDFWriter()",
          "package": "easyrender",
          "signature": "PDFWriter()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:pdf_clear_fonttable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine a compressed PDF stream object with the given object id,\n which must have previously been uniquely obtained with\n \u003ccode\u003e\u003ca\u003epdf_next_object\u003c/a\u003e\u003c/code\u003e. It should be used like this:\n\u003c/p\u003e\u003cpre\u003e obj \u003c- pdf_next_object\n ...\n pdf_deferred_flate_stream obj $ do\n   \u003c\u003cstream contents\u003e\u003e\n\u003c/pre\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "pdf_deferred_flate_stream",
          "package": "easyrender",
          "signature": "Object -\u003e PDFWriter a -\u003e PDFWriter a",
          "source": "src/Graphics-EasyRender-Internal.html#pdf_deferred_flate_stream",
          "type": "function"
        },
        "index": {
          "description": "Define compressed PDF stream object with the given object id which must have previously been uniquely obtained with pdf next object It should be used like this obj pdf next object pdf deferred flate stream obj do stream contents",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "pdf_deferred_flate_stream",
          "normalized": "Object-\u003ePDFWriter a-\u003ePDFWriter a",
          "package": "easyrender",
          "signature": "Object-\u003ePDFWriter a-\u003ePDFWriter a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:pdf_deferred_flate_stream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine an indirect PDF object with the given object id, which\n must have previously been uniquely obtained with \u003ccode\u003e\u003ca\u003epdf_next_object\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis can be used to define objects with forward references: first\n obtain an object id, then create references to the object, and\n finally define the object.\n\u003c/p\u003e\u003cp\u003eIt should be used like this:\n\u003c/p\u003e\u003cpre\u003e obj \u003c- pdf_next_object\n ...\n pdf_deferred_object obj $ do\n   \u003c\u003cobject definition\u003e\u003e\n\u003c/pre\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "pdf_deferred_object",
          "package": "easyrender",
          "signature": "Object -\u003e PDFWriter a -\u003e PDFWriter a",
          "source": "src/Graphics-EasyRender-Internal.html#pdf_deferred_object",
          "type": "function"
        },
        "index": {
          "description": "Define an indirect PDF object with the given object id which must have previously been uniquely obtained with pdf next object This can be used to define objects with forward references first obtain an object id then create references to the object and finally define the object It should be used like this obj pdf next object pdf deferred object obj do object definition",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "pdf_deferred_object",
          "normalized": "Object-\u003ePDFWriter a-\u003ePDFWriter a",
          "package": "easyrender",
          "signature": "Object-\u003ePDFWriter a-\u003ePDFWriter a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:pdf_deferred_object"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine a PDF stream object with the given object id, which must\n have previously been uniquely obtained with \u003ccode\u003e\u003ca\u003epdf_next_object\u003c/a\u003e\u003c/code\u003e. It\n should be used like this:\n\u003c/p\u003e\u003cpre\u003e obj \u003c- pdf_next_object\n ...\n pdf_deferred_stream obj $ do\n   \u003c\u003cstream contents\u003e\u003e\n\u003c/pre\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "pdf_deferred_stream",
          "package": "easyrender",
          "signature": "Object -\u003e PDFWriter a -\u003e PDFWriter a",
          "source": "src/Graphics-EasyRender-Internal.html#pdf_deferred_stream",
          "type": "function"
        },
        "index": {
          "description": "Define PDF stream object with the given object id which must have previously been uniquely obtained with pdf next object It should be used like this obj pdf next object pdf deferred stream obj do stream contents",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "pdf_deferred_stream",
          "normalized": "Object-\u003ePDFWriter a-\u003ePDFWriter a",
          "package": "easyrender",
          "signature": "Object-\u003ePDFWriter a-\u003ePDFWriter a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:pdf_deferred_stream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine an indirect PDF object with a newly generated object id.\n Return the object id. This essentially combines \u003ccode\u003e\u003ca\u003epdf_next_object\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003e\u003ca\u003epdf_deferred_object\u003c/a\u003e\u003c/code\u003e into a single function, and should be\n used like this:\n\u003c/p\u003e\u003cpre\u003e obj \u003c- pdf_define_object $ do\n   \u003c\u003cobject definition\u003e\u003e\n\u003c/pre\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "pdf_define_object",
          "package": "easyrender",
          "signature": "PDFWriter a -\u003e PDFWriter Object",
          "source": "src/Graphics-EasyRender-Internal.html#pdf_define_object",
          "type": "function"
        },
        "index": {
          "description": "Define an indirect PDF object with newly generated object id Return the object id This essentially combines pdf next object and pdf deferred object into single function and should be used like this obj pdf define object do object definition",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "pdf_define_object",
          "normalized": "PDFWriter a-\u003ePDFWriter Object",
          "package": "easyrender",
          "signature": "PDFWriter a-\u003ePDFWriter Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:pdf_define_object"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine a PDF stream object with a newly generated object\n id. Return the object id. This should be used like this:\n\u003c/p\u003e\u003cpre\u003e obj \u003c- pdf_define_stream $ do\n   \u003c\u003cstream contents\u003e\u003e\n\u003c/pre\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "pdf_define_stream",
          "package": "easyrender",
          "signature": "PDFWriter a -\u003e PDFWriter Object",
          "source": "src/Graphics-EasyRender-Internal.html#pdf_define_stream",
          "type": "function"
        },
        "index": {
          "description": "Define PDF stream object with newly generated object id Return the object id This should be used like this obj pdf define stream do stream contents",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "pdf_define_stream",
          "normalized": "PDFWriter a-\u003ePDFWriter Object",
          "package": "easyrender",
          "signature": "PDFWriter a-\u003ePDFWriter Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:pdf_define_stream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEscape special characters in a string literal.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "pdf_escape",
          "package": "easyrender",
          "signature": "String -\u003e String",
          "source": "src/Graphics-EasyRender-Internal.html#pdf_escape",
          "type": "function"
        },
        "index": {
          "description": "Escape special characters in string literal",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "pdf_escape",
          "normalized": "String-\u003eString",
          "package": "easyrender",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:pdf_escape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCurrent position in file.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "pdf_filepos",
          "package": "easyrender",
          "signature": "Filepos",
          "source": "src/Graphics-EasyRender-Internal.html#PDF_State",
          "type": "function"
        },
        "index": {
          "description": "Current position in file",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "pdf_filepos",
          "package": "easyrender",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:pdf_filepos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLook up the local font identifier for a font.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "pdf_find_font",
          "package": "easyrender",
          "signature": "String -\u003e PDFWriter String",
          "source": "src/Graphics-EasyRender-Internal.html#pdf_find_font",
          "type": "function"
        },
        "index": {
          "description": "Look up the local font identifier for font",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "pdf_find_font",
          "normalized": "String-\u003ePDFWriter String",
          "package": "easyrender",
          "signature": "String-\u003ePDFWriter String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:pdf_find_font"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNext available font number.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "pdf_font",
          "package": "easyrender",
          "signature": "Integer",
          "source": "src/Graphics-EasyRender-Internal.html#PDF_State",
          "type": "function"
        },
        "index": {
          "description": "Next available font number",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "pdf_font",
          "package": "easyrender",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:pdf_font"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFont table mapping each font's PostScript name to a local name.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "pdf_fonttable",
          "package": "easyrender",
          "signature": "(Map String String)",
          "source": "src/Graphics-EasyRender-Internal.html#PDF_State",
          "type": "function"
        },
        "index": {
          "description": "Font table mapping each font PostScript name to local name",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "pdf_fonttable",
          "package": "easyrender",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:pdf_fonttable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the file position.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "pdf_get_filepos",
          "package": "easyrender",
          "signature": "PDFWriter Filepos",
          "source": "src/Graphics-EasyRender-Internal.html#pdf_get_filepos",
          "type": "function"
        },
        "index": {
          "description": "Get the file position",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "pdf_get_filepos",
          "package": "easyrender",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:pdf_get_filepos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the font table.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "pdf_get_fonttable",
          "package": "easyrender",
          "signature": "PDFWriter (Map String String)",
          "source": "src/Graphics-EasyRender-Internal.html#pdf_get_fonttable",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the font table",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "pdf_get_fonttable",
          "package": "easyrender",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:pdf_get_fonttable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the number of allocated objects. Note that objects are\n allocated as 1, 2, ..., \u003cem\u003en\u003c/em\u003e; this function returns \u003cem\u003en\u003c/em\u003e.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "pdf_get_objcount",
          "package": "easyrender",
          "signature": "PDFWriter Object",
          "source": "src/Graphics-EasyRender-Internal.html#pdf_get_objcount",
          "type": "function"
        },
        "index": {
          "description": "Get the number of allocated objects Note that objects are allocated as this function returns",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "pdf_get_objcount",
          "package": "easyrender",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:pdf_get_objcount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the page count.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "pdf_get_pagecount",
          "package": "easyrender",
          "signature": "PDFWriter Page",
          "source": "src/Graphics-EasyRender-Internal.html#pdf_get_pagecount",
          "type": "function"
        },
        "index": {
          "description": "Get the page count",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "pdf_get_pagecount",
          "package": "easyrender",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:pdf_get_pagecount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the page table.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "pdf_get_pagetable",
          "package": "easyrender",
          "signature": "PDFWriter (Map Page Object)",
          "source": "src/Graphics-EasyRender-Internal.html#pdf_get_pagetable",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the page table",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "pdf_get_pagetable",
          "package": "easyrender",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:pdf_get_pagetable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the cross reference table.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "pdf_get_xref",
          "package": "easyrender",
          "signature": "PDFWriter (Map Object Filepos)",
          "source": "src/Graphics-EasyRender-Internal.html#pdf_get_xref",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the cross reference table",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "pdf_get_xref",
          "package": "easyrender",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:pdf_get_xref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd to the file position.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "pdf_inc_filepos",
          "package": "easyrender",
          "signature": "Integer -\u003e RawPDFWriter ()",
          "source": "src/Graphics-EasyRender-Internal.html#pdf_inc_filepos",
          "type": "function"
        },
        "index": {
          "description": "Add to the file position",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "pdf_inc_filepos",
          "normalized": "Integer-\u003eRawPDFWriter()",
          "package": "easyrender",
          "signature": "Integer-\u003eRawPDFWriter()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:pdf_inc_filepos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllocate an unused object identifier.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "pdf_next_object",
          "package": "easyrender",
          "signature": "PDFWriter Object",
          "source": "src/Graphics-EasyRender-Internal.html#pdf_next_object",
          "type": "function"
        },
        "index": {
          "description": "Allocate an unused object identifier",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "pdf_next_object",
          "package": "easyrender",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:pdf_next_object"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the next page number.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "pdf_next_page",
          "package": "easyrender",
          "signature": "PDFWriter Page",
          "source": "src/Graphics-EasyRender-Internal.html#pdf_next_page",
          "type": "function"
        },
        "index": {
          "description": "Return the next page number",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "pdf_next_page",
          "package": "easyrender",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:pdf_next_page"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObject count.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "pdf_obj",
          "package": "easyrender",
          "signature": "Object",
          "source": "src/Graphics-EasyRender-Internal.html#PDF_State",
          "type": "function"
        },
        "index": {
          "description": "Object count",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "pdf_obj",
          "package": "easyrender",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:pdf_obj"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNext available page number.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "pdf_page",
          "package": "easyrender",
          "signature": "Page",
          "source": "src/Graphics-EasyRender-Internal.html#PDF_State",
          "type": "function"
        },
        "index": {
          "description": "Next available page number",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "pdf_page",
          "package": "easyrender",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:pdf_page"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePage table.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "pdf_pagetable",
          "package": "easyrender",
          "signature": "(Map Page Object)",
          "source": "src/Graphics-EasyRender-Internal.html#PDF_State",
          "type": "function"
        },
        "index": {
          "description": "Page table",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "pdf_pagetable",
          "package": "easyrender",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:pdf_pagetable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe initial \u003ccode\u003e\u003ca\u003ePDF_State\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "pdf_state_empty",
          "package": "easyrender",
          "signature": "PDF_State",
          "source": "src/Graphics-EasyRender-Internal.html#pdf_state_empty",
          "type": "function"
        },
        "index": {
          "description": "The initial PDF State",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "pdf_state_empty",
          "package": "easyrender",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:pdf_state_empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCross-reference table.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "pdf_xref",
          "package": "easyrender",
          "signature": "(Map Object Filepos)",
          "source": "src/Graphics-EasyRender-Internal.html#PDF_State",
          "type": "function"
        },
        "index": {
          "description": "Cross-reference table",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "pdf_xref",
          "package": "easyrender",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:pdf_xref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun function for the \u003ccode\u003e\u003ca\u003ePDFWriter\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "pdfwriter_run",
          "package": "easyrender",
          "signature": "PDFWriter a -\u003e Writer a",
          "source": "src/Graphics-EasyRender-Internal.html#pdfwriter_run",
          "type": "function"
        },
        "index": {
          "description": "Run function for the PDFWriter monad",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "pdfwriter_run",
          "normalized": "PDFWriter a-\u003eWriter a",
          "package": "easyrender",
          "signature": "PDFWriter a-\u003eWriter a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:pdfwriter_run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd to the bounding box.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "ps_add_bbox",
          "package": "easyrender",
          "signature": "X -\u003e Y -\u003e PSWriter ()",
          "source": "src/Graphics-EasyRender-Internal.html#ps_add_bbox",
          "type": "function"
        },
        "index": {
          "description": "Add to the bounding box",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "ps_add_bbox",
          "normalized": "X-\u003eY-\u003ePSWriter()",
          "package": "easyrender",
          "signature": "X-\u003eY-\u003ePSWriter()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:ps_add_bbox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefinitions to go in the PostScript\n preamble.\n\u003c/p\u003e",
          "module": "[\"Graphics.EasyRender.Internal\",\"Graphics.EasyRender\"]",
          "name": "ps_defs",
          "package": "easyrender",
          "signature": "String",
          "source": "src/Graphics-EasyRender-Internal.html#Custom",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:ps_defs\",\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:ps_defs\"]"
        },
        "index": {
          "description": "Definitions to go in the PostScript preamble",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "ps_defs",
          "package": "easyrender",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:ps_defs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEscape special characters in a string literal.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "ps_escape",
          "package": "easyrender",
          "signature": "String -\u003e String",
          "source": "src/Graphics-EasyRender-Internal.html#ps_escape",
          "type": "function"
        },
        "index": {
          "description": "Escape special characters in string literal",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "ps_escape",
          "normalized": "String-\u003eString",
          "package": "easyrender",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:ps_escape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the bounding box.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "ps_get_bbox",
          "package": "easyrender",
          "signature": "PSWriter (X, Y)",
          "source": "src/Graphics-EasyRender-Internal.html#ps_get_bbox",
          "type": "function"
        },
        "index": {
          "description": "Get the bounding box",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "ps_get_bbox",
          "normalized": "PSWriter(X,Y)",
          "package": "easyrender",
          "signature": "PSWriter(X,Y)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:ps_get_bbox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the page count.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "ps_get_pagecount",
          "package": "easyrender",
          "signature": "PSWriter Page",
          "source": "src/Graphics-EasyRender-Internal.html#ps_get_pagecount",
          "type": "function"
        },
        "index": {
          "description": "Get the page count",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "ps_get_pagecount",
          "package": "easyrender",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:ps_get_pagecount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the next page number.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "ps_next_page",
          "package": "easyrender",
          "signature": "PSWriter Page",
          "source": "src/Graphics-EasyRender-Internal.html#ps_next_page",
          "type": "function"
        },
        "index": {
          "description": "Return the next page number",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "ps_next_page",
          "package": "easyrender",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:ps_next_page"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe initial \u003ccode\u003e\u003ca\u003ePS_State\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "ps_state_empty",
          "package": "easyrender",
          "signature": "PS_State",
          "source": "src/Graphics-EasyRender-Internal.html#ps_state_empty",
          "type": "function"
        },
        "index": {
          "description": "The initial PS State",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "ps_state_empty",
          "package": "easyrender",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:ps_state_empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun function for the \u003ccode\u003e\u003ca\u003ePSWriter\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "pswriter_run",
          "package": "easyrender",
          "signature": "PSWriter a -\u003e Writer a",
          "source": "src/Graphics-EasyRender-Internal.html#pswriter_run",
          "type": "function"
        },
        "index": {
          "description": "Run function for the PSWriter monad",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "pswriter_run",
          "normalized": "PSWriter a-\u003eWriter a",
          "package": "easyrender",
          "signature": "PSWriter a-\u003eWriter a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:pswriter_run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003erectangle\u003c/a\u003e\u003c/code\u003e \u003cem\u003ex\u003c/em\u003e \u003cem\u003ey\u003c/em\u003e \u003cem\u003ew\u003c/em\u003e \u003cem\u003eh\u003c/em\u003e\u003c/code\u003e: Draw a rectangle of width \u003cem\u003ew\u003c/em\u003e and\n height \u003cem\u003eh\u003c/em\u003e, starting from (\u003cem\u003ex\u003c/em\u003e,\u003cem\u003ey\u003c/em\u003e). If \u003cem\u003ew\u003c/em\u003e and \u003cem\u003eh\u003c/em\u003e are positive,\n then (\u003cem\u003ex\u003c/em\u003e,\u003cem\u003ey\u003c/em\u003e) is the lower left corner.\n\u003c/p\u003e",
          "module": "[\"Graphics.EasyRender.Internal\",\"Graphics.EasyRender\"]",
          "name": "rectangle",
          "package": "easyrender",
          "signature": "X -\u003e Y -\u003e X -\u003e Y -\u003e Draw ()",
          "source": "src/Graphics-EasyRender-Internal.html#rectangle",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:rectangle\",\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:rectangle\"]"
        },
        "index": {
          "description": "rectangle Draw rectangle of width and height starting from If and are positive then is the lower left corner",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "rectangle",
          "normalized": "X-\u003eY-\u003eX-\u003eY-\u003eDraw()",
          "package": "easyrender",
          "signature": "X-\u003eY-\u003eX-\u003eY-\u003eDraw()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:rectangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove newline characters in a string.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "remove_nl",
          "package": "easyrender",
          "signature": "String -\u003e String",
          "source": "src/Graphics-EasyRender-Internal.html#remove_nl",
          "type": "function"
        },
        "index": {
          "description": "Remove newline characters in string",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "remove_nl",
          "normalized": "String-\u003eString",
          "package": "easyrender",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:remove_nl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender a document to the \u003ccode\u003e\u003ca\u003eWriter\u003c/a\u003e\u003c/code\u003e monad, using the given output format.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "render",
          "package": "easyrender",
          "signature": "RenderFormat -\u003e Document a -\u003e Writer a",
          "source": "src/Graphics-EasyRender-Internal.html#render",
          "type": "function"
        },
        "index": {
          "description": "Render document to the Writer monad using the given output format",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "render",
          "normalized": "RenderFormat-\u003eDocument a-\u003eWriter a",
          "package": "easyrender",
          "signature": "RenderFormat-\u003eDocument a-\u003eWriter a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:render"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender a document as ASCII. This is for debugging purposes only.\n The output is a sequence of drawing commands, rather than a\n graphical representation.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "render_ascii",
          "package": "easyrender",
          "signature": "Document a -\u003e Writer a",
          "source": "src/Graphics-EasyRender-Internal.html#render_ascii",
          "type": "function"
        },
        "index": {
          "description": "Render document as ASCII This is for debugging purposes only The output is sequence of drawing commands rather than graphical representation",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "render_ascii",
          "normalized": "Document a-\u003eWriter a",
          "package": "easyrender",
          "signature": "Document a-\u003eWriter a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:render_ascii"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender a document to the \u003ccode\u003e\u003ca\u003eWriter\u003c/a\u003e\u003c/code\u003e monad, using the given output\n format and customization data structure.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "render_custom",
          "package": "easyrender",
          "signature": "RenderFormat -\u003e Custom -\u003e Document a -\u003e Writer a",
          "source": "src/Graphics-EasyRender-Internal.html#render_custom",
          "type": "function"
        },
        "index": {
          "description": "Render document to the Writer monad using the given output format and customization data structure",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "render_custom",
          "normalized": "RenderFormat-\u003eCustom-\u003eDocument a-\u003eWriter a",
          "package": "easyrender",
          "signature": "RenderFormat-\u003eCustom-\u003eDocument a-\u003eWriter a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:render_custom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender a document to a file, using the given output format and\n customization data structure.\n\u003c/p\u003e",
          "module": "[\"Graphics.EasyRender.Internal\",\"Graphics.EasyRender\"]",
          "name": "render_custom_file",
          "package": "easyrender",
          "signature": "Handle -\u003e RenderFormat -\u003e Custom -\u003e Document a -\u003e IO a",
          "source": "src/Graphics-EasyRender-Internal.html#render_custom_file",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:render_custom_file\",\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:render_custom_file\"]"
        },
        "index": {
          "description": "Render document to file using the given output format and customization data structure",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "render_custom_file",
          "normalized": "Handle-\u003eRenderFormat-\u003eCustom-\u003eDocument a-\u003eIO a",
          "package": "easyrender",
          "signature": "Handle-\u003eRenderFormat-\u003eCustom-\u003eDocument a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:render_custom_file"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender a document to standard output, using the given output\n format and customization data structure.\n\u003c/p\u003e",
          "module": "[\"Graphics.EasyRender.Internal\",\"Graphics.EasyRender\"]",
          "name": "render_custom_stdout",
          "package": "easyrender",
          "signature": "RenderFormat -\u003e Custom -\u003e Document a -\u003e IO a",
          "source": "src/Graphics-EasyRender-Internal.html#render_custom_stdout",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:render_custom_stdout\",\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:render_custom_stdout\"]"
        },
        "index": {
          "description": "Render document to standard output using the given output format and customization data structure",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "render_custom_stdout",
          "normalized": "RenderFormat-\u003eCustom-\u003eDocument a-\u003eIO a",
          "package": "easyrender",
          "signature": "RenderFormat-\u003eCustom-\u003eDocument a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:render_custom_stdout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender a document to a string, using the given output format and\n customization data structure.\n\u003c/p\u003e",
          "module": "[\"Graphics.EasyRender.Internal\",\"Graphics.EasyRender\"]",
          "name": "render_custom_string",
          "package": "easyrender",
          "signature": "RenderFormat -\u003e Custom -\u003e Document a -\u003e String",
          "source": "src/Graphics-EasyRender-Internal.html#render_custom_string",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:render_custom_string\",\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:render_custom_string\"]"
        },
        "index": {
          "description": "Render document to string using the given output format and customization data structure",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "render_custom_string",
          "normalized": "RenderFormat-\u003eCustom-\u003eDocument a-\u003eString",
          "package": "easyrender",
          "signature": "RenderFormat-\u003eCustom-\u003eDocument a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:render_custom_string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender document as EPS. The first argument is a customization\n data structure, and the second argument is the number of the page\n to extract from the document.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "render_eps_custom",
          "package": "easyrender",
          "signature": "Custom -\u003e Page -\u003e Document a -\u003e Writer a",
          "source": "src/Graphics-EasyRender-Internal.html#render_eps_custom",
          "type": "function"
        },
        "index": {
          "description": "Render document as EPS The first argument is customization data structure and the second argument is the number of the page to extract from the document",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "render_eps_custom",
          "normalized": "Custom-\u003ePage-\u003eDocument a-\u003eWriter a",
          "package": "easyrender",
          "signature": "Custom-\u003ePage-\u003eDocument a-\u003eWriter a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:render_eps_custom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender a document to a file, using the given output format.\n\u003c/p\u003e",
          "module": "[\"Graphics.EasyRender.Internal\",\"Graphics.EasyRender\"]",
          "name": "render_file",
          "package": "easyrender",
          "signature": "Handle -\u003e RenderFormat -\u003e Document a -\u003e IO a",
          "source": "src/Graphics-EasyRender-Internal.html#render_file",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:render_file\",\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:render_file\"]"
        },
        "index": {
          "description": "Render document to file using the given output format",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "render_file",
          "normalized": "Handle-\u003eRenderFormat-\u003eDocument a-\u003eIO a",
          "package": "easyrender",
          "signature": "Handle-\u003eRenderFormat-\u003eDocument a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:render_file"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender document as PDF. The first argument is a\n customization data structure.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "render_pdf_custom",
          "package": "easyrender",
          "signature": "Custom -\u003e Document a -\u003e Writer a",
          "source": "src/Graphics-EasyRender-Internal.html#render_pdf_custom",
          "type": "function"
        },
        "index": {
          "description": "Render document as PDF The first argument is customization data structure",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "render_pdf_custom",
          "normalized": "Custom-\u003eDocument a-\u003eWriter a",
          "package": "easyrender",
          "signature": "Custom-\u003eDocument a-\u003eWriter a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:render_pdf_custom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender document as PostScript. The first argument is a\n customization data structure.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "render_ps_custom",
          "package": "easyrender",
          "signature": "Custom -\u003e Document a -\u003e Writer a",
          "source": "src/Graphics-EasyRender-Internal.html#render_ps_custom",
          "type": "function"
        },
        "index": {
          "description": "Render document as PostScript The first argument is customization data structure",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "render_ps_custom",
          "normalized": "Custom-\u003eDocument a-\u003eWriter a",
          "package": "easyrender",
          "signature": "Custom-\u003eDocument a-\u003eWriter a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:render_ps_custom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender a document to standard output, using the given output format.\n\u003c/p\u003e",
          "module": "[\"Graphics.EasyRender.Internal\",\"Graphics.EasyRender\"]",
          "name": "render_stdout",
          "package": "easyrender",
          "signature": "RenderFormat -\u003e Document a -\u003e IO a",
          "source": "src/Graphics-EasyRender-Internal.html#render_stdout",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:render_stdout\",\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:render_stdout\"]"
        },
        "index": {
          "description": "Render document to standard output using the given output format",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "render_stdout",
          "normalized": "RenderFormat-\u003eDocument a-\u003eIO a",
          "package": "easyrender",
          "signature": "RenderFormat-\u003eDocument a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:render_stdout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender a document to a string, using the given output format.\n\u003c/p\u003e",
          "module": "[\"Graphics.EasyRender.Internal\",\"Graphics.EasyRender\"]",
          "name": "render_string",
          "package": "easyrender",
          "signature": "RenderFormat -\u003e Document a -\u003e String",
          "source": "src/Graphics-EasyRender-Internal.html#render_string",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:render_string\",\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:render_string\"]"
        },
        "index": {
          "description": "Render document to string using the given output format",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "render_string",
          "normalized": "RenderFormat-\u003eDocument a-\u003eString",
          "package": "easyrender",
          "signature": "RenderFormat-\u003eDocument a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:render_string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRotate the current coordinate system by \u003cem\u003eangle\u003c/em\u003e, measured\n counterclockwise in degrees.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "rotate",
          "package": "easyrender",
          "signature": "Double -\u003e Draw ()",
          "source": "src/Graphics-EasyRender-Internal.html#rotate",
          "type": "function"
        },
        "index": {
          "description": "Rotate the current coordinate system by angle measured counterclockwise in degrees",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "rotate",
          "normalized": "Double-\u003eDraw()",
          "package": "easyrender",
          "signature": "Double-\u003eDraw()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:rotate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003eWriter\u003c/a\u003e\u003c/code\u003e computation in any \u003ccode\u003e\u003ca\u003eWriterMonad\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "run_writer",
          "package": "easyrender",
          "signature": "Writer a -\u003e m a",
          "source": "src/Graphics-EasyRender-Internal.html#run_writer",
          "type": "function"
        },
        "index": {
          "description": "Run Writer computation in any WriterMonad",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "run_writer",
          "normalized": "Writer a-\u003eb a",
          "package": "easyrender",
          "signature": "Writer a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:run_writer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eScale the current coordinate system by (\u003cem\u003es\u003c/em\u003e,\u003cem\u003et\u003c/em\u003e). Here, \u003cem\u003es\u003c/em\u003e is\n the scaling factor in the \u003cem\u003ex\u003c/em\u003e-direction, and \u003cem\u003et\u003c/em\u003e is the scaling\n factor in the \u003cem\u003ey\u003c/em\u003e-direction.\n\u003c/p\u003e",
          "module": "[\"Graphics.EasyRender.Internal\",\"Graphics.EasyRender\"]",
          "name": "scale",
          "package": "easyrender",
          "signature": "X -\u003e Y -\u003e Draw ()",
          "source": "src/Graphics-EasyRender-Internal.html#scale",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:scale\",\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:scale\"]"
        },
        "index": {
          "description": "Scale the current coordinate system by Here is the scaling factor in the direction and is the scaling factor in the direction",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "scale",
          "normalized": "X-\u003eY-\u003eDraw()",
          "package": "easyrender",
          "signature": "X-\u003eY-\u003eDraw()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:scale"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the current color for stroking. The initial stroke color is\n black.\n\u003c/p\u003e",
          "module": "[\"Graphics.EasyRender.Internal\",\"Graphics.EasyRender\"]",
          "name": "setcolor",
          "package": "easyrender",
          "signature": "Color -\u003e Draw ()",
          "source": "src/Graphics-EasyRender-Internal.html#setcolor",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:setcolor\",\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:setcolor\"]"
        },
        "index": {
          "description": "Set the current color for stroking The initial stroke color is black",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "setcolor",
          "normalized": "Color-\u003eDraw()",
          "package": "easyrender",
          "signature": "Color-\u003eDraw()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:setcolor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the line width. The initial line width is 1.\n\u003c/p\u003e",
          "module": "[\"Graphics.EasyRender.Internal\",\"Graphics.EasyRender\"]",
          "name": "setlinewidth",
          "package": "easyrender",
          "signature": "Double -\u003e Draw ()",
          "source": "src/Graphics-EasyRender-Internal.html#setlinewidth",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:setlinewidth\",\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:setlinewidth\"]"
        },
        "index": {
          "description": "Set the line width The initial line width is",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "setlinewidth",
          "normalized": "Double-\u003eDraw()",
          "package": "easyrender",
          "signature": "Double-\u003eDraw()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:setlinewidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLook up with width of a string in the given metric.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "string_metric",
          "package": "easyrender",
          "signature": "Fontmetric -\u003e String -\u003e Double",
          "source": "src/Graphics-EasyRender-Internal.html#string_metric",
          "type": "function"
        },
        "index": {
          "description": "Look up with width of string in the given metric",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "string_metric",
          "normalized": "Fontmetric-\u003eString-\u003eDouble",
          "package": "easyrender",
          "signature": "Fontmetric-\u003eString-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:string_metric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStroke the current path, using the current line color, line\n width, and other graphics parameters. This operation implicitly\n resets the current path to empty.\n\u003c/p\u003e",
          "module": "[\"Graphics.EasyRender.Internal\",\"Graphics.EasyRender\"]",
          "name": "stroke",
          "package": "easyrender",
          "signature": "Draw ()",
          "source": "src/Graphics-EasyRender-Internal.html#stroke",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:stroke\",\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:stroke\"]"
        },
        "index": {
          "description": "Stroke the current path using the current line color line width and other graphics parameters This operation implicitly resets the current path to empty",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "stroke",
          "normalized": "Draw()",
          "package": "easyrender",
          "signature": "Draw()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:stroke"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the stroke color.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "strokecolor_to_pdf",
          "package": "easyrender",
          "signature": "Color -\u003e PDFWriter ()",
          "source": "src/Graphics-EasyRender-Internal.html#strokecolor_to_pdf",
          "type": "function"
        },
        "index": {
          "description": "Set the stroke color",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "strokecolor_to_pdf",
          "normalized": "Color-\u003ePDFWriter()",
          "package": "easyrender",
          "signature": "Color-\u003ePDFWriter()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:strokecolor_to_pdf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the width of the given string in the given font.\n\u003c/p\u003e",
          "module": "[\"Graphics.EasyRender.Internal\",\"Graphics.EasyRender\"]",
          "name": "text_width",
          "package": "easyrender",
          "signature": "Font -\u003e String -\u003e Double",
          "source": "src/Graphics-EasyRender-Internal.html#text_width",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:text_width\",\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:text_width\"]"
        },
        "index": {
          "description": "Return the width of the given string in the given font",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "text_width",
          "normalized": "Font-\u003eString-\u003eDouble",
          "package": "easyrender",
          "signature": "Font-\u003eString-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:text_width"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003etextbox\u003c/a\u003e\u003c/code\u003e \u003cem\u003ea\u003c/em\u003e \u003cem\u003ef\u003c/em\u003e \u003cem\u003ec\u003c/em\u003e \u003cem\u003ex0\u003c/em\u003e \u003cem\u003ey0\u003c/em\u003e \u003cem\u003ex1\u003c/em\u003e \u003cem\u003ey1\u003c/em\u003e \u003cem\u003eb\u003c/em\u003e \u003cem\u003es\u003c/em\u003e\u003c/code\u003e: Write the\n given string on an imaginary line from point (\u003cem\u003ex0\u003c/em\u003e,\u003cem\u003ey0\u003c/em\u003e) to\n (\u003cem\u003ex1\u003c/em\u003e,\u003cem\u003ey1\u003c/em\u003e), using font \u003cem\u003ef\u003c/em\u003e and color \u003cem\u003ec\u003c/em\u003e. If the text is too wide\n to fit on the line, it is scaled down. Otherwise, it is aligned\n according to the alignment parameter \u003cem\u003ea\u003c/em\u003e. The parameter \u003cem\u003eb\u003c/em\u003e\n specifies an additional offset by which to lower the text, with\n respect to the text's nominal size. For example, if \u003cem\u003eb\u003c/em\u003e=0, then the\n above-mentioned imaginary line from (\u003cem\u003ex0\u003c/em\u003e,\u003cem\u003ey0\u003c/em\u003e) to (\u003cem\u003ex1\u003c/em\u003e,\u003cem\u003ey1\u003c/em\u003e)\n coincides with the text's usual baseline. If \u003cem\u003eb\u003c/em\u003e=0.5, then this\n line approximately goes through the center of each character.\n\u003c/p\u003e\u003cp\u003e\u003cimg src=\"textbox.png\"/\u003e\n\u003c/p\u003e",
          "module": "[\"Graphics.EasyRender.Internal\",\"Graphics.EasyRender\"]",
          "name": "textbox",
          "package": "easyrender",
          "signature": "Alignment -\u003e Font -\u003e Color -\u003e X -\u003e Y -\u003e X -\u003e Y -\u003e Double -\u003e String -\u003e Draw ()",
          "source": "src/Graphics-EasyRender-Internal.html#textbox",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:textbox\",\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:textbox\"]"
        },
        "index": {
          "description": "textbox x0 y0 x1 y1 Write the given string on an imaginary line from point x0 y0 to x1 y1 using font and color If the text is too wide to fit on the line it is scaled down Otherwise it is aligned according to the alignment parameter The parameter specifies an additional offset by which to lower the text with respect to the text nominal size For example if then the above-mentioned imaginary line from x0 y0 to x1 y1 coincides with the text usual baseline If then this line approximately goes through the center of each character",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "textbox",
          "normalized": "Alignment-\u003eFont-\u003eColor-\u003eX-\u003eY-\u003eX-\u003eY-\u003eDouble-\u003eString-\u003eDraw()",
          "package": "easyrender",
          "signature": "Alignment-\u003eFont-\u003eColor-\u003eX-\u003eY-\u003eX-\u003eY-\u003eDouble-\u003eString-\u003eDraw()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:textbox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTranslate the current coordinate system by (\u003cem\u003ex\u003c/em\u003e,\u003cem\u003ey\u003c/em\u003e).\n\u003c/p\u003e",
          "module": "[\"Graphics.EasyRender.Internal\",\"Graphics.EasyRender\"]",
          "name": "translate",
          "package": "easyrender",
          "signature": "X -\u003e Y -\u003e Draw ()",
          "source": "src/Graphics-EasyRender-Internal.html#translate",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:translate\",\"http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#v:translate\"]"
        },
        "index": {
          "description": "Translate the current coordinate system by",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "translate",
          "normalized": "X-\u003eY-\u003eDraw()",
          "package": "easyrender",
          "signature": "X-\u003eY-\u003eDraw()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:translate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnbox a boxed item.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "unbox",
          "package": "easyrender",
          "signature": "Boxed m a -\u003e m a",
          "source": "src/Graphics-EasyRender-Internal.html#unbox",
          "type": "function"
        },
        "index": {
          "description": "Unbox boxed item",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "unbox",
          "normalized": "Boxed a b-\u003ea b",
          "package": "easyrender",
          "signature": "Boxed m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:unbox"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a character.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "wPutChar",
          "package": "easyrender",
          "signature": "Char -\u003e m ()",
          "source": "src/Graphics-EasyRender-Internal.html#wPutChar",
          "type": "method"
        },
        "index": {
          "description": "Write character",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "wPutChar",
          "normalized": "Char-\u003ea()",
          "package": "easyrender",
          "partial": "Put Char",
          "signature": "Char-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:wPutChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a string.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "wPutStr",
          "package": "easyrender",
          "signature": "String -\u003e m ()",
          "source": "src/Graphics-EasyRender-Internal.html#wPutStr",
          "type": "method"
        },
        "index": {
          "description": "Write string",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "wPutStr",
          "normalized": "String-\u003ea()",
          "package": "easyrender",
          "partial": "Put Str",
          "signature": "String-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:wPutStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ewPutStr\u003c/a\u003e\u003c/code\u003e, but adds a newline character.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "wPutStrLn",
          "package": "easyrender",
          "signature": "String -\u003e m ()",
          "source": "src/Graphics-EasyRender-Internal.html#wPutStrLn",
          "type": "function"
        },
        "index": {
          "description": "Like wPutStr but adds newline character",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "wPutStrLn",
          "normalized": "String-\u003ea()",
          "package": "easyrender",
          "partial": "Put Str Ln",
          "signature": "String-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:wPutStrLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap a filter around a \u003ccode\u003e\u003ca\u003eWriter\u003c/a\u003e\u003c/code\u003e computation. This introduces a\n local block within the \u003ccode\u003e\u003ca\u003eWriter\u003c/a\u003e\u003c/code\u003e monad; all text written within the\n block is encoded through the given filter. Filters can be composed\n and nested.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "with_filter",
          "package": "easyrender",
          "signature": "(String -\u003e String) -\u003e Writer a -\u003e m a",
          "source": "src/Graphics-EasyRender-Internal.html#with_filter",
          "type": "function"
        },
        "index": {
          "description": "Wrap filter around Writer computation This introduces local block within the Writer monad all text written within the block is encoded through the given filter Filters can be composed and nested",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "with_filter",
          "normalized": "(String-\u003eString)-\u003eWriter a-\u003eb a",
          "package": "easyrender",
          "signature": "(String-\u003eString)-\u003eWriter a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:with_filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA version of \u003ccode\u003e\u003ca\u003ewith_filter\u003c/a\u003e\u003c/code\u003e tailored to the \u003ccode\u003e\u003ca\u003ePDFWriter\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e\u003cp\u003eThis allows certain global state updates within the local block.\n Specifically, updates to everything except the file position are\n propagated from the inner to the outer block. The outer block's\n file position is updated to reflect the encoded content's\n length. From the inner block's point of view, the file position\n starts from 0.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "with_filter_pdf",
          "package": "easyrender",
          "signature": "(String -\u003e String) -\u003e PDFWriter a -\u003e PDFWriter a",
          "source": "src/Graphics-EasyRender-Internal.html#with_filter_pdf",
          "type": "function"
        },
        "index": {
          "description": "version of with filter tailored to the PDFWriter monad This allows certain global state updates within the local block Specifically updates to everything except the file position are propagated from the inner to the outer block The outer block file position is updated to reflect the encoded content length From the inner block point of view the file position starts from",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "with_filter_pdf",
          "normalized": "(String-\u003eString)-\u003ePDFWriter a-\u003ePDFWriter a",
          "package": "easyrender",
          "signature": "(String-\u003eString)-\u003ePDFWriter a-\u003ePDFWriter a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:with_filter_pdf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIn any \u003ccode\u003e\u003ca\u003eWriterMonad\u003c/a\u003e\u003c/code\u003e, introduce a block in which \u003ccode\u003e\u003ca\u003ewprintf\u003c/a\u003e\u003c/code\u003e can be\n used. This has no computational overhead, i.e., is compiled to the\n identity operation; it exists only to please the type system,\n due to the fancy typing of \u003ccode\u003e\u003ca\u003ewprintf\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "with_printf",
          "package": "easyrender",
          "signature": "Boxed m a -\u003e m a",
          "source": "src/Graphics-EasyRender-Internal.html#with_printf",
          "type": "function"
        },
        "index": {
          "description": "In any WriterMonad introduce block in which wprintf can be used This has no computational overhead i.e is compiled to the identity operation it exists only to please the type system due to the fancy typing of wprintf",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "with_printf",
          "normalized": "Boxed a b-\u003ea b",
          "package": "easyrender",
          "signature": "Boxed m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:with_printf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a value of any printable type, and add a newline.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "wprint",
          "package": "easyrender",
          "signature": "a -\u003e m ()",
          "source": "src/Graphics-EasyRender-Internal.html#wprint",
          "type": "function"
        },
        "index": {
          "description": "Write value of any printable type and add newline",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "wprint",
          "normalized": "a-\u003eb()",
          "package": "easyrender",
          "signature": "a-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:wprint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint a formatted value in the context of a boxed WriterMonad. Usage:\n\u003c/p\u003e\u003cp\u003ewprintf \u003ca\u003e%f %f\u003c/a\u003e x y :: Boxed Writer\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "wprintf",
          "package": "easyrender",
          "signature": "String -\u003e fun",
          "source": "src/Graphics-EasyRender-Internal.html#wprintf",
          "type": "function"
        },
        "index": {
          "description": "Print formatted value in the context of boxed WriterMonad Usage wprintf Boxed Writer",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "wprintf",
          "normalized": "String-\u003ea",
          "package": "easyrender",
          "signature": "String-\u003efun",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:wprintf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormat the cross reference table. Return the file position of the\n cross reference table.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "wprintf_xref",
          "package": "easyrender",
          "signature": "PDFWriter Filepos",
          "source": "src/Graphics-EasyRender-Internal.html#wprintf_xref",
          "type": "function"
        },
        "index": {
          "description": "Format the cross reference table Return the file position of the cross reference table",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "wprintf_xref",
          "package": "easyrender",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:wprintf_xref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite one line in the cross reference table. This must be exactly\n 20 characters long, including the terminating newline.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "wprintf_xref_entry",
          "package": "easyrender",
          "signature": "Filepos -\u003e Integer -\u003e Char -\u003e PDFWriter ()",
          "source": "src/Graphics-EasyRender-Internal.html#wprintf_xref_entry",
          "type": "function"
        },
        "index": {
          "description": "Write one line in the cross reference table This must be exactly characters long including the terminating newline",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "wprintf_xref_entry",
          "normalized": "Filepos-\u003eInteger-\u003eChar-\u003ePDFWriter()",
          "package": "easyrender",
          "signature": "Filepos-\u003eInteger-\u003eChar-\u003ePDFWriter()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:wprintf_xref_entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a writer in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad by printing to a file.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "writer_to_file",
          "package": "easyrender",
          "signature": "Handle -\u003e Writer a -\u003e IO a",
          "source": "src/Graphics-EasyRender-Internal.html#writer_to_file",
          "type": "function"
        },
        "index": {
          "description": "Run writer in the IO monad by printing to file",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "writer_to_file",
          "normalized": "Handle-\u003eWriter a-\u003eIO a",
          "package": "easyrender",
          "signature": "Handle-\u003eWriter a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:writer_to_file"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIsomorphically map a \u003ccode\u003e\u003ca\u003eWriter\u003c/a\u003e\u003c/code\u003e computation to a pair of a string\n and a value.\n\u003c/p\u003e\u003cp\u003eImportant usage note: the \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e in the output is produced\n lazily, and before \u003cem\u003ea\u003c/em\u003e is produced. To preserve laziness, do not\n evaluate \u003cem\u003ea\u003c/em\u003e before the end of \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e has been reached.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "writer_to_pair",
          "package": "easyrender",
          "signature": "Writer a -\u003e (String, a)",
          "source": "src/Graphics-EasyRender-Internal.html#writer_to_pair",
          "type": "function"
        },
        "index": {
          "description": "Isomorphically map Writer computation to pair of string and value Important usage note the String in the output is produced lazily and before is produced To preserve laziness do not evaluate before the end of String has been reached",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "writer_to_pair",
          "normalized": "Writer a-\u003e(String,a)",
          "package": "easyrender",
          "signature": "Writer a-\u003e(String,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:writer_to_pair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a writer by printing to a string.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender.Internal",
          "name": "writer_to_string",
          "package": "easyrender",
          "signature": "Writer a -\u003e String",
          "source": "src/Graphics-EasyRender-Internal.html#writer_to_string",
          "type": "function"
        },
        "index": {
          "description": "Run writer by printing to string",
          "hierarchy": "Graphics EasyRender Internal",
          "module": "Graphics.EasyRender.Internal",
          "name": "writer_to_string",
          "normalized": "Writer a-\u003eString",
          "package": "easyrender",
          "signature": "Writer a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender-Internal.html#v:writer_to_string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides efficient functions for rendering vector\n graphics to a number of formats, including EPS, PostScript, and\n PDF. It provides an abstraction for multi-page documents, as well\n as a set of graphics primitives for page descriptions. \n\u003c/p\u003e\u003cp\u003eThe graphics model is similar to that of the PostScript and PDF\n languages, but we only implement a subset of their functionality.\n Care has been taken that graphics rendering is done efficiently and\n as lazily as possible; documents are rendered \"on the fly\",\n without the need to store the whole document in memory.\n\u003c/p\u003e\u003cp\u003eThe provided document description model consists of two separate\n layers of abstraction:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003cem\u003edrawing\u003c/em\u003e is concerned with placing marks on a fixed surface, and\n takes place in the \u003ccode\u003e\u003ca\u003eDraw\u003c/a\u003e\u003c/code\u003e monad;\n\u003c/li\u003e\u003cli\u003e \u003cem\u003edocument structure\u003c/em\u003e is concerned with a sequence of pages, their\n bounding boxes, and other meta-data. It takes place in the\n \u003ccode\u003e\u003ca\u003eDocument\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Graphics.EasyRender",
          "name": "EasyRender",
          "package": "easyrender",
          "source": "src/Graphics-EasyRender.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides efficient functions for rendering vector graphics to number of formats including EPS PostScript and PDF It provides an abstraction for multi-page documents as well as set of graphics primitives for page descriptions The graphics model is similar to that of the PostScript and PDF languages but we only implement subset of their functionality Care has been taken that graphics rendering is done efficiently and as lazily as possible documents are rendered on the fly without the need to store the whole document in memory The provided document description model consists of two separate layers of abstraction drawing is concerned with placing marks on fixed surface and takes place in the Draw monad document structure is concerned with sequence of pages their bounding boxes and other meta-data It takes place in the Document monad",
          "hierarchy": "Graphics EasyRender",
          "module": "Graphics.EasyRender",
          "name": "EasyRender",
          "package": "easyrender",
          "partial": "Easy Render",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA real number representing text alignment.  0 = left aligned, 0.5\n = centered, 1 = right aligned. Intermediate values are also\n possible. For example, an alignment value of 0.25 means one quarter\n of the way between left aligned and right aligned.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender",
          "name": "Alignment",
          "package": "easyrender",
          "source": "src/Graphics-EasyRender-Internal.html#Alignment",
          "type": "type"
        },
        "index": {
          "description": "real number representing text alignment left aligned centered right aligned Intermediate values are also possible For example an alignment value of means one quarter of the way between left aligned and right aligned",
          "hierarchy": "Graphics EasyRender",
          "module": "Graphics.EasyRender",
          "name": "Alignment",
          "package": "easyrender",
          "partial": "Alignment",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#t:Alignment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA enumeration type for base fonts. For the time being, we only\n offer TimesRoman and Helvetica.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender",
          "name": "Basefont",
          "package": "easyrender",
          "source": "src/Graphics-EasyRender-Internal.html#Basefont",
          "type": "data"
        },
        "index": {
          "description": "enumeration type for base fonts For the time being we only offer TimesRoman and Helvetica",
          "hierarchy": "Graphics EasyRender",
          "module": "Graphics.EasyRender",
          "name": "Basefont",
          "package": "easyrender",
          "partial": "Basefont",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#t:Basefont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of colors.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender",
          "name": "Color",
          "package": "easyrender",
          "source": "src/Graphics-EasyRender-Internal.html#Color",
          "type": "data"
        },
        "index": {
          "description": "The type of colors",
          "hierarchy": "Graphics EasyRender",
          "module": "Graphics.EasyRender",
          "name": "Color",
          "package": "easyrender",
          "partial": "Color",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#t:Color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA data structure that holds application-specific meta-data and\n customization information.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender",
          "name": "Custom",
          "package": "easyrender",
          "source": "src/Graphics-EasyRender-Internal.html#Custom",
          "type": "data"
        },
        "index": {
          "description": "data structure that holds application-specific meta-data and customization information",
          "hierarchy": "Graphics EasyRender",
          "module": "Graphics.EasyRender",
          "name": "Custom",
          "package": "easyrender",
          "partial": "Custom",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#t:Custom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Document monad.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender",
          "name": "Document",
          "package": "easyrender",
          "source": "src/Graphics-EasyRender-Internal.html#Document",
          "type": "data"
        },
        "index": {
          "description": "The Document monad",
          "hierarchy": "Graphics EasyRender",
          "module": "Graphics.EasyRender",
          "name": "Document",
          "package": "easyrender",
          "partial": "Document",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#t:Document"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Draw monad.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender",
          "name": "Draw",
          "package": "easyrender",
          "source": "src/Graphics-EasyRender-Internal.html#Draw",
          "type": "data"
        },
        "index": {
          "description": "The Draw monad",
          "hierarchy": "Graphics EasyRender",
          "module": "Graphics.EasyRender",
          "name": "Draw",
          "package": "easyrender",
          "partial": "Draw",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#t:Draw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA data type describing a scaled font. This consists of a base\n font and a point size.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender",
          "name": "Font",
          "package": "easyrender",
          "source": "src/Graphics-EasyRender-Internal.html#Font",
          "type": "data"
        },
        "index": {
          "description": "data type describing scaled font This consists of base font and point size",
          "hierarchy": "Graphics EasyRender",
          "module": "Graphics.EasyRender",
          "name": "Font",
          "package": "easyrender",
          "partial": "Font",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#t:Font"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAvailable graphics formats for rendering.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender",
          "name": "RenderFormat",
          "package": "easyrender",
          "source": "src/Graphics-EasyRender-Internal.html#RenderFormat",
          "type": "data"
        },
        "index": {
          "description": "Available graphics formats for rendering",
          "hierarchy": "Graphics EasyRender",
          "module": "Graphics.EasyRender",
          "name": "RenderFormat",
          "package": "easyrender",
          "partial": "Render Format",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#t:RenderFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of \u003cem\u003ex\u003c/em\u003e-coordinates.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender",
          "name": "X",
          "package": "easyrender",
          "source": "src/Graphics-EasyRender-Internal.html#X",
          "type": "type"
        },
        "index": {
          "description": "The type of coordinates",
          "hierarchy": "Graphics EasyRender",
          "module": "Graphics.EasyRender",
          "name": "X",
          "package": "easyrender",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#t:X"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of \u003cem\u003ey\u003c/em\u003e-coordinates.\n\u003c/p\u003e",
          "module": "Graphics.EasyRender",
          "name": "Y",
          "package": "easyrender",
          "source": "src/Graphics-EasyRender-Internal.html#Y",
          "type": "type"
        },
        "index": {
          "description": "The type of coordinates",
          "hierarchy": "Graphics EasyRender",
          "module": "Graphics.EasyRender",
          "name": "Y",
          "package": "easyrender",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/easyrender/docs/Graphics-EasyRender.html#t:Y"
      }
    }
  ]
]