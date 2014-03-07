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
        "word": "off-simple"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple datatype and parser for 3D OFF files. A single type is\n used for OFF information with or without color. Loosely based on\n \u003ca\u003ehttp://people.sc.fsu.edu/~jburkardt/data/off/off.html\u003c/a\u003e, but uses the\n file header to determine whether the object's faces contain color\n values. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Graphics.Formats.OFF.Simple",
          "name": "Simple",
          "package": "off-simple",
          "source": "src/Graphics-Formats-OFF-Simple.html",
          "type": "module"
        },
        "index": {
          "description": "simple datatype and parser for OFF files single type is used for OFF information with or without color Loosely based on http people.sc.fsu.edu jburkardt data off off.html but uses the file header to determine whether the object faces contain color values",
          "hierarchy": "Graphics Formats OFF Simple",
          "module": "Graphics.Formats.OFF.Simple",
          "name": "Simple",
          "package": "off-simple",
          "partial": "Simple",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/off-simple/docs/Graphics-Formats-OFF-Simple.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA face is a vector of vertex indices and an optional color value.\n\u003c/p\u003e",
          "module": "Graphics.Formats.OFF.Simple",
          "name": "Face",
          "package": "off-simple",
          "source": "src/Graphics-Formats-OFF-Simple.html#Face",
          "type": "data"
        },
        "index": {
          "description": "face is vector of vertex indices and an optional color value",
          "hierarchy": "Graphics Formats OFF Simple",
          "module": "Graphics.Formats.OFF.Simple",
          "name": "Face",
          "package": "off-simple",
          "partial": "Face",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/off-simple/docs/Graphics-Formats-OFF-Simple.html#t:Face"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresentation of an object in OFF format; a pair of vectors\n containing the vertices and the faces of the object.\n\u003c/p\u003e",
          "module": "Graphics.Formats.OFF.Simple",
          "name": "OFF",
          "package": "off-simple",
          "source": "src/Graphics-Formats-OFF-Simple.html#OFF",
          "type": "data"
        },
        "index": {
          "description": "Representation of an object in OFF format pair of vectors containing the vertices and the faces of the object",
          "hierarchy": "Graphics Formats OFF Simple",
          "module": "Graphics.Formats.OFF.Simple",
          "name": "OFF",
          "package": "off-simple",
          "partial": "OFF",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/off-simple/docs/Graphics-Formats-OFF-Simple.html#t:OFF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Formats.OFF.Simple",
          "name": "Face",
          "package": "off-simple",
          "signature": "Face (Vector Int) (Maybe Color)",
          "source": "src/Graphics-Formats-OFF-Simple.html#Face",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Formats OFF Simple",
          "module": "Graphics.Formats.OFF.Simple",
          "name": "Face",
          "package": "off-simple",
          "partial": "Face",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/off-simple/docs/Graphics-Formats-OFF-Simple.html#v:Face"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Formats.OFF.Simple",
          "name": "OFF",
          "package": "off-simple",
          "signature": "OFF",
          "source": "src/Graphics-Formats-OFF-Simple.html#OFF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Formats OFF Simple",
          "module": "Graphics.Formats.OFF.Simple",
          "name": "OFF",
          "package": "off-simple",
          "partial": "OFF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/off-simple/docs/Graphics-Formats-OFF-Simple.html#v:OFF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of faces in an \u003ccode\u003e\u003ca\u003eOFF\u003c/a\u003e\u003c/code\u003e object.\n\u003c/p\u003e",
          "module": "Graphics.Formats.OFF.Simple",
          "name": "faceCount",
          "package": "off-simple",
          "signature": "OFF -\u003e Int",
          "source": "src/Graphics-Formats-OFF-Simple.html#faceCount",
          "type": "function"
        },
        "index": {
          "description": "The number of faces in an OFF object",
          "hierarchy": "Graphics Formats OFF Simple",
          "module": "Graphics.Formats.OFF.Simple",
          "name": "faceCount",
          "normalized": "OFF-\u003eInt",
          "package": "off-simple",
          "partial": "Count",
          "signature": "OFF-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/off-simple/docs/Graphics-Formats-OFF-Simple.html#v:faceCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Formats.OFF.Simple",
          "name": "faces",
          "package": "off-simple",
          "signature": "Vector Face",
          "source": "src/Graphics-Formats-OFF-Simple.html#OFF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Formats OFF Simple",
          "module": "Graphics.Formats.OFF.Simple",
          "name": "faces",
          "package": "off-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/off-simple/docs/Graphics-Formats-OFF-Simple.html#v:faces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the \u003ccode\u003e\u003ca\u003eOFF\u003c/a\u003e\u003c/code\u003e object has color values associated\n with its faces.\n\u003c/p\u003e",
          "module": "Graphics.Formats.OFF.Simple",
          "name": "hasColor",
          "package": "off-simple",
          "signature": "OFF -\u003e Bool",
          "source": "src/Graphics-Formats-OFF-Simple.html#hasColor",
          "type": "function"
        },
        "index": {
          "description": "Returns True if the OFF object has color values associated with its faces",
          "hierarchy": "Graphics Formats OFF Simple",
          "module": "Graphics.Formats.OFF.Simple",
          "name": "hasColor",
          "normalized": "OFF-\u003eBool",
          "package": "off-simple",
          "partial": "Color",
          "signature": "OFF-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/off-simple/docs/Graphics-Formats-OFF-Simple.html#v:hasColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \u003ccode\u003eText\u003c/code\u003e string representing an OFF object.\n\u003c/p\u003e",
          "module": "Graphics.Formats.OFF.Simple",
          "name": "parseOFF",
          "package": "off-simple",
          "signature": "Parser OFF",
          "source": "src/Graphics-Formats-OFF-Simple.html#parseOFF",
          "type": "function"
        },
        "index": {
          "description": "Parse Text string representing an OFF object",
          "hierarchy": "Graphics Formats OFF Simple",
          "module": "Graphics.Formats.OFF.Simple",
          "name": "parseOFF",
          "package": "off-simple",
          "partial": "OFF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/off-simple/docs/Graphics-Formats-OFF-Simple.html#v:parseOFF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead an OFF object from the given \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e, returning either\n the corresponding \u003ccode\u003e\u003ca\u003eOFF\u003c/a\u003e\u003c/code\u003e value or a \u003ccode\u003e\u003ca\u003eParseError\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Graphics.Formats.OFF.Simple",
          "name": "readOFFFile",
          "package": "off-simple",
          "signature": "FilePath -\u003e IO (Either ParseError OFF)",
          "source": "src/Graphics-Formats-OFF-Simple.html#readOFFFile",
          "type": "function"
        },
        "index": {
          "description": "Read an OFF object from the given FilePath returning either the corresponding OFF value or ParseError",
          "hierarchy": "Graphics Formats OFF Simple",
          "module": "Graphics.Formats.OFF.Simple",
          "name": "readOFFFile",
          "normalized": "FilePath-\u003eIO(Either ParseError OFF)",
          "package": "off-simple",
          "partial": "OFFFile",
          "signature": "FilePath-\u003eIO(Either ParseError OFF)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/off-simple/docs/Graphics-Formats-OFF-Simple.html#v:readOFFFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of vertices in an \u003ccode\u003e\u003ca\u003eOFF\u003c/a\u003e\u003c/code\u003e object.\n\u003c/p\u003e",
          "module": "Graphics.Formats.OFF.Simple",
          "name": "vertexCount",
          "package": "off-simple",
          "signature": "OFF -\u003e Int",
          "source": "src/Graphics-Formats-OFF-Simple.html#vertexCount",
          "type": "function"
        },
        "index": {
          "description": "The number of vertices in an OFF object",
          "hierarchy": "Graphics Formats OFF Simple",
          "module": "Graphics.Formats.OFF.Simple",
          "name": "vertexCount",
          "normalized": "OFF-\u003eInt",
          "package": "off-simple",
          "partial": "Count",
          "signature": "OFF-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/off-simple/docs/Graphics-Formats-OFF-Simple.html#v:vertexCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.Formats.OFF.Simple",
          "name": "vertices",
          "package": "off-simple",
          "signature": "Vector Vertex",
          "source": "src/Graphics-Formats-OFF-Simple.html#OFF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics Formats OFF Simple",
          "module": "Graphics.Formats.OFF.Simple",
          "name": "vertices",
          "package": "off-simple",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/off-simple/docs/Graphics-Formats-OFF-Simple.html#v:vertices"
      }
    }
  ]
]