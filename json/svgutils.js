[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/svgutils/docs/Data-SVG-Paper.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module with a helper function for dealing with paper sizes.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.SVG.Paper",
        "fct-package": "svgutils",
        "fct-signature": "module",
        "fct-source": "src/Data-SVG-Paper.html",
        "fct-type": "module",
        "title": "Paper"
      },
      "index": {
        "description": "module with helper function for dealing with paper sizes",
        "hierarchy": "Data SVG Paper",
        "module": "Data.SVG.Paper",
        "name": "Paper",
        "normalized": "",
        "package": "svgutils",
        "partial": "Paper",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/svgutils/docs/Data-SVG-Paper.html#v:parsePaperSize",
      "description": {
        "fct-descr": "\u003cp\u003eParses a paper size which can either be a known name or a detailed size.\n\u003c/p\u003e\u003cp\u003ePaper sizes such as \"a4\" are not part of the SVG specification; this helper is provided here\n in case you want help getting a paper size from a command-line argument.\n\u003c/p\u003e\u003cp\u003eThis recognises two styles of paper size.  One is a literal name from the list\n below, and the other is \"width*height\" (no spaces around the asterisk) where\n width and height are valid SVG sizes that can be parsed by \u003ccode\u003e\u003ca\u003eparseCoord\u003c/a\u003e\u003c/code\u003e (using\n a DPI of 90).  The\n list of literal sizes, recognised case-insensitive (most of which are from the ISO 216 standard), is:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \"a4\", \"a4portrait\": 210mm*297mm\n\u003c/li\u003e\u003cli\u003e \"a4landscape\": 297mm*210mm\n\u003c/li\u003e\u003cli\u003e \"a3\", \"a3portrait\": 297mm*420mm\n\u003c/li\u003e\u003cli\u003e \"a3landscape\": 420mm*297mm\n\u003c/li\u003e\u003cli\u003e \"letter\": 215.9mm*279.4mm\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Data.SVG.Paper",
        "fct-package": "svgutils",
        "fct-signature": "String -\u003e Maybe Size",
        "fct-source": "src/Data-SVG-Paper.html#parsePaperSize",
        "fct-type": "function",
        "title": "parsePaperSize"
      },
      "index": {
        "description": "Parses paper size which can either be known name or detailed size Paper sizes such as a4 are not part of the SVG specification this helper is provided here in case you want help getting paper size from command-line argument This recognises two styles of paper size One is literal name from the list below and the other is width height no spaces around the asterisk where width and height are valid SVG sizes that can be parsed by parseCoord using DPI of The list of literal sizes recognised case-insensitive most of which are from the ISO standard is a4 a4portrait mm mm a4landscape mm mm a3 a3portrait mm mm a3landscape mm mm letter mm mm",
        "hierarchy": "Data SVG Paper",
        "module": "Data.SVG.Paper",
        "name": "parsePaperSize",
        "normalized": "String-\u003eMaybe Size",
        "package": "svgutils",
        "partial": "Paper Size",
        "signature": "String-\u003eMaybe Size"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/svgutils/docs/Data-SVG-SVG.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module containing all the basic types for dealing with SVG files.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.SVG.SVG",
        "fct-package": "svgutils",
        "fct-signature": "module",
        "fct-source": "src/Data-SVG-SVG.html",
        "fct-type": "module",
        "title": "SVG"
      },
      "index": {
        "description": "module containing all the basic types for dealing with SVG files",
        "hierarchy": "Data SVG SVG",
        "module": "Data.SVG.SVG",
        "name": "SVG",
        "normalized": "",
        "package": "svgutils",
        "partial": "SVG",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/svgutils/docs/Data-SVG-SVG.html#t:DPI",
      "description": {
        "fct-descr": "\u003cp\u003eA dots-per-inch measurement for dealing with graphics.\n\u003c/p\u003e\u003cp\u003e(To get dots per millimetre, divide by 25.4)\n\u003c/p\u003e",
        "fct-module": "Data.SVG.SVG",
        "fct-package": "svgutils",
        "fct-signature": "newtype",
        "fct-source": "src/Data-SVG-SVG.html#DPI",
        "fct-type": "newtype",
        "title": "DPI"
      },
      "index": {
        "description": "dots-per-inch measurement for dealing with graphics To get dots per millimetre divide by",
        "hierarchy": "Data SVG SVG",
        "module": "Data.SVG.SVG",
        "name": "DPI",
        "normalized": "",
        "package": "svgutils",
        "partial": "DPI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/svgutils/docs/Data-SVG-SVG.html#t:MM",
      "description": {
        "fct-descr": "\u003cp\u003eA wrapper around \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e for measurements in millimetres.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance appends \"mm\" to the value.\n\u003c/p\u003e",
        "fct-module": "Data.SVG.SVG",
        "fct-package": "svgutils",
        "fct-signature": "newtype",
        "fct-source": "src/Data-SVG-SVG.html#MM",
        "fct-type": "newtype",
        "title": "MM"
      },
      "index": {
        "description": "wrapper around Double for measurements in millimetres The Show instance appends mm to the value",
        "hierarchy": "Data SVG SVG",
        "module": "Data.SVG.SVG",
        "name": "MM",
        "normalized": "",
        "package": "svgutils",
        "partial": "MM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/svgutils/docs/Data-SVG-SVG.html#t:SVG",
      "description": {
        "fct-descr": "\u003cp\u003eA container for SVG documents.  See the \u003ccode\u003e\u003ca\u003emakeSVG\u003c/a\u003e\u003c/code\u003e function for creating them,\n and the \u003ccode\u003e\u003ca\u003egetSVGElement\u003c/a\u003e\u003c/code\u003e function for accessing them.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance prints this as a complete XML document.\n\u003c/p\u003e",
        "fct-module": "Data.SVG.SVG",
        "fct-package": "svgutils",
        "fct-signature": "data",
        "fct-source": "src/Data-SVG-SVG.html#SVG",
        "fct-type": "data",
        "title": "SVG"
      },
      "index": {
        "description": "container for SVG documents See the makeSVG function for creating them and the getSVGElement function for accessing them The Show instance prints this as complete XML document",
        "hierarchy": "Data SVG SVG",
        "module": "Data.SVG.SVG",
        "name": "SVG",
        "normalized": "",
        "package": "svgutils",
        "partial": "SVG",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/svgutils/docs/Data-SVG-SVG.html#t:Size",
      "description": {
        "fct-descr": "\u003cp\u003eA size (width and height) measured in millimetres.\n\u003c/p\u003e",
        "fct-module": "Data.SVG.SVG",
        "fct-package": "svgutils",
        "fct-signature": "data",
        "fct-source": "src/Data-SVG-SVG.html#Size",
        "fct-type": "data",
        "title": "Size"
      },
      "index": {
        "description": "size width and height measured in millimetres",
        "hierarchy": "Data SVG SVG",
        "module": "Data.SVG.SVG",
        "name": "Size",
        "normalized": "",
        "package": "svgutils",
        "partial": "Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/svgutils/docs/Data-SVG-SVG.html#v:DPI",
      "description": {
        "fct-module": "Data.SVG.SVG",
        "fct-package": "svgutils",
        "fct-signature": "DPI Double",
        "fct-source": "src/Data-SVG-SVG.html#DPI",
        "fct-type": "function",
        "title": "DPI"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SVG SVG",
        "module": "Data.SVG.SVG",
        "name": "DPI",
        "normalized": "",
        "package": "svgutils",
        "partial": "DPI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/svgutils/docs/Data-SVG-SVG.html#v:MM",
      "description": {
        "fct-module": "Data.SVG.SVG",
        "fct-package": "svgutils",
        "fct-signature": "MM Double",
        "fct-source": "src/Data-SVG-SVG.html#MM",
        "fct-type": "function",
        "title": "MM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SVG SVG",
        "module": "Data.SVG.SVG",
        "name": "MM",
        "normalized": "",
        "package": "svgutils",
        "partial": "MM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/svgutils/docs/Data-SVG-SVG.html#v:Size",
      "description": {
        "fct-module": "Data.SVG.SVG",
        "fct-package": "svgutils",
        "fct-signature": "Size",
        "fct-source": "src/Data-SVG-SVG.html#Size",
        "fct-type": "function",
        "title": "Size"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SVG SVG",
        "module": "Data.SVG.SVG",
        "name": "Size",
        "normalized": "",
        "package": "svgutils",
        "partial": "Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/svgutils/docs/Data-SVG-SVG.html#v:getSVGElement",
      "description": {
        "fct-descr": "\u003cp\u003eGets the top-level \"svg\" element.\n\u003c/p\u003e",
        "fct-module": "Data.SVG.SVG",
        "fct-package": "svgutils",
        "fct-signature": "SVG -\u003e Element",
        "fct-source": "src/Data-SVG-SVG.html#getSVGElement",
        "fct-type": "function",
        "title": "getSVGElement"
      },
      "index": {
        "description": "Gets the top-level svg element",
        "hierarchy": "Data SVG SVG",
        "module": "Data.SVG.SVG",
        "name": "getSVGElement",
        "normalized": "SVG-\u003eElement",
        "package": "svgutils",
        "partial": "SVGElement",
        "signature": "SVG-\u003eElement"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/svgutils/docs/Data-SVG-SVG.html#v:getSVGSize",
      "description": {
        "fct-descr": "\u003cp\u003eGets the size of the SVG document.\n\u003c/p\u003e\u003cp\u003eIn an ideal world, this size would be some measurement in centimetres, etc. that\n would be trivial to convert to millimetres.\n\u003c/p\u003e\u003cp\u003eUnfortunately, some programs (most notably Inkscape) record the document size\n in pixels, which is very unhelpful when trying to get the size of the document\n for printing, etc.  Therefore you must supply a \u003ccode\u003e\u003ca\u003eDPI\u003c/a\u003e\u003c/code\u003e parameter for converting\n this pixel size into millimetres.  On my system, Inkscape uses a DPI of 90 but\n I am not sure if this is system-specific or a constant that is used on all machines.\n\u003c/p\u003e\u003cp\u003eThe method will fail if either the width or height attributes are missing at\n the top-level, or they cannot be parsed using \u003ccode\u003e\u003ca\u003eparseCoord\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.SVG.SVG",
        "fct-package": "svgutils",
        "fct-signature": "DPI -\u003e SVG -\u003e Maybe Size",
        "fct-source": "src/Data-SVG-SVG.html#getSVGSize",
        "fct-type": "function",
        "title": "getSVGSize"
      },
      "index": {
        "description": "Gets the size of the SVG document In an ideal world this size would be some measurement in centimetres etc that would be trivial to convert to millimetres Unfortunately some programs most notably Inkscape record the document size in pixels which is very unhelpful when trying to get the size of the document for printing etc Therefore you must supply DPI parameter for converting this pixel size into millimetres On my system Inkscape uses DPI of but am not sure if this is system-specific or constant that is used on all machines The method will fail if either the width or height attributes are missing at the top-level or they cannot be parsed using parseCoord",
        "hierarchy": "Data SVG SVG",
        "module": "Data.SVG.SVG",
        "name": "getSVGSize",
        "normalized": "DPI-\u003eSVG-\u003eMaybe Size",
        "package": "svgutils",
        "partial": "SVGSize",
        "signature": "DPI-\u003eSVG-\u003eMaybe Size"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/svgutils/docs/Data-SVG-SVG.html#v:makeBlankSVG",
      "description": {
        "fct-descr": "\u003cp\u003eMakes a blank SVG file of the given size.\n\u003c/p\u003e",
        "fct-module": "Data.SVG.SVG",
        "fct-package": "svgutils",
        "fct-signature": "Size -\u003e SVG",
        "fct-source": "src/Data-SVG-SVG.html#makeBlankSVG",
        "fct-type": "function",
        "title": "makeBlankSVG"
      },
      "index": {
        "description": "Makes blank SVG file of the given size",
        "hierarchy": "Data SVG SVG",
        "module": "Data.SVG.SVG",
        "name": "makeBlankSVG",
        "normalized": "Size-\u003eSVG",
        "package": "svgutils",
        "partial": "Blank SVG",
        "signature": "Size-\u003eSVG"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/svgutils/docs/Data-SVG-SVG.html#v:makeSVG",
      "description": {
        "fct-descr": "\u003cp\u003eCreates an \u003ccode\u003e\u003ca\u003eSVG\u003c/a\u003e\u003c/code\u003e item from an XML element.\n\u003c/p\u003e\u003cp\u003eIf the element is named \"svg\", this function will return a \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e result.\n If the element is named anything else, this function will return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.SVG.SVG",
        "fct-package": "svgutils",
        "fct-signature": "Element -\u003e Maybe SVG",
        "fct-source": "src/Data-SVG-SVG.html#makeSVG",
        "fct-type": "function",
        "title": "makeSVG"
      },
      "index": {
        "description": "Creates an SVG item from an XML element If the element is named svg this function will return Just result If the element is named anything else this function will return Nothing",
        "hierarchy": "Data SVG SVG",
        "module": "Data.SVG.SVG",
        "name": "makeSVG",
        "normalized": "Element-\u003eMaybe SVG",
        "package": "svgutils",
        "partial": "SVG",
        "signature": "Element-\u003eMaybe SVG"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/svgutils/docs/Data-SVG-SVG.html#v:mmHeight",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.SVG.SVG",
        "fct-package": "svgutils",
        "fct-signature": "MM",
        "fct-source": "src/Data-SVG-SVG.html#Size",
        "fct-type": "function",
        "title": "mmHeight"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SVG SVG",
        "module": "Data.SVG.SVG",
        "name": "mmHeight",
        "normalized": "",
        "package": "svgutils",
        "partial": "Height",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/svgutils/docs/Data-SVG-SVG.html#v:mmWidth",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.SVG.SVG",
        "fct-package": "svgutils",
        "fct-signature": "MM",
        "fct-source": "src/Data-SVG-SVG.html#Size",
        "fct-type": "function",
        "title": "mmWidth"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SVG SVG",
        "module": "Data.SVG.SVG",
        "name": "mmWidth",
        "normalized": "",
        "package": "svgutils",
        "partial": "Width",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/svgutils/docs/Data-SVG-SVG.html#v:namespaces",
      "description": {
        "fct-descr": "\u003cp\u003eGets all the namespaces from the header of the SVG file.\n\u003c/p\u003e",
        "fct-module": "Data.SVG.SVG",
        "fct-package": "svgutils",
        "fct-signature": "SVG -\u003e [(QName, String)]",
        "fct-source": "src/Data-SVG-SVG.html#namespaces",
        "fct-type": "function",
        "title": "namespaces"
      },
      "index": {
        "description": "Gets all the namespaces from the header of the SVG file",
        "hierarchy": "Data SVG SVG",
        "module": "Data.SVG.SVG",
        "name": "namespaces",
        "normalized": "SVG-\u003e[(QName,String)]",
        "package": "svgutils",
        "partial": "",
        "signature": "SVG-\u003e[(QName,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/svgutils/docs/Data-SVG-SVG.html#v:parseCoord",
      "description": {
        "fct-descr": "\u003cp\u003eParses a coordinate/length value from an SVG file.\n\u003c/p\u003e\u003cp\u003eAll valid units are supported, except \"em\" and \"ex\" which depend on the size\n of the current font.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eDPI\u003c/a\u003e\u003c/code\u003e parameter is needed in order to convert user coordinate units (pixels) to millimetres.\n\u003c/p\u003e\u003cp\u003eThis method assumes that no transformation is currently in place on the size.\n  It is primarily intended for parsing the size of the document, where there\n can be no transformations present.\n\u003c/p\u003e",
        "fct-module": "Data.SVG.SVG",
        "fct-package": "svgutils",
        "fct-signature": "DPI -\u003e String -\u003e Maybe MM",
        "fct-source": "src/Data-SVG-SVG.html#parseCoord",
        "fct-type": "function",
        "title": "parseCoord"
      },
      "index": {
        "description": "Parses coordinate length value from an SVG file All valid units are supported except em and ex which depend on the size of the current font The DPI parameter is needed in order to convert user coordinate units pixels to millimetres This method assumes that no transformation is currently in place on the size It is primarily intended for parsing the size of the document where there can be no transformations present",
        "hierarchy": "Data SVG SVG",
        "module": "Data.SVG.SVG",
        "name": "parseCoord",
        "normalized": "DPI-\u003eString-\u003eMaybe MM",
        "package": "svgutils",
        "partial": "Coord",
        "signature": "DPI-\u003eString-\u003eMaybe MM"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/svgutils/docs/Data-SVG-SVG.html#v:parseSVG",
      "description": {
        "fct-descr": "\u003cp\u003eParses a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e containing a complete XML document into an SVG.\n\u003c/p\u003e\u003cp\u003eThis function can fail in two ways: it will fail either if the \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e is not\n a complete valid XML document, or if the top-level element is not an \"svg\"\n element.\n\u003c/p\u003e",
        "fct-module": "Data.SVG.SVG",
        "fct-package": "svgutils",
        "fct-signature": "String -\u003e Maybe SVG",
        "fct-source": "src/Data-SVG-SVG.html#parseSVG",
        "fct-type": "function",
        "title": "parseSVG"
      },
      "index": {
        "description": "Parses String containing complete XML document into an SVG This function can fail in two ways it will fail either if the String is not complete valid XML document or if the top-level element is not an svg element",
        "hierarchy": "Data SVG SVG",
        "module": "Data.SVG.SVG",
        "name": "parseSVG",
        "normalized": "String-\u003eMaybe SVG",
        "package": "svgutils",
        "partial": "SVG",
        "signature": "String-\u003eMaybe SVG"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/svgutils/docs/Data-SVG-SVG.html#v:placeAt",
      "description": {
        "fct-descr": "\u003cp\u003ePlaces the given XML content (which is assumed to be a valid SVG fragment)\n at the given (x, y) coordinates by wrapping them in an appropriate SVG transformation\n (\u003cg\u003e element with transform attribute).\n\u003c/p\u003e\u003cp\u003eNote that if you place the resulting element inside a transformation, that transformation\n will of course apply to this element as is standard in SVG.  So if you place\n something at (20, 20) then wrap that in a scale transformation with factor 0.1,\n it will end up placed at (2, 2).\n\u003c/p\u003e",
        "fct-module": "Data.SVG.SVG",
        "fct-package": "svgutils",
        "fct-signature": "DPI -\u003e (MM, MM) -\u003e [Content] -\u003e Element",
        "fct-source": "src/Data-SVG-SVG.html#placeAt",
        "fct-type": "function",
        "title": "placeAt"
      },
      "index": {
        "description": "Places the given XML content which is assumed to be valid SVG fragment at the given coordinates by wrapping them in an appropriate SVG transformation element with transform attribute Note that if you place the resulting element inside transformation that transformation will of course apply to this element as is standard in SVG So if you place something at then wrap that in scale transformation with factor it will end up placed at",
        "hierarchy": "Data SVG SVG",
        "module": "Data.SVG.SVG",
        "name": "placeAt",
        "normalized": "DPI-\u003e(MM,MM)-\u003e[Content]-\u003eElement",
        "package": "svgutils",
        "partial": "At",
        "signature": "DPI-\u003e(MM,MM)-\u003e[Content]-\u003eElement"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/svgutils/docs/Data-SVG-Tile.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module with a helper function for tiling several SVG files (which can vary\n in size) into a group of SVG files of a specific size.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.SVG.Tile",
        "fct-package": "svgutils",
        "fct-signature": "module",
        "fct-source": "src/Data-SVG-Tile.html",
        "fct-type": "module",
        "title": "Tile"
      },
      "index": {
        "description": "module with helper function for tiling several SVG files which can vary in size into group of SVG files of specific size",
        "hierarchy": "Data SVG Tile",
        "module": "Data.SVG.Tile",
        "name": "Tile",
        "normalized": "",
        "package": "svgutils",
        "partial": "Tile",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/svgutils/docs/Data-SVG-Tile.html#t:TileItem",
      "description": {
        "fct-descr": "\u003cp\u003eAn item to be tiled, with an SVG image for the front, and an optional SVG\n for the back.  If the two images are different sizes, the smallest size that\n can accommodate both is used for tiling.  This means that if you have a larger\n back image, the front will have enough space left to match up with the back\n (and vice versa).\n\u003c/p\u003e\u003cp\u003eThe label is currently only used for error reporting.\n\u003c/p\u003e",
        "fct-module": "Data.SVG.Tile",
        "fct-package": "svgutils",
        "fct-signature": "data",
        "fct-source": "src/Data-SVG-Tile.html#TileItem",
        "fct-type": "data",
        "title": "TileItem"
      },
      "index": {
        "description": "An item to be tiled with an SVG image for the front and an optional SVG for the back If the two images are different sizes the smallest size that can accommodate both is used for tiling This means that if you have larger back image the front will have enough space left to match up with the back and vice versa The label is currently only used for error reporting",
        "hierarchy": "Data SVG Tile",
        "module": "Data.SVG.Tile",
        "name": "TileItem",
        "normalized": "",
        "package": "svgutils",
        "partial": "Tile Item",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/svgutils/docs/Data-SVG-Tile.html#t:TileSettings",
      "description": {
        "fct-descr": "\u003cp\u003eThe settings for tiling: the paper size, margin (same on all sides) and gap (between tiled items)\n\u003c/p\u003e",
        "fct-module": "Data.SVG.Tile",
        "fct-package": "svgutils",
        "fct-signature": "data",
        "fct-source": "src/Data-SVG-Tile.html#TileSettings",
        "fct-type": "data",
        "title": "TileSettings"
      },
      "index": {
        "description": "The settings for tiling the paper size margin same on all sides and gap between tiled items",
        "hierarchy": "Data SVG Tile",
        "module": "Data.SVG.Tile",
        "name": "TileSettings",
        "normalized": "",
        "package": "svgutils",
        "partial": "Tile Settings",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/svgutils/docs/Data-SVG-Tile.html#v:TileItem",
      "description": {
        "fct-module": "Data.SVG.Tile",
        "fct-package": "svgutils",
        "fct-signature": "TileItem",
        "fct-source": "src/Data-SVG-Tile.html#TileItem",
        "fct-type": "function",
        "title": "TileItem"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SVG Tile",
        "module": "Data.SVG.Tile",
        "name": "TileItem",
        "normalized": "",
        "package": "svgutils",
        "partial": "Tile Item",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/svgutils/docs/Data-SVG-Tile.html#v:TileSettings",
      "description": {
        "fct-module": "Data.SVG.Tile",
        "fct-package": "svgutils",
        "fct-signature": "TileSettings",
        "fct-source": "src/Data-SVG-Tile.html#TileSettings",
        "fct-type": "function",
        "title": "TileSettings"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SVG Tile",
        "module": "Data.SVG.Tile",
        "name": "TileSettings",
        "normalized": "",
        "package": "svgutils",
        "partial": "Tile Settings",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/svgutils/docs/Data-SVG-Tile.html#v:ignoreNamespaceConflicts",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.SVG.Tile",
        "fct-package": "svgutils",
        "fct-signature": "Bool",
        "fct-source": "src/Data-SVG-Tile.html#TileSettings",
        "fct-type": "function",
        "title": "ignoreNamespaceConflicts"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SVG Tile",
        "module": "Data.SVG.Tile",
        "name": "ignoreNamespaceConflicts",
        "normalized": "",
        "package": "svgutils",
        "partial": "Namespace Conflicts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/svgutils/docs/Data-SVG-Tile.html#v:tileBack",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.SVG.Tile",
        "fct-package": "svgutils",
        "fct-signature": "Maybe SVG",
        "fct-source": "src/Data-SVG-Tile.html#TileItem",
        "fct-type": "function",
        "title": "tileBack"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SVG Tile",
        "module": "Data.SVG.Tile",
        "name": "tileBack",
        "normalized": "",
        "package": "svgutils",
        "partial": "Back",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/svgutils/docs/Data-SVG-Tile.html#v:tileFront",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.SVG.Tile",
        "fct-package": "svgutils",
        "fct-signature": "SVG",
        "fct-source": "src/Data-SVG-Tile.html#TileItem",
        "fct-type": "function",
        "title": "tileFront"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SVG Tile",
        "module": "Data.SVG.Tile",
        "name": "tileFront",
        "normalized": "",
        "package": "svgutils",
        "partial": "Front",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/svgutils/docs/Data-SVG-Tile.html#v:tileGap",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.SVG.Tile",
        "fct-package": "svgutils",
        "fct-signature": "MM",
        "fct-source": "src/Data-SVG-Tile.html#TileSettings",
        "fct-type": "function",
        "title": "tileGap"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SVG Tile",
        "module": "Data.SVG.Tile",
        "name": "tileGap",
        "normalized": "",
        "package": "svgutils",
        "partial": "Gap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/svgutils/docs/Data-SVG-Tile.html#v:tileLabel",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.SVG.Tile",
        "fct-package": "svgutils",
        "fct-signature": "String",
        "fct-source": "src/Data-SVG-Tile.html#TileItem",
        "fct-type": "function",
        "title": "tileLabel"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SVG Tile",
        "module": "Data.SVG.Tile",
        "name": "tileLabel",
        "normalized": "",
        "package": "svgutils",
        "partial": "Label",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/svgutils/docs/Data-SVG-Tile.html#v:tileMargin",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.SVG.Tile",
        "fct-package": "svgutils",
        "fct-signature": "MM",
        "fct-source": "src/Data-SVG-Tile.html#TileSettings",
        "fct-type": "function",
        "title": "tileMargin"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SVG Tile",
        "module": "Data.SVG.Tile",
        "name": "tileMargin",
        "normalized": "",
        "package": "svgutils",
        "partial": "Margin",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/svgutils/docs/Data-SVG-Tile.html#v:tilePaperSize",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.SVG.Tile",
        "fct-package": "svgutils",
        "fct-signature": "Size",
        "fct-source": "src/Data-SVG-Tile.html#TileSettings",
        "fct-type": "function",
        "title": "tilePaperSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Data SVG Tile",
        "module": "Data.SVG.Tile",
        "name": "tilePaperSize",
        "normalized": "",
        "package": "svgutils",
        "partial": "Paper Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/svgutils/docs/Data-SVG-Tile.html#v:tileSVGs",
      "description": {
        "fct-descr": "\u003cp\u003eTiles the given items.\n\u003c/p\u003e\u003cp\u003eThis function takes a list of front (and optional back) SVG images, then arranges\n them using the given paper size, margin and gaps between items.\n The return is a list of front images (with back images where needed).\n\u003c/p\u003e\u003cp\u003eThis method is intended to be used to put multiple small SVG items onto a single\n page for printing.\n\u003c/p\u003e\u003cp\u003eThe layout algorithm is very simple.  It places the first item in the top-left,\n then attempts to fill the rest of the row with the next items in the list.\n Once a row is full, it moves down to make more rows, until the page is full.\n  Thus, list items will always appear in the order they are given, and you can\n potentially get some wasted space, especially if the items vary wildly in size,\n and are not sorted by size first.\n\u003c/p\u003e\u003cp\u003eThis method can fail because it cannot get the sizes of the items to tile\n using \u003ccode\u003e\u003ca\u003egetSVGSize\u003c/a\u003e\u003c/code\u003e, because there are conflicts between the namespaces of\n the files, or because there are one or more items in the list that cannot\n fit on a single page by themselves.\n\u003c/p\u003e",
        "fct-module": "Data.SVG.Tile",
        "fct-package": "svgutils",
        "fct-signature": "DPI -\u003e TileSettings -\u003e [TileItem] -\u003e Either String [(SVG, Maybe SVG)]",
        "fct-source": "src/Data-SVG-Tile.html#tileSVGs",
        "fct-type": "function",
        "title": "tileSVGs"
      },
      "index": {
        "description": "Tiles the given items This function takes list of front and optional back SVG images then arranges them using the given paper size margin and gaps between items The return is list of front images with back images where needed This method is intended to be used to put multiple small SVG items onto single page for printing The layout algorithm is very simple It places the first item in the top-left then attempts to fill the rest of the row with the next items in the list Once row is full it moves down to make more rows until the page is full Thus list items will always appear in the order they are given and you can potentially get some wasted space especially if the items vary wildly in size and are not sorted by size first This method can fail because it cannot get the sizes of the items to tile using getSVGSize because there are conflicts between the namespaces of the files or because there are one or more items in the list that cannot fit on single page by themselves",
        "hierarchy": "Data SVG Tile",
        "module": "Data.SVG.Tile",
        "name": "tileSVGs",
        "normalized": "DPI-\u003eTileSettings-\u003e[TileItem]-\u003eEither String[(SVG,Maybe SVG)]",
        "package": "svgutils",
        "partial": "SVGs",
        "signature": "DPI-\u003eTileSettings-\u003e[TileItem]-\u003eEither String[(SVG,Maybe SVG)]"
      }
    }
  }
]