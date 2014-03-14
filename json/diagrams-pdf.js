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
        "word": "diagrams-pdf"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConvenient creation of command-line-driven executables for\n rendering diagrams using the Pdf backend.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003edefaultMain\u003c/a\u003e\u003c/code\u003e creates an executable which can render a single\n   diagram at various options.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Diagrams.Backend.Pdf.CmdLine",
          "name": "CmdLine",
          "package": "diagrams-pdf",
          "source": "src/Diagrams-Backend-Pdf-CmdLine.html",
          "type": "module"
        },
        "index": {
          "description": "Convenient creation of command-line-driven executables for rendering diagrams using the Pdf backend defaultMain creates an executable which can render single diagram at various options",
          "hierarchy": "Diagrams Backend Pdf CmdLine",
          "module": "Diagrams.Backend.Pdf.CmdLine",
          "name": "CmdLine",
          "package": "diagrams-pdf",
          "partial": "Cmd Line",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-pdf/docs/Diagrams-Backend-Pdf-CmdLine.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis data declaration is simply used as a token to distinguish this rendering engine.\n\u003c/p\u003e",
          "module": "Diagrams.Backend.Pdf.CmdLine",
          "name": "Pdf",
          "package": "diagrams-pdf",
          "source": "src/Diagrams-Backend-Pdf.html#Pdf",
          "type": "data"
        },
        "index": {
          "description": "This data declaration is simply used as token to distinguish this rendering engine",
          "hierarchy": "Diagrams Backend Pdf CmdLine",
          "module": "Diagrams.Backend.Pdf.CmdLine",
          "name": "Pdf",
          "package": "diagrams-pdf",
          "partial": "Pdf",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-pdf/docs/Diagrams-Backend-Pdf-CmdLine.html#t:Pdf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the simplest way to render diagrams, and is intended to\n   be used like so:\n\u003c/p\u003e\u003cpre\u003e ... other definitions ...\n myDiagram = ...\n\n main = defaultMain myDiagram\n\u003c/pre\u003e\u003cp\u003eCompiling a source file like the above example will result in an\n   executable which takes command-line options for setting the size,\n   output file, and so on, and renders \u003ccode\u003emyDiagram\u003c/code\u003e with the\n   specified options.\n\u003c/p\u003e\u003cp\u003ePass \u003ccode\u003e--help\u003c/code\u003e to the generated executable to see all available\n   options.  Currently it looks something like\n\u003c/p\u003e\u003cpre\u003e\n Command-line diagram generation.\n\nFoo [OPTIONS]\n\nCommon flags:\n   -w --width=INT    Desired width of the output image (default 400)\n   -h --height=INT   Desired height of the output image (default 400)\n   -o --output=FILE  Output file\n   -c --compressed   Compressed PDF file\n   -? --help         Display help message\n   -V --version      Print version information\n\u003c/pre\u003e\u003cp\u003eFor example, a couple common scenarios include\n\u003c/p\u003e\u003cpre\u003e\n $ ghc --make MyDiagram\n\n# output image.eps with a width of 400pt (and auto-determined height)\n $ ./MyDiagram --compressed -o image.pdf -w 400\n\u003c/pre\u003e",
          "module": "Diagrams.Backend.Pdf.CmdLine",
          "name": "defaultMain",
          "package": "diagrams-pdf",
          "signature": "Diagram Pdf R2 -\u003e IO ()",
          "source": "src/Diagrams-Backend-Pdf-CmdLine.html#defaultMain",
          "type": "function"
        },
        "index": {
          "description": "This is the simplest way to render diagrams and is intended to be used like so other definitions myDiagram main defaultMain myDiagram Compiling source file like the above example will result in an executable which takes command-line options for setting the size output file and so on and renders myDiagram with the specified options Pass help to the generated executable to see all available options Currently it looks something like Command-line diagram generation Foo OPTIONS Common flags width INT Desired width of the output image default height INT Desired height of the output image default output FILE Output file compressed Compressed PDF file help Display help message version Print version information For example couple common scenarios include ghc make MyDiagram output image.eps with width of pt and auto-determined height MyDiagram compressed image.pdf",
          "hierarchy": "Diagrams Backend Pdf CmdLine",
          "module": "Diagrams.Backend.Pdf.CmdLine",
          "name": "defaultMain",
          "normalized": "Diagram Pdf R-\u003eIO()",
          "package": "diagrams-pdf",
          "partial": "Main",
          "signature": "Diagram Pdf R-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-pdf/docs/Diagrams-Backend-Pdf-CmdLine.html#v:defaultMain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a multipage PDF document from several diagrams.\n Each diagram is scaled to the page size\n\u003c/p\u003e",
          "module": "Diagrams.Backend.Pdf.CmdLine",
          "name": "multipleMain",
          "package": "diagrams-pdf",
          "signature": "[Diagram Pdf R2] -\u003e IO ()",
          "source": "src/Diagrams-Backend-Pdf-CmdLine.html#multipleMain",
          "type": "function"
        },
        "index": {
          "description": "Generate multipage PDF document from several diagrams Each diagram is scaled to the page size",
          "hierarchy": "Diagrams Backend Pdf CmdLine",
          "module": "Diagrams.Backend.Pdf.CmdLine",
          "name": "multipleMain",
          "normalized": "[Diagram Pdf R]-\u003eIO()",
          "package": "diagrams-pdf",
          "partial": "Main",
          "signature": "[Diagram Pdf R]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-pdf/docs/Diagrams-Backend-Pdf-CmdLine.html#v:multipleMain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA Pdf rendering backend for diagrams.\n\u003c/p\u003e\u003cp\u003eTo build diagrams for Pdf rendering use the \u003ccode\u003ePdf\u003c/code\u003e\n type in the diagram type construction\n\u003c/p\u003e\u003cpre\u003e d :: Diagram Pdf R2\n d = ...\n\u003c/pre\u003e\u003cp\u003eand render giving the \u003ccode\u003ePdf\u003c/code\u003e token\n\u003c/p\u003e\u003cpre\u003e renderDia Pdf (PdfOptions (Width 400)) d\n\u003c/pre\u003e\u003cp\u003eThis IO action will write the specified file.\n\u003c/p\u003e\u003cp\u003e\u003cem\u003e Specific HPDF primitives \u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eFor details about the use of the HPDF specific primitives, the file\n test.hs in this package can be used. You'll have to unpack the archive\n for this package.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Diagrams.Backend.Pdf",
          "name": "Pdf",
          "package": "diagrams-pdf",
          "source": "src/Diagrams-Backend-Pdf.html",
          "type": "module"
        },
        "index": {
          "description": "Pdf rendering backend for diagrams To build diagrams for Pdf rendering use the Pdf type in the diagram type construction Diagram Pdf R2 and render giving the Pdf token renderDia Pdf PdfOptions Width This IO action will write the specified file Specific HPDF primitives For details about the use of the HPDF specific primitives the file test.hs in this package can be used You ll have to unpack the archive for this package",
          "hierarchy": "Diagrams Backend Pdf",
          "module": "Diagrams.Backend.Pdf",
          "name": "Pdf",
          "package": "diagrams-pdf",
          "partial": "Pdf",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-pdf/docs/Diagrams-Backend-Pdf.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Backend.Pdf",
          "name": "LabelSize",
          "package": "diagrams-pdf",
          "source": "src/Diagrams-Backend-Pdf-Specific.html#LabelSize",
          "type": "type"
        },
        "index": {
          "hierarchy": "Diagrams Backend Pdf",
          "module": "Diagrams.Backend.Pdf",
          "name": "LabelSize",
          "package": "diagrams-pdf",
          "partial": "Label Size",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-pdf/docs/Diagrams-Backend-Pdf.html#t:LabelSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStyle for a label.\n It is not considered as an attribute but as a different primitive\n because internaly it is a complex text which can support several styles \n in the same paragraph. \n Label is just a convenience wrapper when the full features are not needed\n\u003c/p\u003e",
          "module": "Diagrams.Backend.Pdf",
          "name": "LabelStyle",
          "package": "diagrams-pdf",
          "source": "src/Diagrams-Backend-Pdf-Specific.html#LabelStyle",
          "type": "data"
        },
        "index": {
          "description": "Style for label It is not considered as an attribute but as different primitive because internaly it is complex text which can support several styles in the same paragraph Label is just convenience wrapper when the full features are not needed",
          "hierarchy": "Diagrams Backend Pdf",
          "module": "Diagrams.Backend.Pdf",
          "name": "LabelStyle",
          "package": "diagrams-pdf",
          "partial": "Label Style",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-pdf/docs/Diagrams-Backend-Pdf.html#t:LabelStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBackend-specific rendering options.\n\u003c/p\u003e",
          "module": "Diagrams.Backend.Pdf",
          "name": "Options",
          "package": "diagrams-pdf",
          "signature": "Options",
          "type": "function"
        },
        "index": {
          "description": "Backend-specific rendering options",
          "hierarchy": "Diagrams Backend Pdf",
          "module": "Diagrams.Backend.Pdf",
          "name": "Options",
          "package": "diagrams-pdf",
          "partial": "Options",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-pdf/docs/Diagrams-Backend-Pdf.html#t:Options"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis data declaration is simply used as a token to distinguish this rendering engine.\n\u003c/p\u003e",
          "module": "Diagrams.Backend.Pdf",
          "name": "Pdf",
          "package": "diagrams-pdf",
          "source": "src/Diagrams-Backend-Pdf.html#Pdf",
          "type": "data"
        },
        "index": {
          "description": "This data declaration is simply used as token to distinguish this rendering engine",
          "hierarchy": "Diagrams Backend Pdf",
          "module": "Diagrams.Backend.Pdf",
          "name": "Pdf",
          "package": "diagrams-pdf",
          "partial": "Pdf",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-pdf/docs/Diagrams-Backend-Pdf.html#t:Pdf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Backend.Pdf",
          "name": "TextOrigin",
          "package": "diagrams-pdf",
          "source": "src/Diagrams-Backend-Pdf-Specific.html#TextOrigin",
          "type": "data"
        },
        "index": {
          "hierarchy": "Diagrams Backend Pdf",
          "module": "Diagrams.Backend.Pdf",
          "name": "TextOrigin",
          "package": "diagrams-pdf",
          "partial": "Text Origin",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-pdf/docs/Diagrams-Backend-Pdf.html#t:TextOrigin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Backend.Pdf",
          "name": "BottomLeftCorner",
          "package": "diagrams-pdf",
          "signature": "BottomLeftCorner",
          "source": "src/Diagrams-Backend-Pdf-Specific.html#TextOrigin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Backend Pdf",
          "module": "Diagrams.Backend.Pdf",
          "name": "BottomLeftCorner",
          "package": "diagrams-pdf",
          "partial": "Bottom Left Corner",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-pdf/docs/Diagrams-Backend-Pdf.html#v:BottomLeftCorner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Backend.Pdf",
          "name": "BottomRightCorner",
          "package": "diagrams-pdf",
          "signature": "BottomRightCorner",
          "source": "src/Diagrams-Backend-Pdf-Specific.html#TextOrigin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Backend Pdf",
          "module": "Diagrams.Backend.Pdf",
          "name": "BottomRightCorner",
          "package": "diagrams-pdf",
          "partial": "Bottom Right Corner",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-pdf/docs/Diagrams-Backend-Pdf.html#v:BottomRightCorner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Backend.Pdf",
          "name": "BottomSide",
          "package": "diagrams-pdf",
          "signature": "BottomSide",
          "source": "src/Diagrams-Backend-Pdf-Specific.html#TextOrigin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Backend Pdf",
          "module": "Diagrams.Backend.Pdf",
          "name": "BottomSide",
          "package": "diagrams-pdf",
          "partial": "Bottom Side",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-pdf/docs/Diagrams-Backend-Pdf.html#v:BottomSide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Backend.Pdf",
          "name": "Center",
          "package": "diagrams-pdf",
          "signature": "Center",
          "source": "src/Diagrams-Backend-Pdf-Specific.html#TextOrigin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Backend Pdf",
          "module": "Diagrams.Backend.Pdf",
          "name": "Center",
          "package": "diagrams-pdf",
          "partial": "Center",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-pdf/docs/Diagrams-Backend-Pdf.html#v:Center"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Backend.Pdf",
          "name": "LabelStyle",
          "package": "diagrams-pdf",
          "signature": "LabelStyle FontName LabelSize Justification TextOrigin (Colour Double)",
          "source": "src/Diagrams-Backend-Pdf-Specific.html#LabelStyle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Backend Pdf",
          "module": "Diagrams.Backend.Pdf",
          "name": "LabelStyle",
          "package": "diagrams-pdf",
          "partial": "Label Style",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-pdf/docs/Diagrams-Backend-Pdf.html#v:LabelStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Backend.Pdf",
          "name": "LeftSide",
          "package": "diagrams-pdf",
          "signature": "LeftSide",
          "source": "src/Diagrams-Backend-Pdf-Specific.html#TextOrigin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Backend Pdf",
          "module": "Diagrams.Backend.Pdf",
          "name": "LeftSide",
          "package": "diagrams-pdf",
          "partial": "Left Side",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-pdf/docs/Diagrams-Backend-Pdf.html#v:LeftSide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Backend.Pdf",
          "name": "Pdf",
          "package": "diagrams-pdf",
          "signature": "Pdf",
          "source": "src/Diagrams-Backend-Pdf.html#Pdf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Backend Pdf",
          "module": "Diagrams.Backend.Pdf",
          "name": "Pdf",
          "package": "diagrams-pdf",
          "partial": "Pdf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-pdf/docs/Diagrams-Backend-Pdf.html#v:Pdf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Backend.Pdf",
          "name": "RightSide",
          "package": "diagrams-pdf",
          "signature": "RightSide",
          "source": "src/Diagrams-Backend-Pdf-Specific.html#TextOrigin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Backend Pdf",
          "module": "Diagrams.Backend.Pdf",
          "name": "RightSide",
          "package": "diagrams-pdf",
          "partial": "Right Side",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-pdf/docs/Diagrams-Backend-Pdf.html#v:RightSide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Backend.Pdf",
          "name": "TopLeftCorner",
          "package": "diagrams-pdf",
          "signature": "TopLeftCorner",
          "source": "src/Diagrams-Backend-Pdf-Specific.html#TextOrigin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Backend Pdf",
          "module": "Diagrams.Backend.Pdf",
          "name": "TopLeftCorner",
          "package": "diagrams-pdf",
          "partial": "Top Left Corner",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-pdf/docs/Diagrams-Backend-Pdf.html#v:TopLeftCorner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Backend.Pdf",
          "name": "TopRightCorner",
          "package": "diagrams-pdf",
          "signature": "TopRightCorner",
          "source": "src/Diagrams-Backend-Pdf-Specific.html#TextOrigin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Backend Pdf",
          "module": "Diagrams.Backend.Pdf",
          "name": "TopRightCorner",
          "package": "diagrams-pdf",
          "partial": "Top Right Corner",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-pdf/docs/Diagrams-Backend-Pdf.html#v:TopRightCorner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Backend.Pdf",
          "name": "TopSide",
          "package": "diagrams-pdf",
          "signature": "TopSide",
          "source": "src/Diagrams-Backend-Pdf-Specific.html#TextOrigin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Backend Pdf",
          "module": "Diagrams.Backend.Pdf",
          "name": "TopSide",
          "package": "diagrams-pdf",
          "partial": "Top Side",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-pdf/docs/Diagrams-Backend-Pdf.html#v:TopSide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine Axial shading for a diagram\n\u003c/p\u003e",
          "module": "Diagrams.Backend.Pdf",
          "name": "pdfAxialShading",
          "package": "diagrams-pdf",
          "signature": "P2 -\u003e P2 -\u003e Colour Double -\u003e Colour Double -\u003e a -\u003e a",
          "source": "src/Diagrams-Backend-Pdf-Specific.html#pdfAxialShading",
          "type": "function"
        },
        "index": {
          "description": "Define Axial shading for diagram",
          "hierarchy": "Diagrams Backend Pdf",
          "module": "Diagrams.Backend.Pdf",
          "name": "pdfAxialShading",
          "normalized": "P-\u003eP-\u003eColour Double-\u003eColour Double-\u003ea-\u003ea",
          "package": "diagrams-pdf",
          "partial": "Axial Shading",
          "signature": "P-\u003eP-\u003eColour Double-\u003eColour Double-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-pdf/docs/Diagrams-Backend-Pdf.html#v:pdfAxialShading"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an image diagram\n\u003c/p\u003e",
          "module": "Diagrams.Backend.Pdf",
          "name": "pdfImage",
          "package": "diagrams-pdf",
          "signature": "PDFReference PDFJpeg-\u003e m (Diagram Pdf R2)",
          "type": "function"
        },
        "index": {
          "description": "Create an image diagram",
          "hierarchy": "Diagrams Backend Pdf",
          "module": "Diagrams.Backend.Pdf",
          "name": "pdfImage",
          "normalized": "PDFReference PDFJpeg-\u003ea(Diagram Pdf R)",
          "package": "diagrams-pdf",
          "partial": "Image",
          "signature": "PDFReference PDFJpeg-\u003em(Diagram Pdf R)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-pdf/docs/Diagrams-Backend-Pdf.html#v:pdfImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to the \u003ccode\u003epdfLabelWithSuggestedSize\u003c/code\u003e but here the size is forced and even\n if the bounding box of the text is smaller it will not be taken into account\n for the diagram envelope.\n\u003c/p\u003e",
          "module": "Diagrams.Backend.Pdf",
          "name": "pdfLabelWithSize",
          "package": "diagrams-pdf",
          "signature": "LabelStyle-\u003e String-\u003e Double-\u003e Double-\u003e Diagram Pdf R2",
          "type": "function"
        },
        "index": {
          "description": "Similar to the pdfLabelWithSuggestedSize but here the size is forced and even if the bounding box of the text is smaller it will not be taken into account for the diagram envelope",
          "hierarchy": "Diagrams Backend Pdf",
          "module": "Diagrams.Backend.Pdf",
          "name": "pdfLabelWithSize",
          "normalized": "LabelStyle-\u003eString-\u003eDouble-\u003eDouble-\u003eDiagram Pdf R",
          "package": "diagrams-pdf",
          "partial": "Label With Size",
          "signature": "LabelStyle-\u003eString-\u003eDouble-\u003eDouble-\u003eDiagram Pdf R",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-pdf/docs/Diagrams-Backend-Pdf.html#v:pdfLabelWithSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTypeset a text with a given style in a suggested box.\n The function is returning a diagram for the text\n and a diagram for the bounding box which may be smaller\n than the suggested size : smaller width when the algorithm\n has done some line justification. \n The text may also be bigger than the suggested width in case\n of overflow (similar to the way TeX is doing thing. There are\n settings in HPDF to control the elegance of the line cuts but\n those settings are not accessible from this simple API).\n The text will not be longer than the suggested height. In that\n case the additional text is not displayed except perhaps partially the last\n line since no clipping is done.\n\u003c/p\u003e",
          "module": "Diagrams.Backend.Pdf",
          "name": "pdfLabelWithSuggestedSize",
          "package": "diagrams-pdf",
          "signature": "LabelStyle-\u003e String-\u003e Double-\u003e Double-\u003e (Diagram Pdf R2, Diagram Pdf R2)",
          "type": "function"
        },
        "index": {
          "description": "Typeset text with given style in suggested box The function is returning diagram for the text and diagram for the bounding box which may be smaller than the suggested size smaller width when the algorithm has done some line justification The text may also be bigger than the suggested width in case of overflow similar to the way TeX is doing thing There are settings in HPDF to control the elegance of the line cuts but those settings are not accessible from this simple API The text will not be longer than the suggested height In that case the additional text is not displayed except perhaps partially the last line since no clipping is done",
          "hierarchy": "Diagrams Backend Pdf",
          "module": "Diagrams.Backend.Pdf",
          "name": "pdfLabelWithSuggestedSize",
          "normalized": "LabelStyle-\u003eString-\u003eDouble-\u003eDouble-\u003e(Diagram Pdf R,Diagram Pdf R)",
          "package": "diagrams-pdf",
          "partial": "Label With Suggested Size",
          "signature": "LabelStyle-\u003eString-\u003eDouble-\u003eDouble-\u003e(Diagram Pdf R,Diagram Pdf R)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-pdf/docs/Diagrams-Backend-Pdf.html#v:pdfLabelWithSuggestedSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine Radial shading for a diagram\n\u003c/p\u003e",
          "module": "Diagrams.Backend.Pdf",
          "name": "pdfRadialShading",
          "package": "diagrams-pdf",
          "signature": "P2-\u003e Double-\u003e P2-\u003e Double-\u003e Colour Double-\u003e Colour Double-\u003e a-\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Define Radial shading for diagram",
          "hierarchy": "Diagrams Backend Pdf",
          "module": "Diagrams.Backend.Pdf",
          "name": "pdfRadialShading",
          "normalized": "P-\u003eDouble-\u003eP-\u003eDouble-\u003eColour Double-\u003eColour Double-\u003ea-\u003ea",
          "package": "diagrams-pdf",
          "partial": "Radial Shading",
          "signature": "P-\u003eDouble-\u003eP-\u003eDouble-\u003eColour Double-\u003eColour Double-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-pdf/docs/Diagrams-Backend-Pdf.html#v:pdfRadialShading"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003epdfTextWithSuggestedSize\u003c/code\u003e but the size if forced and not just suggested\n\u003c/p\u003e",
          "module": "Diagrams.Backend.Pdf",
          "name": "pdfTextWithSize",
          "package": "diagrams-pdf",
          "signature": "TextOrigin-\u003e Double-\u003e Double-\u003e ps-\u003e s-\u003e TM ps s ()-\u003e Diagram Pdf R2",
          "type": "function"
        },
        "index": {
          "description": "Similar to pdfTextWithSuggestedSize but the size if forced and not just suggested",
          "hierarchy": "Diagrams Backend Pdf",
          "module": "Diagrams.Backend.Pdf",
          "name": "pdfTextWithSize",
          "normalized": "TextOrigin-\u003eDouble-\u003eDouble-\u003ea-\u003eb-\u003eTM a b()-\u003eDiagram Pdf R",
          "package": "diagrams-pdf",
          "partial": "Text With Size",
          "signature": "TextOrigin-\u003eDouble-\u003eDouble-\u003eps-\u003es-\u003eTM ps s()-\u003eDiagram Pdf R",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-pdf/docs/Diagrams-Backend-Pdf.html#v:pdfTextWithSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to the \u003ccode\u003epdfLabelWithSuggestedSize\u003c/code\u003e but supporting the full features of HPDF\n\u003c/p\u003e",
          "module": "Diagrams.Backend.Pdf",
          "name": "pdfTextWithSuggestedSize",
          "package": "diagrams-pdf",
          "signature": "TextOrigin-\u003e Double-\u003e Double-\u003e ps-\u003e s-\u003e TM ps s ()-\u003e (Diagram Pdf R2, Diagram Pdf R2)",
          "type": "function"
        },
        "index": {
          "description": "Similar to the pdfLabelWithSuggestedSize but supporting the full features of HPDF",
          "hierarchy": "Diagrams Backend Pdf",
          "module": "Diagrams.Backend.Pdf",
          "name": "pdfTextWithSuggestedSize",
          "normalized": "TextOrigin-\u003eDouble-\u003eDouble-\u003ea-\u003eb-\u003eTM a b()-\u003e(Diagram Pdf R,Diagram Pdf R)",
          "package": "diagrams-pdf",
          "partial": "Text With Suggested Size",
          "signature": "TextOrigin-\u003eDouble-\u003eDouble-\u003eps-\u003es-\u003eTM ps s()-\u003e(Diagram Pdf R,Diagram Pdf R)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-pdf/docs/Diagrams-Backend-Pdf.html#v:pdfTextWithSuggestedSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an URL diagram\n\u003c/p\u003e",
          "module": "Diagrams.Backend.Pdf",
          "name": "pdfURL",
          "package": "diagrams-pdf",
          "signature": "String-\u003e Double-\u003e Double-\u003e Diagram Pdf R2",
          "type": "function"
        },
        "index": {
          "description": "Create an URL diagram",
          "hierarchy": "Diagrams Backend Pdf",
          "module": "Diagrams.Backend.Pdf",
          "name": "pdfURL",
          "normalized": "String-\u003eDouble-\u003eDouble-\u003eDiagram Pdf R",
          "package": "diagrams-pdf",
          "partial": "URL",
          "signature": "String-\u003eDouble-\u003eDouble-\u003eDiagram Pdf R",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-pdf/docs/Diagrams-Backend-Pdf.html#v:pdfURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Diagrams.Backend.Pdf",
          "name": "sizeFromSpec",
          "package": "diagrams-pdf",
          "signature": "SizeSpec2D -\u003e (Double, Double)",
          "source": "src/Diagrams-Backend-Pdf.html#sizeFromSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Diagrams Backend Pdf",
          "module": "Diagrams.Backend.Pdf",
          "name": "sizeFromSpec",
          "normalized": "SizeSpec D-\u003e(Double,Double)",
          "package": "diagrams-pdf",
          "partial": "From Spec",
          "signature": "SizeSpec D-\u003e(Double,Double)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/diagrams-pdf/docs/Diagrams-Backend-Pdf.html#v:sizeFromSpec"
      }
    }
  ]
]